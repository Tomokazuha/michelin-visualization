<template>
  <div class="loading-state" :class="[`loading-${size}`, { inline }]">
    <div class="loading-content">
      <div class="loading-spinner">
        <el-icon class="is-loading" :size="iconSize">
          <Loading />
        </el-icon>
      </div>
      <div v-if="text" class="loading-text">{{ text }}</div>
      <div v-if="subtext" class="loading-subtext">{{ subtext }}</div>
      <div v-if="progress !== null" class="loading-progress">
        <el-progress 
          :percentage="progress" 
          :show-text="showProgress"
          :stroke-width="progressHeight"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { Loading } from '@element-plus/icons-vue'

const props = defineProps({
  text: {
    type: String,
    default: '加载中...'
  },
  subtext: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: 'medium',
    validator: (value) => ['small', 'medium', 'large'].includes(value)
  },
  inline: {
    type: Boolean,
    default: false
  },
  progress: {
    type: Number,
    default: null
  },
  showProgress: {
    type: Boolean,
    default: true
  }
})

const iconSize = computed(() => {
  const sizes = {
    small: 16,
    medium: 24,
    large: 32
  }
  return sizes[props.size]
})

const progressHeight = computed(() => {
  const heights = {
    small: 4,
    medium: 6,
    large: 8
  }
  return heights[props.size]
})
</script>

<style lang="scss" scoped>
.loading-state {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #606266;

  &.inline {
    display: inline-flex;
  }

  &.loading-small {
    .loading-content {
      font-size: 12px;
      gap: 6px;
    }
  }

  &.loading-medium {
    .loading-content {
      font-size: 14px;
      gap: 8px;
    }
  }

  &.loading-large {
    .loading-content {
      font-size: 16px;
      gap: 12px;
      padding: 32px;
    }
  }
}

.loading-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.loading-spinner {
  color: #409eff;
}

.loading-text {
  font-weight: 500;
  color: #303133;
}

.loading-subtext {
  font-size: 0.9em;
  color: #909399;
  text-align: center;
  max-width: 300px;
}

.loading-progress {
  width: 200px;
  margin-top: 8px;
}
</style> 