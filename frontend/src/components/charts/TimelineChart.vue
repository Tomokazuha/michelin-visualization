<!--
米其林餐厅时间线发展图表组件 (TimelineChart)

功能特性：
1. 基于ECharts的时间序列可视化，展示餐厅发展历程
2. 多种视图模式：年度统计、累计增长、趋势分析
3. 星级分层显示：支持1-3星餐厅的独立或组合展示
4. 交互式时间轴：支持范围选择和时间点缩放
5. 自动播放功能：动态展示时间发展过程
6. 统计数据面板：显示关键指标和变化趋势
7. 移动平均计算：平滑趋势线展示

视图模式详解：
- year: 按年份柱状图显示，支持星级堆叠
- cumulative: 累计增长折线图，显示总体发展趋势  
- trend: 趋势分析模式，包含原始数据点和移动平均线

技术实现：
- Vue 3 Composition API + Reactive State
- ECharts Timeline + Bar/Line/Scatter 混合图表
- 时间序列数据处理和聚合算法
- 移动平均和趋势分析计算
- 响应式布局和自适应缩放

数据流程：
props.data → processTimelineData → 视图模式处理 → ECharts配置 → 图表渲染
用户交互 → 模式切换/星级筛选 → 数据重新计算 → 图表更新 → emit事件

统计指标：
- 最早年份：数据集中的起始年份
- 年均增长：按年计算的平均增长率
- 峰值年份：新增餐厅数量最多的年份
- 最新变化：最近一年的变化情况
-->
<template>
  <div class="timeline-container">
    <div class="timeline-header">
      <h3 class="timeline-title">{{ title }}</h3>
      <div class="timeline-controls">
        <el-radio-group v-model="viewMode" size="small" @change="updateChart">
          <el-radio-button value="year">按年份</el-radio-button>
          <el-radio-button value="cumulative">累计增长</el-radio-button>
          <el-radio-button value="trend">趋势分析</el-radio-button>
        </el-radio-group>
        <el-checkbox-group v-model="selectedStars" size="small" @change="updateChart">
          <el-checkbox-button :value="1">一星</el-checkbox-button>
          <el-checkbox-button :value="2">二星</el-checkbox-button>
          <el-checkbox-button :value="3">三星</el-checkbox-button>
        </el-checkbox-group>
      </div>
    </div>
    <div ref="timelineRef" :style="{ height: height + 'px' }" class="timeline-chart"></div>
    <div class="timeline-stats">
      <div class="stat-item" v-for="stat in statistics" :key="stat.label">
        <div class="stat-value">{{ stat.value }}</div>
        <div class="stat-label">{{ stat.label }}</div>
        <div class="stat-change" :class="stat.trend">
          <i :class="stat.trend === 'up' ? 'el-icon-top' : 'el-icon-bottom'"></i>
          {{ stat.change }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch, computed } from 'vue'
import * as echarts from 'echarts'
import { useDataStore } from '@/store/data'

/**
 * 组件Props定义
 * @typedef {Object} Props
 * @property {string} title - 图表标题
 * @property {number} height - 图表高度
 * @property {Array} data - 时间序列餐厅数据
 * @property {number} startYear - 起始年份
 * @property {number} endYear - 结束年份
 */
const props = defineProps({
  title: {
    type: String,
    default: '米其林餐厅时间发展',
    validator: (value) => typeof value === 'string' && value.length <= 50
  },
  height: {
    type: Number,
    default: 400,
    validator: (value) => value >= 200 && value <= 800
  },
  data: {
    type: Array,
    default: () => [],
    validator: (value) => {
      if (!Array.isArray(value)) return false
      return value.every(item => 
        typeof item === 'object' && 
        item !== null &&
        'year' in item &&
        'stars' in item &&
        !isNaN(parseInt(item.year)) &&
        [1, 2, 3].includes(item.stars)
      )
    }
  },
  startYear: {
    type: Number,
    default: 2000,
    validator: (value) => value >= 1900 && value <= new Date().getFullYear()
  },
  endYear: {
    type: Number,
    default: new Date().getFullYear(),
    validator: (value) => value >= 2000 && value <= new Date().getFullYear() + 5
  }
})

/**
 * 组件事件定义
 * @event yearSelect - 年份选择事件，传递选中的年份
 * @event periodSelect - 时间段选择事件，传递起止年份
 * @event yearChange - 年份变更事件，传递当前播放的年份
 */
const emit = defineEmits({
  yearSelect: (year) => {
    return typeof year === 'number' && year >= 1900 && year <= 2030
  },
  periodSelect: (startYear, endYear) => {
    return typeof startYear === 'number' && 
           typeof endYear === 'number' && 
           startYear <= endYear
  },
  yearChange: (year) => {
    return typeof year === 'number' && year >= 1900 && year <= 2030
  }
})

const dataStore = useDataStore()
const timelineRef = ref(null)
let chartInstance = null
const viewMode = ref('year')
const selectedStars = ref([1, 2, 3])
const autoPlay = ref(true)

// 添加updateChart函数定义
const updateChart = () => {
  if (chartInstance) {
    // 在调用initTimeline之前，确保数据已准备好或重新获取
    initTimeline();
  }
}

// 统计数据
const statistics = ref([
  { label: '最早年份', value: '2000', change: '', trend: 'neutral' },
  { label: '年均增长', value: '12.5%', change: '+2.3%', trend: 'up' },
  { label: '峰值年份', value: '2019', change: '156家', trend: 'up' },
  { label: '最新变化', value: '+23', change: '2024', trend: 'up' }
])

/**
 * 处理时间线数据，进行数据聚合和格式化
 * 将餐厅数据按年份和星级进行分组统计
 * 
 * @param {Array} restaurants - 餐厅数据数组
 * @returns {Object} 包含处理后的时间序列数据和图表配置
 * 
 * 处理步骤：
 * 1. 初始化年份数据结构
 * 2. 按年份和星级进行数据聚合
 * 3. 根据视图模式生成对应的图表系列
 * 4. 应用星级筛选和颜色配置
 */
const processTimelineData = (restaurants) => {
  const yearData = new Map()
  const starColors = {
    1: '#D4AF37',  // 一星：金色
    2: '#DC143C',  // 二星：深红色
    3: '#40E0D0'   // 三星：青绿色
  }
  
  // 初始化年份数据结构，确保所有年份都有完整的数据
  for (let year = props.startYear; year <= props.endYear; year++) {
    yearData.set(year, { 1: 0, 2: 0, 3: 0, total: 0 })
  }
  
  // 统计各年份数据
  restaurants.forEach(restaurant => {
    const year = parseInt(restaurant.year)
    const stars = restaurant.stars || 1
    
    if (year >= props.startYear && year <= props.endYear && selectedStars.value.includes(stars)) {
      const data = yearData.get(year)
      if (data) {
        data[stars]++
        data.total++
      }
    }
  })
  
  // 根据模式处理数据
  const series = []
  const xAxisData = Array.from(yearData.keys())
  
  if (viewMode.value === 'year') {
    // 按年份显示
    selectedStars.value.forEach(star => {
      series.push({
        name: `${star}星餐厅`,
        type: 'bar',
        stack: 'total',
        barMaxWidth: 40,
        itemStyle: {
          color: starColors[star],
          borderRadius: [2, 2, 0, 0]
        },
        emphasis: {
          focus: 'series',
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        },
        data: xAxisData.map(year => yearData.get(year)[star])
      })
    })
  } else if (viewMode.value === 'cumulative') {
    // 累计增长
    let cumulative = { 1: 0, 2: 0, 3: 0 }
    selectedStars.value.forEach(star => {
      const cumulativeData = []
      xAxisData.forEach(year => {
        cumulative[star] += yearData.get(year)[star]
        cumulativeData.push(cumulative[star])
      })
      
      series.push({
        name: `${star}星累计`,
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 8,
        lineStyle: {
          width: 3,
          color: starColors[star]
        },
        itemStyle: {
          color: starColors[star]
        },
        areaStyle: {
          opacity: 0.3,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: starColors[star] },
            { offset: 1, color: '#fff' }
          ])
        },
        data: cumulativeData
      })
    })
  } else if (viewMode.value === 'trend') {
    // 趋势分析
    selectedStars.value.forEach(star => {
      const trendData = xAxisData.map(year => yearData.get(year)[star])
      const movingAvg = calculateMovingAverage(trendData, 3)
      
      // 原始数据
      series.push({
        name: `${star}星实际`,
        type: 'scatter',
        symbolSize: 10,
        itemStyle: {
          color: starColors[star],
          opacity: 0.6
        },
        data: trendData
      })
      
      // 移动平均线
      series.push({
        name: `${star}星趋势`,
        type: 'line',
        smooth: true,
        showSymbol: false,
        lineStyle: {
          width: 2,
          color: starColors[star],
          type: 'solid'
        },
        data: movingAvg
      })
    })
  }
  
  // 计算统计信息
  updateStatistics(yearData, restaurants)
  
  return { xAxisData, series }
}

// 计算移动平均
const calculateMovingAverage = (data, window) => {
  const result = []
  for (let i = 0; i < data.length; i++) {
    if (i < window - 1) {
      result.push(null)
    } else {
      let sum = 0
      for (let j = 0; j < window; j++) {
        sum += data[i - j]
      }
      result.push(Math.round(sum / window * 10) / 10)
    }
  }
  return result
}

// 更新统计信息
const updateStatistics = (yearData, restaurants) => {
  const years = Array.from(yearData.keys())
  const totals = years.map(year => yearData.get(year).total)
  
  // 找出最早有数据的年份
  const firstYearIndex = totals.findIndex(val => val > 0)
  const firstYear = years[firstYearIndex] || props.startYear
  
  // 计算年均增长率
  const validYears = totals.filter(val => val > 0).length
  const totalGrowth = totals[totals.length - 1] - totals[firstYearIndex]
  const avgGrowthRate = validYears > 1 ? (totalGrowth / validYears).toFixed(1) : 0
  
  // 找出峰值年份
  const maxTotal = Math.max(...totals)
  const peakYear = years[totals.indexOf(maxTotal)]
  
  // 最新变化
  const latestChange = totals[totals.length - 1] - totals[totals.length - 2]
  
  statistics.value = [
    { 
      label: '最早年份', 
      value: firstYear.toString(), 
      change: `${totals[firstYearIndex]}家`, 
      trend: 'neutral' 
    },
    { 
      label: '年均增长', 
      value: `${avgGrowthRate}家`, 
      change: avgGrowthRate > 0 ? `+${avgGrowthRate}%` : `${avgGrowthRate}%`, 
      trend: avgGrowthRate > 0 ? 'up' : 'down' 
    },
    { 
      label: '峰值年份', 
      value: peakYear.toString(), 
      change: `${maxTotal}家`, 
      trend: 'up' 
    },
    { 
      label: '最新变化', 
      value: latestChange > 0 ? `+${latestChange}` : latestChange.toString(), 
      change: props.endYear.toString(), 
      trend: latestChange > 0 ? 'up' : 'down' 
    }
  ]
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

// 初始化图表
const initTimeline = async () => {
  await nextTick()
  
  try {
    await waitForContainer(timelineRef)
  } catch (error) {
    console.warn('TimelineChart container is not ready:', error.message)
    return
  }
  
  if (chartInstance) {
    chartInstance.dispose()
  }
  
  chartInstance = echarts.init(timelineRef.value)
  
  // 获取数据
  let restaurants = props.data
  if (!restaurants.length) {
    await dataStore.fetchRestaurants()
    restaurants = dataStore.restaurants
  }
  
  const timelineData = generateTimelineData(restaurants)
  
  const option = {
    baseOption: {
      backgroundColor: '#fff',
      timeline: {
        axisType: 'category',
        autoPlay: autoPlay.value,
        playInterval: 3000,
        loop: true,
        lineStyle: {
          color: '#999'
        },
        itemStyle: {
          color: '#409EFF'
        },
        checkpointStyle: {
          color: '#2A99FF',
          borderColor: '#fff',
          borderWidth: 2
        },
        controlStyle: {
          showPlayBtn: true,
          showPrevBtn: true,
          showNextBtn: true,
          color: '#666',
          borderColor: '#666'
        },
        emphasis: {
          itemStyle: {
            color: '#2A99FF'
          },
          controlStyle: {
            color: '#2A99FF',
            borderColor: '#2A99FF'
          },
          label: {
            color: '#2A99FF'
          }
        },
        data: Object.keys(timelineData)
      },
      tooltip: {
        trigger: 'item',
        formatter: (params) => {
          if (params.seriesType === 'pie') {
            return `
              <div style="padding: 8px;">
                <div style="font-weight: 600; margin-bottom: 4px;">${params.name}</div>
                <div>数量: ${params.value}</div>
                <div>占比: ${params.percent}%</div>
              </div>
            `
          }
          return ''
        }
      },
      grid: {
        top: 80,
        bottom: 100,
        containLabel: true
      },
      calculable: true
    },
    options: Object.entries(timelineData).map(([year, data]) => {
      return {
        title: {
          text: `${year}年米其林餐厅分布`,
          left: 'center',
          top: 20,
          textStyle: {
            color: '#333',
            fontSize: 18,
            fontWeight: 'normal'
          }
        },
        legend: {
          data: ['一星餐厅', '二星餐厅', '三星餐厅'],
          right: 10,
          top: 50
        },
        series: [
          {
            type: 'pie',
            name: year + '年',
            center: ['50%', '50%'],
            radius: '55%',
            startAngle: 310,
            avoidLabelOverlap: true,
            label: {
              show: true,
              formatter: '{b}: {c} ({d}%)',
              fontSize: 12
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 14,
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: true,
              smooth: 0.2,
              length: 10,
              length2: 20
            },
            itemStyle: {
              borderRadius: 8,
              borderColor: '#fff',
              borderWidth: 2
            },
            data: [
              { 
                name: '一星餐厅', 
                value: data['1'] || 0, 
                itemStyle: { color: '#D4AF37' } 
              },
              { 
                name: '二星餐厅', 
                value: data['2'] || 0, 
                itemStyle: { color: '#DC143C' } 
              },
              { 
                name: '三星餐厅', 
                value: data['3'] || 0, 
                itemStyle: { color: '#40E0D0' } 
              }
            ],
            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
              return Math.random() * 200;
            }
          }
        ]
      }
    })
  }
  
  chartInstance.setOption(option)
  
  // 添加时间点切换事件
  chartInstance.on('timelinechanged', (params) => {
    const currentYear = Object.keys(timelineData)[params.currentIndex]
    emit('yearChange', currentYear)
  })
}

// 自适应大小
const handleResize = () => {
  if (chartInstance) {
    chartInstance.resize()
  }
}

// 监听数据变化
watch(() => props.data, () => {
  updateChart() // 现在 updateChart 已经定义
}, { deep: true })

watch(viewMode, updateChart) // 监听视图模式变化
watch(selectedStars, updateChart, { deep: true }) // 监听星级选择变化

onMounted(() => {
  initTimeline()
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
  refresh: initTimeline,
  updateChart // 确保这里暴露的是已定义的函数
})

// 生成时间线数据
const generateTimelineData = (restaurants) => {
  const timelineData = {}
  
  // 初始化年份数据
  for (let year = props.startYear; year <= props.endYear; year++) {
    timelineData[year] = { 1: 0, 2: 0, 3: 0 }
  }
  
  // 统计各年份数据
  restaurants.forEach(restaurant => {
    const year = parseInt(restaurant.year)
    const stars = restaurant.stars || 1
    
    if (year >= props.startYear && year <= props.endYear) {
      if (timelineData[year]) {
        timelineData[year][stars] = (timelineData[year][stars] || 0) + 1
      }
    }
  })
  
  return timelineData
}
</script>

<style scoped>
.timeline-container {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  padding: 24px;
}

.timeline-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  flex-wrap: wrap;
  gap: 16px;
}

.timeline-title {
  font-size: 20px;
  font-weight: 600;
  color: #303133;
  margin: 0;
}

.timeline-controls {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}

.timeline-chart {
  width: 100%;
  min-height: 300px;
}

.timeline-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid #E4E7ED;
}

.stat-item {
  text-align: center;
}

.stat-value {
  font-size: 24px;
  font-weight: 600;
  color: #409EFF;
  margin-bottom: 4px;
}

.stat-label {
  font-size: 14px;
  color: #909399;
  margin-bottom: 4px;
}

.stat-change {
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
}

.stat-change.up {
  color: #67C23A;
}

.stat-change.down {
  color: #F56C6C;
}

.stat-change.neutral {
  color: #909399;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .timeline-header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .timeline-controls {
    width: 100%;
  }
  
  .timeline-stats {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* 暗黑模式 */
:global(.dark) .timeline-container {
  background: #1a1a1a;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
}

:global(.dark) .timeline-title {
  color: #fff;
}

:global(.dark) .stat-label {
  color: #737373;
}
</style>