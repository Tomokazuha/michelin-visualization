<!--
米其林餐厅关系网络图组件 (NetworkChart)

功能特性：
1. 基于ECharts的力导向图可视化，展示餐厅间的关联关系
2. 多种关系类型：菜系关联、地理邻近、价格相似、星级相同、同期获奖
3. 交互式节点控制：可调节节点大小、切换标签显示
4. 动态布局算法：自动计算节点位置和连接关系
5. 星级差异化显示：不同星级餐厅使用不同颜色和大小
6. 关系强度可视化：连线粗细表示关系密切程度
7. 节点和连线交互：支持点击选择和悬停详情

关系类型详解：
- cuisine: 基于菜系类型的关联（相同菜系餐厅相连）
- location: 基于地理位置的邻近关系（同城或50km内）
- price: 基于价格等级的相似性（相同价位餐厅）
- star: 基于米其林星级的分类（同星级餐厅）
- year: 基于获奖年份的时间关联（同年获奖餐厅）

技术实现：
- Vue 3 Composition API + Reactive Network State
- ECharts Force Graph 力导向布局算法
- 地理距离计算（经纬度坐标）
- 图论算法实现节点连接逻辑
- 动态节点过滤和渲染优化

数据流程：
props.data → generateNetworkData → 关系计算 → 力导向布局 → 网络图渲染
用户交互 → 关系类型切换/节点控制 → 重新计算连接 → 图表更新

性能优化：
- 节点数量限制（maxNodes）避免性能问题
- 连接关系过滤减少计算复杂度
- 响应式布局和自适应缩放
-->
<template>
  <div class="network-container">
    <div class="network-header">
      <h3 class="network-title">{{ title }}</h3>
      <div class="network-controls">
        <el-select
          v-model="relationshipType"
          size="small"
          @change="updateNetwork"
          placeholder="选择关系类型"
        >
          <el-option
            v-for="type in relationshipTypes"
            :key="type.value"
            :label="type.label"
            :value="type.value"
          />
        </el-select>
        <el-slider
          v-model="nodeSize"
          :min="5"
          :max="50"
          :show-tooltip="false"
          size="small"
          class="size-slider"
          @change="updateNodeSize"
        />
        <span class="size-label">节点大小: {{ nodeSize }}</span>
        <el-switch
          v-model="showLabels"
          active-text="显示标签"
          inactive-text="隐藏标签"
          @change="toggleLabels"
        />
      </div>
    </div>
    <div ref="networkRef" :style="{ height: height + 'px' }" class="network-chart"></div>
    <div class="network-legend">
      <div class="legend-item" v-for="item in legendItems" :key="item.value">
        <span class="legend-color" :style="{ background: item.color }"></span>
        <span class="legend-text">{{ item.label }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue'
import * as echarts from 'echarts'
import { useDataStore } from '@/store/data'
import { waitForContainer, ensureContainerSize, createVisibilityObserver, MICHELIN_COLORS } from '@/utils/chartHelpers'

/**
 * 组件Props定义
 * @typedef {Object} Props
 * @property {string} title - 网络图标题
 * @property {number} height - 图表高度
 * @property {Array} data - 餐厅节点数据
 * @property {number} maxNodes - 最大节点数量（性能控制）
 */
const props = defineProps({
  title: {
    type: String,
    default: '米其林餐厅关系网络',
    validator: (value) => typeof value === 'string' && value.length <= 50
  },
  height: {
    type: Number,
    default: 600,
    validator: (value) => value >= 300 && value <= 1200
  },
  data: {
    type: Array,
    default: () => [],
    validator: (value) => {
      if (!Array.isArray(value)) return false
      return value.every(item => 
        typeof item === 'object' && 
        item !== null &&
        'restaurant_name' in item &&
        typeof item.stars === 'number' &&
        item.stars >= 1 && item.stars <= 3
      )
    }
  },
  maxNodes: {
    type: Number,
    default: 100,
    validator: (value) => value >= 10 && value <= 500
  }
})

/**
 * 组件事件定义
 * @event nodeClick - 节点点击事件，传递餐厅节点数据
 * @event linkClick - 连线点击事件，传递连接关系数据
 * @event relationshipChange - 关系类型变更事件，传递新的关系类型
 */
const emit = defineEmits({
  nodeClick: (nodeData) => {
    return typeof nodeData === 'object' && 
           nodeData !== null && 
           'restaurant_name' in nodeData
  },
  linkClick: (linkData) => {
    return typeof linkData === 'object' && 
           linkData !== null && 
           'source' in linkData && 
           'target' in linkData
  },
  relationshipChange: (relationshipType) => {
    return typeof relationshipType === 'string' && 
           ['cuisine', 'location', 'price', 'star', 'year'].includes(relationshipType)
  }
})

const dataStore = useDataStore()
const networkRef = ref(null)
let chartInstance = null
const relationshipType = ref('cuisine')
const nodeSize = ref(20)
const showLabels = ref(true)

const relationshipTypes = [
  { value: 'cuisine', label: '菜系关联' },
  { value: 'location', label: '地理邻近' },
  { value: 'price', label: '价格相似' },
  { value: 'star', label: '星级相同' },
  { value: 'year', label: '同期获奖' }
]

const legendItems = ref([
  { value: 1, label: '一星餐厅', color: MICHELIN_COLORS[1] },
  { value: 2, label: '二星餐厅', color: MICHELIN_COLORS[2] },
  { value: 3, label: '三星餐厅', color: MICHELIN_COLORS[3] }
])

/**
 * 生成网络图的节点和边数据
 * 根据选择的关系类型计算餐厅间的连接关系
 * 
 * @param {Array} restaurants - 餐厅数据数组
 * @param {string} type - 关系类型 ('cuisine'|'location'|'price'|'star'|'year')
 * @returns {Object} 包含nodes和links的网络数据对象
 * 
 * 算法逻辑：
 * 1. 创建节点：每个餐厅对应一个节点，大小和颜色基于星级
 * 2. 计算连接：根据关系类型判断餐厅间是否应该连接
 * 3. 关系强度：连线粗细表示关系的密切程度
 * 4. 性能优化：限制节点数量避免计算复杂度过高
 */
const generateNetworkData = (restaurants, type) => {
  const nodes = []
  const links = []
  const nodeMap = new Map()
  
  // 限制餐厅数量避免图表过于复杂，提高渲染性能
  const limitedRestaurants = restaurants.slice(0, props.maxNodes)
  
  // 创建节点
  limitedRestaurants.forEach((restaurant, index) => {
    // 确保餐厅名称存在
    const restaurantName = restaurant.restaurant_name || restaurant.name || `餐厅_${index}`
    const nodeId = `${restaurantName}_${index}`
    nodes.push({
      id: nodeId,
      name: restaurantName,
      value: restaurant.stars || 1,
      category: (restaurant.stars || 1) - 1,
      symbolSize: nodeSize.value + (restaurant.stars || 1) * 5,
      itemStyle: {
        color: getNodeColor(restaurant.stars || 1)
      },
      data: restaurant
    })
    nodeMap.set(nodeId, restaurant)
  })
  
  // 根据关系类型创建边
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const node1 = nodes[i]
      const node2 = nodes[j]
      const rest1 = node1.data
      const rest2 = node2.data
      
      let shouldLink = false
      let linkValue = 1
      
      switch (type) {
        case 'cuisine':
          // 相同菜系
          if (rest1.cuisine && rest2.cuisine && 
              rest1.cuisine.toLowerCase() === rest2.cuisine.toLowerCase()) {
            shouldLink = true
            linkValue = 2
          }
          break
          
        case 'location':
          // 地理邻近（同一城市或相近坐标）
          if (rest1.city === rest2.city) {
            shouldLink = true
            linkValue = 3
          } else {
            // 计算地理距离
            const distance = calculateDistance(
              rest1.latitude, rest1.longitude,
              rest2.latitude, rest2.longitude
            )
            if (distance < 50) { // 50公里内
              shouldLink = true
              linkValue = 1
            }
          }
          break
          
        case 'price':
          // 相同价格等级
          if (rest1.price === rest2.price) {
            shouldLink = true
            linkValue = 2
          }
          break
          
        case 'star':
          // 相同星级
          if (rest1.stars === rest2.stars) {
            shouldLink = true
            linkValue = rest1.stars || 1
          }
          break
          
        case 'year':
          // 同年获奖
          if (rest1.year === rest2.year) {
            shouldLink = true
            linkValue = 2
          }
          break
      }
      
      if (shouldLink) {
        links.push({
          source: node1.id,
          target: node2.id,
          value: linkValue,
          lineStyle: {
            width: Math.max(1, linkValue),
            opacity: 0.6
          }
        })
      }
    }
  }
  
  // 过滤孤立节点（可选）
  const connectedNodes = new Set()
  links.forEach(link => {
    connectedNodes.add(link.source)
    connectedNodes.add(link.target)
  })
  
  const filteredNodes = nodes.filter(node => connectedNodes.has(node.id))
  
  return { nodes: filteredNodes, links }
}

// 计算地理距离（简化版）
const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371 // 地球半径（公里）
  const dLat = toRad(lat2 - lat1)
  const dLon = toRad(lon2 - lon1)
  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
            Math.sin(dLon/2) * Math.sin(dLon/2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
  return R * c
}

const toRad = (deg) => deg * (Math.PI/180)

// 获取节点颜色
const getNodeColor = (stars) => {
  const colors = {
    1: '#D4AF37',
    2: '#DC143C',
    3: '#40E0D0'
  }
  return colors[stars] || '#999'
}

// 初始化网络图
const initNetwork = async () => {
  await nextTick()
  
  try {
    await waitForContainer(networkRef)
    await ensureContainerSize(networkRef, props.height)
  } catch (error) {
    console.warn('NetworkChart container is not ready:', error.message)
    return
  }
  
  if (chartInstance) {
    chartInstance.dispose()
  }
  
  chartInstance = echarts.init(networkRef.value)
  
  // 获取数据
  let restaurants = props.data
  if (!restaurants.length) {
    await dataStore.fetchRestaurants()
    restaurants = dataStore.restaurants
  }
  
  // 添加数据验证
  if (!restaurants || restaurants.length === 0) {
    console.warn('NetworkChart: No restaurant data available')
    return
  }
  
  console.log('NetworkChart: Generating network data for', restaurants.length, 'restaurants')
  const { nodes, links } = generateNetworkData(restaurants, relationshipType.value)
  
  if (nodes.length === 0) {
    console.warn('NetworkChart: No nodes generated')
    return
  }
  
  console.log('NetworkChart: Generated', nodes.length, 'nodes and', links.length, 'links')
  
  const categories = [
    { name: '一星餐厅' },
    { name: '二星餐厅' },
    { name: '三星餐厅' }
  ]
  
  const option = {
    tooltip: {
      trigger: 'item',
      formatter: (params) => {
        if (params.dataType === 'node') {
          const nodeData = params.data || {}; // 确保params.data存在
          const restaurantData = nodeData.data || {}; // 确保nodeData.data存在
          const restaurantName = restaurantData.restaurant_name || nodeData.name || '未知节点';
          const stars = restaurantData.stars;
          const cuisine = restaurantData.cuisine || 'N/A';
          const price = restaurantData.price || 'N/A';
          const city = restaurantData.city || 'N/A';
          const region = restaurantData.region || 'N/A';

          return `
            <div style="padding: 12px;">
              <div style="font-weight: 600; margin-bottom: 8px;">${restaurantName}</div>
              <div style="display: grid; gap: 4px; font-size: 12px;">
                <div>星级: ${stars ? '⭐'.repeat(stars) : '未知'}</div>
                <div>菜系: ${cuisine}</div>
                <div>价格: ${price}</div>
                <div>城市: ${city}</div>
                <div>地区: ${region}</div>
              </div>
            </div>
          `;
        } else if (params.dataType === 'edge') {
          const edgeData = params.data || {}; // 确保params.data存在
          return `
            <div style="padding: 8px;">
              <div style="font-weight: 600;">关系强度: ${edgeData.value || 1}</div>
            </div>
          `;
        }
        return '';
      }
    },
    legend: {
      data: categories.map(c => c.name),
      orient: 'horizontal',
      left: 'center',
      top: 10,
      textStyle: {
        fontSize: 12
      }
    },
    animationDuration: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [
      {
        type: 'graph',
        layout: 'force',
        data: nodes,
        links: links,
        categories: categories,
        roam: true,
        draggable: true,
        label: {
          show: showLabels.value,
          position: 'right',
          formatter: (params) => {
            const name = params?.data?.name || '未知节点'
            return name.length > 15 ? name.slice(0, 15) + '...' : name
          },
          fontSize: 10
        },
        labelLayout: {
          hideOverlap: true
        },
        lineStyle: {
          color: 'source',
          curveness: 0.3,
          opacity: 0.5
        },
        emphasis: {
          focus: 'adjacency',
          lineStyle: {
            width: 10,
            opacity: 1
          },
          itemStyle: {
            shadowBlur: 20,
            shadowColor: 'rgba(0, 0, 0, 0.3)'
          }
        },
        force: {
          repulsion: 300,
          gravity: 0.2,
          edgeLength: [80, 200],
          layoutAnimation: true,
          friction: 0.3
        },
        scaleLimit: {
          min: 0.5,
          max: 3
        }
      }
    ]
  }
  
  chartInstance.setOption(option)
  
  // 添加事件监听
  chartInstance.on('click', (params) => {
    if (params.dataType === 'node' && params.data) {
      emit('nodeClick', {
        name: params.data.name || '未知节点',
        data: params.data.data || params.data
      })
    } else if (params.dataType === 'edge' && params.data) {
      emit('linkClick', {
        source: params.data.source,
        target: params.data.target,
        value: params.data.value || 1
      })
    }
  })
}

// 更新网络图
const updateNetwork = () => {
  if (chartInstance) {
    initNetwork()
    emit('relationshipChange', relationshipType.value)
  }
}

// 更新节点大小
const updateNodeSize = () => {
  if (chartInstance) {
    const option = chartInstance.getOption()
    option.series[0].data.forEach(node => {
      node.symbolSize = nodeSize.value + (node.value || 1) * 5
    })
    chartInstance.setOption(option)
  }
}

// 切换标签显示
const toggleLabels = () => {
  if (chartInstance) {
    chartInstance.setOption({
      series: [{
        label: {
          show: showLabels.value
        }
      }]
    })
  }
}

// 自适应大小
const handleResize = async () => {
  await nextTick()
  if (chartInstance && networkRef.value && networkRef.value.clientWidth && networkRef.value.clientHeight) {
    chartInstance.resize()
  }
}

// 监听数据变化
watch(() => props.data, () => {
  initNetwork()
}, { deep: true })

// 监听容器可见性变化
let visibilityObserver = null
const observeVisibility = () => {
  const callback = () => {
    if (!chartInstance || chartInstance.isDisposed()) {
      initNetwork()
    } else {
      chartInstance.resize()
    }
  }
  
  visibilityObserver = createVisibilityObserver(networkRef, callback)
}

onMounted(() => {
  initNetwork()
  observeVisibility()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  if (chartInstance) {
    chartInstance.dispose()
  }
  if (visibilityObserver) {
    visibilityObserver.disconnect()
  }
})

// 暴露方法
defineExpose({
  refresh: initNetwork,
  updateNetwork,
  updateNodeSize,
  toggleLabels
})
</script>

<style scoped>
.network-container {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  padding: 24px;
}

.network-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  flex-wrap: wrap;
  gap: 16px;
}

.network-title {
  font-size: 20px;
  font-weight: 600;
  color: #303133;
  margin: 0;
}

.network-controls {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}

.size-slider {
  width: 100px;
}

.size-label {
  font-size: 12px;
  color: #606266;
  white-space: nowrap;
}

.network-chart {
  width: 100%;
  min-height: 500px;
}

.network-legend {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid #E4E7ED;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.legend-color {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.legend-text {
  font-size: 12px;
  color: #606266;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .network-header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .network-controls {
    width: 100%;
    flex-direction: column;
    gap: 12px;
  }
  
  .network-legend {
    flex-wrap: wrap;
  }
}

/* 暗黑模式 */
:global(.dark) .network-container {
  background: #1a1a1a;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
}

:global(.dark) .network-title {
  color: #fff;
}

:global(.dark) .size-label {
  color: #909399;
}

:global(.dark) .legend-text {
  color: #909399;
}

:global(.dark) .network-legend {
  border-top-color: #333;
}
</style>