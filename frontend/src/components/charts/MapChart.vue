<template>
  <div class="map-chart" ref="chartContainer"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import * as echarts from 'echarts'
import 'echarts/map/js/world.js' // 世界地图数据

const props = defineProps({
  data: {
    type: Array,
    default: () => []
  },
  selectedCountries: {
    type: Array,
    default: () => []
  },
  height: {
    type: String,
    default: '600px'
  }
})

const emit = defineEmits(['country-select', 'restaurant-click'])

const chartContainer = ref(null)
let chart = null

const initChart = () => {
  if (!chartContainer.value) return
  
  chart = echarts.init(chartContainer.value)
  
  const option = {
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
    tooltip: {
      trigger: 'item',
      formatter: (params) => {
        if (params.componentType === 'geo') {
          const countryData = props.data.filter(item => item.country === params.name)
          const totalRestaurants = countryData.length
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
        return `${params.name}: ${params.value || 0}`
      }
    },
    geo: {
      map: 'world',
      roam: true,
      zoom: 1.2,
      center: [0, 20],
      itemStyle: {
        areaColor: '#f3f3f3',
        borderColor: '#d4d4d4',
        borderWidth: 1
      },
      emphasis: {
        itemStyle: {
          areaColor: '#ffd700',
          borderColor: '#1E88E5',
          borderWidth: 2
        }
      },
      regions: [
        {
          name: 'China',
          itemStyle: {
            areaColor: '#e6f3ff'
          }
        }
      ]
    },
    series: [
      {
        type: 'scatter',
        coordinateSystem: 'geo',
        data: [],
        symbolSize: (val) => Math.max(4, Math.min(20, val[2] * 2)),
        itemStyle: {
          color: (params) => {
            const stars = params.data[3]
            const colors = {
              1: '#FFD700',
              2: '#FF6B6B',
              3: '#4ECDC4'
            }
            return colors[stars] || '#FFD700'
          },
          borderColor: '#fff',
          borderWidth: 1
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowColor: 'rgba(30, 136, 229, 0.5)'
          }
        }
      }
    ],
    legend: {
      orient: 'horizontal',
      bottom: 20,
      data: [
        { name: '一星餐厅', icon: 'circle', textStyle: { color: '#FFD700' } },
        { name: '二星餐厅', icon: 'circle', textStyle: { color: '#FF6B6B' } },
        { name: '三星餐厅', icon: 'circle', textStyle: { color: '#4ECDC4' } }
      ]
    }
  }
  
  chart.setOption(option)
  
  // 点击事件
  chart.on('click', (params) => {
    if (params.componentType === 'geo') {
      emit('country-select', params.name)
    } else if (params.componentType === 'series') {
      emit('restaurant-click', params.data)
    }
  })
  
  // 响应式
  const resizeHandler = () => {
    chart.resize()
  }
  window.addEventListener('resize', resizeHandler)
}

const updateChart = () => {
  if (!chart) return
  
  const scatterData = props.data.map(item => [
    item.longitude,
    item.latitude,
    1,
    item.stars,
    item
  ])
  
  chart.setOption({
    series: [{
      data: scatterData
    }]
  })
}

watch(() => props.data, updateChart, { deep: true })

onMounted(() => {
  initChart()
  updateChart()
})

onUnmounted(() => {
  if (chart) {
    chart.dispose()
  }
  window.removeEventListener('resize', () => {})
})
</script>

<style scoped>
.map-chart {
  width: 100%;
  height: v-bind(height);
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background: white;
}
</style> 