<template>
  <div class="global-message">
    <!-- 这个组件主要用于处理全局消息，实际的消息显示由Element Plus的ElMessage处理 -->
  </div>
</template>

<script setup>
import { watch } from 'vue'
import { ElMessage } from 'element-plus'
import { useAppStore } from '@/store/app'

const appStore = useAppStore()

// 监听全局消息状态
watch(
  () => appStore.message,
  (newMessage) => {
    if (newMessage && newMessage.text) {
      ElMessage({
        message: newMessage.text,
        type: newMessage.type || 'info',
        duration: newMessage.duration || 3000,
        showClose: true,
        center: true
      })
      
      // 清除消息状态
      appStore.clearMessage()
    }
  },
  { immediate: true }
)
</script>

<style lang="scss" scoped>
.global-message {
  // 这个组件不需要样式，消息由Element Plus处理
}
</style> 