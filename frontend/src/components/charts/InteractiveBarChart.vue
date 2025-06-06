<template>
  <div class="interactive-bar-chart">
    <div class="chart-header" v-if="title || subtitle">
      <h3 v-if="title" class="chart-title">{{ title }}</h3>
      <p v-if="subtitle" class="chart-subtitle">{{ subtitle }}</p>
    </div>
    
    <div class="chart-legend" v-if="showLegend">
      <div class="legend-items">
        <div class="legend-item" v-for="item in legendItems" :key="item.label">
          <span class="legend-color" :style="{ backgroundColor: item.color }"></span>
          <span class="legend-label">{{ item.label }}</span>
          <span class="legend-value">{{ item.value }}</span>
        </div>
      </div>
    </div>

    <div class="chart-container">
      <LoadingState 
        v-if="loading" 
        :text="loadingText" 
        size="medium" 
      />
      
      <ErrorState 
        v-else-if="error"
        :title="error.title || '图表加载失败'"
        :description="error.description"
        size="small"
        @retry="$emit('retry')"
      />
      
      <div v-else-if="processedData.length > 0" class="chart-content">
        <div class="chart-bars">
          <div 
            v-for="(item, index) in processedData" 
            :key="item.label"
            class="chart-item"
            :class="{ 
              clickable: clickable, 
              active: selectedIndex === index 
            }"
            @click="handleItemClick(item, index)"
            @mouseenter="handleItemHover(item, index, $event)"
            @mouseleave="handleItemLeave()"
          >
            <div class="item-label">
              <span class="label-text" :title="item.originalLabel || item.label">
                {{ item.label }}
              </span>
              <span v-if="item.subtitle" class="label-subtitle">{{ item.subtitle }}</span>
            </div>
            
            <div class="item-bar-container">
              <div 
                class="item-bar" 
                :style="{ 
                  width: item.percentage + '%',
                  backgroundColor: item.color,
                  animationDelay: (index * 100) + 'ms'
                }"
              >
                <span class="bar-value" v-if="showValues">
                  {{ formatValue(item.value) }}
                </span>
              </div>
            </div>
            
            <div class="item-count">
              <span class="count-value">{{ formatCount(item.value) }}</span>
              <span v-if="showPercentage" class="count-percentage">
                {{ item.valuePercentage }}%
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <div v-else class="empty-state">
        <el-icon :size="32" color="#c0c4cc">
          <Document />
        </el-icon>
        <p>暂无数据</p>
      </div>
    </div>
    
    <!-- 工具提示 -->
    <div 
      v-if="tooltip.visible" 
      class="chart-tooltip"
      :style="{ 
        left: tooltip.x + 'px', 
        top: tooltip.y + 'px' 
      }"
    >
      <div class="tooltip-content">
        <div class="tooltip-title">{{ tooltip.title }}</div>
        <div class="tooltip-items">
          <div 
            v-for="item in tooltip.items" 
            :key="item.label"
            class="tooltip-item"
          >
            <span class="tooltip-color" :style="{ backgroundColor: item.color }"></span>
            <span class="tooltip-label">{{ item.label }}:</span>
            <span class="tooltip-value">{{ item.value }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { Document } from '@element-plus/icons-vue'
import LoadingState from '../common/LoadingState.vue'
import ErrorState from '../common/ErrorState.vue'

const props = defineProps({
  data: {
    type: [Object, Array],
    required: true
  },
  title: {
    type: String,
    default: ''
  },
  subtitle: {
    type: String,
    default: ''
  },
  colorScheme: {
    type: Array,
    default: () => [
      '#6366f1', '#8b5cf6', '#06b6d4', '#10b981', 
      '#f59e0b', '#ef4444', '#ec4899', '#84cc16'
    ]
  },
  loading: {
    type: Boolean,
    default: false
  },
  loadingText: {
    type: String,
    default: '正在加载图表数据...'
  },
  error: {
    type: Object,
    default: null
  },
  clickable: {
    type: Boolean,
    default: true
  },
  showValues: {
    type: Boolean,
    default: true
  },
  showPercentage: {
    type: Boolean,
    default: true
  },
  showLegend: {
    type: Boolean,
    default: false
  },
  valueFormatter: {
    type: Function,
    default: (value) => value
  },
  labelTranslator: {
    type: Function,
    default: (label) => label
  }
})

const emit = defineEmits(['item-click', 'item-hover', 'retry'])

const selectedIndex = ref(-1)
const tooltip = ref({
  visible: false,
  x: 0,
  y: 0,
  title: '',
  items: []
})

// 处理数据
const processedData = computed(() => {
  let dataArray = []
  
  if (Array.isArray(props.data)) {
    dataArray = props.data
  } else if (typeof props.data === 'object') {
    dataArray = Object.entries(props.data).map(([key, value]) => ({
      label: key,
      value: Number(value) || 0
    }))
  }
  
  if (dataArray.length === 0) return []
  
  const total = dataArray.reduce((sum, item) => sum + (item.value || 0), 0)
  const maxValue = Math.max(...dataArray.map(item => item.value || 0))
  
  return dataArray.map((item, index) => {
    const value = Number(item.value) || 0
    const percentage = maxValue > 0 ? (value / maxValue) * 100 : 0
    const valuePercentage = total > 0 ? ((value / total) * 100).toFixed(1) : 0
    
    return {
      ...item,
      originalLabel: item.label,
      label: props.labelTranslator(item.label),
      value,
      percentage: Math.max(percentage, 2), // 最小2%显示
      valuePercentage,
      color: item.color || props.colorScheme[index % props.colorScheme.length]
    }
  })
})

// 图例数据
const legendItems = computed(() => {
  return processedData.value.map(item => ({
    label: item.label,
    color: item.color,
    value: formatCount(item.value)
  }))
})

// 格式化函数
const formatValue = (value) => {
  return props.valueFormatter(value)
}

const formatCount = (value) => {
  if (value >= 1000000) {
    return (value / 1000000).toFixed(1) + 'M'
  } else if (value >= 1000) {
    return (value / 1000).toFixed(1) + 'K'
  }
  return value.toString()
}

// 事件处理
const handleItemClick = (item, index) => {
  if (!props.clickable) return
  
  selectedIndex.value = selectedIndex.value === index ? -1 : index
  emit('item-click', { item, index })
}

const handleItemHover = (item, index, event) => {
  const rect = event.currentTarget.getBoundingClientRect()
  
  tooltip.value = {
    visible: true,
    x: rect.right + 10,
    y: rect.top + rect.height / 2,
    title: item.label,
    items: [
      {
        label: '数量',
        value: formatCount(item.value),
        color: item.color
      },
      {
        label: '占比',
        value: item.valuePercentage + '%',
        color: item.color
      }
    ]
  }
  
  emit('item-hover', { item, index })
}

const handleItemLeave = () => {
  tooltip.value.visible = false
}

// 监听数据变化重置选中状态
watch(() => props.data, () => {
  selectedIndex.value = -1
})
</script>

<style lang="scss" scoped>
.interactive-bar-chart {
  position: relative;
  background: white;
  border-radius: 12px;
  padding: 24px;
  border: 1px solid #e5e7eb;
}

.chart-header {
  margin-bottom: 20px;
  
  .chart-title {
    font-size: 18px;
    font-weight: 600;
    color: #1f2937;
    margin: 0 0 8px 0;
  }
  
  .chart-subtitle {
    font-size: 14px;
    color: #6b7280;
    margin: 0;
    line-height: 1.4;
  }
}

.chart-legend {
  margin-bottom: 20px;
  
  .legend-items {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }
  
  .legend-item {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 14px;
    
    .legend-color {
      width: 12px;
      height: 12px;
      border-radius: 2px;
    }
    
    .legend-label {
      color: #374151;
    }
    
    .legend-value {
      color: #6b7280;
      font-weight: 500;
    }
  }
}

.chart-container {
  min-height: 200px;
  position: relative;
}

.chart-content {
  padding: 10px 0;
}

.chart-bars {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.chart-item {
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.3s ease;
  padding: 8px;
  border-radius: 8px;
  
  &.clickable {
    cursor: pointer;
    
    &:hover {
      background-color: #f9fafb;
      transform: translateX(4px);
    }
  }
  
  &.active {
    background-color: #eff6ff;
    border: 1px solid #dbeafe;
  }
}

.item-label {
  min-width: 100px;
  width: 100px;
  display: flex;
  flex-direction: column;
  
  .label-text {
    font-weight: 500;
    color: #374151;
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  .label-subtitle {
    font-size: 12px;
    color: #6b7280;
    margin-top: 2px;
  }
}

.item-bar-container {
  flex: 1;
  height: 32px;
  background: #f3f4f6;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
}

.item-bar {
  height: 100%;
  border-radius: 16px;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 12px;
  transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  animation: barGrow 0.8s cubic-bezier(0.4, 0, 0.2, 1) both;
  
  .bar-value {
    color: rgba(255, 255, 255, 0.9);
    font-size: 12px;
    font-weight: 500;
    white-space: nowrap;
  }
}

@keyframes barGrow {
  from {
    width: 0 !important;
  }
}

.item-count {
  min-width: 80px;
  text-align: right;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  
  .count-value {
    font-weight: 600;
    color: #1f2937;
    font-size: 14px;
  }
  
  .count-percentage {
    font-size: 12px;
    color: #6b7280;
    margin-top: 2px;
  }
}

.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  color: #9ca3af;
  
  p {
    margin: 8px 0 0 0;
    font-size: 14px;
  }
}

.chart-tooltip {
  position: fixed;
  z-index: 1000;
  pointer-events: none;
  
  .tooltip-content {
    background: rgba(0, 0, 0, 0.8);
    color: white;
    border-radius: 6px;
    padding: 8px 12px;
    font-size: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    
    .tooltip-title {
      font-weight: 600;
      margin-bottom: 4px;
    }
    
    .tooltip-items {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }
    
    .tooltip-item {
      display: flex;
      align-items: center;
      gap: 6px;
      
      .tooltip-color {
        width: 8px;
        height: 8px;
        border-radius: 2px;
      }
      
      .tooltip-label {
        opacity: 0.8;
      }
      
      .tooltip-value {
        font-weight: 500;
      }
    }
  }
}

// 响应式设计
@media (max-width: 768px) {
  .interactive-bar-chart {
    padding: 16px;
  }
  
  .chart-item {
    gap: 8px;
  }
  
  .item-label {
    min-width: 80px;
    width: 80px;
    
    .label-text {
      font-size: 12px;
    }
  }
  
  .item-count {
    min-width: 60px;
    
    .count-value {
      font-size: 13px;
    }
  }
}
</style> 