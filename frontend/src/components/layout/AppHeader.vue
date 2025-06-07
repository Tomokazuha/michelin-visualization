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
        <div class="nav-menu">
          <router-link 
            to="/dashboard" 
            class="nav-item"
            :class="{ active: activeIndex === '/dashboard' }"
          >
            <el-icon><DataAnalysis /></el-icon>
            <span>数据概览</span>
          </router-link>
          <router-link 
            to="/map" 
            class="nav-item"
            :class="{ active: activeIndex === '/map' }"
          >
            <el-icon><Location /></el-icon>
            <span>地图分析</span>
          </router-link>
          <router-link 
            to="/analytics" 
            class="nav-item"
            :class="{ active: activeIndex === '/analytics' }"
          >
            <el-icon><TrendCharts /></el-icon>
            <span>深度分析</span>
          </router-link>
          <router-link 
            to="/explore" 
            class="nav-item"
            :class="{ active: activeIndex === '/explore' }"
          >
            <el-icon><Search /></el-icon>
            <span>数据探索</span>
          </router-link>

        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useAppStore } from '@/store/app'
import {
  StarFilled,
  DataAnalysis,
  Location,
  TrendCharts,
  Search
} from '@element-plus/icons-vue'

const route = useRoute()
const appStore = useAppStore()

// 计算属性
const activeIndex = computed(() => route.path)
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
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  align-items: center;
  height: 64px;
}

.header-brand {
  display: flex;
  align-items: center;
  gap: 12px;
  justify-self: start;
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
  display: flex;
  justify-content: center;
  justify-self: center;

  .nav-menu {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .nav-item {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 16px;
    border-radius: 8px;
    border-bottom: 2px solid transparent;
    text-decoration: none;
    color: #333;
    transition: all 0.3s ease;
    white-space: nowrap;
    font-size: 14px;
    font-weight: 500;

    &:hover {
      background-color: rgba(102, 126, 234, 0.1);
      border-bottom-color: #667eea;
      color: #667eea;
    }

    &.active {
      background-color: rgba(102, 126, 234, 0.1);
      border-bottom-color: #667eea;
      color: #667eea;
    }

    .el-icon {
      font-size: 16px;
    }

    span {
      font-size: 14px;
    }
  }
}

// 响应式设计
@media (max-width: 1200px) {
  .header-nav {
    .nav-item {
      padding: 8px 12px;
      
      span {
        display: none;
      }
      
      .el-icon {
        margin-right: 0;
      }
    }
  }
}

@media (max-width: 1024px) {
  .header-container {
    padding: 0 16px;
    grid-template-columns: auto 1fr auto;
  }
}

@media (max-width: 768px) {
  .header-container {
    grid-template-columns: auto 1fr;
  }
  
  .brand-text {
    display: none;
  }
  
  .header-nav {
    .nav-item {
      padding: 6px 8px;
    }
  }
}
</style>