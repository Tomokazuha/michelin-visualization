<!--
米其林餐厅全球分布地图组件

功能特性：
1. 基于ECharts的世界地图可视化
2. 支持餐厅位置标点显示
3. 星级颜色差异化展示
4. 交互式地图缩放和平移
5. 国家点击选择功能
6. 餐厅详情悬停提示

数据流程：
props.data → 处理餐厅坐标和星级 → ECharts散点图 → 地图展示
事件传递：地图点击 → emit事件 → 父组件处理

技术实现：
- ECharts geo地理坐标系统
- scatter散点图系列
- 响应式图表尺寸调整
- 自定义tooltip和legend配置
-->
<template>
  <div class="map-chart" ref="chartContainer"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import * as echarts from 'echarts'
import 'echarts/map/js/world.js' // 世界地图数据

/**
 * 组件属性定义
 * 
 * @typedef {Object} Restaurant
 * @property {string} name - 餐厅名称
 * @property {string} country - 国家
 * @property {number} latitude - 纬度
 * @property {number} longitude - 经度
 * @property {number} stars - 星级(1-3)
 * @property {string} city - 城市
 * @property {string} cuisine - 菜系
 */
const props = defineProps({
  /** @type {Restaurant[]} 餐厅数据数组 */
  data: {
    type: Array,
    default: () => [],
    validator: (value) => {
      // 验证数据格式
      return value.every(item => 
        typeof item === 'object' && 
        'latitude' in item && 
        'longitude' in item && 
        'stars' in item
      )
    }
  },
  /** @type {string[]} 选中的国家列表 */
  selectedCountries: {
    type: Array,
    default: () => []
  },
  /** @type {string} 图表高度 */
  height: {
    type: String,
    default: '600px',
    validator: (value) => {
      // 验证CSS高度格式
      return /^\d+(px|%|vh|em|rem)$/.test(value)
    }
  }
})

/**
 * 组件事件定义
 */
const emit = defineEmits({
  /** 
   * 国家选择事件
   * @param {string} countryName - 被选中的国家名称
   */
  'country-select': (countryName) => typeof countryName === 'string',
  
  /** 
   * 餐厅点击事件
   * @param {Restaurant} restaurantData - 被点击的餐厅数据
   */
  'restaurant-click': (restaurantData) => typeof restaurantData === 'object'
})

// 响应式引用
const chartContainer = ref(null) // 图表容器DOM引用
let chart = null // ECharts实例
let resizeHandler = null // 窗口大小变化处理函数

/**
 * 星级对应的颜色配置
 * 用于散点图的颜色区分显示
 */
const STAR_COLORS = {
  1: '#FFD700', // 金色 - 一星
  2: '#FF6B6B', // 红色 - 二星  
  3: '#4ECDC4'  // 青色 - 三星
}

/**
 * 格式化国家提示信息
 * @param {Object} params - ECharts参数对象
 * @returns {string} HTML格式的提示信息
 */
const formatCountryTooltip = (params) => {
  const countryData = props.data.filter(item => item.country === params.name)
  const totalRestaurants = countryData.length
  
  if (totalRestaurants === 0) {
    return `
      <div style="padding: 8px;">
        <h4 style="margin: 0 0 8px 0; color: #1E88E5;">${params.name}</h4>
        <p style="margin: 0;">暂无米其林餐厅</p>
      </div>
    `
  }
  
  // 统计星级分布
  const starsDistribution = countryData.reduce((acc, item) => {
    acc[item.stars] = (acc[item.stars] || 0) + 1
    return acc
  }, {})
  
  return `
    <div style="padding: 8px;">
      <h4 style="margin: 0 0 8px 0; color: #1E88E5;">${params.name}</h4>
      <p style="margin: 0;">总餐厅数: ${totalRestaurants}</p>
      <p style="margin: 0;">⭐ 一星: ${starsDistribution['1'] || 0}</p>
      <p style="margin: 0;">⭐⭐ 二星: ${starsDistribution['2'] || 0}</p>
      <p style="margin: 0;">⭐⭐⭐ 三星: ${starsDistribution['3'] || 0}</p>
    </div>
  `
}

/**
 * 格式化餐厅提示信息
 * @param {Object} params - ECharts参数对象
 * @returns {string} HTML格式的提示信息
 */
const formatRestaurantTooltip = (params) => {
  const restaurant = params.data[4] // 餐厅完整数据在第5个位置
  
  if (!restaurant) {
    return `餐厅信息不完整`
  }
  
  const stars = '⭐'.repeat(restaurant.stars)
  
  return `
    <div style="padding: 8px;">
      <h4 style="margin: 0 0 8px 0; color: #1E88E5;">${restaurant.name}</h4>
      <p style="margin: 0;">星级: ${stars}</p>
      <p style="margin: 0;">城市: ${restaurant.city}</p>
      <p style="margin: 0;">菜系: ${restaurant.cuisine}</p>
      ${restaurant.price ? `<p style="margin: 0;">价位: ${restaurant.price}</p>` : ''}
    </div>
  `
}

/**
 * 注册图表事件监听器
 */
const registerChartEvents = () => {
  if (!chart) return
  
  // 点击事件处理
  chart.on('click', (params) => {
    try {
      if (params.componentType === 'geo') {
        // 地图区域点击 - 触发国家选择事件
        emit('country-select', params.name)
      } else if (params.componentType === 'series') {
        // 餐厅散点点击 - 触发餐厅点击事件
        const restaurantData = params.data[4]
        if (restaurantData) {
          emit('restaurant-click', restaurantData)
        }
      }
    } catch (error) {
      console.error('MapChart: 点击事件处理失败', error)
    }
  })
}

/**
 * 注册窗口大小变化监听器
 */
const registerResizeHandler = () => {
  if (!chart) return
  
  resizeHandler = () => {
    try {
      chart.resize()
    } catch (error) {
      console.error('MapChart: 图表大小调整失败', error)
    }
  }
  
  window.addEventListener('resize', resizeHandler)
}

/**
 * 初始化地图图表
 * 
 * 核心配置：
 * 1. 地理坐标系 (geo) - 世界地图背景
 * 2. 散点图系列 (scatter) - 餐厅位置标点
 * 3. 交互配置 - 缩放、平移、点击事件
 * 4. 样式配置 - 颜色、字体、布局
 */
const initChart = () => {
  if (!chartContainer.value) {
    console.warn('MapChart: 图表容器未准备就绪')
    return
  }
  
  try {
    // 初始化ECharts实例
    chart = echarts.init(chartContainer.value)
    
    // 图表配置选项
    const option = {
      // 标题配置
      title: {
        text: '米其林餐厅全球分布',
        textStyle: {
          color: '#1E88E5',
          fontSize: 18,
          fontWeight: 'bold'
        },
        left: 'center',
        top: 20
      },
      
      // 提示框配置 - 鼠标悬停显示详细信息
      tooltip: {
        trigger: 'item',
        formatter: (params) => {
          // 地图区域的提示信息
          if (params.componentType === 'geo') {
            return formatCountryTooltip(params)
          }
          
          // 餐厅散点的提示信息
          if (params.componentType === 'series') {
            return formatRestaurantTooltip(params)
          }
          
          // 默认显示
          return `${params.name}: ${params.value || 0}`
        },
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        borderColor: '#1E88E5',
        borderWidth: 1,
        textStyle: {
          color: '#fff',
          fontSize: 12
        }
      },
      
      // 地理坐标系配置 - 世界地图背景
      geo: {
        map: 'world',
        roam: true, // 允许缩放和平移
        zoom: 1.2,  // 初始缩放比例
        center: [0, 20], // 地图中心点坐标
        
        // 地图样式
        itemStyle: {
          areaColor: '#f3f3f3',
          borderColor: '#d4d4d4',
          borderWidth: 1
        },
        
        // 鼠标悬停样式
        emphasis: {
          itemStyle: {
            areaColor: '#ffd700',
            borderColor: '#1E88E5',
            borderWidth: 2
          }
        },
        
        // 特殊区域样式设置
        regions: [
          {
            name: 'China',
            itemStyle: {
              areaColor: '#e6f3ff'
            }
          }
        ]
      },
      
      // 数据系列配置 - 餐厅位置散点图
      series: [
        {
          type: 'scatter',
          coordinateSystem: 'geo', // 基于地理坐标系
          data: [], // 数据将在updateChart中设置
          
          // 散点大小计算函数
          symbolSize: (val) => Math.max(4, Math.min(20, val[2] * 2)),
          
          // 散点颜色配置
          itemStyle: {
            color: (params) => {
              const stars = params.data[3] // 星级数据在第4个位置
              return STAR_COLORS[stars] || STAR_COLORS[1]
            },
            borderColor: '#fff',
            borderWidth: 1
          },
          
          // 鼠标悬停效果
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowColor: 'rgba(30, 136, 229, 0.5)'
            }
          }
        }
      ],
      
      // 图例配置 - 显示星级说明
      legend: {
        orient: 'horizontal',
        bottom: 20,
        data: [
          { 
            name: '一星餐厅', 
            icon: 'circle', 
            textStyle: { color: STAR_COLORS[1] } 
          },
          { 
            name: '二星餐厅', 
            icon: 'circle', 
            textStyle: { color: STAR_COLORS[2] } 
          },
          { 
            name: '三星餐厅', 
            icon: 'circle', 
            textStyle: { color: STAR_COLORS[3] } 
          }
        ]
      }
    }
    
    // 设置图表配置
    chart.setOption(option)
    
    // 注册事件监听器
    registerChartEvents()
    
    // 注册窗口大小变化监听
    registerResizeHandler()
    
  } catch (error) {
    console.error('MapChart: 初始化图表失败', error)
  }
}

/**
 * 更新图表数据
 * 将餐厅数据转换为ECharts散点图格式
 */
const updateChart = () => {
  if (!chart) {
    console.warn('MapChart: 图表实例不存在，无法更新数据')
    return
  }
  
  try {
    // 转换数据格式: [经度, 纬度, 尺寸, 星级, 完整数据]
    const scatterData = props.data
      .filter(item => 
        item.longitude && 
        item.latitude && 
        !isNaN(item.longitude) && 
        !isNaN(item.latitude)
      )
      .map(item => [
        Number(item.longitude),
        Number(item.latitude),
        1, // 固定尺寸基数
        Number(item.stars),
        item // 完整餐厅数据
      ])
    
    // 更新图表数据
    chart.setOption({
      series: [{
        data: scatterData
      }]
    })
    
    console.log(`MapChart: 更新了 ${scatterData.length} 个餐厅标点`)
    
  } catch (error) {
    console.error('MapChart: 更新图表数据失败', error)
  }
}

/**
 * 清理资源
 */
const cleanup = () => {
  try {
    // 移除窗口大小变化监听器
    if (resizeHandler) {
      window.removeEventListener('resize', resizeHandler)
      resizeHandler = null
    }
    
    // 销毁图表实例
    if (chart) {
      chart.dispose()
      chart = null
    }
    
  } catch (error) {
    console.error('MapChart: 清理资源失败', error)
  }
}

// 监听数据变化，自动更新图表
watch(() => props.data, updateChart, { deep: true })

// 组件挂载时初始化图表
onMounted(() => {
  try {
    initChart()
    updateChart()
  } catch (error) {
    console.error('MapChart: 组件挂载失败', error)
  }
})

// 组件卸载时清理资源
onUnmounted(() => {
  cleanup()
})
</script>

<style scoped>
.map-chart {
  width: 100%;
  height: v-bind(height);
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background: white;
  transition: box-shadow 0.3s ease;
}

.map-chart:hover {
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}
</style> 