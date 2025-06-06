<!--
米其林餐厅帕累托分析图表组件 (ParetoChart)

功能特性：
1. 基于ECharts的帕累托图（柱状图+折线图）可视化，实现80/20法则分析
2. 多维度分析：地区分布、菜系分布、年份分布、价格分布
3. 累计百分比显示：通过折线图展示数据的累计分布情况
4. 星级筛选：支持按1-3星级别进行数据过滤分析
5. 关键洞察面板：自动计算并显示重要统计指标
6. 双轴图表：左轴显示数量，右轴显示百分比
7. 交互式分析：支持点击分析项目获取详细信息

帕累托原理应用：
- 识别20%的重要因素对80%结果的影响
- 分析餐厅分布的集中度和分散程度
- 发现主要的地区、菜系、年份等分布特征
- 为业务决策提供数据支撑

分析维度：
- region: 按地区统计餐厅数量，分析地理分布集中度
- cuisine: 按菜系类型统计，识别主流菜系
- year: 按获奖年份统计，分析时间发展趋势
- price: 按价格等级统计，分析价位分布特征

技术实现：
- Vue 3 Composition API + Reactive Analysis
- ECharts Bar + Line 双轴混合图表
- 数据排序和累计百分比计算算法
- 关键指标自动分析和洞察生成
- 响应式主题切换和样式适配

数据流程：
props.data → 星级筛选 → 维度聚合 → 排序 → 累计计算 → 洞察分析 → 图表渲染
用户交互 → 分析类型/筛选条件变更 → 重新计算 → 图表更新 → emit事件

关键指标：
- TOP 20%数量：前20%项目的数量
- 占比：前20%项目占总体的百分比
- 达到80%需要：累计达到80%所需的项目数
- 集中度：数据分布的集中程度评级
-->
<template>
  <div class="pareto-chart">
    <!-- 控制面板 -->
    <div class="chart-controls">
      <div class="control-left">
        <h3 class="chart-title">
          <i class="el-icon-histogram" />
          帕累托分析
        </h3>
        <el-radio-group v-model="analysisType" size="small" @change="updateChart">
          <el-radio-button value="region">地区分布</el-radio-button>
          <el-radio-button value="cuisine">菜系分布</el-radio-button>
          <el-radio-button value="year">年份分布</el-radio-button>
          <el-radio-button value="price">价格分布</el-radio-button>
        </el-radio-group>
      </div>
      <div class="control-right">
        <el-checkbox v-model="showPercentage" @change="updateChart">
          显示累计百分比
        </el-checkbox>
        <el-select v-model="starFilter" size="small" placeholder="星级筛选" @change="updateChart">
          <el-option label="全部星级" :value="0" />
          <el-option label="一星" :value="1" />
          <el-option label="二星" :value="2" />
          <el-option label="三星" :value="3" />
        </el-select>
      </div>
    </div>

    <!-- 图表容器 -->
    <div ref="chartContainer" class="chart-container" :style="{ height: height + 'px' }" />

    <!-- 关键洞察 -->
    <div class="insights-panel" v-if="insights">
      <h4>关键洞察</h4>
      <div class="insight-grid">
        <div class="insight-item">
          <span class="insight-label">TOP 20%数量</span>
          <span class="insight-value">{{ insights.top20Count }}</span>
        </div>
        <div class="insight-item">
          <span class="insight-label">占比</span>
          <span class="insight-value">{{ insights.top20Percentage }}%</span>
        </div>
        <div class="insight-item">
          <span class="insight-label">达到80%需要</span>
          <span class="insight-value">{{ insights.itemsFor80 }}项</span>
        </div>
        <div class="insight-item">
          <span class="insight-label">集中度</span>
          <span class="insight-value">{{ insights.concentration }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import * as echarts from 'echarts'
import { useDataStore } from '@/store/data'
import { useAppStore } from '@/store/app'

/**
 * 组件Props定义
 * @typedef {Object} Props
 * @property {number} height - 图表高度
 * @property {Array} data - 餐厅数据数组
 */
const props = defineProps({
  height: {
    type: Number,
    default: 500,
    validator: (value) => value >= 300 && value <= 1000
  },
  data: {
    type: Array,
    default: () => [],
    validator: (value) => {
      if (!Array.isArray(value)) return false
      return value.every(item => 
        typeof item === 'object' && 
        item !== null &&
        typeof item.stars === 'number' &&
        item.stars >= 1 && item.stars <= 3
      )
    }
  }
})

/**
 * 组件事件定义
 * @event item-click - 分析项目点击事件，传递点击的项目数据
 */
const emit = defineEmits({
  'item-click': (itemData) => {
    return typeof itemData === 'object' && 
           itemData !== null && 
           'name' in itemData && 
           'value' in itemData
  }
})

// Store
const dataStore = useDataStore()
const appStore = useAppStore()

// Refs
const chartContainer = ref(null)
let chartInstance = null
const analysisType = ref('region')
const showPercentage = ref(true)
const starFilter = ref(0)
const insights = ref(null)

// 计算属性，用于生成图表标题
const analysisTitle = computed(() => {
  const typeLabels = {
    region: '地区分布',
    cuisine: '菜系分布',
    year: '年份分布',
    price: '价格分布'
  };
  return `米其林餐厅${typeLabels[analysisType.value] || '帕累托分析'}`;
});

// 计算过滤后的数据
const filteredData = computed(() => {
  let data = props.data.length > 0 ? props.data : dataStore.restaurants
  
  // 星级筛选
  if (starFilter.value > 0) {
    data = data.filter(r => r.stars === starFilter.value)
  }
  
  return data
})

/**
 * 生成帕累托分析数据
 * 实现80/20法则的数据处理和分析
 * 
 * @returns {Object} 包含categories, values, percentages的分析结果
 * 
 * 处理步骤：
 * 1. 根据分析类型对数据进行分组统计
 * 2. 按数值大小降序排序（帕累托排序）
 * 3. 计算累计百分比和关键指标
 * 4. 生成洞察分析结果
 */
const generateParetoData = () => {
  const data = filteredData.value
  if (data.length === 0) return { categories: [], values: [], percentages: [] }
  
  // 根据分析类型进行数据聚合统计
  const countMap = {}
  
  data.forEach(restaurant => {
    let key = ''
    switch (analysisType.value) {
      case 'region':
        key = restaurant.region || '未知地区'
        break
      case 'cuisine':
        key = restaurant.cuisine || '未知菜系'
        break
      case 'year':
        key = restaurant.year || '未知年份'
        break
      case 'price':
        key = restaurant.price || '$'
        break
    }
    countMap[key] = (countMap[key] || 0) + 1
  })
  
  // 转换为数组并排序
  const sortedData = Object.entries(countMap)
    .map(([key, count]) => ({ name: key, value: count }))
    .sort((a, b) => b.value - a.value)
  
  // 计算累计百分比
  const total = sortedData.reduce((sum, item) => sum + item.value, 0)
  let accumulated = 0
  const categories = []
  const values = []
  const percentages = []
  
  sortedData.forEach(item => {
    accumulated += item.value
    categories.push(item.name)
    values.push(item.value)
    percentages.push((accumulated / total * 100).toFixed(1))
  })
  
  // 计算关键洞察
  const top20Count = Math.ceil(sortedData.length * 0.2)
  const top20Sum = sortedData.slice(0, top20Count)
    .reduce((sum, item) => sum + item.value, 0)
  const top20Percentage = (top20Sum / total * 100).toFixed(1)
  
  // 找出达到80%需要多少项
  let itemsFor80 = 0
  let sum80 = 0
  for (let i = 0; i < sortedData.length; i++) {
    sum80 += sortedData[i].value
    itemsFor80++
    if (sum80 >= total * 0.8) break
  }
  
  const concentration = itemsFor80 <= sortedData.length * 0.2 ? '高度集中' :
    itemsFor80 <= sortedData.length * 0.4 ? '中度集中' : '分散'
  
  insights.value = {
    top20Count,
    top20Percentage,
    itemsFor80,
    concentration
  }
  
  return { categories, values, percentages }
}

// 图表配置
const getChartOptions = () => {
  const { categories, values, percentages } = generateParetoData()
  const isDark = appStore.theme === 'dark'
  
  const typeLabels = {
    region: '地区',
    cuisine: '菜系',
    year: '年份',
    price: '价格等级'
  }
  
  return {
    backgroundColor: 'transparent',
    title: {
      text: `米其林餐厅${typeLabels[analysisType.value]}分布`,
      left: 'center',
      textStyle: {
        color: isDark ? '#e0e0e0' : '#333',
        fontSize: 16,
        fontWeight: 500
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#999'
        }
      },
      formatter: (params) => {
        const bar = params[0]
        const line = params[1]
        return `
          <div style="font-weight: 500; margin-bottom: 4px;">${bar.name}</div>
          <div>数量：${bar.value}家</div>
          ${line ? `<div>累计占比：${line.value}%</div>` : ''}
        `
      },
      backgroundColor: isDark ? 'rgba(0,0,0,0.8)' : 'rgba(255,255,255,0.9)',
      borderColor: isDark ? '#333' : '#e0e0e0',
      textStyle: {
        color: isDark ? '#e0e0e0' : '#333'
      }
    },
    grid: {
      left: '3%',
      right: showPercentage.value ? '10%' : '3%',
      bottom: '15%',
      top: '15%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: categories,
      axisLabel: {
        rotate: 45,
        color: isDark ? '#a0a0a0' : '#666',
        interval: 0,
        formatter: (value) => {
          return value.length > 8 ? value.slice(0, 8) + '...' : value
        }
      },
      axisLine: {
        lineStyle: {
          color: isDark ? '#333' : '#e0e0e0'
        }
      }
    },
    yAxis: [
      {
        type: 'value',
        name: '餐厅数量',
        nameTextStyle: {
          color: isDark ? '#a0a0a0' : '#666'
        },
        axisLabel: {
          color: isDark ? '#a0a0a0' : '#666'
        },
        axisLine: {
          lineStyle: {
            color: isDark ? '#333' : '#e0e0e0'
          }
        },
        splitLine: {
          lineStyle: {
            color: isDark ? '#262626' : '#f0f0f0'
          }
        }
      },
      {
        type: 'value',
        name: '累计百分比',
        show: showPercentage.value,
        min: 0,
        max: 100,
        nameTextStyle: {
          color: isDark ? '#a0a0a0' : '#666'
        },
        axisLabel: {
          color: isDark ? '#a0a0a0' : '#666',
          formatter: '{value}%'
        },
        axisLine: {
          lineStyle: {
            color: isDark ? '#333' : '#e0e0e0'
          }
        },
        splitLine: {
          show: false
        }
      }
    ],
    series: [
      {
        name: '数量',
        type: 'bar',
        data: values,
        barMaxWidth: 50,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#667eea' },
            { offset: 1, color: '#764ba2' }
          ])
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      },
      showPercentage.value ? {
        name: '累计百分比',
        type: 'line',
        yAxisIndex: 1,
        data: percentages,
        smooth: true,
        symbol: 'circle',
        symbolSize: 8,
        lineStyle: {
          color: '#f093fb',
          width: 3
        },
        itemStyle: {
          color: '#f093fb',
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: true,
          position: 'top',
          formatter: '{c}%',
          color: isDark ? '#e0e0e0' : '#333',
          fontSize: 10
        }
      } : null
    ].filter(Boolean),
    dataZoom: categories.length > 20 ? [
      {
        type: 'inside',
        startValue: 0,
        endValue: 19
      },
      {
        type: 'slider',
        startValue: 0,
        endValue: 19,
        height: 20,
        bottom: 5,
        borderColor: 'transparent',
        backgroundColor: isDark ? '#1a1a1a' : '#f5f5f5',
        fillerColor: isDark ? 'rgba(102, 126, 234, 0.2)' : 'rgba(102, 126, 234, 0.1)',
        handleStyle: {
          color: '#667eea'
        },
        textStyle: {
          color: isDark ? '#a0a0a0' : '#666'
        }
      }
    ] : null
  }
}

// 在顶部定义processData函数
const processData = (restaurants) => {
  const groupMap = {};
  const xAxisData = [];
  const barData = [];
  const lineData = [];
  
  // 根据分析类型分组数据
  restaurants.forEach(restaurant => {
    let key = '';
    switch (analysisType.value) {
      case 'region':
        key = restaurant.region || '未知';
        break;
      case 'cuisine':
        key = restaurant.cuisine || '未知';
        break;
      case 'year':
        key = restaurant.year || '未知';
        break;
      case 'price':
        key = restaurant.price || '$';
        break;
    }
    
    if (!groupMap[key]) {
      groupMap[key] = 0;
    }
    groupMap[key]++;
  });
  
  // 排序并计算累计百分比
  const sortedData = Object.entries(groupMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 15); // 只取前15项，避免过多
  
  const total = sortedData.reduce((sum, [_, count]) => sum + count, 0);
  let cumulative = 0;
  
  sortedData.forEach(([name, count]) => {
    xAxisData.push(name);
    barData.push(count);
    cumulative += count;
    lineData.push(Number((cumulative / total * 100).toFixed(1)));
  });
  
  return { xAxisData, barData, lineData };
};

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
    await waitForContainer(chartContainer)
  } catch (error) {
    console.warn('ParetoChart container is not ready:', error.message)
    return
  }
  
  if (chartInstance) {
    chartInstance.dispose()
  }
  
  chartInstance = echarts.init(chartContainer.value)
  
  // 获取数据
  let restaurants = props.data
  if (!restaurants.length) {
    await dataStore.fetchRestaurants()
    restaurants = dataStore.restaurants
  }
  
  const { barData, lineData, xAxisData } = processData(restaurants)
  
  const option = {
    backgroundColor: '#fff',
    grid: {
      left: '5%',
      right: '5%',
      bottom: '10%',
      top: '80px',
      containLabel: true
    },
    title: {
      text: analysisTitle.value,
      left: 'center',
      top: 20,
      textStyle: {
        fontSize: 16,
        fontWeight: 'normal'
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      formatter: (params) => {
        const bar = params[0]
        const line = params[1]
        return `
          <div style="padding: 8px;">
            <div style="font-weight: 600; margin-bottom: 4px;">${bar.name}</div>
            <div style="display: flex; align-items: center; gap: 8px; margin: 4px 0;">
              <span style="display: inline-block; width: 10px; height: 10px; background: ${bar.color}; border-radius: 2px;"></span>
              <span>${bar.seriesName}: ${bar.value}</span>
            </div>
            <div style="display: flex; align-items: center; gap: 8px; margin: 4px 0;">
              <span style="display: inline-block; width: 10px; height: 10px; background: ${line.color}; border-radius: 2px;"></span>
              <span>${line.seriesName}: ${line.value}%</span>
            </div>
          </div>
        `
      }
    },
    legend: {
      data: ['数量', '累计百分比'],
      top: 50,
      right: 10
    },
    xAxis: {
      type: 'category',
      data: xAxisData,
      axisLabel: {
        interval: 0,
        rotate: 45,
        fontSize: 10,
        formatter: (value) => {
          return value.length > 10 ? value.substring(0, 10) + '...' : value
        }
      },
      axisLine: {
        lineStyle: {
          color: '#E0E0E0'
        }
      }
    },
    yAxis: [
      {
        type: 'value',
        name: '数量',
        nameTextStyle: {
          color: '#666'
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#E0E0E0'
          }
        },
        axisTick: {
          show: true
        },
        splitLine: {
          lineStyle: {
            type: 'dashed',
            color: '#EEE'
          }
        }
      },
      {
        type: 'value',
        name: '累计百分比(%)',
        nameTextStyle: {
          color: '#666'
        },
        min: 0,
        max: 100,
        axisLine: {
          show: true,
          lineStyle: {
            color: '#E0E0E0'
          }
        },
        axisTick: {
          show: true
        },
        splitLine: {
          show: false
        }
      }
    ],
    series: [
      {
        name: '数量',
        type: 'bar',
        barWidth: '40%',
        data: barData,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#83bff6' },
            { offset: 0.5, color: '#188df0' },
            { offset: 1, color: '#188df0' }
          ])
        },
        emphasis: {
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#2378f7' },
              { offset: 0.7, color: '#2378f7' },
              { offset: 1, color: '#83bff6' }
            ])
          }
        }
      },
      {
        name: '累计百分比',
        type: 'line',
        smooth: true,
        yAxisIndex: 1,
        data: lineData,
        symbol: 'circle',
        symbolSize: 8,
        itemStyle: {
          color: '#FF5722'
        },
        lineStyle: {
          width: 3,
          color: '#FF5722'
        }
      }
    ],
    animationEasing: 'elasticOut',
    animationDuration: 1500
  }
  
  chartInstance.setOption(option)
  
  // 添加点击事件
  chartInstance.on('click', 'series.bar', (params) => {
    emit('itemSelect', {
      name: params.name,
      value: params.value,
      percent: lineData[params.dataIndex]
    })
  })
}

// 更新图表
const updateChart = () => {
  if (!chartInstance) return
  
  const option = getChartOptions()
  chartInstance.setOption(option)
}

// 响应式处理
const handleResize = () => {
  chartInstance?.resize()
}

// 监听数据变化
watch(() => props.data, updateChart, { deep: true })
watch(() => appStore.theme, updateChart)

// 生命周期
onMounted(() => {
  initChart()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  chartInstance?.dispose()
})
</script>

<style scoped>
.pareto-chart {
  width: 100%;
  background: var(--bg-secondary);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-sm);
}

.chart-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-md);
  flex-wrap: wrap;
  gap: var(--spacing-md);
}

.control-left {
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
}

.control-right {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

.chart-title {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.chart-container {
  width: 100%;
  min-height: 400px;
  transition: all 0.3s ease;
}

.insights-panel {
  margin-top: var(--spacing-lg);
  padding: var(--spacing-lg);
  background: var(--bg-tertiary);
  border-radius: var(--radius-md);
}

.insights-panel h4 {
  margin: 0 0 var(--spacing-md) 0;
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
}

.insight-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: var(--spacing-md);
}

.insight-item {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.insight-label {
  font-size: 12px;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.02em;
}

.insight-value {
  font-size: 20px;
  font-weight: 600;
  color: var(--primary-color);
}

/* 深色模式 */
@media (prefers-color-scheme: dark) {
  .pareto-chart {
    background: #1a1a1a;
  }
  
  .chart-title {
    color: #e0e0e0;
  }
  
  .insights-panel {
    background: #262626;
  }
  
  .insights-panel h4 {
    color: #e0e0e0;
  }
  
  .insight-label {
    color: #a0a0a0;
  }
}

/* 响应式 */
@media (max-width: 768px) {
  .chart-controls {
    flex-direction: column;
    align-items: stretch;
  }
  
  .control-left,
  .control-right {
    flex-direction: column;
    align-items: stretch;
  }
  
  .chart-title {
    font-size: 16px;
  }
}
</style>