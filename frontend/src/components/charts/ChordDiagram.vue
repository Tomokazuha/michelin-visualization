<template>
  <div class="chord-diagram" ref="chartContainer"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import * as echarts from 'echarts'

const props = defineProps({
  data: {
    type: Array,
    default: () => []
  },
  matrix: {
    type: Array,
    default: () => []
  },
  title: {
    type: String,
    default: '餐厅关系网络分析'
  },
  height: {
    type: String,
    default: '600px'
  }
})

const emit = defineEmits(['chord-click', 'node-click'])

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
      top: 20
    },
    tooltip: {
      trigger: 'item',
      formatter: (params) => {
        if (params.dataType === 'edge') {
          return `${params.data.source} ↔ ${params.data.target}<br/>关联度: ${params.data.value}`
        } else if (params.dataType === 'node') {
          return `${params.data.name}<br/>连接数: ${params.data.symbolSize || 0}`
        }
        return ''
      }
    },
    legend: {
      bottom: 10,
      data: [],
      textStyle: {
        fontSize: 12
      }
    },
    series: [
      {
        type: 'chord',
        radius: ['25%', '75%'],
        center: ['50%', '55%'],
        data: [],
        links: [],
        itemStyle: {
          borderWidth: 2,
          borderColor: '#fff'
        },
        lineStyle: {
          color: 'source',
          curveness: 0.3,
          opacity: 0.7
        },
        emphasis: {
          itemStyle: {
            borderWidth: 3
          },
          lineStyle: {
            opacity: 0.9,
            width: 3
          }
        },
        label: {
          show: true,
          position: 'outside',
          fontSize: 11,
          fontWeight: 'bold',
          formatter: '{b}'
        }
      }
    ],
    animationDuration: 1500,
    animationEasing: 'elasticOut'
  }
  
  chart.setOption(option)
  
  // 点击事件
  chart.on('click', (params) => {
    if (params.dataType === 'edge') {
      emit('chord-click', params.data)
    } else if (params.dataType === 'node') {
      emit('node-click', params.data)
    }
  })
  
  // 响应式
  const resizeHandler = () => {
    chart.resize()
  }
  window.addEventListener('resize', resizeHandler)
}

const processChordData = () => {
  if (!props.data.length || !props.matrix.length) return { nodes: [], links: [] }
  
  // 处理节点数据
  const colorPalette = [
    '#1E88E5', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', 
    '#FFEAA7', '#DDA0DD', '#98D8C8', '#F39C12', '#E74C3C'
  ]
  
  const nodes = props.data.map((item, index) => ({
    name: item.name || item,
    value: item.value || 1,
    itemStyle: {
      color: colorPalette[index % colorPalette.length]
    },
    symbolSize: Math.max(20, (item.value || 1) * 2)
  }))
  
  // 处理链接数据
  const links = []
  for (let i = 0; i < props.matrix.length; i++) {
    for (let j = i + 1; j < props.matrix[i].length; j++) {
      if (props.matrix[i][j] > 0) {
        links.push({
          source: nodes[i].name,
          target: nodes[j].name,
          value: props.matrix[i][j]
        })
      }
    }
  }
  
  return { nodes, links }
}

const updateChart = () => {
  if (!chart) return
  
  const { nodes, links } = processChordData()
  
  chart.setOption({
    legend: {
      data: nodes.map(node => node.name)
    },
    series: [{
      data: nodes,
      links: links
    }]
  }, true)
}

watch(() => [props.data, props.matrix], updateChart, { deep: true })
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
.chord-diagram {
  width: 100%;
  height: v-bind(height);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background: white;
  position: relative;
}

.chord-diagram::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(30, 136, 229, 0.02) 0%, rgba(255, 255, 255, 0.02) 100%);
  border-radius: 8px;
  pointer-events: none;
}
</style> 