<template>
  <div class="radar-container">
    <div class="radar-header">
      <h3 class="radar-title">{{ title }}</h3>
      <div class="radar-controls">
        <el-select
          v-model="selectedRestaurant"
          size="small"
          @change="updateRadar"
          placeholder="选择餐厅"
          class="restaurant-select"
        >
          <el-option
            v-for="restaurant in restaurants"
            :key="restaurant.id"
            :label="restaurant.restaurant_name"
            :value="restaurant.id"
          />
        </el-select>
      </div>
    </div>
    <div ref="radarRef" :style="{ height: height + 'px' }" class="radar-chart"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue'
import * as echarts from 'echarts'
import { useDataStore } from '@/store/data'
import { waitForContainer, ensureContainerSize, MICHELIN_COLORS } from '@/utils/chartHelpers'

const props = defineProps({
  title: {
    type: String,
    default: '餐厅特征雷达'
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

const emit = defineEmits(['restaurantSelect'])

const dataStore = useDataStore()
const radarRef = ref(null)
let chartInstance = null
const selectedRestaurant = ref('')
const restaurants = ref([])

// 初始化雷达图
const initRadar = async () => {
  await nextTick()
  
  try {
    await waitForContainer(radarRef)
    await ensureContainerSize(radarRef, props.height)
  } catch (error) {
    console.warn('RadarChart container is not ready:', error.message)
    return
  }
  
  if (chartInstance) {
    chartInstance.dispose()
  }
  
  chartInstance = echarts.init(radarRef.value)
  
  // 获取数据
  let data = props.data
  if (!data.length) {
    await dataStore.fetchRestaurants()
    data = dataStore.restaurants
  }
  
  restaurants.value = data.map((r, idx) => ({
    id: idx.toString(),
    restaurant_name: r.restaurant_name,
    ...r
  }))
  
  if (restaurants.value.length && !selectedRestaurant.value) {
    selectedRestaurant.value = restaurants.value[0].id
  }
  
  updateRadar()
}

// 更新雷达图
const updateRadar = () => {
  if (!chartInstance || !selectedRestaurant.value) return
  
  const restaurant = restaurants.value.find(r => r.id === selectedRestaurant.value)
  if (!restaurant) return
  
  // 计算餐厅特征数据
  const features = calculateFeatures(restaurant)
  
  const option = {
    backgroundColor: '#fff',
    color: ['#67F9D8', '#FFE434', '#56A3F1', '#FF917C'],
    title: {
      text: '',
      left: 'center',
      textStyle: {
        color: '#333'
      }
    },
    legend: {
      show: false
    },
    radar: {
      indicator: [
        { name: '美食质量', max: 10 },
        { name: '服务体验', max: 10 },
        { name: '性价比', max: 10 },
        { name: '环境氛围', max: 10 },
        { name: '创新度', max: 10 },
        { name: '口碑评价', max: 10 }
      ],
      shape: 'circle',
      splitNumber: 5,
      axisName: {
        color: '#428BD4',
        fontSize: 12
      },
      splitArea: {
        areaStyle: {
          color: ['rgba(250, 250, 250, 0.3)', 'rgba(200, 200, 200, 0.3)'],
          shadowColor: 'rgba(0, 0, 0, 0.2)',
          shadowBlur: 10
        }
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(211, 253, 250, 0.8)'
        }
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(211, 253, 250, 0.8)',
          width: 1
        }
      }
    },
    series: [
      {
        type: 'radar',
        emphasis: {
          lineStyle: {
            width: 4
          }
        },
        data: [
          {
            value: features,
            name: restaurant.restaurant_name || '未知餐厅',
            symbol: 'circle',
            symbolSize: 8,
            lineStyle: {
              color: getStarColor(restaurant.stars),
              width: 2
            },
            areaStyle: {
              color: getStarColor(restaurant.stars, 0.4)
            }
          }
        ]
      }
    ]
  }
  
  chartInstance.setOption(option)
  
  emit('restaurantSelect', restaurant)
}

// 计算餐厅特征数据
const calculateFeatures = (restaurant) => {
  // 美食质量 - 基于星级和年限
  const foodQuality = Math.min(10, (restaurant.stars || 1) * 3 + Math.random() * 2)
  
  // 服务体验 - 基于价格和评价
  const serviceExp = Math.min(10, getPriceLevel(restaurant.price) * 1.5 + Math.random() * 3)
  
  // 性价比 - 反比于价格但正比于星级
  const valueForMoney = Math.min(10, (restaurant.stars || 1) * 3 - getPriceLevel(restaurant.price) * 0.5 + 5 + Math.random() * 2)
  
  // 环境氛围 - 基于价格
  const atmosphere = Math.min(10, getPriceLevel(restaurant.price) * 2 + Math.random() * 2)
  
  // 创新度 - 随机生成
  const innovation = Math.min(10, Math.random() * 5 + (restaurant.stars || 1) * 1.5)
  
  // 口碑评价 - 基于星级
  const reputation = Math.min(10, (restaurant.stars || 1) * 2.5 + Math.random() * 2)
  
  return [foodQuality, serviceExp, valueForMoney, atmosphere, innovation, reputation]
}

// 获取价格级别
const getPriceLevel = (price) => {
  if (!price) return 2
  const dollarCount = (price.match(/\$/g) || []).length
  return Math.max(1, Math.min(5, dollarCount))
}

// 获取星级颜色
const getStarColor = (stars, alpha = 1) => {
  const colors = {
    1: `rgba(212, 175, 55, ${alpha})`,
    2: `rgba(220, 20, 60, ${alpha})`,
    3: `rgba(64, 224, 208, ${alpha})`
  }
  return colors[stars] || colors[1]
}

// 自适应大小
const handleResize = async () => {
  await nextTick()
  if (chartInstance && radarRef.value && radarRef.value.clientWidth && radarRef.value.clientHeight) {
    chartInstance.resize()
  }
}

// 监听数据变化
watch(() => props.data, () => {
  initRadar()
}, { deep: true })

onMounted(() => {
  initRadar()
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
  refresh: initRadar,
  updateRadar
})
</script>

<style scoped>
.radar-container {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  padding: 24px;
}

.radar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.radar-title {
  font-size: 20px;
  font-weight: 600;
  color: #303133;
  margin: 0;
}

.radar-controls {
  display: flex;
  align-items: center;
  gap: 16px;
}

.restaurant-select {
  width: 240px;
}

.radar-chart {
  width: 100%;
  min-height: 400px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .radar-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
  
  .restaurant-select {
    width: 100%;
  }
}
</style>