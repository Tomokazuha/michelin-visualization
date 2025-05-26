<template>
  <div class="sankey-chart" ref="chartContainer"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import * as echarts from 'echarts'

const props = defineProps({
  data: {
    type: Object,
    default: () => ({ nodes: [], links: [] })
  },
  title: {
    type: String,
    default: '餐厅分布流向分析'
  },
  height: {
    type: String,
    default: '500px'
  }
})

const emit = defineEmits(['node-click', 'link-click'])

const chartContainer = ref(null)
let chart = null

const initChart = () => {
  if (!chartContainer.value) return
  
  chart = echarts.init(chartContainer.value)
  
  const option = {
    title: {
      text: props.title,
      textStyle: {
        color: '#1E88E5',
        fontSize: 16,
        fontWeight: 'bold'
      },
      left: 'center',
      top: 10
    },
    tooltip: {
      trigger: 'item',
      triggerOn: 'mousemove',
      formatter: (params) => {
        if (params.dataType === 'node') {
          return `${params.data.name}: ${params.data.value || 0} 家餐厅`
        } else if (params.dataType === 'edge') {
          return `${params.data.source} → ${params.data.target}: ${params.data.value} 家餐厅`
        }
        return ''
      }
    },
    series: [
      {
        type: 'sankey',
        layout: 'none',
        emphasis: {
          focus: 'adjacency'
        },
        nodeAlign: 'left',
        nodeGap: 20,
        nodeWidth: 15,
        data: [],
        links: [],
        itemStyle: {
          borderWidth: 2,
          borderColor: '#fff'
        },
        lineStyle: {
          color: 'source',
          curveness: 0.5,
          opacity: 0.6
        },
        label: {
          position: 'right',
          formatter: '{b}',
          fontSize: 12,
          color: '#333'
        }
      }
    ],
    animationDuration: 1000,
    animationEasing: 'cubicOut'
  }
  
  chart.setOption(option)
  
  // 点击事件
  chart.on('click', (params) => {
    if (params.dataType === 'node') {
      emit('node-click', params.data)
    } else if (params.dataType === 'edge') {
      emit('link-click', params.data)
    }
  })
  
  // 响应式
  const resizeHandler = () => {
    chart.resize()
  }
  window.addEventListener('resize', resizeHandler)
}

const updateChart = () => {
  if (!chart || !props.data) return
  
  const { nodes, links } = props.data
  
  // 设置节点颜色
  const colorPalette = ['#1E88E5', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#98D8C8']
  const processedNodes = nodes.map((node, index) => ({
    ...node,
    itemStyle: {
      color: colorPalette[index % colorPalette.length]
    }
  }))
  
  chart.setOption({
    series: [{
      data: processedNodes,
      links: links
    }]
  }, true)
}

watch(() => props.data, updateChart, { deep: true })
watch(() => props.title, (newTitle) => {
  if (chart) {
    chart.setOption({
      title: {
        text: newTitle
      }
    })
  }
})

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
.sankey-chart {
  width: 100%;
  height: v-bind(height);
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background: white;
  padding: 16px;
  box-sizing: border-box;
}
</style> 