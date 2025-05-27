<template>
  <header class="app-header">
    <div class="header-container">
      <!-- Logo和标题 -->
      <div class="header-brand">
        <div class="logo">
          <el-icon size="32" color="#667eea">
            <StarFilled />
          </el-icon>
        </div>
        <div class="brand-text">
          <h1 class="brand-title">米其林餐厅数据可视化</h1>
          <p class="brand-subtitle">全球星级餐厅分析平台</p>
        </div>
      </div>

      <!-- 导航菜单 -->
      <nav class="header-nav">
        <el-menu
          :default-active="activeIndex"
          mode="horizontal"
          background-color="transparent"
          text-color="#333"
          active-text-color="#667eea"
          @select="handleMenuSelect"
        >
          <el-menu-item index="/dashboard">
            <el-icon><DataAnalysis /></el-icon>
            <span>数据概览</span>
          </el-menu-item>
          <el-menu-item index="/map">
            <el-icon><Location /></el-icon>
            <span>地图分析</span>
          </el-menu-item>
          <el-menu-item index="/analytics">
            <el-icon><TrendCharts /></el-icon>
            <span>深度分析</span>
          </el-menu-item>
          <el-menu-item index="/explore">
            <el-icon><Search /></el-icon>
            <span>数据探索</span>
          </el-menu-item>
          <el-menu-item index="/advanced-viz">
            <el-icon><DataAnalysis /></el-icon>
            <span>高级可视化</span>
          </el-menu-item>
        </el-menu>
      </nav>

      <!-- 右侧工具栏 -->
      <div class="header-tools">
        <!-- 搜索框 -->
        <div class="search-box">
          <el-input
            v-model="searchQuery"
            placeholder="搜索餐厅..."
            prefix-icon="Search"
            size="small"
            style="width: 200px"
            @keyup.enter="handleSearch"
            clearable
          />
        </div>

        <!-- 设置按钮 -->
        <el-dropdown @command="handleCommand">
          <el-button circle size="small">
            <el-icon><Setting /></el-icon>
          </el-button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="theme">
                <el-icon><Sunny /></el-icon>
                主题设置
              </el-dropdown-item>
              <el-dropdown-item command="language">
                <el-icon><Monitor /></el-icon>
                语言设置
              </el-dropdown-item>
              <el-dropdown-item command="about" divided>
                <el-icon><InfoFilled /></el-icon>
                关于项目
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAppStore } from '@/store/app'
import {
  StarFilled,
  DataAnalysis,
  Location,
  TrendCharts,
  Search,
  Setting,
  Sunny,
  Monitor,
  InfoFilled
} from '@element-plus/icons-vue'

const router = useRouter()
const route = useRoute()
const appStore = useAppStore()

// 响应式数据
const searchQuery = ref('')

// 计算属性
const activeIndex = computed(() => route.path)

// 方法
const handleMenuSelect = (index) => {
  router.push(index)
}

const handleSearch = () => {
  if (searchQuery.value.trim()) {
    router.push({
      path: '/explore',
      query: { q: searchQuery.value.trim() }
    })
  }
}

const handleCommand = (command) => {
  switch (command) {
    case 'theme':
      appStore.toggleTheme()
      break
    case 'language':
      appStore.toggleLanguage()
      break
    case 'about':
      appStore.showAboutDialog()
      break
  }
}
</script>

<style lang="scss" scoped>
.app-header {
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  border-bottom: 1px solid #e2e8f0;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.header-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}

.header-brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

.brand-text {
  .brand-title {
    font-size: 20px;
    font-weight: 600;
    color: #1a202c;
    margin: 0;
    line-height: 1.2;
  }

  .brand-subtitle {
    font-size: 12px;
    color: #718096;
    margin: 0;
    line-height: 1;
  }
}

.header-nav {
  flex: 1;
  display: flex;
  justify-content: center;
  margin: 0 40px;

  :deep(.el-menu) {
    border-bottom: none;
  }

  :deep(.el-menu-item) {
    border-bottom: 2px solid transparent;
    transition: all 0.3s ease;

    &:hover {
      background-color: rgba(102, 126, 234, 0.1);
      border-bottom-color: #667eea;
    }

    &.is-active {
      background-color: rgba(102, 126, 234, 0.1);
      border-bottom-color: #667eea;
    }
  }
}

.header-tools {
  display: flex;
  align-items: center;
  gap: 16px;
}

.search-box {
  :deep(.el-input__wrapper) {
    border-radius: 20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
}

// 响应式设计
@media (max-width: 1024px) {
  .header-container {
    padding: 0 16px;
  }

  .header-nav {
    margin: 0 20px;
  }

  .search-box {
    :deep(.el-input) {
      width: 150px !important;
    }
  }
}

@media (max-width: 768px) {
  .brand-text {
    display: none;
  }

  .header-nav {
    margin: 0 10px;
  }

  .search-box {
    :deep(.el-input) {
      width: 120px !important;
    }
  }
}
</style>