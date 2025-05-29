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
              <div class="chart star-chart">
                <div 
                  v-for="(count, star) in starDistribution" 
                  :key="star"
                  class="chart-item star-item"
                >
                  <div class="chart-label star-label">
                    <span class="star-icon">{{ star }}</span>
                    <span class="star-text">星</span>
                  </div>
                  <div class="chart-bar star-bar">
                    <div 
                      class="chart-fill star-fill" 
                      :style="{ width: getMaxPercentage(count, maxStarValue, 70) + '%' }"
                    >
                      <span class="bar-value">{{ getPercentage(count, totalRestaurants) }}%</span>
                    </div>
                  </div>
                  <div class="chart-count star-count">{{ count }}</div>
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
              <div class="chart price-chart">
                <div 
                  v-for="(count, price) in priceDistributionTranslated" 
                  :key="price"
                  class="chart-item price-item"
                >
                  <div class="chart-label price-label" :title="getPriceOriginal(price)">
                    {{ price }}
                  </div>
                  <div class="chart-bar price-bar">
                    <div 
                      class="chart-fill price-fill" 
                      :style="{ width: getMaxPercentage(count, maxPriceValue, 70) + '%' }"
                    >
                      <span class="bar-value">{{ getPercentage(count, totalRestaurants) }}%</span>
                    </div>
                  </div>
                  <div class="chart-count price-count">{{ count }}</div>
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

// 计算最大值，用于控制条形图显示
const maxStarValue = computed(() => {
  if (!starDistribution.value) return 0
  return Math.max(...Object.values(starDistribution.value))
})

const maxPriceValue = computed(() => {
  if (!priceDistribution.value) return 0
  return Math.max(...Object.values(priceDistribution.value))
})

// 翻译价格标签，解决长度不一致的问题
const priceDistributionTranslated = computed(() => {
  if (!priceDistribution.value) return {}
  
  const translations = {
    'Budget': '经济',
    'Moderate': '适中',
    'Expensive': '高价',
    'Very Expensive': '豪华',
    'Luxury': '奢华',
    'Unknown': '未知'
  }
  
  const result = {}
  Object.entries(priceDistribution.value).forEach(([key, value]) => {
    result[translations[key] || key] = value
  })
  
  return result
})

// 获取原始价格标签（用于悬停提示）
const getPriceOriginal = (translatedPrice) => {
  const reverseTranslations = {
    '经济': 'Budget',
    '适中': 'Moderate',
    '高价': 'Expensive',
    '豪华': 'Very Expensive',
    '奢华': 'Luxury',
    '未知': 'Unknown'
  }
  
  return reverseTranslations[translatedPrice] || translatedPrice
}

// 方法
const getPercentage = (value, total) => {
  return total > 0 ? (value / total * 100).toFixed(1) : 0
}

// 计算最大百分比，避免条形图过短或过长
const getMaxPercentage = (value, maxValue, maxPercent = 80) => {
  if (maxValue === 0) return 0
  return (value / maxValue * maxPercent).toFixed(1)
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
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 32px;
  margin-bottom: 48px;
}

.chart-container {
  padding: 10px 0;
}

.chart {
  padding: 15px 10px;
  
  .chart-item {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    gap: 16px;

    &:last-child {
      margin-bottom: 0;
    }

    .chart-label {
      min-width: 70px;
      width: 70px;
      font-weight: 500;
      color: #4a5568;
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }

    .chart-bar {
      flex: 1;
      height: 28px;
      background: #e2e8f0;
      border-radius: 14px;
      overflow: hidden;
      position: relative;
      box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);

      .chart-fill {
        height: 100%;
        border-radius: 14px;
        transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        position: relative;
        display: flex;
        align-items: center;
        padding-left: 12px;
        
        .bar-value {
          color: rgba(255, 255, 255, 0.9);
          font-size: 12px;
          font-weight: 500;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        &:hover .bar-value {
          opacity: 1;
        }
      }
    }

    .chart-count {
      min-width: 60px;
      text-align: right;
      font-weight: 600;
      color: #2d3748;
    }
  }
}

.star-chart {
  .star-label {
    .star-icon {
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #4c51bf;
      color: white;
      border-radius: 50%;
      font-weight: bold;
      margin-right: 4px;
    }
  }
  
  .star-fill {
    background: linear-gradient(135deg, #6366f1 0%, #4c51bf 100%);
  }
}

.price-chart {
  .price-label {
    cursor: help;
  }
  
  .price-fill {
    background: linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%);
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