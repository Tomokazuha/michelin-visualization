<!--
米其林餐厅旭日图组件 (SunburstChart)

功能特性：
1. 基于ECharts的旭日图可视化，展示层次化数据结构
2. 支持多层级钻取：全球 → 地区 → 城市 → 餐厅
3. 可配置的颜色方案：按星级、价格、菜系分类着色
4. 交互式缩放控制：全局视图、地区视图、城市视图
5. 面包屑导航：显示当前层级路径，支持向上钻取
6. 动态标签切换：可控制标签显示/隐藏
7. 节点点击和悬停交互

数据结构：
- 根节点：全球米其林餐厅
- 二级节点：地区 (region)
- 三级节点：城市 (city)  
- 四级节点：具体餐厅 (restaurant)

技术实现：
- Vue 3 Composition API
- ECharts Sunburst 图表
- 层次化数据建模
- 响应式数据流管理
- 事件委托和状态同步

数据流程：
props.data → generateSunburstData → ECharts配置 → 旭日图渲染
用户交互 → 事件处理 → 层级变更 → emit事件 → 父组件响应

颜色方案：
- stars: 按米其林星级着色 (1星金色, 2星红色, 3星青色)
- price: 按价格等级着色 (€绿色, €€黄色, €€€橙色, €€€€红色)
- cuisine: 按菜系类型着色 (法式蓝色, 意式绿色, 日式红色等)
-->
<template>
  <div class="sunburst-container">
    <div class="sunburst-header">
      <h3 class="sunburst-title">{{ title }}</h3>
      <div class="sunburst-controls">
        <el-button-group size="small">
          <el-button
            v-for="level in zoomLevels"
            :key="level.value"
            :type="currentLevel === level.value ? 'primary' : ''"
            @click="zoomToLevel(level.value)"
          >
            {{ level.label }}
          </el-button>
        </el-button-group>
        <el-switch
          v-model="showLabels"
          active-text="显示标签"
          inactive-text="隐藏标签"
          @change="toggleLabels"
        />
      </div>
    </div>
    <div ref="sunburstRef" :style="{ height: height + 'px' }" class="sunburst-chart"></div>
    <div class="sunburst-breadcrumb" v-if="breadcrumb.length > 0">
      <span
        v-for="(item, index) in breadcrumb"
        :key="index"
        class="breadcrumb-item"
        :class="{ active: index === breadcrumb.length - 1 }"
        @click="drillUp(index)"
      >
        {{ item }}
        <i v-if="index < breadcrumb.length - 1" class="el-icon-arrow-right"></i>
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue'
import * as echarts from 'echarts'
import { useDataStore } from '@/store/data'

/**
 * 组件Props定义
 * @typedef {Object} Props
 * @property {string} title - 图表标题
 * @property {number} height - 图表高度
 * @property {Array} data - 餐厅数据数组
 * @property {string} colorScheme - 颜色方案类型
 */
const props = defineProps({
  title: {
    type: String,
    default: '米其林餐厅层次分布',
    validator: (value) => typeof value === 'string' && value.length <= 50
  },
  height: {
    type: Number,
    default: 500,
    validator: (value) => value >= 200 && value <= 1000
  },
  data: {
    type: Array,
    default: () => [],
    validator: (value) => {
      // 验证数据数组的每个元素都包含必要的字段
      if (!Array.isArray(value)) return false
      return value.every(item => 
        typeof item === 'object' && 
        item !== null &&
        'restaurant_name' in item &&
        'region' in item &&
        'city' in item &&
        typeof item.stars === 'number' &&
        item.stars >= 1 && item.stars <= 3
      )
    }
  },
  colorScheme: {
    type: String,
    default: 'stars',
    validator: (value) => ['stars', 'price', 'cuisine'].includes(value)
  }
})

/**
 * 组件事件定义
 * @event nodeClick - 节点点击事件，传递点击的节点数据
 * @event levelChange - 层级变更事件，传递当前层级信息
 */
const emit = defineEmits({
  nodeClick: (node) => {
    // 验证事件参数
    return typeof node === 'object' && 
           node !== null && 
           'name' in node && 
           'value' in node
  },
  levelChange: (level) => {
    // 验证层级参数
    return typeof level === 'string' && 
           ['all', 'region', 'city'].includes(level)
  }
})

const dataStore = useDataStore()
const sunburstRef = ref(null)
let chartInstance = null
const currentLevel = ref('all')
const showLabels = ref(true)
const breadcrumb = ref([])

const zoomLevels = [
  { value: 'all', label: '全局视图' },
  { value: 'region', label: '地区视图' },
  { value: 'city', label: '城市视图' }
]

// 颜色方案
const colorSchemes = {
  stars: {
    1: '#D4AF37',
    2: '#DC143C',
    3: '#40E0D0'
  },
  price: {
    '€': '#4CAF50',
    '€€': '#FFC107',
    '€€€': '#FF9800',
    '€€€€': '#F44336'
  },
  cuisine: {
    'French': '#2196F3',
    'Italian': '#4CAF50',
    'Japanese': '#F44336',
    'Chinese': '#FF9800',
    'American': '#9C27B0',
    'Spanish': '#FFC107',
    'Other': '#607D8B'
  }
}

/**
 * 生成旭日图的层次化数据结构
 * 将平面的餐厅数据转换为树状结构，用于ECharts旭日图显示
 * 
 * @param {Array} restaurants - 餐厅数据数组
 * @returns {Object} 树状结构的数据对象
 * 
 * 数据层级：
 * Level 0: 根节点 (全球)
 * Level 1: 地区节点 (region)
 * Level 2: 城市节点 (city)
 * Level 3: 餐厅节点 (restaurant)
 */
const generateSunburstData = (restaurants) => {
  const root = {
    name: '全球米其林餐厅',
    children: [],
    value: 0
  }
  
  const totalRestaurants = restaurants.length
  
  // 使用Map提高查找效率
  const regionMap = new Map()
  
  restaurants.forEach(restaurant => {
    const region = restaurant.region || 'Unknown'
    const city = restaurant.city || 'Unknown'
    const stars = restaurant.stars || 1
    const price = restaurant.price || '€'
    const cuisine = restaurant.cuisine || 'Other'
    
    // 获取或创建地区节点
    if (!regionMap.has(region)) {
      regionMap.set(region, {
        name: region,
        children: [],
        value: 0,
        itemStyle: {
          color: getRegionColor(region)
        }
      })
      root.children.push(regionMap.get(region))
    }
    
    const regionNode = regionMap.get(region)
    
    // 获取或创建城市节点
    let cityNode = regionNode.children.find(c => c.name === city)
    if (!cityNode) {
      cityNode = {
        name: city,
        children: [],
        value: 0,
        itemStyle: {
          color: getCityColor(city, region)
        }
      }
      regionNode.children.push(cityNode)
    }
    
    // 创建餐厅节点
    const restaurantNode = {
      name: restaurant.restaurant_name,
      value: 1,
      stars: stars,
      price: price,
      cuisine: cuisine,
      itemStyle: {
        color: getNodeColor(restaurant)
      },
      data: restaurant
    }
    
    cityNode.children.push(restaurantNode)
    cityNode.value += 1
    regionNode.value += 1
    root.value += 1
  })
  
  return root
}

/**
 * 根据配置的颜色方案获取节点颜色
 * @param {Object} restaurant - 餐厅对象
 * @returns {string} 十六进制颜色值
 */
const getNodeColor = (restaurant) => {
  switch (props.colorScheme) {
    case 'stars':
      return colorSchemes.stars[restaurant.stars] || '#999'
    case 'price':
      return colorSchemes.price[restaurant.price] || '#999'
    case 'cuisine':
      const cuisineType = getCuisineType(restaurant.cuisine)
      return colorSchemes.cuisine[cuisineType] || colorSchemes.cuisine['Other']
    default:
      return '#999'
  }
}

/**
 * 获取地区级别的节点颜色
 * 使用地区名称的哈希值来确保颜色的一致性
 * @param {string} region - 地区名称
 * @returns {string} 十六进制颜色值
 */
const getRegionColor = (region) => {
  const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6', '#1abc9c']
  const index = region.charCodeAt(0) % colors.length
  return colors[index]
}

/**
 * 获取城市级别的节点颜色
 * 基于所属地区的颜色，稍微调整亮度以产生层次感
 * @param {string} city - 城市名称  
 * @param {string} region - 所属地区名称
 * @returns {string} 十六进制颜色值
 */
const getCityColor = (city, region) => {
  const baseColor = getRegionColor(region)
  // 稍微调整亮度，产生渐变效果
  return adjustColorBrightness(baseColor, 20)
}

// 调整颜色亮度
const adjustColorBrightness = (color, percent) => {
  const num = parseInt(color.replace('#', ''), 16)
  const amt = Math.round(2.55 * percent)
  const R = (num >> 16) + amt
  const G = (num >> 8 & 0x00FF) + amt
  const B = (num & 0x0000FF) + amt
  return '#' + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
    (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
    (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1)
}

// 获取菜系类型
const getCuisineType = (cuisine) => {
  if (!cuisine) return 'Other'
  const cuisineStr = cuisine.toLowerCase()
  for (const type in colorSchemes.cuisine) {
    if (cuisineStr.includes(type.toLowerCase())) {
      return type
    }
  }
  return 'Other'
}

// 等待容器准备就绪的通用函数
const waitForContainer = async (containerRef, maxRetries = 20, delay = 100) => {
  let retryCount = 0
  
  return new Promise((resolve, reject) => {
    const checkContainer = () => {
      if (containerRef.value && containerRef.value.clientWidth > 0 && containerRef.value.clientHeight > 0) {
        resolve()
      } else if (retryCount < maxRetries) {
        retryCount++
        setTimeout(checkContainer, delay)
      } else {
        reject(new Error(`Container not ready after ${maxRetries} retries`))
      }
    }
    checkContainer()
  })
}

// 初始化旭日图
const initSunburst = async () => {
  await nextTick()
  
  try {
    await waitForContainer(sunburstRef)
  } catch (error) {
    console.warn('SunburstChart container is not ready:', error.message)
    return
  }
  
  if (chartInstance) {
    chartInstance.dispose()
  }
  
  chartInstance = echarts.init(sunburstRef.value)
  
  // 获取数据
  let restaurants = props.data
  if (!restaurants.length) {
    await dataStore.fetchRestaurants()
    restaurants = dataStore.restaurants
  }
  
  const sunburstData = generateSunburstData(restaurants)
  
  const option = {
    backgroundColor: '#fff',
    title: {
      text: '',
      left: 'center',
      top: 20,
      textStyle: {
        color: '#333'
      }
    },
    tooltip: {
      trigger: 'item',
      formatter: (params) => {
        const data = params.data;
        if (data.depth === 0) {
          return `
            <div style="padding: 8px">
              <div style="font-weight: 600; margin-bottom: 4px">全部餐厅</div>
              <div>数量: ${data.value}</div>
            </div>
          `;
        }
        return `
          <div style="padding: 8px">
            <div style="font-weight: 600; margin-bottom: 4px">${data.name}</div>
            <div>数量: ${data.value}</div>
            <div>占比: ${(data.value / totalRestaurants * 100).toFixed(1)}%</div>
          </div>
        `;
      }
    },
    series: [
      {
        type: 'sunburst',
        center: ['50%', '50%'],
        radius: ['20%', '90%'],
        data: [sunburstData],
        nodeClick: 'rootToNode',
        sort: null,
        emphasis: {
          focus: 'ancestor',
          itemStyle: {
            shadowBlur: 10,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        },
        levels: [
          {},
          {
            r0: '20%',
            r: '45%',
            itemStyle: {
              borderWidth: 2
            },
            label: {
              rotate: 'tangential',
              fontSize: 12
            }
          },
          {
            r0: '45%',
            r: '70%',
            label: {
              align: 'center',
              fontSize: 11
            }
          },
          {
            r0: '70%',
            r: '90%',
            label: {
              position: 'outside',
              padding: 3,
              silent: false,
              fontSize: 10
            },
            itemStyle: {
              borderWidth: 1
            }
          }
        ],
        label: {
          show: true,
          position: 'auto',
          formatter: '{b}',
          overflow: 'truncate',
          minAngle: 5
        },
        itemStyle: {
          borderColor: '#fff',
          borderWidth: 1
        },
        animation: true,
        animationDuration: 1000,
        animationEasing: 'cubicOut'
      }
    ]
  }
  
  chartInstance.setOption(option)
  
  // 添加点击事件
  chartInstance.on('click', (params) => {
    const { data, treePathInfo } = params
    
    // 更新面包屑
    breadcrumb.value = treePathInfo.map(info => info.name)
    
    // 钻取到点击的节点
    chartInstance.dispatchAction({
      type: 'sunburstRootToNode',
      targetNode: data
    })
    
    emit('nodeClick', {
      name: data.name,
      value: data.value,
      data: data.data,
      path: breadcrumb.value
    })
  })
}

// 切换标签显示
const toggleLabels = () => {
  if (chartInstance) {
    chartInstance.setOption({
      series: {
        label: {
          show: showLabels.value
        }
      }
    })
  }
}

// 缩放到指定层级
const zoomToLevel = (level) => {
  currentLevel.value = level
  
  if (chartInstance) {
    // 根据层级调整显示
    let targetLevel = 0
    switch (level) {
      case 'all':
        targetLevel = 0
        break
      case 'region':
        targetLevel = 1
        break
      case 'city':
        targetLevel = 2
        break
    }
    
    chartInstance.setOption({
      series: {
        radius: [targetLevel * 20 + '%', '90%']
      }
    })
    
    emit('levelChange', level)
  }
}

// 向上钻取
const drillUp = (index) => {
  if (index === 0) {
    // 回到根节点
    chartInstance.dispatchAction({
      type: 'sunburstRootToNode',
      targetNode: chartInstance.getOption().series[0].data[0]
    })
    breadcrumb.value = []
  }
}

// 自适应大小
const handleResize = () => {
  if (chartInstance) {
    chartInstance.resize()
  }
}

// 监听数据变化
watch(() => props.data, () => {
  initSunburst()
}, { deep: true })

// 监听颜色方案变化
watch(() => props.colorScheme, () => {
  initSunburst()
})

onMounted(() => {
  initSunburst()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  if (chartInstance) {
    chartInstance.dispose()
  }
})

// 暴露方法
defineExpose({
  refresh: initSunburst,
  zoomToLevel,
  toggleLabels
})
</script>

<style scoped>
.sunburst-container {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  padding: 24px;
  position: relative;
}

.sunburst-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  flex-wrap: wrap;
  gap: 16px;
}

.sunburst-title {
  font-size: 20px;
  font-weight: 600;
  color: #303133;
  margin: 0;
}

.sunburst-controls {
  display: flex;
  align-items: center;
  gap: 16px;
}

.sunburst-chart {
  width: 100%;
  min-height: 400px;
}

.sunburst-breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 16px;
  padding: 12px;
  background: #F5F7FA;
  border-radius: 6px;
  font-size: 14px;
}

.breadcrumb-item {
  color: #606266;
  cursor: pointer;
  transition: color 0.3s;
  display: flex;
  align-items: center;
  gap: 8px;
}

.breadcrumb-item:hover:not(.active) {
  color: #409EFF;
}

.breadcrumb-item.active {
  color: #303133;
  font-weight: 600;
  cursor: default;
}

.breadcrumb-item i {
  font-size: 12px;
  color: #C0C4CC;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .sunburst-header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .sunburst-controls {
    flex-direction: column;
    width: 100%;
    gap: 12px;
  }
  
  .sunburst-breadcrumb {
    flex-wrap: wrap;
  }
}

/* 暗黑模式 */
:global(.dark) .sunburst-container {
  background: #1a1a1a;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
}

:global(.dark) .sunburst-title {
  color: #fff;
}

:global(.dark) .sunburst-breadcrumb {
  background: #262626;
}

:global(.dark) .breadcrumb-item {
  color: #909399;
}

:global(.dark) .breadcrumb-item.active {
  color: #fff;
}
</style>