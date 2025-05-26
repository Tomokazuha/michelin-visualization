<template>
  <div class="dashboard">
    <div class="dashboard-container">
      <!-- 页面标题 -->
      <div class="page-header">
        <h1 class="page-title">数据概览</h1>
        <p class="page-subtitle">全球米其林星级餐厅数据总览和关键指标</p>
      </div>

      <!-- 统计卡片 -->
      <div class="stats-grid" v-if="summary">
        <div class="stat-card">
          <div class="stat-number">{{ summary.total_restaurants }}</div>
          <div class="stat-label">总餐厅数</div>
        </div>
        
        <div class="stat-card">
          <div class="stat-number">{{ summary.regions }}</div>
          <div class="stat-label">覆盖地区</div>
        </div>
        
        <div class="stat-card">
          <div class="stat-number">{{ summary.cities }}</div>
          <div class="stat-label">覆盖城市</div>
        </div>
        
        <div class="stat-card">
          <div class="stat-number">{{ summary.cuisines }}</div>
          <div class="stat-label">菜系类型</div>
        </div>
      </div>

      <!-- 图表区域 -->
      <div class="charts-grid">
        <!-- 星级分布图 -->
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">星级分布</h3>
          </div>
          <div class="card-body">
            <div v-if="loading" class="loading-container">
              <el-icon class="is-loading"><Loading /></el-icon>
              <span class="ml-2">加载中...</span>
            </div>
            <div v-else-if="starDistribution" class="chart-container">
              <div class="star-chart">
                <div 
                  v-for="(count, star) in starDistribution" 
                  :key="star"
                  class="star-item"
                >
                  <div class="star-label">{{ star }}星</div>
                  <div class="star-bar">
                    <div 
                      class="star-fill" 
                      :style="{ width: getPercentage(count, totalRestaurants) + '%' }"
                    ></div>
                  </div>
                  <div class="star-count">{{ count }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 价格分布图 -->
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">价格分布</h3>
          </div>
          <div class="card-body">
            <div v-if="loading" class="loading-container">
              <el-icon class="is-loading"><Loading /></el-icon>
              <span class="ml-2">加载中...</span>
            </div>
            <div v-else-if="priceDistribution" class="chart-container">
              <div class="price-chart">
                <div 
                  v-for="(count, price) in priceDistribution" 
                  :key="price"
                  class="price-item"
                >
                  <div class="price-label">{{ price }}</div>
                  <div class="price-bar">
                    <div 
                      class="price-fill" 
                      :style="{ width: getPercentage(count, totalRestaurants) + '%' }"
                    ></div>
                  </div>
                  <div class="price-count">{{ count }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 快速操作 -->
      <div class="quick-actions">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">快速操作</h3>
          </div>
          <div class="card-body">
            <div class="action-buttons">
              <el-button 
                type="primary" 
                size="large"
                @click="$router.push('/map')"
              >
                <el-icon><Location /></el-icon>
                查看地图分布
              </el-button>
              
              <el-button 
                type="success" 
                size="large"
                @click="$router.push('/analytics')"
              >
                <el-icon><TrendCharts /></el-icon>
                深度分析
              </el-button>
              
              <el-button 
                type="info" 
                size="large"
                @click="$router.push('/explore')"
              >
                <el-icon><Search /></el-icon>
                数据探索
              </el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useDataStore } from '@/store/data'
import { Loading, Location, TrendCharts, Search } from '@element-plus/icons-vue'

const dataStore = useDataStore()

// 计算属性
const summary = computed(() => dataStore.summary)
const loading = computed(() => dataStore.loading)
const starDistribution = computed(() => summary.value?.star_distribution)
const priceDistribution = computed(() => summary.value?.price_distribution)
const totalRestaurants = computed(() => summary.value?.total_restaurants || 0)

// 方法
const getPercentage = (value, total) => {
  return total > 0 ? (value / total * 100).toFixed(1) : 0
}

// 生命周期
onMounted(async () => {
  if (!summary.value) {
    try {
      await dataStore.fetchSummary()
    } catch (error) {
      console.error('获取摘要数据失败:', error)
    }
  }
})
</script>

<style lang="scss" scoped>
.dashboard {
  min-height: calc(100vh - 64px);
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.dashboard-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 32px 24px;
}

.page-header {
  text-align: center;
  margin-bottom: 48px;

  .page-title {
    font-size: 36px;
    font-weight: 700;
    color: #1a202c;
    margin-bottom: 12px;
  }

  .page-subtitle {
    font-size: 18px;
    color: #718096;
    margin: 0;
  }
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  margin-bottom: 48px;
}

.charts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 24px;
  margin-bottom: 48px;
}

.chart-container {
  min-height: 300px;
}

.star-chart, .price-chart {
  .star-item, .price-item {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    gap: 16px;

    .star-label, .price-label {
      min-width: 80px;
      font-weight: 500;
      color: #4a5568;
    }

    .star-bar, .price-bar {
      flex: 1;
      height: 24px;
      background: #e2e8f0;
      border-radius: 12px;
      overflow: hidden;
      position: relative;

      .star-fill, .price-fill {
        height: 100%;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border-radius: 12px;
        transition: width 0.8s ease;
      }
    }

    .star-count, .price-count {
      min-width: 60px;
      text-align: right;
      font-weight: 600;
      color: #2d3748;
    }
  }
}

.quick-actions {
  .action-buttons {
    display: flex;
    gap: 16px;
    justify-content: center;
    flex-wrap: wrap;

    .el-button {
      padding: 16px 32px;
      font-size: 16px;
      border-radius: 12px;
      
      .el-icon {
        margin-right: 8px;
      }
    }
  }
}

// 响应式设计
@media (max-width: 768px) {
  .dashboard-container {
    padding: 24px 16px;
  }

  .page-header {
    .page-title {
      font-size: 28px;
    }

    .page-subtitle {
      font-size: 16px;
    }
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  .charts-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .action-buttons {
    flex-direction: column;
    align-items: center;

    .el-button {
      width: 100%;
      max-width: 300px;
    }
  }
}

@media (max-width: 480px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }
}
</style> 