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

const props = defineProps({
  title: {
    type: String,
    default: '米其林餐厅全球热力分布'
  },
  height: {
    type: Number,
    default: 600
  },
  data: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(['regionSelect', 'dataTypeChange'])

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

// 处理数据生成热力图数据
const generateHeatmapData = (restaurants, type) => {
  const heatData = []
  const processedRegions = new Map()
  
  restaurants.forEach(restaurant => {
    const lat = parseFloat(restaurant.latitude)
    const lng = parseFloat(restaurant.longitude)
    
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