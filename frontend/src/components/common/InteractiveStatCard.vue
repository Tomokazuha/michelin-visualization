<template>
  <div 
    class="stat-card" 
    :class="{ 
      clickable: clickable, 
      'has-trend': hasTrend,
      loading: loading 
    }"
    @click="handleClick"
  >
    <div v-if="loading" class="card-loading">
      <LoadingState size="small" text="" />
    </div>
    
    <div v-else class="card-content">
      <div class="card-header">
        <div class="stat-icon" v-if="icon" :style="{ backgroundColor: iconColor }">
          <el-icon :size="24">
            <component :is="icon" />
          </el-icon>
        </div>
        <div class="stat-info">
          <div class="stat-number">
            <AnimatedNumber :value="value" :format="numberFormat" />
          </div>
          <div class="stat-label">{{ label }}</div>
        </div>
      </div>
      
      <div v-if="hasTrend" class="card-trend">
        <div class="trend-indicator" :class="trendType">
          <el-icon :size="16">
            <ArrowUp v-if="trendType === 'up'" />
            <ArrowDown v-if="trendType === 'down'" />
            <Minus v-if="trendType === 'stable'" />
          </el-icon>
          <span class="trend-value">{{ trendValue }}%</span>
        </div>
        <div class="trend-description">{{ trendDescription }}</div>
      </div>

      <div v-if="subtitle" class="card-subtitle">{{ subtitle }}</div>
      
      <div v-if="showChart && chartData" class="card-chart">
        <div class="mini-chart">
          <svg viewBox="0 0 100 30" class="trend-line">
            <polyline 
              :points="chartPoints" 
              fill="none" 
              :stroke="chartColor" 
              stroke-width="2"
            />
          </svg>
        </div>
      </div>
    </div>

    <div v-if="clickable" class="click-indicator">
      <el-icon><ArrowRightBold /></el-icon>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { ArrowUp, ArrowDown, Minus, ArrowRightBold } from '@element-plus/icons-vue'
import LoadingState from './LoadingState.vue'
import AnimatedNumber from './AnimatedNumber.vue'

const props = defineProps({
  label: {
    type: String,
    required: true
  },
  value: {
    type: [Number, String],
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  },
  icon: {
    type: String,
    default: ''
  },
  iconColor: {
    type: String,
    default: '#409eff'
  },
  loading: {
    type: Boolean,
    default: false
  },
  clickable: {
    type: Boolean,
    default: false
  },
  numberFormat: {
    type: String,
    default: 'number'
  },
  // 趋势相关
  trendValue: {
    type: Number,
    default: null
  },
  trendDescription: {
    type: String,
    default: ''
  },
  // 图表相关
  showChart: {
    type: Boolean,
    default: false
  },
  chartData: {
    type: Array,
    default: () => []
  },
  chartColor: {
    type: String,
    default: '#409eff'
  }
})

const emit = defineEmits(['click'])

const hasTrend = computed(() => {
  return props.trendValue !== null && props.trendDescription
})

const trendType = computed(() => {
  if (props.trendValue > 0) return 'up'
  if (props.trendValue < 0) return 'down'
  return 'stable'
})

const chartPoints = computed(() => {
  if (!props.chartData || props.chartData.length === 0) return ''
  
  const max = Math.max(...props.chartData)
  const min = Math.min(...props.chartData)
  const range = max - min || 1
  
  return props.chartData
    .map((value, index) => {
      const x = (index / (props.chartData.length - 1)) * 100
      const y = 30 - ((value - min) / range) * 30
      return `${x},${y}`
    })
    .join(' ')
})

const handleClick = () => {
  if (props.clickable) {
    emit('click')
  }
}
</script>

<style lang="scss" scoped>
.stat-card {
  background: white;
  border-radius: 12px;
  padding: 24px;
  border: 1px solid #e5e7eb;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &:hover {
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }

  &.clickable {
    cursor: pointer;
    
    &:hover {
      border-color: #409eff;
      box-shadow: 0 10px 30px rgba(64, 158, 255, 0.1);
    }

    &:active {
      transform: translateY(0);
    }
  }

  &.loading {
    .card-content {
      opacity: 0.6;
    }
  }
}

.card-loading {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80px;
}

.card-content {
  transition: opacity 0.3s ease;
}

.card-header {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 16px;
}

.stat-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
}

.stat-info {
  flex: 1;
  min-width: 0;
}

.stat-number {
  font-size: 28px;
  font-weight: 700;
  color: #1f2937;
  line-height: 1.2;
  margin-bottom: 4px;
}

.stat-label {
  font-size: 14px;
  color: #6b7280;
  font-weight: 500;
}

.card-trend {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
  
  .trend-indicator {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 14px;
    font-weight: 600;
    
    &.up {
      color: #10b981;
    }
    
    &.down {
      color: #ef4444;
    }
    
    &.stable {
      color: #6b7280;
    }
  }
  
  .trend-description {
    font-size: 12px;
    color: #6b7280;
  }
}

.card-subtitle {
  font-size: 13px;
  color: #6b7280;
  margin-bottom: 12px;
  line-height: 1.4;
}

.card-chart {
  margin-top: 16px;
  
  .mini-chart {
    height: 30px;
    
    .trend-line {
      width: 100%;
      height: 100%;
    }
  }
}

.click-indicator {
  position: absolute;
  top: 16px;
  right: 16px;
  color: #9ca3af;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.stat-card.clickable:hover .click-indicator {
  opacity: 1;
}

// 响应式设计
@media (max-width: 640px) {
  .stat-card {
    padding: 16px;
  }
  
  .card-header {
    gap: 12px;
    margin-bottom: 12px;
  }
  
  .stat-icon {
    width: 40px;
    height: 40px;
    
    .el-icon {
      font-size: 20px;
    }
  }
  
  .stat-number {
    font-size: 24px;
  }
}
</style> 