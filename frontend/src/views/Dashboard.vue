<template>
  <div class="dashboard">
    <div class="dashboard-container">
      <!-- 页面标题 -->
      <div class="page-header">
        <h1 class="page-title">数据概览</h1>
        <p class="page-subtitle">全球米其林星级餐厅数据总览和关键指标</p>
      </div>

      <!-- 统计卡片 -->
      <div class="stats-grid">
        <InteractiveStatCard
          label="总餐厅数"
          :value="summary?.total_restaurants || 0"
          icon="DataAnalysis"
          icon-color="#3b82f6"
          :loading="loading"
          clickable
          subtitle="全球米其林星级餐厅"
          @click="$router.push('/explore')"
        />
        
        <InteractiveStatCard
          label="覆盖地区"
          :value="summary?.regions || 0"
          icon="Location"
          icon-color="#10b981"
          :loading="loading"
          clickable
          subtitle="分布在不同地区"
          @click="$router.push('/map')"
        />
        
        <InteractiveStatCard
          label="覆盖城市"
          :value="summary?.cities || 0"
          icon="OfficeBuilding"
          icon-color="#f59e0b"
          :loading="loading"
          clickable
          subtitle="遍布全球主要城市"
          @click="$router.push('/map')"
        />
        
        <InteractiveStatCard
          label="菜系类型"
          :value="summary?.cuisines || 0"
          icon="Bowl"
          icon-color="#8b5cf6"
          :loading="loading"
          clickable
          subtitle="丰富多样的美食文化"
          @click="$router.push('/analytics')"
        />
      </div>

      <!-- 图表区域 -->
      <div class="charts-grid">
        <!-- 星级分布图 -->
        <InteractiveBarChart
          :data="starDistribution"
          title="星级分布"
          subtitle="不同星级餐厅的数量分布情况"
          :loading="loading"
          :error="error?.type === 'fetch_summary' ? error : null"
          :color-scheme="['#6366f1', '#8b5cf6', '#ec4899']"
          :label-translator="starLabelTranslator"
          show-legend
          @item-click="handleStarClick"
          @retry="retryFetch"
        />

        <!-- 价格分布图 -->
        <InteractiveBarChart
          :data="priceDistribution"
          title="价格分布"
          subtitle="不同价格区间餐厅的分布比例"
          :loading="loading"
          :error="error?.type === 'fetch_summary' ? error : null"
          :color-scheme="['#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4']"
          :label-translator="priceLabelTranslator"
          show-legend
          @item-click="handlePriceClick"
          @retry="retryFetch"
        />
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
import { useRouter } from 'vue-router'
import { useDataStore } from '@/store/data'
import { Loading, Location, TrendCharts, Search, DataAnalysis } from '@element-plus/icons-vue'
import InteractiveStatCard from '@/components/common/InteractiveStatCard.vue'
import InteractiveBarChart from '@/components/charts/InteractiveBarChart.vue'

const router = useRouter()
const dataStore = useDataStore()

// 计算属性
const summary = computed(() => dataStore.summary)
const loading = computed(() => dataStore.loading)
const error = computed(() => dataStore.error)
const starDistribution = computed(() => summary.value?.star_distribution)

// 价格分布数据按指定顺序排列
const priceDistribution = computed(() => {
  const rawData = summary.value?.price_distribution
  if (!rawData) return null
  
  // 定义价格等级的顺序
  const priceOrder = ['Budget', 'Moderate', 'Expensive', 'Very Expensive', 'Luxury', 'Unknown']
  
  // 按指定顺序重新组织数据
  const orderedData = {}
  priceOrder.forEach(priceLevel => {
    if (rawData[priceLevel] !== undefined) {
      orderedData[priceLevel] = rawData[priceLevel]
    }
  })
  
  return orderedData
})

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

// 标签翻译函数
const starLabelTranslator = (label) => {
  return `${label}星`
}

const priceLabelTranslator = (label) => {
  const translations = {
    'Budget': '经济型',
    'Moderate': '适中型',
    'Expensive': '高价型',
    'Very Expensive': '豪华型',
    'Luxury': '奢华型',
    'Unknown': '未知'
  }
  return translations[label] || label
}

// 事件处理
const handleStarClick = ({ item }) => {
  // 导航到分析页面并筛选对应星级
  router.push({
    path: '/analytics',
    query: { stars: item.originalLabel || item.label }
  })
}

const handlePriceClick = ({ item }) => {
  // 导航到探索页面并筛选对应价格
  router.push({
    path: '/explore',
    query: { price: item.originalLabel || item.label }
  })
}

const retryFetch = async () => {
  try {
    await dataStore.fetchSummary()
  } catch (err) {
    console.error('重试失败:', err)
  }
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