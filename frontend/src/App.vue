<template>
  <div id="app" class="app-container">
    <!-- 顶部导航栏 -->
    <AppHeader />
    
    <!-- 主要内容区域 -->
    <main class="main-content">
      <router-view v-slot="{ Component, route }">
        <transition name="fade" mode="out-in">
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
    </main>
    
    <!-- 全局加载指示器 -->
    <el-loading
      v-loading="globalLoading"
      element-loading-text="正在加载数据..."
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
      body-style="{ overflow: 'hidden' }"
    />
    
    <!-- 全局消息提示 -->
    <GlobalMessage />
  </div>
</template>

<script setup>
import { onMounted, watch, computed, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAppStore } from '@/store/app'
import { useDataStore } from '@/store/data'
import AppHeader from '@/components/layout/AppHeader.vue'
import GlobalMessage from '@/components/common/GlobalMessage.vue'

const router = useRouter()
const route = useRoute()
const appStore = useAppStore()
const dataStore = useDataStore()

// 计算属性
const globalLoading = computed(() => appStore.loading)

// 初始化应用
onMounted(async () => {
  try {
    appStore.setLoading(true)
    
    // 初始化数据
    await dataStore.initializeData()
    
    // 检查API健康状态
    await dataStore.checkApiHealth()
    
    appStore.showMessage('应用初始化完成', 'success')
  } catch (error) {
    console.error('应用初始化失败:', error)
    appStore.showMessage('应用初始化失败，请检查后端服务', 'error')
  } finally {
    appStore.setLoading(false)
  }
})

// 监听路由变化
watch(route, (to, from) => {
  // 页面切换时的处理逻辑
  if (to.path !== from.path) {
    // 可以在这里添加页面切换的统计或其他逻辑
    console.log(`页面切换: ${from.path} -> ${to.path}`)
  }
})

// 全局键盘快捷键
onMounted(() => {
  const handleKeydown = (event) => {
    // Ctrl/Cmd + K 打开搜索
    if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
      event.preventDefault()
      // 触发搜索功能
      appStore.toggleSearch()
    }
    
    // ESC 关闭模态框或搜索
    if (event.key === 'Escape') {
      appStore.closeModals()
    }
  }
  
  document.addEventListener('keydown', handleKeydown)
  
  // 清理事件监听器
  onUnmounted(() => {
    document.removeEventListener('keydown', handleKeydown)
  })
})
</script>

<style lang="scss" scoped>
.app-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding: 0;
  overflow-y: auto;
  height: calc(100vh - 64px);
}

// 页面切换动画
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

// 响应式设计
@media (max-width: 768px) {
  .main-content {
    padding: 0 10px;
  }
}

// 滚动条样式
:deep(.el-scrollbar__wrap) {
  scrollbar-width: thin;
  scrollbar-color: #c1c1c1 transparent;
}

:deep(.el-scrollbar__wrap::-webkit-scrollbar) {
  width: 6px;
  height: 6px;
}

:deep(.el-scrollbar__wrap::-webkit-scrollbar-thumb) {
  background-color: #c1c1c1;
  border-radius: 3px;
}

:deep(.el-scrollbar__wrap::-webkit-scrollbar-track) {
  background-color: transparent;
}
</style> 