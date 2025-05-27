<template>
  <div class="distribution-container">
    <div class="distribution-header">
      <h3 class="distribution-title">{{ title }}</h3>
      <div class="distribution-controls">
        <el-select
          v-model="currentView"
          size="small"
          @change="updateChart"
          placeholder="选择视图"
          class="view-select"
        >
          <el-option
            v-for="view in viewOptions"
            :key="view.value"
            :label="view.label"
            :value="view.value"
          />
        </el-select>
        <el-select
          v-model="currentMetric"
          size="small"
          @change="updateChart"
          placeholder="选择指标"
          class="metric-select"
        >
          <el-option
            v-for="metric in metricOptions"
            :key="metric.value"
            :label="metric.label"
            :value="metric.value"
          />
        </el-select>
        <el-checkbox
          v-model="showValues"
          @change="toggleValues"
          class="checkbox-option"
        >
          显示平均值
        </el-checkbox>
      </div>
    </div>
    <div ref="chartRef" :style="{ height: height + 'px' }" class="distribution-chart"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import * as echarts from 'echarts'
import { useDataStore } from '@/store/data'

const props = defineProps({
  title: {
    type: String,
    default: '餐厅分布分析'
  },
  height: {
    type: Number,
    default: 500
  },
  data: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(['groupSelect'])

const dataStore = useDataStore()
const chartRef = ref(null)
let chartInstance = null
const currentView = ref('region')
const currentMetric = ref('stars')
const showValues = ref(true)

const viewOptions = [
  { value: 'region', label: '地区分布' },
  { value: 'price', label: '价格分布' },
  { value: 'stars', label: '星级分布' },
  { value: 'year', label: '年份分布' }
]

const metricOptions = [
  { value: 'stars', label: '星级' },
  { value: 'price', label: '价格' },
  { value: 'count', label: '数量' }
]

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

// 初始化图表
const initChart = async () => {
  await nextTick()
  
  try {
    await waitForContainer(chartRef)
  } catch (error) {
    console.warn('BoxPlotChart container is not ready:', error.message)
    return
  }
  
  if (chartInstance) {
    chartInstance.dispose()
  }
  
  chartInstance = echarts.init(chartRef.value)
  
  // 获取数据
  let restaurants = props.data
  if (!restaurants.length) {
    await dataStore.fetchRestaurants()
    restaurants = dataStore.restaurants
  }
  
  updateChart()
}

// 更新图表
const updateChart = () => {
  if (!chartInstance) return
  
  let restaurants = props.data.length ? props.data : dataStore.restaurants
  
  // 根据当前视图和指标生成数据
  const { categories, seriesData, averageData } = processData(restaurants)
  
  const option = {
    backgroundColor: '#fff',
    title: {
      text: getChartTitle(),
      left: 'center',
      top: 20,
      textStyle: {
        color: '#333',
        fontSize: 16,
        fontWeight: 'normal'
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['数据分布', showValues.value ? '平均值' : ''],
      top: 50,
      right: 10
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      top: '80px',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: categories,
      axisLabel: {
        interval: 0,
        rotate: 45,
        formatter: (value) => {
          return value.length > 10 ? value.slice(0, 10) + '...' : value
        }
      }
    },
    yAxis: {
      type: 'value',
      name: getYAxisName()
    },
    series: [
      {
        name: '数据分布',
        type: 'scatter',
        data: seriesData,
        symbolSize: 10,
        itemStyle: {
          color: function(params) {
            // 根据值的大小设置不同的颜色
            const value = params.data.value
            const colors = [
              '#5470c6', '#91cc75', '#fac858', '#ee6666', 
              '#73c0de', '#3ba272', '#fc8452', '#9a60b4'
            ]
            return colors[params.dataIndex % colors.length]
          }
        }
      },
      {
        name: '平均值',
        type: 'bar',
        data: averageData,
        barWidth: '40%',
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgba(30, 144, 255, 0.8)' },
            { offset: 1, color: 'rgba(30, 144, 255, 0.3)' }
          ])
        },
        z: -1,
        silent: true,
        show: showValues.value
      }
    ]
  }
  
  chartInstance.setOption(option)
  
  // 添加点击事件
  chartInstance.on('click', (params) => {
    if (params.componentType === 'series') {
      emit('groupSelect', {
        category: params.name,
        value: params.data.value,
        view: currentView.value,
        metric: currentMetric.value
      })
    }
  })
}

// 处理数据
const processData = (restaurants) => {
  const groups = {}
  
  // 根据当前视图对数据进行分组
  restaurants.forEach(restaurant => {
    let groupKey = ''
    
    if (currentView.value === 'region') {
      groupKey = restaurant.region || '未知地区'
    } else if (currentView.value === 'price') {
      groupKey = restaurant.price || '$$'
    } else if (currentView.value === 'stars') {
      groupKey = `${restaurant.stars || 1}星`
    } else if (currentView.value === 'year') {
      const year = parseInt(restaurant.year) || 2020
      const decade = Math.floor(year / 10) * 10
      groupKey = `${decade}s`
    }
    
    if (!groups[groupKey]) {
      groups[groupKey] = []
    }
    
    let value = 0
    if (currentMetric.value === 'stars') {
      value = restaurant.stars || 1
    } else if (currentMetric.value === 'price') {
      value = getPriceLevel(restaurant.price)
    } else if (currentMetric.value === 'count') {
      value = 1 // 用于计数
    }
    
    groups[groupKey].push(value)
  })
  
  // 计算每个组的数据点
  const categories = []
  const seriesData = []
  const averageData = []
  
  // 按照组内数据点数量排序
  const sortedKeys = Object.keys(groups).sort((a, b) => {
    return groups[b].length - groups[a].length
  })
  
  // 限制显示的类别数量，避免过多
  const limitedKeys = sortedKeys.slice(0, 12)
  
  limitedKeys.forEach((key, index) => {
    const values = groups[key]
    categories.push(key)
    
    // 计算平均值
    const sum = values.reduce((a, b) => a + b, 0)
    const avg = sum / values.length
    
    averageData.push({
      name: key,
      value: avg.toFixed(1)
    })
    
    // 为每个组生成散点数据
    values.forEach(value => {
      seriesData.push({
        name: key,
        value: value,
        // 添加一些随机偏移，使点不完全重叠
        xAxis: index + (Math.random() * 0.6 - 0.3)
      })
    })
  })
  
  return { categories, seriesData, averageData }
}

// 获取价格等级数字
const getPriceLevel = (price) => {
  if (!price) return 2
  return (price.match(/\$/g) || []).length
}

// 获取图表标题
const getChartTitle = () => {
  const viewText = viewOptions.find(o => o.value === currentView.value)?.label || ''
  const metricText = metricOptions.find(o => o.value === currentMetric.value)?.label || ''
  return `${viewText} (按${metricText})`
}

// 获取Y轴名称
const getYAxisName = () => {
  if (currentMetric.value === 'stars') return '星级'
  if (currentMetric.value === 'price') return '价格等级'
  if (currentMetric.value === 'count') return '数量'
  return '值'
}

// 切换是否显示平均值
const toggleValues = () => {
  updateChart()
}

// 自适应大小
const handleResize = () => {
  if (chartInstance) {
    chartInstance.resize()
  }
}

// 监听数据变化
watch(() => props.data, () => {
  updateChart()
}, { deep: true })

onMounted(() => {
  initChart()
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
  refresh: updateChart
})
</script>

<style scoped>
.distribution-container {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  padding: 24px;
}

.distribution-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
  gap: 16px;
}

.distribution-title {
  font-size: 20px;
  font-weight: 600;
  color: #303133;
  margin: 0;
}

.distribution-controls {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}

.view-select,
.metric-select {
  width: 120px;
}

.checkbox-option {
  margin-left: 10px;
}

.distribution-chart {
  width: 100%;
  min-height: 400px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .distribution-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
  
  .distribution-controls {
    width: 100%;
  }
}
</style>