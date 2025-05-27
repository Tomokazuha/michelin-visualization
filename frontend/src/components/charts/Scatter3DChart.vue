<template>
  <div class="scatter3d-container">
    <div class="scatter3d-header">
      <h3 class="scatter3d-title">{{ title }}</h3>
      <div class="scatter3d-controls">
        <el-select
          v-model="xAxis"
          size="small"
          @change="updateChart"
          placeholder="X轴"
          class="axis-select"
        >
          <el-option
            v-for="dim in dimensions"
            :key="dim.value"
            :label="dim.label"
            :value="dim.value"
          />
        </el-select>
        <el-select
          v-model="yAxis"
          size="small"
          @change="updateChart"
          placeholder="Y轴"
          class="axis-select"
        >
          <el-option
            v-for="dim in dimensions"
            :key="dim.value"
            :label="dim.label"
            :value="dim.value"
          />
        </el-select>
        <el-select
          v-model="zAxis"
          size="small"
          @change="updateChart"
          placeholder="Z轴"
          class="axis-select"
        >
          <el-option
            v-for="dim in dimensions"
            :key="dim.value"
            :label="dim.label"
            :value="dim.value"
          />
        </el-select>
        <el-checkbox v-model="enableRotation" @change="toggleRotation">
          自动旋转
        </el-checkbox>
      </div>
    </div>
    <div ref="scatter3dRef" :style="{ height: height + 'px' }" class="scatter3d-chart"></div>
    <div class="scatter3d-info">
      <div class="info-item">
        <i class="el-icon-data-analysis"></i>
        <span>拖拽旋转查看3D视角</span>
      </div>
      <div class="info-item">
        <i class="el-icon-zoom-in"></i>
        <span>滚轮缩放调整大小</span>
      </div>
      <div class="info-item">
        <i class="el-icon-position"></i>
        <span>右键拖拽平移视图</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue'
import * as echarts from 'echarts'
import 'echarts-gl'
import { useDataStore } from '@/store/data'

const props = defineProps({
  title: {
    type: String,
    default: '米其林餐厅3D分布'
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

const emit = defineEmits(['pointClick', 'axisChange'])

const dataStore = useDataStore()
const scatter3dRef = ref(null)
let chartInstance = null
let rotationInterval = null

const xAxis = ref('longitude')
const yAxis = ref('latitude')
const zAxis = ref('price_numeric')
const enableRotation = ref(true)

const dimensions = [
  { value: 'longitude', label: '经度' },
  { value: 'latitude', label: '纬度' },
  { value: 'price_numeric', label: '价格指数' },
  { value: 'year', label: '获奖年份' },
  { value: 'award_years', label: '获奖年限' },
  { value: 'cuisine_diversity', label: '菜系多样性' }
]

// 处理3D散点数据
const process3DData = (restaurants) => {
  const starColors = {
    1: '#D4AF37',
    2: '#DC143C',
    3: '#40E0D0'
  }
  
  // 按星级分组
  const series = []
  const starGroups = new Map()
  
  restaurants.forEach(restaurant => {
    const stars = restaurant.stars || 1
    if (!starGroups.has(stars)) {
      starGroups.set(stars, [])
    }
    
    // 获取各维度数据
    const xValue = getAxisValue(restaurant, xAxis.value)
    const yValue = getAxisValue(restaurant, yAxis.value)
    const zValue = getAxisValue(restaurant, zAxis.value)
    
    if (xValue !== null && yValue !== null && zValue !== null) {
      starGroups.get(stars).push({
        value: [xValue, yValue, zValue],
        name: restaurant.restaurant_name,
        itemStyle: {
          color: starColors[stars],
          opacity: 0.8
        },
        data: restaurant
      })
    }
  })
  
  // 创建系列
  starGroups.forEach((data, stars) => {
    series.push({
      type: 'scatter3D',
      name: `${stars}星餐厅`,
      data: data,
      symbolSize: 8 + stars * 3,
      itemStyle: {
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.8)'
      },
      emphasis: {
        itemStyle: {
          opacity: 1,
          shadowBlur: 10,
          shadowOffsetY: 5,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    })
  })
  
  return series
}

// 获取轴值
const getAxisValue = (restaurant, dimension) => {
  switch (dimension) {
    case 'longitude':
      return parseFloat(restaurant.longitude) || null
    case 'latitude':
      return parseFloat(restaurant.latitude) || null
    case 'price_numeric':
      return restaurant.price_numeric || getPriceLevel(restaurant.price)
    case 'year':
      return parseInt(restaurant.year) || null
    case 'award_years':
      return restaurant.award_years || (new Date().getFullYear() - parseInt(restaurant.year))
    case 'cuisine_diversity':
      return getCuisineDiversityScore(restaurant.cuisine)
    default:
      return null
  }
}

// 获取价格级别
const getPriceLevel = (price) => {
  if (!price) return 2
  const dollarCount = (price.match(/\$/g) || []).length
  return Math.max(1, Math.min(5, dollarCount))
}

// 计算菜系多样性得分
const getCuisineDiversityScore = (cuisine) => {
  if (!cuisine) return 1
  const cuisineWords = cuisine.split(/[,;\s]+/).filter(w => w.length > 0)
  return Math.min(10, cuisineWords.length * 2)
}

// 获取轴标签
const getAxisLabel = (dimension) => {
  return dimensions.find(d => d.value === dimension)?.label || dimension
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

// 初始化3D散点图
const initChart = async () => {
  await nextTick()
  
  try {
    await waitForContainer(scatter3dRef)
  } catch (error) {
    console.warn('Scatter3DChart container is not ready:', error.message)
    return
  }
  
  if (chartInstance) {
    chartInstance.dispose()
  }
  
  chartInstance = echarts.init(scatter3dRef.value)
  
  // 获取数据
  let restaurants = props.data
  if (!restaurants.length) {
    await dataStore.fetchRestaurants()
    restaurants = dataStore.restaurants
  }
  
  const series = process3DData(restaurants)
  
  const option = {
    tooltip: {
      trigger: 'item',
      formatter: (params) => {
        const data = params.data.data
        const xLabel = getAxisLabel(xAxis.value)
        const yLabel = getAxisLabel(yAxis.value)
        const zLabel = getAxisLabel(zAxis.value)
        
        return `
          <div style="padding: 12px;">
            <div style="font-weight: 600; margin-bottom: 8px;">${data.restaurant_name}</div>
            <div style="display: grid; gap: 4px; font-size: 12px;">
              <div>星级: ${'⭐'.repeat(data.stars || 1)}</div>
              <div>菜系: ${data.cuisine || 'N/A'}</div>
              <div>价格: ${data.price || 'N/A'}</div>
              <div>城市: ${data.city || 'N/A'}, ${data.region || ''}</div>
              <div style="margin-top: 8px; padding-top: 8px; border-top: 1px solid #e0e0e0;">
                <div>${xLabel}: ${params.value[0].toFixed(2)}</div>
                <div>${yLabel}: ${params.value[1].toFixed(2)}</div>
                <div>${zLabel}: ${params.value[2].toFixed(2)}</div>
              </div>
            </div>
          </div>
        `
      }
    },
    backgroundColor: '#fafafa',
    legend: {
      data: series.map(s => s.name),
      left: 'center',
      top: 10,
      textStyle: {
        fontSize: 12
      }
    },
    xAxis3D: {
      type: 'value',
      name: getAxisLabel(xAxis.value),
      nameTextStyle: {
        fontSize: 14
      },
      axisLine: {
        lineStyle: {
          color: '#999'
        }
      },
      axisPointer: {
        show: true,
        lineStyle: {
          color: '#409EFF',
          width: 1
        }
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: '#e0e0e0'
        }
      }
    },
    yAxis3D: {
      type: 'value',
      name: getAxisLabel(yAxis.value),
      nameTextStyle: {
        fontSize: 14
      },
      axisLine: {
        lineStyle: {
          color: '#999'
        }
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: '#e0e0e0'
        }
      }
    },
    zAxis3D: {
      type: 'value',
      name: getAxisLabel(zAxis.value),
      nameTextStyle: {
        fontSize: 14
      },
      axisLine: {
        lineStyle: {
          color: '#999'
        }
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: '#e0e0e0'
        }
      }
    },
    grid3D: {
      boxWidth: 100,
      boxDepth: 100,
      boxHeight: 80,
      viewControl: {
        distance: 150,
        alpha: 30,
        beta: 30,
        center: [0, 0, 0],
        autoRotate: enableRotation.value,
        autoRotateSpeed: 10
      },
      light: {
        main: {
          intensity: 1.2,
          shadow: true
        },
        ambient: {
          intensity: 0.3
        }
      },
      postEffect: {
        enable: true,
        bloom: {
          enable: true,
          intensity: 0.1
        },
        SSAO: {
          enable: true,
          radius: 4,
          intensity: 1.5
        }
      },
      temporalSuperSampling: {
        enable: true
      }
    },
    series: series
  }
  
  chartInstance.setOption(option)
  
  // 添加点击事件
  chartInstance.on('click', (params) => {
    if (params.componentType === 'series') {
      emit('pointClick', {
        name: params.data.name,
        data: params.data.data,
        value: params.value
      })
    }
  })
}

// 更新图表
const updateChart = () => {
  if (chartInstance) {
    initChart()
    emit('axisChange', {
      x: xAxis.value,
      y: yAxis.value,
      z: zAxis.value
    })
  }
}

// 切换旋转
const toggleRotation = () => {
  if (chartInstance) {
    chartInstance.setOption({
      grid3D: {
        viewControl: {
          autoRotate: enableRotation.value
        }
      }
    })
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
  initChart()
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
  if (rotationInterval) {
    clearInterval(rotationInterval)
  }
})

// 暴露方法
defineExpose({
  refresh: initChart,
  updateChart
})
</script>

<style scoped>
.scatter3d-container {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  padding: 24px;
}

.scatter3d-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  flex-wrap: wrap;
  gap: 16px;
}

.scatter3d-title {
  font-size: 20px;
  font-weight: 600;
  color: #303133;
  margin: 0;
}

.scatter3d-controls {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.axis-select {
  width: 120px;
}

.scatter3d-chart {
  width: 100%;
  min-height: 500px;
}

.scatter3d-info {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid #E4E7ED;
  font-size: 12px;
  color: #909399;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 6px;
}

.info-item i {
  font-size: 16px;
  color: #409EFF;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .scatter3d-header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .scatter3d-controls {
    width: 100%;
  }
  
  .axis-select {
    width: 100%;
  }
  
  .scatter3d-info {
    flex-direction: column;
    gap: 12px;
  }
}

/* 暗黑模式 */
:global(.dark) .scatter3d-container {
  background: #1a1a1a;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
}

:global(.dark) .scatter3d-title {
  color: #fff;
}

:global(.dark) .info-item {
  color: #b3b3b3;
}
</style>