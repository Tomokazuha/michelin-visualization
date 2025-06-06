<template>
  <div class="error-state" :class="`error-${size}`">
    <div class="error-content">
      <div class="error-icon">
        <el-icon :size="iconSize" color="#f56c6c">
          <WarningFilled />
        </el-icon>
      </div>
      <div class="error-title">{{ title }}</div>
      <div v-if="description" class="error-description">{{ description }}</div>
      <div v-if="showDetails && errorDetails" class="error-details">
        <el-collapse v-model="detailsVisible">
          <el-collapse-item title="查看详细信息" name="details">
            <div class="error-code">{{ errorDetails }}</div>
          </el-collapse-item>
        </el-collapse>
      </div>
      <div class="error-actions">
        <el-button 
          v-if="showRetry" 
          type="primary" 
          @click="handleRetry"
          :loading="retryLoading"
        >
          <el-icon><RefreshRight /></el-icon>
          重试
        </el-button>
        <el-button v-if="showHome" @click="goHome">
          <el-icon><HomeFilled /></el-icon>
          返回首页
        </el-button>
        <slot name="actions"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { WarningFilled, RefreshRight, HomeFilled } from '@element-plus/icons-vue'

const router = useRouter()

const props = defineProps({
  title: {
    type: String,
    default: '出现了一些问题'
  },
  description: {
    type: String,
    default: '请稍后重试，如果问题持续存在，请联系技术支持'
  },
  errorDetails: {
    type: String,
    default: ''
  },
  showDetails: {
    type: Boolean,
    default: false
  },
  showRetry: {
    type: Boolean,
    default: true
  },
  showHome: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: 'medium',
    validator: (value) => ['small', 'medium', 'large'].includes(value)
  }
})

const emit = defineEmits(['retry'])

const retryLoading = ref(false)
const detailsVisible = ref([])

const iconSize = computed(() => {
  const sizes = {
    small: 32,
    medium: 48,
    large: 64
  }
  return sizes[props.size]
})

const handleRetry = async () => {
  retryLoading.value = true
  try {
    await emit('retry')
  } finally {
    retryLoading.value = false
  }
}

const goHome = () => {
  router.push('/')
}
</script>

<style lang="scss" scoped>
.error-state {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  text-align: center;

  &.error-small {
    padding: 20px;
    
    .error-content {
      max-width: 300px;
    }
    
    .error-title {
      font-size: 16px;
    }
    
    .error-description {
      font-size: 14px;
    }
  }

  &.error-medium {
    .error-content {
      max-width: 400px;
    }
    
    .error-title {
      font-size: 20px;
    }
    
    .error-description {
      font-size: 16px;
    }
  }

  &.error-large {
    min-height: 400px;
    
    .error-content {
      max-width: 500px;
    }
    
    .error-title {
      font-size: 24px;
    }
    
    .error-description {
      font-size: 18px;
    }
  }
}

.error-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.error-icon {
  margin-bottom: 8px;
}

.error-title {
  font-weight: 600;
  color: #303133;
  margin: 0;
}

.error-description {
  color: #606266;
  line-height: 1.5;
  margin: 0;
}

.error-details {
  width: 100%;
  margin-top: 8px;
  
  .error-code {
    background: #f5f5f5;
    border-radius: 4px;
    padding: 12px;
    font-family: 'Courier New', monospace;
    font-size: 12px;
    color: #666;
    text-align: left;
    white-space: pre-wrap;
    word-break: break-all;
  }
}

.error-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 8px;
}
</style> 