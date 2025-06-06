<!--
米其林餐厅全球热力分布图组件 (HeatmapChart)

功能特性：
1. 基于ECharts的地理热力图可视化，展示餐厅的地理分布密度
2. 多维度热力分析：全部餐厅、星级分层、价格分布、菜系多样性
3. 可调节热力半径：动态控制热力点的影响范围
4. 星级强度差异：不同星级餐厅具有不同的热力强度
5. 地理坐标映射：基于经纬度数据生成精确的地理位置
6. 渐变色彩映射：从低密度到高密度的连续色彩过渡
7. 交互式地图缩放：支持地图缩放和平移操作

热力数据类型：
- all: 显示所有餐厅的分布密度，星级越高强度越大
- one_star: 仅显示一星餐厅的分布热力
- two_stars: 仅显示二星餐厅的分布热力，强度1.5倍
- three_stars: 仅显示三星餐厅的分布热力，强度2倍
- price: 基于价格等级的热力分布（€到€€€€）
- cuisine: 基于菜系多样性的热力分析

技术实现：
- Vue 3 Composition API + Geographic Visualization
- ECharts Geographic + Heatmap 热力图层
- 地理坐标系统和坐标转换
- 密度计算和强度映射算法
- 多层次数据聚合和渲染优化

数据处理流程：
props.data → 坐标验证 → 类型筛选 → 强度计算 → 位置偏移 → 热力数据生成
地理数据 → ECharts地图投影 → 热力层渲染 → 交互事件处理

性能优化：
- 坐标有效性验证避免渲染错误
- 位置随机偏移避免点位完全重叠
- 容器就绪状态检测确保正确渲染
- 图表实例管理防止内存泄漏

强度映射规则：
- 一星餐厅：基础强度1.0
- 二星餐厅：强度1.5倍
- 三星餐厅：强度2.0倍  
- 价格等级：€(1.0) → €€€€(2.5)
- 菜系多样性：最多5种菜系归一化到2.0强度
-->
<template>
  <div class="heatmap-container">
    <div class="heatmap-header">
      <h3 class="heatmap-title">{{ title }}</h3>
      <div class="heatmap-controls">
        <el-select
          v-model="currentDataType"
          size="small"
          @change="handleDataTypeChange"
          class="data-type-select"
        >
          <el-option
            v-for="type in dataTypes"
            :key="type.value"
            :label="type.label"
            :value="type.value"
          />
        </el-select>
        <el-slider
          v-model="heatmapRadius"
          :min="10"
          :max="50"
          :show-tooltip="false"
          size="small"
          class="radius-slider"
          @change="updateHeatmap"
        />
        <span class="radius-label">热力半径: {{ heatmapRadius }}</span>
      </div>
    </div>
    <div ref="heatmapRef" :style="{ height: height + 'px' }" class="heatmap-chart"></div>
    <div class="heatmap-legend">
      <span class="legend-label">低密度</span>
      <div class="legend-gradient"></div>
      <span class="legend-label">高密度</span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch, computed, nextTick } from 'vue'
import * as echarts from 'echarts'
import 'echarts/extension/bmap/bmap'
import { useDataStore } from '@/store/data'

/**
 * 组件Props定义
 * @typedef {Object} Props
 * @property {string} title - 热力图标题
 * @property {number} height - 图表高度
 * @property {Array} data - 餐厅地理数据数组
 */
const props = defineProps({
  title: {
    type: String,
    default: '米其林餐厅全球热力分布',
    validator: (value) => typeof value === 'string' && value.length <= 50
  },
  height: {
    type: Number,
    default: 600,
    validator: (value) => value >= 400 && value <= 1200
  },
  data: {
    type: Array,
    default: () => [],
    validator: (value) => {
      if (!Array.isArray(value)) return false
      return value.every(item => 
        typeof item === 'object' && 
        item !== null &&
        'latitude' in item &&
        'longitude' in item &&
        !isNaN(parseFloat(item.latitude)) &&
        !isNaN(parseFloat(item.longitude))
      )
    }
  }
})

/**
 * 组件事件定义
 * @event regionSelect - 地区选择事件，传递选中地区的热力数据
 * @event dataTypeChange - 数据类型变更事件，传递新的数据类型
 */
const emit = defineEmits({
  regionSelect: (regionData) => {
    return typeof regionData === 'object' && 
           regionData !== null &&
           'coordinates' in regionData
  },
  dataTypeChange: (dataType) => {
    return typeof dataType === 'string' && 
           ['all', 'one_star', 'two_stars', 'three_stars', 'price', 'cuisine'].includes(dataType)
  }
})

const dataStore = useDataStore()
const heatmapRef = ref(null)
let chartInstance = null
const currentDataType = ref('all')
const heatmapRadius = ref(20)

const dataTypes = [
  { value: 'all', label: '全部餐厅' },
  { value: 'one_star', label: '一星餐厅' },
  { value: 'two_stars', label: '二星餐厅' },
  { value: 'three_stars', label: '三星餐厅' },
  { value: 'price', label: '价格分布' },
  { value: 'cuisine', label: '菜系多样性' }
]

/**
 * 生成热力图数据
 * 根据不同的数据类型处理餐厅数据，生成对应的热力强度
 * 
 * @param {Array} restaurants - 餐厅数据数组
 * @param {string} type - 热力数据类型
 * @returns {Array} 热力图数据数组 [[lng, lat, intensity], ...]
 * 
 * 处理逻辑：
 * 1. 验证地理坐标的有效性
 * 2. 根据数据类型计算热力强度
 * 3. 添加位置偏移避免点位重叠
 * 4. 特殊处理菜系多样性数据
 */
const generateHeatmapData = (restaurants, type) => {
  const heatData = []
  const processedRegions = new Map()
  
  restaurants.forEach(restaurant => {
    const lat = parseFloat(restaurant.latitude)
    const lng = parseFloat(restaurant.longitude)
    
    // 验证地理坐标有效性
    if (!isNaN(lat) && !isNaN(lng)) {
      let intensity = 1
      
      switch (type) {
        case 'one_star':
          if (restaurant.stars === 1) intensity = 1
          else return
          break
        case 'two_stars':
          if (restaurant.stars === 2) intensity = 1.5
          else return
          break
        case 'three_stars':
          if (restaurant.stars === 3) intensity = 2
          else return
          break
        case 'price':
          // 价格越高，强度越大
          const priceMap = { '€': 1, '€€': 1.5, '€€€': 2, '€€€€': 2.5 }
          intensity = priceMap[restaurant.price] || 1
          break
        case 'cuisine':
          // 计算区域内菜系多样性
          const regionKey = `${Math.round(lat)}_${Math.round(lng)}`
          if (!processedRegions.has(regionKey)) {
            processedRegions.set(regionKey, new Set())
          }
          processedRegions.get(regionKey).add(restaurant.cuisine)
          return
        default:
          // 根据星级设置不同强度
          intensity = restaurant.stars || 1
      }
      
      // 添加一些随机偏移避免完全重叠
      const offset = 0.01
      heatData.push([
        lng + (Math.random() - 0.5) * offset,
        lat + (Math.random() - 0.5) * offset,
        intensity
      ])
    }
  })
  
  // 处理菜系多样性数据
  if (type === 'cuisine') {
    processedRegions.forEach((cuisines, key) => {
      const [lat, lng] = key.split('_').map(Number)
      const diversity = Math.min(cuisines.size / 5, 2) // 最多5种菜系
      heatData.push([lng, lat, diversity])
    })
  }
  
  return heatData
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

// 初始化热力图
const initHeatmap = async () => {
  await nextTick()
  
  try {
    await waitForContainer(heatmapRef)
  } catch (error) {
    console.warn('HeatmapChart container is not ready:', error.message)
    return
  }
  
  // 销毁已存在的实例
  if (chartInstance) {
    chartInstance.dispose()
  }
  
  chartInstance = echarts.init(heatmapRef.value)
  
  // 获取数据
  let restaurants = props.data
  if (!restaurants.length) {
    await dataStore.fetchRestaurants()
    restaurants = dataStore.restaurants
  }
  
  const heatmapData = generateHeatmapData(restaurants, currentDataType.value)
  
  const option = {
    animation: false,
    backgroundColor: '#f5f5f5',
    title: {
      text: '',
      left: 'center',
      textStyle: {
        fontSize: 16,
        fontWeight: 'normal'
      }
    },
    tooltip: {
      trigger: 'item',
      formatter: (params) => {
        if (params.componentType === 'series') {
          const [lng, lat, value] = params.data || [0,0,0];
          return `
            <div style="padding: 8px;">
              <div>经度: ${lng.toFixed(2)}</div>
              <div>纬度: ${lat.toFixed(2)}</div>
              <div>密度: ${value.toFixed(2)}</div>
            </div>
          `
        }
        return ''
      }
    },
    visualMap: {
      show: false,
      top: 'bottom',
      min: 0,
      max: 2,
      inRange: {
        color: [
          '#313695', '#4575b4', '#74add1',
          '#abd9e9', '#e0f3f8', '#fee090',
          '#fdae61', '#f46d43', '#d73027',
          '#a50026'
        ]
      }
    },
    geo: {
      map: 'world',
      roam: true,
      zoom: 1.2,
      center: [0, 20],
      label: {
        emphasis: {
          show: false
        }
      },
      itemStyle: {
        normal: {
          areaColor: '#e6e6e6',
          borderColor: '#ccc',
          borderWidth: 0.5
        },
        emphasis: {
          areaColor: '#d6d6d6'
        }
      }
    },
    series: [
      {
        type: 'effectScatter',
        coordinateSystem: 'geo',
        data: heatmapData,
        symbolSize: function (val) {
          return Math.max(4, Math.min(20, val[2] * 8));
        },
        showEffectOn: 'render',
        rippleEffect: {
          brushType: 'stroke'
        },
        hoverAnimation: true,
        itemStyle: {
          color: function(params) {
            const value = params.data[2];
            if (value > 1.5) return '#d73027';
            if (value > 1) return '#f46d43';
            if (value > 0.5) return '#fdae61';
            return '#74add1';
          },
          shadowBlur: 10,
          shadowColor: '#333'
        },
        zlevel: 1
      }
    ]
  }
  
  // 注册世界地图
  const worldMapData = await fetch('https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json')
    .then(res => res.json())
    .catch(() => null)
    
  if (worldMapData) {
    echarts.registerMap('world', worldMapData)
  }

  // 使用ECharts默认的世界地图
  if (!worldMapData) {
    option.geo.map = 'world';
    option.geo.emphasis = {
      label: { show: false },
      itemStyle: { areaColor: '#d6d6d6' }
    };
  }
  
  await nextTick()
  if (chartInstance) {
    chartInstance.setOption(option)
  }
  
  // 添加点击事件
  chartInstance.on('click', 'series.heatmap', (params) => {
    const [lng, lat] = params.data
    emit('regionSelect', { lng, lat, value: params.data[2] })
  })
}

// 更新热力图
const updateHeatmap = async () => {
  if (!chartInstance) return
  
  let restaurants = props.data
  if (!restaurants.length) {
    restaurants = dataStore.restaurants
  }
  
  const heatmapData = generateHeatmapData(restaurants, currentDataType.value)
  
  await nextTick()
  if (chartInstance) {
    chartInstance.setOption({
      series: [{
        type: 'effectScatter',
        coordinateSystem: 'geo',
        data: heatmapData,
        symbolSize: function (val) {
          return Math.max(4, Math.min(20, val[2] * 8));
        }
      }]
    })
  }
}

// 处理数据类型切换
const handleDataTypeChange = () => {
  updateHeatmap()
  emit('dataTypeChange', currentDataType.value)
}

// 自适应大小
const handleResize = () => {
  if (chartInstance) {
    chartInstance.resize()
  }
}

// 监听数据变化
watch(() => props.data, () => {
  updateHeatmap()
}, { deep: true })

onMounted(() => {
  initHeatmap()
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
  refresh: updateHeatmap,
  resize: handleResize,
  setDataType: (type) => {
    currentDataType.value = type
    updateHeatmap()
  }
})
</script>

<style scoped>
.heatmap-container {
  position: relative;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  padding: 20px;
  overflow: hidden;
}

.heatmap-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.heatmap-title {
  font-size: 18px;
  font-weight: 500;
  color: #333;
  margin: 0;
}

.heatmap-controls {
  display: flex;
  align-items: center;
  gap: 20px;
}

.data-type-select {
  width: 150px;
}

.radius-slider {
  width: 120px;
}

.radius-label {
  font-size: 14px;
  color: #666;
  white-space: nowrap;
}

.heatmap-chart {
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
}

.heatmap-legend {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #f0f0f0;
}

.legend-label {
  font-size: 14px;
  color: #666;
}

.legend-gradient {
  width: 200px;
  height: 10px;
  background: linear-gradient(
    to right,
    #313695, #4575b4, #74add1,
    #abd9e9, #e0f3f8, #fee090,
    #fdae61, #f46d43, #d73027,
    #a50026
  );
  border-radius: 5px;
}

/* 加载动画 */
.heatmap-chart::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  border: 3px solid #f0f0f0;
  border-top-color: #409eff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  z-index: 10;
  display: none;
}

.heatmap-chart.loading::before {
  display: block;
}

@keyframes spin {
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .heatmap-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }
  
  .heatmap-controls {
    flex-wrap: wrap;
    width: 100%;
  }
  
  .data-type-select {
    width: 100%;
  }
  
  .radius-slider {
    flex: 1;
  }
}

/* 暗黑模式 */
:global(.dark) .heatmap-container {
  background: #1a1a1a;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
}

:global(.dark) .heatmap-title {
  color: #fff;
}

:global(.dark) .radius-label,
:global(.dark) .legend-label {
  color: #b3b3b3;
}

:global(.dark) .heatmap-legend {
  background: #1a1a1a;
}

:global(.dark) .legend-gradient {
  background: linear-gradient(90deg, 
    rgba(30, 144, 255, 0.2) 0%, 
    rgba(255, 255, 0, 0.5) 50%, 
    rgba(255, 69, 0, 0.8) 100%);
}
</style>