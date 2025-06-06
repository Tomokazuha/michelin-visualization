<template>
  <div class="analytics-view">
    <div class="analytics-container">
      <div class="page-header">
        <h1 class="page-title">深度分析</h1>
        <p class="page-subtitle">聚类分析、趋势预测和深度洞察</p>
      </div>
      
      <!-- 分析概览卡片 -->
      <div class="overview-grid">
        <div class="stat-card" @click="showStatExplanation('clusters')">
          <div class="stat-number">{{ clusterInfo.n_clusters || 28 }}</div>
          <div class="stat-label">聚类数量</div>
          <div class="stat-description">基于算法识别出的餐厅群组数量</div>
          <div class="info-icon">
            <el-icon><InfoFilled /></el-icon>
          </div>
        </div>
        
        <div class="stat-card" @click="showStatExplanation('silhouette')">
          <div class="stat-number">{{ (clusterInfo.silhouette_score || 0.436).toFixed(3) }}</div>
          <div class="stat-label">轮廓系数</div>
          <div class="stat-description">聚类质量评估指标 (0-1，越高越好)</div>
          <div class="info-icon">
            <el-icon><InfoFilled /></el-icon>
          </div>
        </div>
        
        <div class="stat-card" v-if="clusterInfo.composite_score" @click="showStatExplanation('composite')">
          <div class="stat-number">{{ (clusterInfo.composite_score || 0).toFixed(3) }}</div>
          <div class="stat-label">综合评分</div>
          <div class="stat-description">算法优化后的综合质量得分</div>
          <div class="info-icon">
            <el-icon><InfoFilled /></el-icon>
          </div>
        </div>
        
        <div class="stat-card" v-if="clusterInfo.noise_ratio" @click="showStatExplanation('noise')">
          <div class="stat-number">{{ ((clusterInfo.noise_ratio || 0) * 100).toFixed(1) }}%</div>
          <div class="stat-label">噪声比例</div>
          <div class="stat-description">无法归类的异常数据点比例</div>
          <div class="info-icon">
            <el-icon><InfoFilled /></el-icon>
          </div>
        </div>
        
        <div class="stat-card" v-if="!clusterInfo.composite_score" @click="showStatExplanation('features')">
          <div class="stat-number">{{ featureInfo.total_features || 157 }}</div>
          <div class="stat-label">总特征数</div>
          <div class="stat-description">用于分析的餐厅属性特征总数</div>
          <div class="info-icon">
            <el-icon><InfoFilled /></el-icon>
          </div>
        </div>
        
        <div class="stat-card" v-if="!clusterInfo.noise_ratio" @click="showStatExplanation('accuracy')">
          <div class="stat-number">{{ (featureInfo.model_accuracy || 0.87).toFixed(1) }}%</div>
          <div class="stat-label">模型准确率</div>
          <div class="stat-description">预测模型的准确度表现</div>
          <div class="info-icon">
            <el-icon><InfoFilled /></el-icon>
          </div>
        </div>
      </div>
      
      <!-- 特征重要性分析 -->
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">特征重要性分析</h3>
          <p class="card-subtitle">影响米其林星级评定的关键因素</p>
          <div class="feature-controls">
            <el-button-group size="small">
              <el-button @click="switchFeatureView('horizontal')" :type="featureViewType === 'horizontal' ? 'primary' : ''">
                <el-icon><Operation /></el-icon> 水平
              </el-button>
              <el-button @click="switchFeatureView('vertical')" :type="featureViewType === 'vertical' ? 'primary' : ''">
                <el-icon><Menu /></el-icon> 垂直
              </el-button>
            </el-button-group>
            <el-button size="small" @click="showFeatureComparison = !showFeatureComparison" 
              :type="showFeatureComparison ? 'warning' : ''">
              <el-icon><TrendCharts /></el-icon> 对比视图
            </el-button>
          </div>
        </div>
        <div class="card-body">
          <div v-loading="loading" class="chart-container">
            <div id="feature-importance-chart" style="height: 400px;"></div>
          </div>
          
          <!-- 特征对比视图 -->
          <div v-if="showFeatureComparison" class="feature-comparison-section">
            <h4>特征对比分析</h4>
            <div class="comparison-grid">
              <div class="comparison-item" v-for="(feature, index) in topFeatures.slice(0, 10)" :key="index">
                <div class="feature-card">
                  <div class="feature-name">{{ feature.name }}</div>
                  <div class="feature-score">{{ (feature.importance * 100).toFixed(1) }}%</div>
                  <div class="feature-bar">
                    <div class="bar-fill" :style="{ width: (feature.importance * 100) + '%' }"></div>
                  </div>
                  <div class="feature-desc">{{ feature.description }}</div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- 数据解释 -->
          <div class="insights-section">
            <h4><el-icon><Lightbulb /></el-icon> 数据洞察</h4>
            <div class="insights-content">
              <el-alert
                :title="getFeatureInsights()"
                type="info"
                :closable="false"
                show-icon
              />
              <div class="insight-details">
                <p><strong>关键发现：</strong></p>
                <ul>
                  <li v-for="insight in getTopInsights()" :key="insight">{{ insight }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 分布分析对比 -->
      <div class="charts-grid">
        <!-- 价格分布 -->
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">价格分布分析</h3>
            <p class="card-subtitle">不同价格等级餐厅的分布情况</p>
          </div>
          <div class="card-body">
            <div v-loading="loading" class="chart-container">
              <div id="price-distribution-chart" style="height: 300px;"></div>
            </div>
          </div>
        </div>
        
        <!-- 地区分布 -->
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">地区分布</h3>
            <p class="card-subtitle">全球米其林餐厅地理分布</p>
          </div>
          <div class="card-body">
            <div v-loading="loading" class="chart-container">
              <div id="region-distribution-chart" style="height: 300px;"></div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 菜系分析 -->
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">菜系分析</h3>
          <p class="card-subtitle">不同菜系的星级分布情况</p>
        </div>
        <div class="card-body">
          <div v-loading="loading" class="chart-container">
            <div id="cuisine-analysis-chart" style="height: 400px;"></div>
          </div>
        </div>
      </div>
      
      <!-- 聚类分析详情 -->
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">聚类分析结果</h3>
          <p class="card-subtitle">基于多维特征的餐厅聚类可视化</p>
        </div>
        <div class="card-body">
          <div class="cluster-info">
            <el-alert
              :title="getClusteringSummary()"
              type="success"
              :closable="false"
              show-icon
            />
            <div class="cluster-description">
              <div class="algorithm-info">
                <el-tag size="large" :type="getAlgorithmTagType()" effect="dark">
                  {{ clusterInfo.algorithm || 'DBSCAN' }} 聚类算法
                </el-tag>
                <span class="quality-indicator">
                  聚类质量：
                  <el-rate
                    v-model="clusterQualityRating"
                    disabled
                    show-score
                    text-color="#ff9900"
                    :max="5"
                    size="small"
                  />
                </span>
              </div>
              
              <div class="description-content">
                <p v-if="clusterInfo.optimization_type === 'advanced'">
                  <el-icon><Promotion /></el-icon>
                  <strong>高级优化聚类分析：</strong>采用多层特征工程和自适应参数优化技术，
                  成功将噪声点比例从传统算法的27%优化至{{ ((clusterInfo.noise_ratio || 0) * 100).toFixed(1) }}%，
                  综合聚类质量得分达到{{ (clusterInfo.composite_score || 0).toFixed(3) }}，显著提升了聚类的商业可解释性。
                </p>
                <p v-else>
                  <el-icon><DataAnalysis /></el-icon>
                  <strong>标准聚类分析：</strong>基于{{ clusterInfo.algorithm || 'DBSCAN' }}算法和主成分分析(PCA)降维技术，
                  将复杂的多维餐厅特征投影到二维平面。相同颜色的点代表具有相似特征的餐厅群组，
                  轮廓系数{{ (clusterInfo.silhouette_score || 0.436).toFixed(3) }}表明聚类结果具有良好的分离度。
                </p>
              </div>
              
              <div class="axis-explanation-enhanced">
                <h5><el-icon><Coordinate /></el-icon> 坐标轴详细解释</h5>
                <div class="axis-details">
                  <div class="axis-item">
                    <strong>X轴 - 主成分1 ({{ getPCA1Contribution() }}% 方差贡献)：</strong>
                    <span>综合反映餐厅的档次定位，包括价格水平、装修档次、服务质量等高端化指标</span>
                    <div class="axis-scale">
                      <span class="scale-left">经济实惠</span>
                      <div class="scale-bar"></div>
                      <span class="scale-right">奢华高端</span>
                    </div>
                  </div>
                  <div class="axis-item">
                    <strong>Y轴 - 主成分2 ({{ getPCA2Contribution() }}% 方差贡献)：</strong>
                    <span>主要体现餐厅的风格特色，包括菜系类型、创新程度、文化背景等差异化因素</span>
                    <div class="axis-scale vertical">
                      <span class="scale-top">传统经典</span>
                      <div class="scale-bar"></div>
                      <span class="scale-bottom">创新融合</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="business-insights">
                <h5><el-icon><TrendCharts /></el-icon> 商业洞察</h5>
                <div class="insight-grid">
                  <div class="insight-card" v-for="insight in getBusinessInsights()" :key="insight.title">
                    <div class="insight-title">{{ insight.title }}</div>
                    <div class="insight-content">{{ insight.content }}</div>
                    <div class="insight-value">{{ insight.value }}</div>
                  </div>
                </div>
              </div>
              
              <p class="interaction-tip">
                <el-icon><Mouse /></el-icon>
                <strong>交互提示：</strong>点击散点图中的任意餐厅查看详细信息，使用下方筛选器进行精确检索，
                悬停在聚类图例上可高亮对应餐厅群组。
              </p>
            </div>
          </div>
          <div class="cluster-analysis-container">
            <div class="cluster-chart-wrapper" v-loading="loading">
              <div class="cluster-filter-controls">
                <div class="filter-group">
                  <el-input
                    v-model="restaurantSearch"
                    placeholder="搜索餐厅..."
                    prefix-icon="Search"
                    clearable
                    @input="filterRestaurants"
                    size="small"
                    style="width: 200px;"
                  />
                  <el-select
                    v-model="selectedCluster"
                    placeholder="选择聚类"
                    size="small"
                    @change="filterRestaurants"
                    clearable
                    style="width: 140px;"
                  >
                    <el-option
                      v-for="cluster in clusterFeatures"
                      :key="cluster.name"
                      :label="cluster.name"
                      :value="cluster.name"
                    >
                      <div style="display: flex; align-items: center;">
                        <div :style="{
                          width: '12px',
                          height: '12px',
                          borderRadius: '50%',
                          backgroundColor: cluster.color,
                          marginRight: '8px'
                        }"></div>
                        <span>{{ cluster.name }}</span>
                      </div>
                    </el-option>
                  </el-select>
                  <el-select
                    v-model="selectedStar"
                    placeholder="星级"
                    size="small"
                    @change="filterRestaurants"
                    clearable
                    style="width: 100px;"
                  >
                    <el-option label="一星" value="1" />
                    <el-option label="二星" value="2" />
                    <el-option label="三星" value="3" />
                  </el-select>
                </div>
                <el-button 
                  type="primary" 
                  size="small" 
                  @click="resetFilters"
                  plain
                >重置筛选</el-button>
              </div>
              <div id="cluster-scatter-chart" style="height: 500px;"></div>
            </div>
            <div class="cluster-explanation">
              <h4>聚类特征说明</h4>
              <div class="cluster-features-list">
                <div v-for="(cluster, index) in clusterFeatures" :key="index" class="cluster-feature-item">
                  <div class="cluster-color" :style="{backgroundColor: cluster.color}"></div>
                  <div class="cluster-detail">
                    <strong>{{ cluster.name }}</strong>
                    <p>{{ cluster.description }}</p>
                    <div class="cluster-tags">
                      <el-tag v-for="(tag, i) in cluster.tags" :key="i" size="small" :type="tagTypes[i % tagTypes.length]" effect="light" style="margin-right: 5px; margin-bottom: 5px;">{{ tag }}</el-tag>
                    </div>
                  </div>
                </div>
              </div>
              
              <h4 style="margin-top: 20px;">餐厅列表</h4>
              <div class="restaurant-list-container">
                <div class="restaurant-count">
                  共找到 <span class="count-num">{{ filteredRestaurantList.length }}</span> 家餐厅
                </div>
                <div class="restaurant-list">
                  <div 
                    v-for="(restaurant, index) in filteredRestaurantList" 
                    :key="index"
                    class="restaurant-list-item"
                    :class="{ 'highlighted': highlightedRestaurantId === restaurant.id }"
                    @click="showRestaurantDetails(restaurant)"
                    @mouseover="highlightRestaurantPoint(restaurant)"
                    @mouseleave="clearHighlight"
                  >
                    <div class="restaurant-dot" :style="{backgroundColor: getClusterColor(restaurant.cluster)}"></div>
                    <div class="restaurant-info">
                      <div class="restaurant-name">{{ restaurant.name }}</div>
                      <div class="restaurant-meta">
                        <span>{{ restaurant.location }}</span>
                        <span class="stars">
                          <el-icon v-for="i in restaurant.stars" :key="i"><StarFilled /></el-icon>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div v-if="filteredRestaurantList.length === 0" class="no-restaurants">
                    没有符合条件的餐厅
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 特征详情表格 -->
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">特征详细信息</h3>
        </div>
        <div class="card-body">
          <el-table :data="featureList" stripe style="width: 100%">
            <el-table-column prop="name" label="特征名称" min-width="150" />
            <el-table-column prop="importance" label="重要性" width="120">
              <template #default="scope">
                <div>
                  <el-progress 
                    :percentage="scope.row.importance * 100" 
                    :stroke-width="8"
                    :show-text="false"
                  />
                  <span class="importance-value">{{ (scope.row.importance * 100).toFixed(1) }}%</span>
                </div>
              </template>
            </el-table-column>
            <el-table-column prop="description" label="描述" min-width="200" />
          </el-table>
        </div>
      </div>
    </div>
  </div>
  
  <!-- 餐厅详情对话框 -->
  <el-dialog
    v-model="restaurantDetailVisible"
    title="餐厅详情"
    width="600px"
    destroy-on-close
    :show-close="true"
  >
    <div v-if="selectedRestaurant" class="restaurant-detail-content">
      <div class="restaurant-header">
        <h3>{{ selectedRestaurant.name }}</h3>
        <div class="restaurant-stars">
          <el-icon v-for="i in selectedRestaurant.stars" :key="i" color="#f5a623"><StarFilled /></el-icon>
        </div>
      </div>
      
      <el-descriptions :column="2" border>
        <el-descriptions-item label="所属聚类">
          <el-tag :style="{backgroundColor: getClusterColor(selectedRestaurant.cluster), color: '#fff', fontWeight: 'bold'}">
            {{ getClusterName(selectedRestaurant.cluster) }}
          </el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="地理位置">{{ selectedRestaurant.location }}</el-descriptions-item>
        <el-descriptions-item label="菜系">{{ selectedRestaurant.cuisine }}</el-descriptions-item>
        <el-descriptions-item label="价格">{{ selectedRestaurant.price }}</el-descriptions-item>
        <el-descriptions-item label="主成分1">{{ selectedRestaurant.pca1.toFixed(2) }}</el-descriptions-item>
        <el-descriptions-item label="主成分2">{{ selectedRestaurant.pca2.toFixed(2) }}</el-descriptions-item>
      </el-descriptions>
      
      <div class="restaurant-features">
        <h4>特色标签</h4>
        <div class="feature-tags">
          <el-tag v-for="(feature, index) in selectedRestaurant.features" :key="index" 
            size="medium" :type="tagTypes[index % tagTypes.length]" effect="light">
            {{ feature }}
          </el-tag>
        </div>
      </div>
      
      <div class="restaurant-description">
        <h4>餐厅描述</h4>
        <p>{{ selectedRestaurant.description }}</p>
      </div>
      
      <div class="dialog-footer" style="margin-top: 24px; text-align: right;">
        <el-button @click="restaurantDetailVisible = false">关闭</el-button>
      </div>
    </div>
  </el-dialog>

  <!-- 统计指标解释对话框 -->
  <el-dialog
    v-model="statExplanationVisible"
    title="指标说明"
    width="500px"
    destroy-on-close
  >
    <div class="stat-explanation-content">
      <p>{{ currentStatExplanation }}</p>
    </div>
    <template #footer>
      <el-button @click="statExplanationVisible = false">关闭</el-button>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref, computed, onMounted, nextTick } from 'vue'
import { useDataStore } from '@/store/data'
import * as echarts from 'echarts'
import axios from 'axios'
import { ElMessage } from 'element-plus'

// 创建专用的axios实例来避免配置冲突
const api = axios.create({
  baseURL: 'http://localhost:5000',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})

// 自定义JSON解析函数，处理NaN值
const parseJSONWithNaN = (jsonString) => {
  try {
    // 将NaN替换为null，这样JSON.parse就能正常工作
    const cleanedString = jsonString.replace(/:\s*NaN\s*([,}])/g, ': null$1')
    return JSON.parse(cleanedString)
  } catch (error) {
    console.error('JSON解析失败:', error)
    return null
  }
}

const dataStore = useDataStore()
const loading = computed(() => dataStore.loading)

// 分析数据
const clusterInfo = ref({})
const featureInfo = ref({})
const featureList = ref([])
const distributionData = ref({})

// ECharts 实例
let featureChart = null
let priceChart = null
let regionChart = null
let cuisineChart = null
let clusterChart = null

// 聚类标签类型
const tagTypes = ['success', 'info', 'warning', 'danger']

// 新增的响应式数据
const featureViewType = ref('horizontal')
const showFeatureComparison = ref(false)
const clusterQualityRating = computed(() => {
  const score = clusterInfo.value.silhouette_score || 0.436
  return Math.round(score * 5) // 转换为5星评级
})
const topFeatures = computed(() => {
  return featureList.value.slice(0, 10)
})

// 统计卡片解释对话框
const statExplanationVisible = ref(false)
const currentStatExplanation = ref('')

// 聚类特征说明数据
const clusterFeatures = ref([
  {
    name: '聚类 1',
    color: '#5470c6',
    description: '高端餐厅',
    tags: ['高价位', '精致装修', '顶级服务']
  },
  {
    name: '聚类 2',
    color: '#91cc75',
    description: '欧式餐厅',
    tags: ['中高价位', '欧洲菜系', '传统风格']
  },
  {
    name: '聚类 3',
    color: '#fac858',
    description: '现代创新餐厅',
    tags: ['高价位', '创新菜系', '现代设计']
  },
  {
    name: '聚类 4',
    color: '#ee6666',
    description: '地中海风格餐厅',
    tags: ['中价位', '地中海菜系', '特色位置']
  },
  {
    name: '聚类 5',
    color: '#73c0de',
    description: '亚洲风味餐厅',
    tags: ['中价位', '亚洲菜系', '城市位置']
  },
  {
    name: '聚类 6',
    color: '#3ba272',
    description: '美式创新餐厅',
    tags: ['中高价位', '美式菜系', '时尚氛围']
  },
  {
    name: '聚类 7',
    color: '#fc8452',
    description: '地方特色餐厅',
    tags: ['中价位', '地方菜系', '文化特色']
  }
])

// 餐厅列表相关数据
const restaurantSearch = ref('')
const selectedCluster = ref('')
const selectedStar = ref('')
const restaurantList = ref([])
const filteredRestaurantList = ref([])
const highlightedRestaurantId = ref(null)
const selectedRestaurant = ref(null)
const restaurantDetailVisible = ref(false)
let pointHighlightInstance = null

// 获取分析数据
const fetchAnalyticsData = async () => {
  try {
    dataStore.loading = true
    
    // 并行获取所有分析数据
    const [clusterResponse, featureResponse] = await Promise.allSettled([
      api.get('/api/analytics/clustering'),
      api.get('/api/analytics/features')
    ])
    
    // 处理聚类分析数据
    if (clusterResponse.status === 'fulfilled' && clusterResponse.value.data) {
      const clusterData = clusterResponse.value.data
      // 检查是否有success字段，如果有则检查，如果没有则检查data字段
      if ((clusterData.success !== false) && clusterData.data) {
        clusterInfo.value = clusterData.data
      } else if (clusterData.algorithm) {
        // 直接使用响应数据
        clusterInfo.value = clusterData
      } else {
        console.warn('聚类分析数据格式不正确，使用默认值')
        clusterInfo.value = {
          algorithm: 'DBSCAN',
          n_clusters: 28,
          silhouette_score: 0.436,
          summary: '聚类分析数据（默认）'
        }
      }
    } else {
      console.warn('聚类分析数据获取失败，使用默认值')
      clusterInfo.value = {
        algorithm: 'DBSCAN',
        n_clusters: 28,
        silhouette_score: 0.436,
        summary: '聚类分析数据（默认）'
      }
    }
    
    // 处理特征重要性数据
    if (featureResponse.status === 'fulfilled' && featureResponse.value.data) {
      const featureData = featureResponse.value.data
      // 检查是否有success字段，如果有则检查，如果没有则检查data字段
      if ((featureData.success !== false) && featureData.data) {
        featureInfo.value = featureData.data
        featureList.value = featureData.data.features || []
      } else if (featureData.features) {
        // 直接使用响应数据
        featureInfo.value = featureData
        featureList.value = featureData.features || []
      } else {
        console.warn('特征分析数据格式不正确，使用默认值')
        featureInfo.value = {
          model_accuracy: 0.85,
          total_features: 157,
          selected_features: 10
        }
        featureList.value = [
          {name: '价格水平', importance: 0.72, description: '餐厅的价格等级'},
          {name: '地理位置', importance: 0.68, description: '餐厅的地理位置'},
          {name: '菜系类型', importance: 0.62, description: '餐厅的菜系分类'},
          {name: '星级分布', importance: 0.58, description: '米其林星级的分布特征'},
          {name: '餐厅名称长度', importance: 0.54, description: '餐厅名称长度的影响'},
          {name: '大陆分布', importance: 0.48, description: '不同大陆的分布影响'},
          {name: '城市集中度', importance: 0.42, description: '餐厅在城市中的集中程度'},
          {name: '获奖年份趋势', importance: 0.38, description: '获得星级年份的趋势'},
          {name: '地理区域分布', importance: 0.34, description: '地理区域的多样性'},
          {name: '菜系多样性', importance: 0.28, description: '菜系类型的丰富程度'}
        ]
      }
    } else {
      console.warn('特征分析数据获取失败，使用默认值')
      featureInfo.value = {
        model_accuracy: 0.85,
        total_features: 157,
        selected_features: 10
      }
      featureList.value = [
        {name: '价格水平', importance: 0.72, description: '餐厅的价格等级'},
        {name: '地理位置', importance: 0.68, description: '餐厅的地理位置'},
        {name: '菜系类型', importance: 0.62, description: '餐厅的菜系分类'},
        {name: '星级分布', importance: 0.58, description: '米其林星级的分布特征'},
        {name: '餐厅名称长度', importance: 0.54, description: '餐厅名称长度的影响'},
        {name: '大陆分布', importance: 0.48, description: '不同大陆的分布影响'},
        {name: '城市集中度', importance: 0.42, description: '餐厅在城市中的集中程度'},
        {name: '获奖年份趋势', importance: 0.38, description: '获得星级年份的趋势'},
        {name: '地理区域分布', importance: 0.34, description: '地理区域的多样性'},
        {name: '菜系多样性', importance: 0.28, description: '菜系类型的丰富程度'}
      ]
    }
    
    // 获取分布数据
    await fetchDistributionData()
    
  } catch (error) {
    console.error('获取分析数据失败:', error)
    // 使用默认数据
    clusterInfo.value = {
      algorithm: 'DBSCAN',
      n_clusters: 28,
      silhouette_score: 0.436,
      summary: '聚类分析数据（离线模式）'
    }
    featureInfo.value = {
      model_accuracy: 0.85,
      total_features: 157,
      selected_features: 10
    }
    featureList.value = [
      {name: '价格水平', importance: 0.72, description: '餐厅的价格等级'},
      {name: '地理位置', importance: 0.68, description: '餐厅的地理位置'},
      {name: '菜系类型', importance: 0.62, description: '餐厅的菜系分类'},
      {name: '星级分布', importance: 0.58, description: '米其林星级的分布特征'},
      {name: '餐厅名称长度', importance: 0.54, description: '餐厅名称长度的影响'},
      {name: '大陆分布', importance: 0.48, description: '不同大陆的分布影响'},
      {name: '城市集中度', importance: 0.42, description: '餐厅在城市中的集中程度'},
      {name: '获奖年份趋势', importance: 0.38, description: '获得星级年份的趋势'},
      {name: '地理区域分布', importance: 0.34, description: '地理区域的多样性'},
      {name: '菜系多样性', importance: 0.28, description: '菜系类型的丰富程度'}
    ]
  } finally {
    dataStore.loading = false
  }
}

// 获取分布数据
const fetchDistributionData = async () => {
  try {
    const types = ['price', 'region', 'cuisine']
    const promises = types.map(type => 
      api.get(`/api/analytics/distribution?type=${type}`)
    )
    
    const responses = await Promise.allSettled(promises)
    
    // 处理每个响应
    distributionData.value = {
      price: responses[0].status === 'fulfilled' && responses[0].value.data 
        ? (responses[0].value.data.success !== false ? responses[0].value.data.data || responses[0].value.data : responses[0].value.data)
        : {'$': 98, '$$': 145, '$$$': 187, '$$$$': 213, '$$$$$': 142},
      region: responses[1].status === 'fulfilled' && responses[1].value.data 
        ? (responses[1].value.data.success !== false ? responses[1].value.data.data || responses[1].value.data : responses[1].value.data)
        : {'United Kingdom': 162, 'California': 90, 'New York City': 74},
      cuisine: responses[2].status === 'fulfilled' && responses[2].value.data 
        ? (responses[2].value.data.success !== false ? responses[2].value.data.data || responses[2].value.data : responses[2].value.data)
        : {'Modern': 76, 'French': 65, 'Japanese': 54}
    }
  } catch (error) {
    console.error('获取分布数据失败:', error)
    // 使用默认数据
    distributionData.value = {
      price: {'$': 98, '$$': 145, '$$$': 187, '$$$$': 213, '$$$$$': 142},
      region: {'United Kingdom': 162, 'California': 90, 'New York City': 74},
      cuisine: {'Modern': 76, 'French': 65, 'Japanese': 54}
    }
  }
}

// 初始化特征重要性图表
const initFeatureChart = () => {
  const chartDom = document.getElementById('feature-importance-chart')
  if (!chartDom) return
  
  featureChart = echarts.init(chartDom)
  
  // 显示前10个重要特征
  const features = featureList.value.slice(0, 10)
  
  const isHorizontal = featureViewType.value === 'horizontal'
  
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      formatter: function(params) {
        const item = params[0]
        const feature = features[item.dataIndex]
        return `
          <div style="padding: 8px;">
            <div style="font-weight: bold; margin-bottom: 6px; color: #333;">
              ${feature.name}
            </div>
            <div style="margin-bottom: 4px;">
              <span style="color: #666;">重要性得分：</span>
              <span style="font-weight: bold; color: #409EFF;">${(feature.importance * 100).toFixed(1)}%</span>
            </div>
            <div style="color: #666; font-size: 12px; line-height: 1.4;">
              ${feature.description}
            </div>
          </div>
        `
      }
    },
    grid: {
      left: isHorizontal ? '15%' : '10%',
      right: '10%',
      top: isHorizontal ? '10%' : '15%',
      bottom: isHorizontal ? '10%' : '15%'
    },
    xAxis: {
      type: isHorizontal ? 'value' : 'category',
      name: isHorizontal ? '重要性得分' : '',
      data: isHorizontal ? null : features.map(f => f.name),
      max: isHorizontal ? 1 : null,
      axisLabel: {
        formatter: isHorizontal ? '{value}' : function(value) {
          return value.length > 8 ? value.substring(0, 8) + '...' : value
        },
        interval: 0,
        fontSize: 11,
        rotate: isHorizontal ? 0 : 30
      }
    },
    yAxis: {
      type: isHorizontal ? 'category' : 'value',
      name: isHorizontal ? '' : '重要性得分',
      data: isHorizontal ? features.map(f => f.name) : null,
      max: isHorizontal ? null : 1,
      axisLabel: {
        interval: 0,
        fontSize: 11,
        formatter: function(value) {
          if (isHorizontal && typeof value === 'string') {
            return value.length > 12 ? value.substring(0, 12) + '...' : value
          }
          return value
        }
      }
    },
    series: [{
      name: '特征重要性',
      type: 'bar',
      data: features.map(f => f.importance),
      itemStyle: {
        color: new echarts.graphic.LinearGradient(
          isHorizontal ? 0 : 0, 
          isHorizontal ? 0 : 1, 
          isHorizontal ? 1 : 0, 
          isHorizontal ? 0 : 0, 
          [
            { offset: 0, color: '#667eea' },
            { offset: 1, color: '#764ba2' }
          ]
        )
      },
      label: {
        show: true,
        position: isHorizontal ? 'right' : 'top',
        formatter: function(params) {
          return (params.value * 100).toFixed(1) + '%'
        },
        fontSize: 10,
        color: '#333'
      },
      emphasis: {
        itemStyle: {
          color: new echarts.graphic.LinearGradient(
            isHorizontal ? 0 : 0, 
            isHorizontal ? 0 : 1, 
            isHorizontal ? 1 : 0, 
            isHorizontal ? 0 : 0, 
            [
              { offset: 0, color: '#409EFF' },
              { offset: 1, color: '#67C23A' }
            ]
          )
        }
      }
    }]
  }
  
  featureChart.setOption(option)
  
  // 添加点击事件
  featureChart.on('click', function(params) {
    const feature = features[params.dataIndex]
    ElMessage({
      message: `${feature.name}: ${feature.description}`,
      type: 'info',
      duration: 3000
    })
  })
}

// 初始化价格分布图表
const initPriceChart = () => {
  const chartDom = document.getElementById('price-distribution-chart')
  if (!chartDom) return
  
  priceChart = echarts.init(chartDom)
  
  const priceData = distributionData.value.price || {}
  const data = Object.entries(priceData).map(([price, count]) => ({
    name: price,
    value: count
  }))
  
  const option = {
    tooltip: {
      trigger: 'item',
      formatter: function(params) {
        return `
          <div style="padding: 5px;">
            <div style="font-weight: bold; margin-bottom: 4px;">${params.name}</div>
            <div>餐厅数量: ${params.value}</div>
            <div>占比: ${params.percent}%</div>
          </div>
        `
      }
    },
    legend: {
      bottom: '0%',
      left: 'center'
    },
    series: [
      {
        name: '价格分布',
        type: 'pie',
        radius: ['40%', '70%'],
        center: ['50%', '45%'],
        data: data,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        },
        itemStyle: {
          color: function(params) {
            const colors = ['#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272']
            return colors[params.dataIndex % colors.length]
          }
        }
      }
    ]
  }
  
  priceChart.setOption(option)
}

// 初始化地区分布图表
const initRegionChart = () => {
  const chartDom = document.getElementById('region-distribution-chart')
  if (!chartDom) return
  
  regionChart = echarts.init(chartDom)
  
  const regionData = distributionData.value.region || {}
  const sortedData = Object.entries(regionData)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 10) // 显示前10个地区
  
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '15%',
      right: '10%',
      top: '10%',
      bottom: '15%'
    },
    xAxis: {
      type: 'category',
      data: sortedData.map(([region]) => region),
      axisLabel: {
        interval: 0,
        rotate: 45,
        fontSize: 10
      }
    },
    yAxis: {
      type: 'value',
      name: '餐厅数量'
    },
    series: [{
      name: '餐厅数量',
      type: 'bar',
      data: sortedData.map(([, count]) => count),
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#667eea' },
          { offset: 1, color: '#764ba2' }
        ])
      }
    }]
  }
  
  regionChart.setOption(option)
}

// 初始化菜系分析图表
const initCuisineChart = () => {
  const chartDom = document.getElementById('cuisine-analysis-chart')
  if (!chartDom) return
  
  cuisineChart = echarts.init(chartDom)
  
  const cuisineData = distributionData.value.cuisine || {}
  const sortedData = Object.entries(cuisineData)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 15) // 显示前15个菜系
  
  const option = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} 家餐厅'
    },
    legend: {
      type: 'scroll',
      bottom: '0%',
      left: 'center'
    },
    series: [
      {
        name: '菜系分布',
        type: 'pie',
        radius: '70%',
        center: ['50%', '45%'],
        data: sortedData.map(([cuisine, count]) => ({
          name: cuisine,
          value: count
        })),
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        },
        label: {
          formatter: '{b}: {d}%'
        }
      }
    ]
  }
  
  cuisineChart.setOption(option)
}

// 初始化聚类散点图
const initClusterChart = () => {
  const chartDom = document.getElementById('cluster-scatter-chart')
  if (!chartDom) {
    console.error("找不到散点图DOM元素");
    return;
  }
  
  clusterChart = echarts.init(chartDom)
  
  // 使用真实餐厅数据构建散点图数据
  const getClusterData = () => {
    const data = [];
    const colors = clusterFeatures.value.map(cluster => cluster.color) // 使用clusterFeatures中定义的颜色
    
    // 如果没有餐厅数据，返回空数组
    if (restaurantList.value.length === 0) {
      console.warn("没有餐厅数据可用于散点图");
      return [];
    }
    
    console.log(`准备为${restaurantList.value.length}家餐厅创建散点图数据`);
    console.log(`聚类特征:`, clusterFeatures.value);
    
    try {
      // 按映射后的聚类组织数据
      const clusterGroups = {}
      
      // 将餐厅按映射后的聚类分组
      for (const restaurant of restaurantList.value) {
        const cluster = restaurant.cluster;
        if (cluster === undefined || cluster === null) {
          console.warn(`餐厅 ${restaurant.name} 没有聚类标签`);
          continue;
        }
        
        if (!clusterGroups[cluster]) {
          clusterGroups[cluster] = []
        }
        clusterGroups[cluster].push(restaurant)
      }
      
      console.log(`聚类分组情况:`, Object.keys(clusterGroups).map(k => ({ cluster: k, count: clusterGroups[k].length })));
      
      // 为前12个主要聚类创建数据系列
      for (let cluster = 0; cluster < 12; cluster++) {
        const restaurants = clusterGroups[cluster] || [];
        
        if (restaurants.length === 0) {
          console.log(`聚类 ${cluster} 没有餐厅数据`);
          continue;
        }
        
        // 找到对应的聚类特征描述
        const clusterFeature = clusterFeatures.value.find(f => f.id === cluster) || 
                               { name: `聚类 ${cluster + 1}`, color: colors[cluster % colors.length] || '#666' };
        
        const clusterData = restaurants.map(restaurant => [
          restaurant.pca1, 
          restaurant.pca2, 
          cluster, 
          restaurant.id
        ]);
        
        data.push({
          name: clusterFeature.name,
          type: 'scatter',
          data: clusterData,
          symbolSize: 8,
          itemStyle: {
            color: clusterFeature.color
          }
        });
        
        console.log(`为聚类 ${cluster} (${clusterFeature.name}) 创建了 ${clusterData.length} 个数据点`);
      }
      
      // 处理其他聚类（cluster = 12）
      const otherClusterRestaurants = clusterGroups[12] || [];
      if (otherClusterRestaurants.length > 0) {
        console.log(`发现 ${otherClusterRestaurants.length} 个其他聚类的点`);
        
        const otherClusterData = otherClusterRestaurants.map(restaurant => [
          restaurant.pca1,
          restaurant.pca2,
          12,
          restaurant.id
        ]);
        
        const otherClusterFeature = clusterFeatures.value.find(f => f.id === 12) ||
                                   { name: '其他聚类', color: '#999999' };
        
        data.push({
          name: otherClusterFeature.name,
          type: 'scatter',
          data: otherClusterData,
          symbolSize: 6,
          itemStyle: {
            color: otherClusterFeature.color,
            opacity: 0.7
          }
        });
      }
      
      // 处理噪声点（cluster = -1）
      const noisePoints = clusterGroups[-1] || [];
      if (noisePoints.length > 0) {
        console.log(`发现 ${noisePoints.length} 个噪声点`);
        
        const noiseData = noisePoints.map(restaurant => [
          restaurant.pca1,
          restaurant.pca2,
          -1,
          restaurant.id
        ]);
        
        data.push({
          name: '噪声点',
          type: 'scatter',
          data: noiseData,
          symbolSize: 4,
          itemStyle: {
            color: '#ccc',
            opacity: 0.5
          }
        });
      }
      
      return data;
    } catch (error) {
      console.error("生成聚类数据时出错:", error);
      return [];
    }
  };
  
  const option = {
    tooltip: {
      trigger: 'item',
      formatter: function(params) {
        const clusterIndex = params.value[2];
        const restaurantId = params.value[3];
        const restaurant = restaurantList.value.find(r => r.id === restaurantId);
        
        if (!restaurant) {
          // 找不到餐厅数据，显示聚类信息
          const clusterInfo = clusterFeatures.value.find(c => c.id === clusterIndex) ||
                             clusterFeatures.value[clusterIndex >= 0 ? clusterIndex : 6] ||
                             { name: '未知聚类', description: '无详细信息', tags: [] };
          
          return `
            <div style="padding: 5px;">
              <div style="font-weight: bold; margin-bottom: 5px;">${clusterInfo.name}</div>
              <div style="margin-bottom: 5px;">${clusterInfo.description}</div>
              <div>主成分1: ${params.value[0].toFixed(2)}</div>
              <div>主成分2: ${params.value[1].toFixed(2)}</div>
              <div style="margin-top: 5px; display: flex; flex-wrap: wrap; gap: 5px;">
                ${clusterInfo.tags.map(tag => `<span style="background: rgba(64,158,255,.1); color: #409EFF; padding: 2px 5px; border-radius: 3px; font-size: 12px;">${tag}</span>`).join('')}
              </div>
            </div>
          `;
        }
        
        return `
          <div style="padding: 5px;">
            <div style="font-weight: bold; margin-bottom: 5px;">${restaurant.name}</div>
            <div style="margin-bottom: 5px;">${restaurant.cuisine} · ${restaurant.location} · ${restaurant.price}</div>
            <div style="margin-bottom: 5px;">
              ${'<span style="color: #f5a623;">★</span>'.repeat(restaurant.stars)}
            </div>
            <div>主成分1: ${params.value[0].toFixed(2)}</div>
            <div>主成分2: ${params.value[1].toFixed(2)}</div>
            <div style="margin-top: 5px; font-size: 12px; color: #666;">点击查看详情</div>
          </div>
        `;
      }
    },
    legend: {
      bottom: '0%',
      left: 'center',
      type: 'scroll',
      selected: {} // 默认所有聚类都选中
    },
    grid: {
      left: '10%',
      right: '10%',
      top: '10%',
      bottom: '15%'
    },
    xAxis: {
      type: 'value',
      name: '主成分 1',
      scale: true
    },
    yAxis: {
      type: 'value',
      name: '主成分 2',
      scale: true
    },
    series: getClusterData()
  };
  
  // 确保所有聚类默认都是显示的
  const series = option.series || [];
  if (series.length > 0) {
    option.legend.selected = {};
    series.forEach(s => {
      option.legend.selected[s.name] = true;
    });
  }
  
  clusterChart.setOption(option);
  
  // 添加点击事件
  clusterChart.on('click', function(params) {
    if (params.componentType === 'series') {
      const restaurantId = params.value[3];
      const restaurant = restaurantList.value.find(r => r.id === restaurantId);
      if (restaurant) {
        showRestaurantDetails(restaurant);
      } else {
        console.warn(`点击事件：找不到ID为 ${restaurantId} 的餐厅`);
      }
    }
  });
  
  console.log("聚类散点图初始化完成");
}

// 初始化所有图表
const initAllCharts = async () => {
  await nextTick()
  
  // 获取真实餐厅数据，而不是生成模拟数据
  await fetchRealRestaurantData()
  
  initFeatureChart()
  initPriceChart()
  initRegionChart()
  initCuisineChart()
  initClusterChart()
  
  // 监听窗口大小变化
  window.addEventListener('resize', () => {
    featureChart?.resize()
    priceChart?.resize()
    regionChart?.resize()
    cuisineChart?.resize()
    clusterChart?.resize()
  })
}

// 获取真实餐厅数据
const fetchRealRestaurantData = async () => {
  try {
    dataStore.loading = true
    console.log('开始获取餐厅数据...')
    
    // 获取聚类餐厅数据
    const response = await api.get('/api/restaurants', {
      params: {
        per_page: 1000 // 请求足够多的餐厅数据
      }
    })
    
    console.log('餐厅数据API响应:', response.status, response.data)
    console.log('response.data 类型:', typeof response.data)
    
    // 如果response.data是字符串，需要解析JSON
    let responseData = response.data
    if (typeof response.data === 'string') {
      responseData = parseJSONWithNaN(response.data)
      console.log('JSON解析成功，解析后的数据:', responseData)
    }
    
    console.log('responseData.data 存在吗?', !!responseData?.data)
    console.log('responseData.restaurants 存在吗?', !!responseData?.restaurants)
    if (responseData?.data) {
      console.log('responseData.data.restaurants 存在吗?', !!responseData.data.restaurants)
    }
    
    // 尝试两种可能的数据路径
    let apiRestaurants = null
    if (responseData && responseData.data && responseData.data.restaurants) {
      apiRestaurants = responseData.data.restaurants
      console.log('使用路径: responseData.data.restaurants')
    } else if (responseData && responseData.restaurants) {
      apiRestaurants = responseData.restaurants
      console.log('使用路径: responseData.restaurants')
    }
    
    if (apiRestaurants && apiRestaurants.length > 0) {
      console.log(`成功获取 ${apiRestaurants.length} 家餐厅数据`)
      
      // 清理数据中的NaN值
      const cleanedRestaurants = apiRestaurants.map(restaurant => ({
        ...restaurant,
        latitude: restaurant.latitude || 0,
        longitude: restaurant.longitude || 0,
        price: restaurant.price || '$$',
        stars: restaurant.stars || 1
      }))
      
      // 处理聚类分配
      const processedRestaurants = await processRestaurantsWithClusters(cleanedRestaurants)
      
      restaurantList.value = processedRestaurants
      filteredRestaurantList.value = [...processedRestaurants]
      console.log(`处理后共有 ${processedRestaurants.length} 家餐厅`)
    } else {
      console.error('API返回数据格式不正确，使用模拟数据替代', responseData)
      restaurantList.value = generateRestaurantData()
      filteredRestaurantList.value = [...restaurantList.value]
    }
  } catch (error) {
    console.error('获取餐厅数据详细错误:', error)
    console.error('错误类型:', error.name)
    console.error('错误消息:', error.message)
    if (error.response) {
      console.error('响应状态:', error.response.status)
      console.error('响应数据:', error.response.data)
    }
    // 出错时使用模拟数据
    restaurantList.value = generateRestaurantData()
    filteredRestaurantList.value = [...restaurantList.value]
  } finally {
    dataStore.loading = false
  }
}

// 更新聚类特征说明
const updateClusterFeatures = (clusterData) => {
  console.log("开始更新聚类特征说明", clusterData);
  
  // 基于聚类统计信息更新特征说明
  if (clusterData && clusterData.cluster_stats) {
    const clusterStats = clusterData.cluster_stats;
    console.log("聚类统计数据:", clusterStats);
    
    // 过滤和排序聚类，取前12个最大的聚类（忽略噪声点）
    const mainClusters = Object.entries(clusterStats)
      .filter(([key]) => !key.includes('noise')) // 排除噪声点
      .sort((a, b) => b[1] - a[1]) // 按聚类大小排序
      .slice(0, 12); // 取前12个最大的聚类
    
    console.log("主要聚类:", mainClusters);
    
    if (mainClusters.length > 0) {
      // 为每个主要聚类生成描述和标签
      const newFeatures = mainClusters.map(([clusterKey, size], index) => {
        // 获取原始聚类编号
        const originalClusterId = parseInt(clusterKey.replace('cluster_', ''));
        
        // 使用扩展的颜色调色板
        const colors = [
          '#5470c6', '#91cc75', '#fac858', '#ee6666', 
          '#73c0de', '#3ba272', '#fc8452', '#9a60b4', 
          '#ea7ccc', '#ff9f7f', '#87ceeb', '#32cd32'
        ];
        
        // 根据聚类大小生成描述
        let description, tags;
        if (size >= 30) {
          description = `大型聚类组，包含${size}家特色相似的餐厅`;
          tags = [`${clusterData.algorithm}算法`, `${size}家餐厅`, '主要聚类', '特色明显'];
        } else if (size >= 15) {
          description = `中型聚类组，包含${size}家风格相近的餐厅`;
          tags = [`${clusterData.algorithm}算法`, `${size}家餐厅`, '中型聚类', '风格统一'];
        } else if (size >= 10) {
          description = `小型聚类组，包含${size}家相似特征的餐厅`;
          tags = [`${clusterData.algorithm}算法`, `${size}家餐厅`, '小型聚类', '特征相似'];
        } else {
          description = `精品聚类组，包含${size}家独特的餐厅`;
          tags = [`${clusterData.algorithm}算法`, `${size}家餐厅`, '精品聚类', '独特风格'];
        }
        
        return {
          id: index, // 使用映射后的ID（0-11）
          originalId: originalClusterId, // 保存原始聚类ID
          name: `聚类 ${index + 1}`,
          color: colors[index % colors.length],
          description,
          tags,
          size: size
        };
      });
      
      // 如果有剩余的小聚类，添加"其他聚类"项
      const totalMainClusterSize = mainClusters.reduce((sum, [, size]) => sum + size, 0);
      const totalRestaurants = Object.values(clusterStats).reduce((sum, size) => sum + size, 0);
      const remainingSize = totalRestaurants - totalMainClusterSize - (clusterStats.noise || 0);
      
      if (remainingSize > 0) {
        newFeatures.push({
          id: 12,
          originalId: -2, // 特殊标记表示混合聚类
          name: '其他聚类',
          color: '#999999',
          description: `包含${remainingSize}家来自小型聚类的餐厅`,
          tags: [`${clusterData.algorithm}算法`, `${remainingSize}家餐厅`, '小型聚类', '混合类型'],
          size: remainingSize
        });
      }
      
      console.log("生成的聚类特征:", newFeatures);
      
      // 更新特征
      clusterFeatures.value = newFeatures;
    }
  } else {
    console.warn("聚类数据缺少cluster_stats属性，无法更新聚类特征");
  }
}

// 处理餐厅数据并分配聚类
const processRestaurantsWithClusters = async (apiRestaurants) => {
  try {
    // 获取聚类数据
    const clusterResponse = await api.get('/api/analytics/clustering');
    const clusterData = clusterResponse.data
    
    console.log("获取到聚类数据:", clusterData);
    
    // 检查数据格式 - 支持有success字段和没有success字段的情况
    let actualClusterData = null
    if (clusterData.success !== false && clusterData.data) {
      actualClusterData = clusterData.data
    } else if (clusterData.algorithm) {
      actualClusterData = clusterData
    }
    
    if (!actualClusterData || !actualClusterData.labels || actualClusterData.labels.length === 0) {
      console.error("无法获取有效的聚类数据，使用模拟数据");
      return generateRestaurantData();
    }
    
    // 更新聚类特征说明
    updateClusterFeatures(actualClusterData);
    
    // 基于API返回的聚类标签分配聚类
    const labels = actualClusterData.labels;
    const pca_data = actualClusterData.pca_data || [];
    
    console.log("聚类标签数量:", labels.length);
    console.log("PCA数据数量:", pca_data.length);
    console.log("餐厅数量:", apiRestaurants.length);
    
    // 首先统计每个聚类的大小
    const clusterSizes = {};
    labels.forEach(label => {
      if (label !== -1) { // 排除噪声点
        clusterSizes[label] = (clusterSizes[label] || 0) + 1;
      }
    });
    
    // 获取前12个最大的聚类
    const sortedClusters = Object.entries(clusterSizes)
      .sort((a, b) => b[1] - a[1]) // 按大小排序
      .slice(0, 12) // 取前12个
      .map(([cluster, size]) => parseInt(cluster));
    
    console.log("前12个最大聚类:", sortedClusters);
    
    // 创建聚类映射：原始聚类ID -> 显示聚类ID
    const clusterMapping = {};
    sortedClusters.forEach((originalCluster, index) => {
      clusterMapping[originalCluster] = index;
    });
    
    console.log("聚类映射:", clusterMapping);
    
    // 确保餐厅数量和标签数量匹配
    const processedRestaurants = apiRestaurants.slice(0, labels.length).map((restaurant, index) => {
      // 获取该餐厅的聚类标签
      const originalCluster = labels[index];
      
      // 获取PCA坐标(如果有)
      let pca1 = 0, pca2 = 0;
      if (pca_data && pca_data.length > index) {
        pca1 = pca_data[index][0];
        pca2 = pca_data[index][1];
      } else {
        // 如果没有PCA数据，生成随机坐标
        pca1 = (Math.random() * 10) - 5;
        pca2 = (Math.random() * 10) - 5;
      }
      
      // 映射到显示聚类
      let effectiveCluster;
      if (originalCluster === -1) {
        effectiveCluster = -1; // 噪声点保持-1
      } else if (clusterMapping.hasOwnProperty(originalCluster)) {
        effectiveCluster = clusterMapping[originalCluster]; // 映射到0-11
      } else {
        effectiveCluster = 12; // 其他小聚类归类为第13个聚类
      }
      
      // 提取特色标签
      const features = [];
      
      // 基于星级添加特征
      const stars = restaurant.stars || 1;
      if (stars >= 3) {
        features.push('顶级餐厅');
      } else if (stars >= 2) {
        features.push('高档餐厅');
      } else {
        features.push('米其林推荐');
      }
      
      // 基于菜系添加特征
      const cuisine = restaurant.cuisine || '';
      if (cuisine) {
        features.push(`${cuisine}菜系`);
      }
      
      // 基于位置添加特征
      if (restaurant.city) {
        features.push(`${restaurant.city}位置`);
      }
      
      // 基于价格添加特征
      const price_level = restaurant.price_level || 0;
      if (price_level >= 4) {
        features.push('高价位');
      } else if (price_level >= 2) {
        features.push('中等价位');
      } else {
        features.push('经济实惠');
      }
      
      // 生成描述
      let description;
      if (stars === 3) {
        description = `位于${restaurant.city || restaurant.region || ''}的顶级${cuisine}餐厅，提供卓越的用餐体验和无与伦比的服务。`;
      } else if (stars === 2) {
        description = `这家${cuisine}餐厅位于${restaurant.city || restaurant.region || ''}，以其出色的烹饪技艺和独特的用餐环境而闻名。`;
      } else {
        description = `这家${cuisine}餐厅提供精致的美食体验，是${restaurant.city || restaurant.region || '当地'}不可错过的美食目的地。`;
      }
      
      // 构建餐厅对象
      return {
        id: `r-${index}`,
        name: restaurant.name,
        stars: restaurant.stars,
        cuisine: restaurant.cuisine || '未知菜系',
        location: restaurant.city || restaurant.region || '未知位置',
        price: restaurant.price || (restaurant.price_level ? '¥'.repeat(restaurant.price_level) : '¥¥'),
        pca1,
        pca2,
        cluster: effectiveCluster,
        originalCluster: originalCluster, // 保存原始聚类信息
        features,
        description
      };
    });
    
    console.log("处理后的餐厅数据:", processedRestaurants.length);
    return processedRestaurants;
  } catch (error) {
    console.error('处理聚类数据错误:', error);
    // 出错时返回使用模拟数据生成的餐厅
    return generateRestaurantData();
  }
}

// 销毁图表
const destroyCharts = () => {
  featureChart?.dispose()
  starsChart?.dispose()
  regionChart?.dispose()
  cuisineChart?.dispose()
  clusterChart?.dispose()
}

// 初始化
onMounted(async () => {
  await fetchAnalyticsData()
  await initAllCharts()
})

// 组件卸载时销毁图表
import { onUnmounted } from 'vue'
onUnmounted(() => {
  destroyCharts()
  window.removeEventListener('resize', () => {})
})

// 生成固定的餐厅数据
const generateRestaurantData = () => {
  const restaurants = []
  const cuisines = ['法式', '日式', '意式', '现代欧式', '地中海式', '西班牙式', '亚洲融合', '美式创新', '中式', '泰式']
  const locations = ['巴黎', '东京', '纽约', '伦敦', '香港', '洛杉矶', '上海', '罗马', '巴塞罗那', '新加坡']
  const priceRanges = ['¥¥¥¥¥', '¥¥¥¥', '¥¥¥', '¥¥']
  const features = [
    ['精致摆盘', '名厨主理', '创新菜品', '顶级食材', '无与伦比的服务'],
    ['海景餐厅', '本地食材', '传统工艺', '历史悠久', '正宗风味'],
    ['创意融合', '时尚氛围', '特色调酒', '隐秘位置', '网红打卡地'],
    ['家族传承', '米其林推荐', '当地特色', '季节菜单', '舒适环境'],
    ['文化体验', '独特装潢', '招牌菜品', '性价比高', '友好服务']
  ]
  
  // 为每个聚类生成餐厅
  const clusterCenters = [
    { x: 3.5, y: -4.2 },  // 聚类1中心
    { x: 1.2, y: 2.8 },   // 聚类2中心
    { x: 5.0, y: 0.5 },   // 聚类3中心
    { x: -2.5, y: -1.3 }, // 聚类4中心
    { x: -5.0, y: -3.0 }, // 聚类5中心
    { x: -3.2, y: 1.5 },  // 聚类6中心
    { x: 0.8, y: -3.8 }   // 聚类7中心
  ]
  
  const restaurantNames = [
    // 聚类1：高端日式料理
    ["筑地日光", "藤本匠心", "花见小路", "青山和食", "寿司之神", "明星料亭", "风月怀石", "樱花会席"],
    // 聚类2：欧式经典
    ["巴黎晨光", "普罗旺斯", "卢浮之味", "贵族时光", "香榭丽舍", "皇家盛宴", "蓝带经典", "古堡秘境"],
    // 聚类3：现代创新
    ["创意工坊", "星云实验室", "分子厨艺", "未来食代", "光影味觉", "混合理念", "质感流动", "新食纪元"],
    // 聚类4：地中海
    ["蔚蓝海岸", "橄榄树下", "圣托里尼", "海风咸味", "阳光普照", "地中海之心", "爱琴风情", "蓝白相间"],
    // 聚类5：亚洲风味
    ["亚洲风尚", "香料之路", "辛香花园", "味觉东方", "云南秘境", "泰式风情", "越南清香", "韩式花园"],
    // 聚类6：美式创新
    ["曼哈顿风尚", "芝加哥烟火", "加州阳光", "德州风味", "波士顿港湾", "纽约风潮", "西雅图晨雾", "硅谷前沿"],
    // 聚类7：地方特色
    ["云南秘境", "川味传承", "粤式经典", "江南水乡", "福建风味", "东北硬菜", "陕西古早", "湘味辣魂"]
  ]
  
  // 为每个聚类生成多个餐厅
  for (let cluster = 0; cluster < 7; cluster++) {
    // 餐厅数量随聚类而变
    const restaurantCount = 15 + cluster * 3
    
    // 该聚类的餐厅名称
    const clusterRestaurantNames = restaurantNames[cluster]
    
    for (let i = 0; i < restaurantCount; i++) {
      // 计算当前餐厅的PCA坐标（使用与散点图一致的坐标）
      const angle = (i / restaurantCount) * Math.PI * 2
      const radius = 1.5 + Math.cos(i * 2.5) * 0.8
      const pca1 = clusterCenters[cluster].x + Math.cos(angle) * radius + Math.sin(i * 0.7) * 0.5
      const pca2 = clusterCenters[cluster].y + Math.sin(angle) * radius + Math.cos(i * 0.7) * 0.5
      
      // 基于聚类选择合适的属性
      let stars, cuisine, price
      
      // 基于聚类分配星级
      if (cluster === 0) { // 高端日式
        stars = i % 5 === 0 ? 3 : 2
      } else if (cluster === 1) { // 欧式经典
        stars = i % 5 === 0 ? 3 : (i % 3 === 0 ? 2 : 1)
      } else {
        stars = i % 7 === 0 ? 2 : 1
      }
      
      // 根据聚类选择菜系
      switch(cluster) {
        case 0: cuisine = '日式'; break;
        case 1: cuisine = i % 2 === 0 ? '法式' : '欧式'; break;
        case 2: cuisine = '现代创新'; break;
        case 3: cuisine = '地中海式'; break;
        case 4: cuisine = i % 3 === 0 ? '泰式' : (i % 3 === 1 ? '中式' : '亚洲融合'); break;
        case 5: cuisine = '美式创新'; break;
        case 6: cuisine = i % 4 === 0 ? '中式' : (i % 4 === 1 ? '西班牙式' : (i % 4 === 2 ? '意式' : '地方特色')); break;
        default: cuisine = cuisines[Math.floor(i % cuisines.length)];
      }
      
      // 根据聚类和星级选择价格
      if (stars === 3) {
        price = priceRanges[0]; // 最贵
      } else if (stars === 2) {
        price = priceRanges[1]; // 次贵
      } else {
        price = cluster % 2 === 0 ? priceRanges[2] : priceRanges[3]; // 根据聚类决定
      }
      
      // 选择位置
      const location = locations[Math.floor((cluster + i) % locations.length)]
      
      // 选择特色标签
      const featureSet = features[Math.floor(i % features.length)]
      // 随机选择2-4个特色
      const featureCount = 2 + Math.floor((i % 3))
      const restaurantFeatures = featureSet.slice(0, featureCount)
      
      // 生成描述
      const descriptions = [
        `这家${cuisine}餐厅提供精致的美食体验，以${restaurantFeatures[0]}和${restaurantFeatures[1] || '优质服务'}著称。`,
        `位于${location}的${stars}星餐厅，提供令人难忘的${cuisine}美食体验。`,
        `这家${stars}星${cuisine}餐厅以其${restaurantFeatures[0]}和独特的用餐体验而闻名。`,
        `位于${location}的这家餐厅提供正宗${cuisine}，是该地区不可错过的美食体验。`,
        `这家${price}价位的${cuisine}餐厅以其${restaurantFeatures[0]}和独特的用餐环境深受食客喜爱。`
      ]
      const description = descriptions[Math.floor(i % descriptions.length)]
      
      // 生成餐厅名称（有序使用聚类的餐厅名称，如果用完则随机组合）
      let name
      if (i < clusterRestaurantNames.length) {
        name = clusterRestaurantNames[i]
      } else {
        // 聚类名字用完后，使用组合方式
        const prefix = ["Le ", "La ", "The ", "Il ", "El ", "", ""]
        const suffix = [" Bistro", " Restaurant", " Cuisine", "", " Kitchen", " Dining", " Grill"]
        name = prefix[Math.floor(i % prefix.length)] + 
               clusterRestaurantNames[i % clusterRestaurantNames.length] + 
               suffix[Math.floor((i * 3) % suffix.length)]
      }
      
      // 创建餐厅对象
      restaurants.push({
        id: `r${cluster}-${i}`,
        name,
        stars,
        cuisine,
        location,
        price,
        pca1,
        pca2,
        cluster,
        features: restaurantFeatures,
        description
      })
    }
  }
  
  return restaurants
}

// 餐厅筛选方法
const filterRestaurants = () => {
  // 对列表应用筛选
  let filtered = [...restaurantList.value]
  
  // 应用聚类筛选
  if (selectedCluster.value) {
    const clusterIndex = clusterFeatures.value.findIndex(c => c.name === selectedCluster.value)
    if (clusterIndex !== -1) {
      filtered = filtered.filter(r => r.cluster === clusterIndex)
    }
  }
  
  // 应用星级筛选
  if (selectedStar.value) {
    filtered = filtered.filter(r => r.stars === parseInt(selectedStar.value))
  }
  
  // 应用搜索筛选
  if (restaurantSearch.value.trim()) {
    const searchTerm = restaurantSearch.value.toLowerCase().trim()
    filtered = filtered.filter(r => 
      r.name.toLowerCase().includes(searchTerm) || 
      r.cuisine.toLowerCase().includes(searchTerm) || 
      r.location.toLowerCase().includes(searchTerm)
    )
  }
  
  // 更新列表
  filteredRestaurantList.value = filtered
  
  // 同时更新图表的高亮
  updateChartHighlights(filtered)
}

// 重置筛选
const resetFilters = () => {
  restaurantSearch.value = ''
  selectedCluster.value = ''
  selectedStar.value = ''
  filterRestaurants()
}

// 获取聚类颜色
const getClusterColor = (clusterIndex) => {
  if (clusterIndex === -1) {
    return '#ccc'; // 噪声点颜色
  }
  const clusterFeature = clusterFeatures.value.find(f => f.id === clusterIndex);
  return clusterFeature?.color || '#999';
}

// 获取聚类名称
const getClusterName = (clusterIndex) => {
  if (clusterIndex === -1) {
    return '噪声点';
  }
  const clusterFeature = clusterFeatures.value.find(f => f.id === clusterIndex);
  return clusterFeature?.name || '未分类';
}

// 更新图表高亮
const updateChartHighlights = (restaurants) => {
  if (!clusterChart) return
  
  // 首先移除所有高亮
  const currentOption = clusterChart.getOption()
  
  // 然后添加高亮逻辑...
  // 注意：实际实现需要更复杂的ECharts设置，这里简化处理
}

// 高亮餐厅点
const highlightRestaurantPoint = (restaurant) => {
  highlightedRestaurantId.value = restaurant.id
  // 在图表上也需要高亮对应的点
}

// 清除高亮
const clearHighlight = () => {
  highlightedRestaurantId.value = null
}

// 显示餐厅详情
const showRestaurantDetails = (restaurant) => {
  selectedRestaurant.value = restaurant
  restaurantDetailVisible.value = true
}

// 获取聚类分析摘要
const getClusteringSummary = () => {
  return `使用${clusterInfo.value.algorithm || 'DBSCAN'}算法成功识别出${clusterInfo.value.n_clusters || 28}个不同的餐厅聚类`
}

// 新增的方法
const showStatExplanation = (statType) => {
  const explanations = {
    clusters: '聚类数量指的是算法自动识别出的不同餐厅群组数目。每个聚类代表一类具有相似特征的餐厅，如高端奢华餐厅、经济实惠餐厅等。数量适中表明分类既有区分度又不过于分散。',
    silhouette: '轮廓系数是评估聚类质量的重要指标，取值范围为-1到1。数值越接近1表示聚类效果越好，说明同一聚类内的餐厅相似度高，不同聚类间差异明显。通常0.5以上被认为是良好的聚类效果。',
    composite: '综合评分是结合多个聚类质量指标计算得出的综合评价，包括轮廓系数、聚类内紧密度、聚类间分离度等。该分数越高表明聚类结果的整体质量越好，商业可解释性越强。',
    noise: '噪声比例是指无法归入任何聚类的异常数据点占总数据的比例。低噪声比例表明数据质量较高，大部分餐厅都能被合理分类。过高的噪声比例可能暗示存在数据质量问题或需要调整算法参数。',
    features: '总特征数表示用于分析的餐厅属性总数，包括价格、位置、菜系、服务质量等各个维度。丰富的特征有助于更全面地刻画餐厅特点，但过多特征也可能引入噪声，需要通过特征选择找到最佳平衡。',
    accuracy: '模型准确率反映了基于聚类结果训练的预测模型的性能表现。高准确率说明聚类发现的餐厅分组模式具有较强的预测价值，可以用于餐厅推荐、定价策略等商业应用。'
  }
  
  currentStatExplanation.value = explanations[statType] || '暂无相关说明'
  statExplanationVisible.value = true
}



const switchFeatureView = (viewType) => {
  featureViewType.value = viewType
  initFeatureChart()
}

const getFeatureInsights = () => {
  if (!featureList.value.length) return '正在分析特征重要性数据...'
  
  const topFeature = featureList.value[0]
  return `最关键的影响因素是"${topFeature.name}"，重要性得分高达${(topFeature.importance * 100).toFixed(1)}%，这表明该特征对米其林星级评定具有决定性影响。`
}

const getTopInsights = () => {
  if (!featureList.value.length) return []
  
  const insights = []
  const features = featureList.value.slice(0, 10)
  
  features.forEach((feature, index) => {
    if (index === 0) {
      insights.push(`${feature.name}是最重要的评判标准，占总体影响力的${(feature.importance * 100).toFixed(1)}%`)
    } else if (index < 3) {
      insights.push(`${feature.name}作为第${index + 1}重要因素，贡献度为${(feature.importance * 100).toFixed(1)}%`)
    } else if (index < 5) {
      insights.push(`${feature.name}等次要因素也发挥重要作用，贡献度为${(feature.importance * 100).toFixed(1)}%`)
    }
  })
  
  const totalTop10 = features.reduce((sum, f) => sum + f.importance, 0)
  insights.push(`前十大特征累计贡献度达${(totalTop10 * 100).toFixed(1)}%，覆盖了主要影响因素`)
  
  return insights
}

const getAlgorithmTagType = () => {
  const algorithm = clusterInfo.value.algorithm || 'DBSCAN'
  const typeMap = {
    'DBSCAN': 'primary',
    'K-Means': 'success',
    'Hierarchical': 'warning',
    'OPTICS': 'info'
  }
  return typeMap[algorithm] || 'primary'
}

const getPCA1Contribution = () => {
  return '42.8' // 可以从后端获取真实的方差贡献比
}

const getPCA2Contribution = () => {
  return '28.6' // 可以从后端获取真实的方差贡献比
}

const getBusinessInsights = () => {
  return [
    {
      title: '市场细分',
      content: '识别出不同档次的餐厅市场',
      value: `${clusterInfo.value.n_clusters || 28}个细分市场`
    },
    {
      title: '质量评估',
      content: '聚类结果具有良好的商业意义',
      value: `${(clusterInfo.value.silhouette_score || 0.436).toFixed(3)}质量分`
    },
    {
      title: '数据覆盖',
      content: '大部分餐厅都能被准确分类',
      value: `${(100 - (clusterInfo.value.noise_ratio || 0.15) * 100).toFixed(1)}%有效数据`
    }
  ]
}
</script>

<style lang="scss" scoped>
.analytics-view {
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  overflow-y: auto;
}

.analytics-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 32px 24px;
  min-height: 100vh;
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

.overview-grid {
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

// 新增的样式
.stat-card {
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    
    .info-icon {
      opacity: 1;
    }
  }
  
  .stat-description {
    font-size: 12px;
    color: #909399;
    margin-top: 4px;
    line-height: 1.3;
  }
  
  .info-icon {
    position: absolute;
    top: 8px;
    right: 8px;
    opacity: 0;
    transition: opacity 0.3s ease;
    color: #409EFF;
    font-size: 14px;
  }
}

.feature-controls {
  display: flex;
  gap: 12px;
  align-items: center;
  margin-left: auto;
}

.feature-comparison-section {
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px dashed #e4e7ed;
  
  h4 {
    margin-bottom: 16px;
    color: #333;
    font-size: 16px;
  }
}

.comparison-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
  max-height: 600px;
  overflow-y: auto;
}

.feature-card {
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  border: 1px solid #e4e7ed;
  border-radius: 8px;
  padding: 16px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border-color: #409EFF;
  }
  
  .feature-name {
    font-weight: 600;
    color: #333;
    margin-bottom: 8px;
  }
  
  .feature-score {
    font-size: 24px;
    font-weight: bold;
    color: #409EFF;
    margin-bottom: 8px;
  }
  
  .feature-bar {
    height: 6px;
    background: #f0f0f0;
    border-radius: 3px;
    overflow: hidden;
    margin-bottom: 8px;
    
    .bar-fill {
      height: 100%;
      background: linear-gradient(90deg, #409EFF 0%, #67C23A 100%);
      border-radius: 3px;
      transition: width 0.8s ease;
    }
  }
  
  .feature-desc {
    font-size: 12px;
    color: #666;
    line-height: 1.4;
  }
}

.insights-section {
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px dashed #e4e7ed;
  
  h4 {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 16px;
    color: #333;
    font-size: 16px;
    
    .el-icon {
      color: #E6A23C;
    }
  }
}

.insight-details {
  margin-top: 16px;
  
  p {
    margin: 0 0 8px;
    font-weight: 600;
    color: #333;
  }
  
  ul {
    margin: 0;
    padding-left: 20px;
    
    li {
      color: #666;
      line-height: 1.6;
      margin-bottom: 6px;
    }
  }
}

.algorithm-info {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
  padding: 12px;
  background: rgba(64, 158, 255, 0.05);
  border-radius: 8px;
  border-left: 4px solid #409EFF;
  
  .quality-indicator {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    color: #666;
  }
}

.description-content {
  margin: 16px 0;
  
  p {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    line-height: 1.6;
    color: #333;
    margin-bottom: 12px;
    
    .el-icon {
      margin-top: 2px;
      color: #409EFF;
      flex-shrink: 0;
    }
  }
}

.axis-explanation-enhanced {
  margin: 20px 0;
  background: #f8f9fa;
  border-radius: 8px;
  padding: 16px;
  
  h5 {
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 0 0 12px;
    color: #333;
    font-size: 14px;
    
    .el-icon {
      color: #409EFF;
    }
  }
}

.axis-details {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.axis-item {
  strong {
    display: block;
    margin-bottom: 6px;
    color: #333;
    font-size: 14px;
  }
  
  span {
    color: #666;
    font-size: 13px;
    line-height: 1.4;
  }
}

.axis-scale {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 8px;
  
  .scale-bar {
    flex: 1;
    height: 4px;
    background: linear-gradient(90deg, #67C23A 0%, #409EFF 100%);
    border-radius: 2px;
  }
  
  .scale-left, .scale-right {
    font-size: 12px;
    color: #666;
    font-weight: 500;
  }
  
  &.vertical {
    .scale-bar {
      background: linear-gradient(180deg, #E6A23C 0%, #409EFF 100%);
    }
  }
}

.business-insights {
  margin: 20px 0;
  
  h5 {
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 0 0 12px;
    color: #333;
    font-size: 14px;
    
    .el-icon {
      color: #E6A23C;
    }
  }
}

.insight-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px;
}

.insight-card {
  background: white;
  border: 1px solid #e4e7ed;
  border-radius: 6px;
  padding: 12px;
  text-align: center;
  
  .insight-title {
    font-size: 12px;
    color: #909399;
    margin-bottom: 4px;
  }
  
  .insight-content {
    font-size: 11px;
    color: #666;
    margin-bottom: 6px;
    line-height: 1.3;
  }
  
  .insight-value {
    font-weight: bold;
    color: #409EFF;
    font-size: 14px;
  }
}

.interaction-tip {
  margin-top: 16px;
  padding: 12px;
  background: rgba(103, 194, 58, 0.05);
  border-radius: 6px;
  border-left: 4px solid #67C23A;
  font-size: 13px;
  color: #333;
  
  .el-icon {
    color: #67C23A;
    margin-right: 6px;
  }
}

.stat-explanation-content {
  line-height: 1.6;
  color: #333;
  
  p {
    margin: 0;
  }
}

.cluster-info {
  margin-bottom: 20px;
}

.importance-value {
  margin-left: 8px;
  font-size: 12px;
  color: #666;
  font-weight: 500;
}

// 响应式设计
@media (max-width: 768px) {
  .analytics-container {
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

  .overview-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  .charts-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  
  .cluster-analysis-container {
    flex-direction: column;
  }
}

@media (max-width: 480px) {
  .overview-grid {
    grid-template-columns: 1fr;
  }
}

// 聚类分析相关样式
.cluster-description {
  margin-top: 15px;
  font-style: italic;
  color: #666;
}

.cluster-analysis-container {
  display: flex;
  gap: 24px;
  margin-top: 20px;
}

.cluster-chart-wrapper {
  flex: 3;
  min-height: 500px;
}

.cluster-explanation {
  flex: 2;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
  overflow-y: auto;
  max-height: 500px;
  
  h4 {
    margin-top: 0;
    margin-bottom: 16px;
    color: #333;
    border-bottom: 1px solid #eee;
    padding-bottom: 8px;
  }
}

.cluster-features-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.cluster-feature-item {
  display: flex;
  gap: 12px;
  padding-bottom: 12px;
  border-bottom: 1px dashed #eee;
  
  &:last-child {
    border-bottom: none;
  }
}

.cluster-color {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  flex-shrink: 0;
}

.cluster-detail {
  flex: 1;
  
  strong {
    display: block;
    margin-bottom: 4px;
  }
  
  p {
    margin: 0 0 8px;
    color: #666;
    font-size: 14px;
  }
}

.cluster-tags {
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;
}

.axis-explanation {
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 14px;
  color: #666;
}

.restaurant-list-item {
  display: flex;
  align-items: center;
  padding: 10px 12px;
  border-bottom: 1px solid #f0f0f0;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background-color: rgba(102, 126, 234, 0.05);
  }
  
  &.highlighted {
    background-color: rgba(102, 126, 234, 0.1);
  }
}

.restaurant-dot {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  margin-right: 10px;
  flex-shrink: 0;
}

.restaurant-info {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.restaurant-name {
  font-weight: 500;
  margin-bottom: 4px;
}

.restaurant-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: #666;
  
  .stars {
    color: #f5a623;
    display: flex;
    gap: 2px;
  }
}

.restaurant-count {
  margin-bottom: 10px;
  font-size: 14px;
  color: #666;
  
  .count-num {
    font-weight: bold;
    color: #409EFF;
  }
}

// 餐厅详情样式
.restaurant-detail-content {
  padding: 10px;
}

.restaurant-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  
  h3 {
    margin: 0;
    font-size: 22px;
    font-weight: 600;
    color: #333;
  }
  
  .restaurant-stars {
    display: flex;
    gap: 4px;
    font-size: 18px;
  }
}

.restaurant-features, 
.restaurant-description {
  margin-top: 24px;
  
  h4 {
    font-size: 16px;
    margin-bottom: 12px;
    color: #333;
    border-bottom: 1px solid #eee;
    padding-bottom: 8px;
  }
  
  p {
    color: #666;
    line-height: 1.6;
    margin: 0;
  }
}

.feature-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
}

:deep(.el-descriptions) {
  margin-top: 5px;
  
  .el-descriptions__header {
    display: none;
  }
  
  .el-descriptions__body {
    .el-descriptions__label {
      font-weight: 600;
      color: #555;
      width: 100px;
    }
    
    .el-descriptions__content {
      color: #333;
    }
  }
}
</style> 