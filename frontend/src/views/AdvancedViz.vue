<template>
  <div class="advanced-viz">
    <div class="page-header">
      <h1 class="page-title">
        <i class="el-icon-data-analysis"></i>
        高级可视化
      </h1>
      <p class="page-description">探索米其林餐厅数据的多维度视角和深层关联</p>
    </div>

    <!-- 可视化选项卡 -->
    <el-tabs v-model="activeTab" class="viz-tabs" @tab-change="handleTabChange">
      <!-- 3D散点图 -->
      <el-tab-pane label="3D多维分析" name="scatter3d">
        <div class="tab-content">
          <Scatter3DChart
            v-if="activeTab === 'scatter3d'"
            ref="scatter3dRef"
            title="餐厅多维度3D分布"
            :height="600"
            :data="filteredRestaurants"
            @pointClick="handleScatter3DClick"
            @axisChange="handleAxisChange"
          />
        </div>
      </el-tab-pane>

      <!-- 网络关系图 -->
      <el-tab-pane label="关系网络" name="network">
        <div class="tab-content">
          <NetworkChart
            v-if="activeTab === 'network'"
            ref="networkRef"
            title="餐厅关系网络分析"
            :height="600"
            :data="filteredRestaurants"
            :maxNodes="80"
            @nodeClick="handleNodeClick"
            @linkClick="handleLinkClick"
            @relationshipChange="handleRelationshipChange"
          />
        </div>
      </el-tab-pane>

      <!-- 雷达图 -->
      <el-tab-pane label="特征雷达" name="radar">
        <div class="tab-content">
          <div class="radar-controls" v-if="activeTab === 'radar'">
            <el-select
              v-model="radarMode"
              placeholder="选择对比模式"
              @change="updateRadarChart"
            >
              <el-option label="星级对比" value="star" />
              <el-option label="地区对比" value="region" />
              <el-option label="年份对比" value="year" />
            </el-select>
            <el-button @click="addRadarComparison" :disabled="radarData.length >= 5">
              <i class="el-icon-plus"></i>
              添加对比
            </el-button>
          </div>
          <RadarChart
            v-if="activeTab === 'radar'"
            ref="radarRef"
            title="多维度特征对比"
            :height="500"
            :data="radarData"
            :indicators="radarIndicators"
          />
        </div>
      </el-tab-pane>

      <!-- 热力图 -->
      <el-tab-pane label="密度热力" name="heatmap">
        <div class="tab-content">
          <HeatmapChart
            v-if="activeTab === 'heatmap'"
            ref="heatmapRef"
            title="全球餐厅密度分布"
            :height="600"
            :data="filteredRestaurants"
            @areaClick="handleAreaClick"
          />
        </div>
      </el-tab-pane>

      <!-- 旭日图 -->
      <el-tab-pane label="层次结构" name="sunburst">
        <div class="tab-content">
          <SunburstChart
            v-if="activeTab === 'sunburst'"
            ref="sunburstRef"
            title="餐厅层次化分布"
            :height="600"
            :data="filteredRestaurants"
            @itemClick="handleSunburstClick"
          />
        </div>
      </el-tab-pane>

      <!-- 时间轴 -->
      <el-tab-pane label="时间演变" name="timeline">
        <div class="tab-content">
          <TimelineChart
            v-if="activeTab === 'timeline'"
            ref="timelineRef"
            title="米其林餐厅历史发展"
            :height="500"
            :data="filteredRestaurants"
            @yearClick="handleYearClick"
          />
        </div>
      </el-tab-pane>
      
      <!-- 帕累托图 -->
      <el-tab-pane label="帕累托分析" name="pareto">
        <div class="tab-content">
          <ParetoChart
            v-if="activeTab === 'pareto'"
            ref="paretoRef"
            title="餐厅分布帕累托分析"
            :height="500"
            :data="filteredRestaurants"
            @itemClick="handleParetoClick"
          />
        </div>
      </el-tab-pane>
      
      <!-- 箱线图 -->
      <el-tab-pane label="分布分析" name="boxplot">
        <div class="tab-content">
          <BoxPlotChart
            v-if="activeTab === 'boxplot'"
            ref="boxplotRef"
            title="餐厅数据分布分析"
            :height="500"
            :data="filteredRestaurants"
            @outlierClick="handleOutlierClick"
            @categoryClick="handleCategoryClick"
          />
        </div>
      </el-tab-pane>
    </el-tabs>

    <!-- 详情弹窗 -->
    <el-dialog
      v-model="detailVisible"
      :title="selectedRestaurant?.restaurant_name || '餐厅详情'"
      width="600px"
      custom-class="detail-dialog"
    >
      <div v-if="selectedRestaurant" class="restaurant-detail">
        <div class="detail-section">
          <h3>基本信息</h3>
          <div class="detail-grid">
            <div class="detail-item">
              <span class="label">星级评定：</span>
              <span class="value">
                <span v-for="i in selectedRestaurant.stars" :key="i" class="star">⭐</span>
              </span>
            </div>
            <div class="detail-item">
              <span class="label">获奖年份：</span>
              <span class="value">{{ selectedRestaurant.year }}</span>
            </div>
            <div class="detail-item">
              <span class="label">菜系类型：</span>
              <span class="value">{{ selectedRestaurant.cuisine || 'N/A' }}</span>
            </div>
            <div class="detail-item">
              <span class="label">价格等级：</span>
              <span class="value">{{ selectedRestaurant.price || 'N/A' }}</span>
            </div>
          </div>
        </div>
        
        <div class="detail-section">
          <h3>地理位置</h3>
          <div class="detail-grid">
            <div class="detail-item">
              <span class="label">城市：</span>
              <span class="value">{{ selectedRestaurant.city }}</span>
            </div>
            <div class="detail-item">
              <span class="label">地区：</span>
              <span class="value">{{ selectedRestaurant.region }}</span>
            </div>
            <div class="detail-item">
              <span class="label">邮编：</span>
              <span class="value">{{ selectedRestaurant.zip_code || 'N/A' }}</span>
            </div>
            <div class="detail-item">
              <span class="label">坐标：</span>
              <span class="value">
                {{ Number(selectedRestaurant.latitude).toFixed(4) }}, 
                {{ Number(selectedRestaurant.longitude).toFixed(4) }}
              </span>
            </div>
          </div>
        </div>

        <div class="detail-section" v-if="selectedRestaurant.url">
          <h3>更多信息</h3>
          <el-button
            type="primary"
            size="small"
            @click="openRestaurantUrl"
          >
            <i class="el-icon-link"></i>
            访问餐厅官网
          </el-button>
        </div>
      </div>
    </el-dialog>

    <!-- 筛选面板 -->
    <div class="filter-panel">
      <el-card shadow="hover">
        <div class="filter-header">
          <h3>数据筛选</h3>
          <el-button
            text
            @click="resetFilters"
            class="reset-btn"
          >
            <i class="el-icon-refresh-left"></i>
            重置
          </el-button>
        </div>
        
        <div class="filter-content">
          <div class="filter-item">
            <label>星级筛选</label>
            <el-checkbox-group v-model="filters.stars">
              <el-checkbox :value="1">一星</el-checkbox>
              <el-checkbox :value="2">二星</el-checkbox>
              <el-checkbox :value="3">三星</el-checkbox>
            </el-checkbox-group>
          </div>
          
          <div class="filter-item">
            <label>年份范围</label>
            <el-slider
              v-model="filters.yearRange"
              range
              :min="1900"
              :max="2024"
              :marks="yearMarks"
            />
          </div>
          
          <div class="filter-item">
            <label>价格等级</label>
            <el-select
              v-model="filters.priceLevel"
              multiple
              placeholder="全部价格"
              collapse-tags
            >
              <el-option label="$" value="$" />
              <el-option label="$$" value="$$" />
              <el-option label="$$$" value="$$$" />
              <el-option label="$$$$" value="$$$$" />
              <el-option label="$$$$$" value="$$$$$" />
            </el-select>
          </div>
          
          <div class="filter-item">
            <label>地区选择</label>
            <el-cascader
              v-model="filters.location"
              :options="locationOptions"
              :props="{ multiple: true, checkStrictly: true }"
              collapse-tags
              clearable
              placeholder="选择地区"
            />
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, reactive, nextTick } from 'vue'
import { useDataStore } from '@/store/data'
import { ElMessage } from 'element-plus'

// 导入所有可视化组件
import Scatter3DChart from '@/components/charts/Scatter3DChart.vue'
import NetworkChart from '@/components/charts/NetworkChart.vue'
import RadarChart from '@/components/charts/RadarChart.vue'
import HeatmapChart from '@/components/charts/HeatmapChart.vue'
import SunburstChart from '@/components/charts/SunburstChart.vue'
import TimelineChart from '@/components/charts/TimelineChart.vue'
import ParetoChart from '@/components/charts/ParetoChart.vue'
import BoxPlotChart from '@/components/charts/BoxPlotChart.vue'

const dataStore = useDataStore()

// 组件引用
const scatter3dRef = ref()
const networkRef = ref()
const radarRef = ref()
const heatmapRef = ref()
const sunburstRef = ref()
const timelineRef = ref()
const paretoRef = ref()
const boxplotRef = ref()

// 响应式数据
const activeTab = ref('scatter3d')
const detailVisible = ref(false)
const selectedRestaurant = ref(null)
const radarMode = ref('star')
const radarData = ref([])
const radarIndicators = ref([
  { name: '价格指数', max: 5 },
  { name: '获奖年限', max: 50 },
  { name: '地理分布', max: 10 },
  { name: '菜系多样性', max: 10 },
  { name: '星级评分', max: 3 }
])

// 筛选条件
const filters = reactive({
  stars: [1, 2, 3],
  yearRange: [1900, 2024],
  priceLevel: [],
  location: []
})

// 年份标记
const yearMarks = {
  1900: '1900',
  1950: '1950',
  2000: '2000',
  2024: '2024'
}

// 地区选项（动态生成）
const locationOptions = computed(() => {
  const regions = new Map()
  
  dataStore.restaurants.forEach(restaurant => {
    const region = restaurant.region
    const city = restaurant.city
    
    if (region && city) {
      if (!regions.has(region)) {
        regions.set(region, new Set())
      }
      regions.get(region).add(city)
    }
  })
  
  return Array.from(regions.entries()).map(([region, cities]) => ({
    value: region,
    label: region,
    children: Array.from(cities).map(city => ({
      value: city,
      label: city
    }))
  }))
})

// 筛选后的餐厅数据
const filteredRestaurants = computed(() => {
  return dataStore.restaurants.filter(restaurant => {
    // 星级筛选
    if (!filters.stars.includes(restaurant.stars)) {
      return false
    }
    
    // 年份筛选
    const year = parseInt(restaurant.year)
    if (year < filters.yearRange[0] || year > filters.yearRange[1]) {
      return false
    }
    
    // 价格筛选
    if (filters.priceLevel.length > 0 && !filters.priceLevel.includes(restaurant.price)) {
      return false
    }
    
    // 地区筛选
    if (filters.location.length > 0) {
      const locationMatch = filters.location.some(loc => {
        if (Array.isArray(loc)) {
          return loc[0] === restaurant.region || loc[1] === restaurant.city
        }
        return loc === restaurant.region || loc === restaurant.city
      })
      if (!locationMatch) {
        return false
      }
    }
    
    return true
  })
})

// 选项卡切换处理
const handleTabChange = async (tabName) => {
  console.log('切换到选项卡:', tabName)
  
  // 等待DOM更新
  await nextTick()
  
  // 延迟一点时间确保选项卡内容完全渲染
  setTimeout(() => {
    // 根据选项卡名称初始化对应的图表
    switch (tabName) {
      case 'scatter3d':
        scatter3dRef.value?.refresh?.()
        break
      case 'network':
        networkRef.value?.refresh?.()
        break
      case 'radar':
        radarRef.value?.refresh?.()
        break
      case 'heatmap':
        heatmapRef.value?.refresh?.()
        break
      case 'sunburst':
        sunburstRef.value?.refresh?.()
        break
      case 'timeline':
        timelineRef.value?.refresh?.()
        break
      case 'pareto':
        paretoRef.value?.refresh?.()
        break
      case 'boxplot':
        boxplotRef.value?.refresh?.()
        break
    }
  }, 300)
}

// 事件处理器
const handleScatter3DClick = (data) => {
  selectedRestaurant.value = data.data
  detailVisible.value = true
}

const handleNodeClick = (data) => {
  selectedRestaurant.value = data.data
  detailVisible.value = true
}

const handleLinkClick = (data) => {
  ElMessage.info(`关系强度: ${data.value}`)
}

const handleAreaClick = (data) => {
  ElMessage.info(`区域: ${data.name}, 餐厅数量: ${data.value}`)
}

const handleSunburstClick = (data) => {
  if (data.data && data.data.restaurant_name) {
    selectedRestaurant.value = data.data
    detailVisible.value = true
  }
}

const handleYearClick = (year) => {
  ElMessage.info(`${year}年新增餐厅数量查看中`)
}

// 处理帕累托点击
const handleParetoClick = ({ category, type, count, percentage }) => {
  ElMessage.info(`${category}: ${count}家餐厅 (${percentage.toFixed(1)}%)`)
  
  // 根据类型更新筛选条件
  if (type === 'region' && category) {
    // 如果地区不在筛选列表中，添加它
    const regionExists = filters.location.some(loc => {
      return Array.isArray(loc) ? loc[0] === category : loc === category
    })
    
    if (!regionExists) {
      filters.location.push(category)
      ElMessage.success(`已添加筛选条件：${category}`)
    }
  }
}

// 处理异常值点击
const handleOutlierClick = ({ category, value, restaurant }) => {
  if (restaurant) {
    selectedRestaurant.value = restaurant
    detailVisible.value = true
  } else {
    ElMessage.info(`发现异常值：${category} - ${value}`)
  }
}

// 处理箱线图类别点击
const handleCategoryClick = ({ category, stats }) => {
  ElMessage.info({
    message: `${category}统计信息：\n最小值: ${stats.min}\n下四分位: ${stats.q1}\n中位数: ${stats.median}\n上四分位: ${stats.q3}\n最大值: ${stats.max}`,
    duration: 5000,
    showClose: true
  })
}

const handleAxisChange = (axes) => {
  console.log('坐标轴切换:', axes)
}

const handleRelationshipChange = (type) => {
  ElMessage.success(`切换到${type}关系视图`)
}

// 打开餐厅官网
const openRestaurantUrl = () => {
  if (selectedRestaurant.value?.url) {
    window.open(selectedRestaurant.value.url, '_blank')
  }
}

// 重置筛选条件
const resetFilters = () => {
  filters.stars = [1, 2, 3]
  filters.yearRange = [1900, 2024]
  filters.priceLevel = []
  filters.location = []
  ElMessage.success('筛选条件已重置')
}

// 更新雷达图数据
const updateRadarChart = () => {
  const newData = generateRadarData(radarMode.value)
  radarData.value = Array.isArray(newData) ? newData : [newData]
}

// 添加雷达图对比
const addRadarComparison = () => {
  const newData = generateRadarData(radarMode.value, radarData.value.length)
  if (newData) {
    radarData.value.push(newData)
    ElMessage.success('已添加新的对比项')
  }
}

// 生成雷达图数据
const generateRadarData = (mode, index = 0) => {
  const colors = ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A']
  const restaurants = filteredRestaurants.value
  
  if (restaurants.length === 0) return null
  
  switch (mode) {
    case 'star':
      const starGroups = {}
      restaurants.forEach(r => {
        if (!starGroups[r.stars]) starGroups[r.stars] = []
        starGroups[r.stars].push(r)
      })
      
      return Object.entries(starGroups).map(([stars, group], i) => ({
        name: `${stars}星餐厅`,
        value: calculateRadarValues(group),
        itemStyle: { color: colors[i % colors.length] }
      }))[index] || null
      
    case 'region':
      const regions = [...new Set(restaurants.map(r => r.region))]
      if (index >= regions.length) return null
      
      const regionRestaurants = restaurants.filter(r => r.region === regions[index])
      return {
        name: regions[index],
        value: calculateRadarValues(regionRestaurants),
        itemStyle: { color: colors[index % colors.length] }
      }
      
    case 'year':
      const yearGroups = ['1900-1950', '1951-1980', '1981-2000', '2001-2010', '2011-2024']
      if (index >= yearGroups.length) return null
      
      const [startYear, endYear] = yearGroups[index].split('-').map(Number)
      const yearRestaurants = restaurants.filter(r => {
        const year = parseInt(r.year)
        return year >= startYear && year <= endYear
      })
      
      return {
        name: yearGroups[index],
        value: calculateRadarValues(yearRestaurants),
        itemStyle: { color: colors[index % colors.length] }
      }
  }
}

// 计算雷达图指标值
const calculateRadarValues = (restaurants) => {
  if (restaurants.length === 0) return [0, 0, 0, 0, 0]
  
  // 价格指数
  const avgPrice = restaurants.reduce((sum, r) => {
    const priceLevel = (r.price || '$').length
    return sum + priceLevel
  }, 0) / restaurants.length
  
  // 获奖年限
  const avgAge = restaurants.reduce((sum, r) => {
    return sum + (2024 - parseInt(r.year))
  }, 0) / restaurants.length
  
  // 地理分布
  const uniqueRegions = new Set(restaurants.map(r => r.region)).size
  
  // 菜系多样性
  const uniqueCuisines = new Set(restaurants.map(r => r.cuisine).filter(c => c)).size
  
  // 星级评分
  const avgStars = restaurants.reduce((sum, r) => sum + r.stars, 0) / restaurants.length
  
  return [
    avgPrice,
    avgAge / 10, // 缩放到合理范围
    Math.min(uniqueRegions, 10),
    Math.min(uniqueCuisines, 10),
    avgStars
  ]
}

// 生命周期
onMounted(async () => {
  try {
    await dataStore.fetchRestaurants()
    
    // 等待DOM完全渲染
    await nextTick()
    
    // 延迟一点时间确保所有组件容器都已准备好
    setTimeout(() => {
      // 初始化雷达图数据
      updateRadarChart()
    }, 300)
  } catch (error) {
    console.error('Failed to initialize AdvancedViz:', error)
  }
})
</script>

<style scoped>
.advanced-viz {
  padding: 24px;
  min-height: calc(100vh - 64px);
  background: var(--bg-page);
  position: relative;
}

.page-header {
  margin-bottom: 24px;
  text-align: center;
}

.page-title {
  font-size: 32px;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0 0 8px 0;
}

.page-title i {
  font-size: 36px;
  margin-right: 12px;
  color: var(--primary-color);
}

.page-description {
  font-size: 16px;
  color: var(--text-secondary);
  margin: 0;
}

/* 选项卡样式 */
.viz-tabs {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: var(--shadow-card);
  margin-right: 320px;
}

.viz-tabs :deep(.el-tabs__header) {
  margin-bottom: 24px;
}

.viz-tabs :deep(.el-tabs__item) {
  font-size: 16px;
  font-weight: 500;
  height: 44px;
  line-height: 44px;
}

.viz-tabs :deep(.el-tabs__item.is-active) {
  color: var(--primary-color);
}

.tab-content {
  padding: 16px 0;
}

/* 雷达图控制面板 */
.radar-controls {
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
}

.radar-controls .el-select {
  width: 180px;
}

/* 筛选面板 */
.filter-panel {
  position: fixed;
  right: 24px;
  top: 88px;
  width: 280px;
  z-index: 10;
}

.filter-panel .el-card {
  border-radius: 12px;
}

.filter-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.filter-header h3 {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
}

.reset-btn {
  color: var(--primary-color);
}

.filter-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.filter-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.filter-item label {
  font-size: 14px;
  font-weight: 500;
  color: var(--text-secondary);
}

.filter-item .el-checkbox-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.filter-item .el-select,
.filter-item .el-cascader {
  width: 100%;
}

/* 详情弹窗 */
.detail-dialog :deep(.el-dialog__header) {
  text-align: center;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--border-color);
}

.restaurant-detail {
  padding: 20px 0;
}

.detail-section {
  margin-bottom: 24px;
}

.detail-section:last-child {
  margin-bottom: 0;
}

.detail-section h3 {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0 0 16px 0;
}

.detail-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.detail-item {
  display: flex;
  align-items: center;
}

.detail-item .label {
  font-size: 14px;
  color: var(--text-secondary);
  margin-right: 8px;
  white-space: nowrap;
}

.detail-item .value {
  font-size: 14px;
  color: var(--text-primary);
  font-weight: 500;
}

.detail-item .star {
  font-size: 16px;
}

/* 响应式设计 */
@media (max-width: 1440px) {
  .filter-panel {
    width: 240px;
  }
  
  .viz-tabs {
    margin-right: 280px;
  }
}

@media (max-width: 1200px) {
  .filter-panel {
    position: relative;
    right: auto;
    top: auto;
    width: 100%;
    margin-bottom: 24px;
  }
  
  .viz-tabs {
    margin-right: 0;
  }
}

/* 动画效果 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 暗黑模式适配 */
@media (prefers-color-scheme: dark) {
  .advanced-viz {
    background: #0a0a0a;
  }
  
  .viz-tabs {
    background: #1a1a1a;
  }
  
  .page-title,
  .detail-section h3,
  .filter-header h3 {
    color: #e0e0e0;
  }
  
  .page-description,
  .filter-item label,
  .detail-item .label {
    color: #a0a0a0;
  }
  
  .detail-item .value {
    color: #d0d0d0;
  }
}
</style>