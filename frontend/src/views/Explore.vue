<template>
  <div class="explore-view">
    <div class="explore-container">
      <div class="page-header">
        <h1 class="page-title">数据探索</h1>
        <p class="page-subtitle">交互式数据查询和探索工具</p>
      </div>
      
      <!-- 高级搜索和筛选面板 -->
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">
            <el-icon><Search /></el-icon>
            高级搜索与筛选
          </h3>
          <el-button text @click="toggleAdvancedSearch">
            {{ showAdvancedSearch ? '点此切换简单输入搜索' : '点此切换多条件筛选' }}
          </el-button>
        </div>
        <div class="card-body">
          <!-- 基础搜索 -->
          <div class="search-section">
            <el-input
              v-model="searchQuery"
              placeholder="输入餐厅名称、城市、地区或菜系进行搜索..."
              size="large"
              clearable
              @keyup.enter="handleSearch"
              style="max-width: 500px;"
            >
              <template #prefix>
                <el-icon><Search /></el-icon>
              </template>
              <template #append>
                <el-button type="primary" @click="handleSearch" :loading="loading">
                  搜索
                </el-button>
              </template>
            </el-input>
          </div>
          
          <!-- 高级筛选 -->
          <div v-show="showAdvancedSearch" class="advanced-filters">
            <el-divider content-position="left">高级筛选条件</el-divider>
            <el-form :model="filters" label-width="80px" class="filter-form">
              <div class="filter-row">
                <el-form-item label="星级" class="filter-item">
                  <el-select v-model="filters.stars" placeholder="全部星级" clearable>
                    <el-option v-for="n in 3" :key="n" :label="`${n}星`" :value="n" />
                  </el-select>
                </el-form-item>
                
                <el-form-item label="地区" class="filter-item">
                  <el-select 
                    v-model="filters.region" 
                    placeholder="全部地区" 
                    clearable 
                    filterable
                    @change="onRegionChange"
                  >
                    <el-option v-for="region in filterOptions.regions" :key="region" :label="region" :value="region" />
                  </el-select>
                </el-form-item>
                
                <el-form-item label="城市" class="filter-item">
                  <el-select 
                    v-model="filters.city" 
                    placeholder="全部城市" 
                    clearable 
                    filterable
                    :disabled="!availableCities.length"
                  >
                    <el-option v-for="city in availableCities" :key="city" :label="city" :value="city" />
                  </el-select>
                </el-form-item>
                
                <el-form-item label="菜系" class="filter-item">
                  <el-select v-model="filters.cuisine" placeholder="全部菜系" clearable filterable>
                    <el-option v-for="cuisine in filterOptions.cuisines" :key="cuisine" :label="cuisine" :value="cuisine" />
                  </el-select>
                </el-form-item>
                
                <el-form-item label="价格区间" class="filter-item">
                  <el-select v-model="filters.price_level" placeholder="全部价格" clearable>
                    <el-option v-for="price in filterOptions.price_levels" :key="price" :label="formatPriceLevel(price)" :value="price" />
                  </el-select>
                </el-form-item>
              </div>
              
              <div class="filter-actions">
                <el-button type="primary" @click="handleSearch" :loading="loading">
                  <el-icon><Search /></el-icon>
                  应用筛选
                </el-button>
                <el-button @click="resetFilters">
                  <el-icon><RefreshLeft /></el-icon>
                  重置筛选
                </el-button>
              </div>
            </el-form>
          </div>
        </div>
      </div>


      
      <!-- 餐厅列表 -->
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">
            <el-icon><List /></el-icon>
            餐厅列表
          </h3>
          <div class="table-controls">
            <el-select v-model="tableViewMode" style="width: 120px; margin-right: 12px;">
              <el-option label="表格视图" value="table" />
              <el-option label="卡片视图" value="card" />
            </el-select>
            <el-button @click="exportResults" type="primary" plain size="small">
              <el-icon><Download /></el-icon>
              导出
            </el-button>
          </div>
        </div>
        <div class="card-body">
          <!-- 表格视图 -->
          <div v-if="tableViewMode === 'table'">
            <el-table 
              v-loading="loading" 
              :data="restaurants" 
              stripe 
              style="width: 100%"
              :empty-text="loading ? '加载中...' : '没有符合条件的餐厅'"
              row-class-name="restaurant-row"
              @row-click="showDetails"
            >
              <el-table-column prop="name" label="餐厅名称" min-width="200" fixed="left">
                <template #default="scope">
                  <div class="restaurant-name-cell">
                    <el-text class="restaurant-name" @click.stop="showDetails(scope.row)">
                      {{ scope.row.name }}
                    </el-text>
                  </div>
                </template>
              </el-table-column>
              
              <el-table-column prop="stars" label="星级" width="100" align="center" sortable>
                <template #default="scope">
                  <div class="stars-display">
                    <el-rate 
                      :model-value="scope.row.stars" 
                      disabled 
                      :max="3"
                      show-score 
                      text-color="#ff9900"
                      size="small"
                    />
                  </div>
                </template>
              </el-table-column>
              
              <el-table-column prop="city" label="城市" width="140" sortable />
              <el-table-column prop="region" label="地区" width="140" sortable />
              <el-table-column prop="cuisine" label="菜系" min-width="120" sortable />
              
              <el-table-column prop="price_level" label="价格" width="120" align="center">
                <template #default="scope">
                  <el-tag v-if="scope.row.price_level" size="small" :type="getPriceType(scope.row.price_level)">
                    {{ formatPriceLevel(scope.row.price_level) }}
                  </el-tag>
                  <span v-else class="text-gray">未知</span>
                </template>
              </el-table-column>
              
              <el-table-column label="操作" width="80" fixed="right">
                <template #default="scope">
                  <el-button 
                    type="primary" 
                    size="small" 
                    @click.stop="showDetails(scope.row)"
                  >
                    详情
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
          
          <!-- 卡片视图 -->
          <div v-else class="restaurant-cards">
            <div v-loading="loading" class="cards-grid">
              <div 
                v-for="restaurant in restaurants" 
                :key="restaurant.name" 
                class="restaurant-card"
                @click="showDetails(restaurant)"
              >
                                 <div class="card-header">
                   <h4 class="card-title">{{ restaurant.name }}</h4>
                   <el-rate v-model="restaurant.stars" disabled :max="3" size="small" />
                 </div>
                <div class="card-content">
                  <p><strong>位置：</strong>{{ restaurant.city }}, {{ restaurant.region }}</p>
                  <p><strong>菜系：</strong>{{ restaurant.cuisine }}</p>
                  <p v-if="restaurant.price_level"><strong>价格：</strong>{{ formatPriceLevel(restaurant.price_level) }}</p>
                </div>
                <div class="card-actions">
                  <el-button size="small" type="primary">查看详情</el-button>
                </div>
              </div>
            </div>
          </div>
          
          <!-- 分页 -->
          <div class="pagination-container">
            <el-pagination
              v-model:current-page="pagination.page"
              v-model:page-size="pagination.per_page"
              :page-sizes="[10, 20, 50, 100]"
              :total="pagination.total"
              layout="total, sizes, prev, pager, next, jumper"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              background
            />
          </div>
        </div>
      </div>
      
      <!-- 增强的餐厅详情对话框 -->
      <el-dialog
        v-model="detailsVisible"
        :title="selectedRestaurant?.name || '餐厅详情'"
        width="900px"
        :before-close="handleDialogClose"
        class="restaurant-details-dialog"
      >
        <div v-if="selectedRestaurant" class="restaurant-details">
          <div class="restaurant-header">
            <div class="header-left">
              <h2>{{ selectedRestaurant.name }}</h2>
                             <div class="restaurant-meta">
                 <el-rate v-model="selectedRestaurant.stars" disabled :max="3" show-score />
                 <el-tag v-if="selectedRestaurant.year" type="primary" style="margin-left: 12px;">
                   {{ selectedRestaurant.year }}年获得
                 </el-tag>
               </div>
            </div>

          </div>
          
          <el-tabs v-model="activeTab" type="border-card">
            <el-tab-pane label="基本信息" name="basic">
              <div class="details-grid">
                <div class="detail-item">
                  <span class="label">
                    <el-icon><Location /></el-icon>
                    城市
                  </span>
                  <span class="value">{{ selectedRestaurant.city }}</span>
                </div>
                <div class="detail-item">
                  <span class="label">
                    <el-icon><MapLocation /></el-icon>
                    地区
                  </span>
                  <span class="value">{{ selectedRestaurant.region }}</span>
                </div>
                <div class="detail-item">
                  <span class="label">
                    菜系
                  </span>
                  <span class="value">{{ selectedRestaurant.cuisine }}</span>
                </div>
                <div class="detail-item">
                  <span class="label">
                    价格
                  </span>
                  <span class="value">{{ formatPriceLevel(selectedRestaurant.price_level) || '未知' }}</span>
                </div>
                <div class="detail-item">
                  <span class="label">
                    <el-icon><Calendar /></el-icon>
                    获奖年份
                  </span>
                  <span class="value">{{ selectedRestaurant.year }}</span>
                </div>
                <div class="detail-item">
                  <span class="label">
                    <el-icon><Location /></el-icon>
                    大陆
                  </span>
                  <span class="value">{{ selectedRestaurant.continent || '未知' }}</span>
                </div>
              </div>
            </el-tab-pane>
            
            <el-tab-pane label="位置信息" name="location">
              <div v-if="selectedRestaurant.latitude && selectedRestaurant.longitude" class="location-section">
                <div class="coordinates">
                  <div class="coordinate-item">
                    <span class="label">纬度:</span>
                    <span class="value">{{ selectedRestaurant.latitude.toFixed(6) }}</span>
                  </div>
                  <div class="coordinate-item">
                    <span class="label">经度:</span>
                    <span class="value">{{ selectedRestaurant.longitude.toFixed(6) }}</span>
                  </div>
                </div>
                
                                 <!-- 地图组件 -->
                 <div class="map-container">
                   <div ref="mapRef" class="leaflet-map"></div>
                 </div>
              </div>
              <div v-else class="no-location">
                <el-empty description="暂无位置信息" />
              </div>
            </el-tab-pane>
            
                         <el-tab-pane label="联系方式" name="contact">
               <div class="contact-section">
                 <div v-if="selectedRestaurant.url" class="restaurant-link">
                   <h4>官方网站</h4>
                   <el-link :href="selectedRestaurant.url" target="_blank" type="primary">
                     {{ selectedRestaurant.url }}
                   </el-link>
                 </div>
                 <div v-else class="no-website">
                   <el-empty description="暂无官方网站信息" />
                 </div>
               </div>
             </el-tab-pane>
          </el-tabs>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch, nextTick } from 'vue'
import { useDataStore } from '@/store/data'
import { 
  Search, RefreshLeft, Star, DataAnalysis, List, Download, 
  Location, MapLocation, Calendar 
} from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import axios from 'axios'
import * as echarts from 'echarts'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const dataStore = useDataStore()
const restaurants = computed(() => dataStore.restaurants)
const loading = computed(() => dataStore.loading)
const pagination = computed(() => dataStore.pagination)

// 搜索和筛选相关
const searchQuery = ref('')
const showAdvancedSearch = ref(false)
const tableViewMode = ref('table')

// 筛选选项
const filterOptions = ref({
  regions: [],
  cities: [],
  cuisines: [],
  price_levels: []
})

// 地区-城市映射
const regionCityMap = ref({})

// 筛选条件
const filters = ref({
  stars: null,
  region: null,
  city: null,
  cuisine: null,
  price_level: null
})

// 餐厅详情
const detailsVisible = ref(false)
const selectedRestaurant = ref(null)
const activeTab = ref('basic')



// 地图ref
const mapRef = ref(null)
let mapInstance = null

// 计算属性
const availableCities = computed(() => {
  if (!filters.value.region) {
    return filterOptions.value.cities
  }
  return regionCityMap.value[filters.value.region] || []
})

// 工具函数
const formatPriceLevel = (priceLevel) => {
  const priceMap = {
    '€': '经济实惠',
    '€€': '中等价位', 
    '€€€': '高档消费',
    '€€€€': '奢华体验'
  }
  return priceMap[priceLevel] || priceLevel
}

const getPriceType = (priceLevel) => {
  const typeMap = {
    '€': 'success',
    '€€': 'primary',
    '€€€': 'warning', 
    '€€€€': 'danger'
  }
  return typeMap[priceLevel] || 'info'
}



// 界面控制
const toggleAdvancedSearch = () => {
  showAdvancedSearch.value = !showAdvancedSearch.value
}

// 筛选联动处理
const onRegionChange = (region) => {
  // 清空城市选择
  filters.value.city = null
  // 这里可以根据需要自动筛选
}

// 获取筛选选项数据
const fetchFilterOptions = async () => {
  try {
    const response = await axios.get('/api/filter-options')
    
    if (response.data.success) {
      filterOptions.value = response.data.data
      
      // 构建地区-城市映射
      const rawData = await axios.get('/api/restaurants?per_page=1000')
      
      if (rawData.data.success) {
        const cityMap = {}
        rawData.data.data.restaurants.forEach(restaurant => {
          if (!cityMap[restaurant.region]) {
            cityMap[restaurant.region] = []
          }
          if (!cityMap[restaurant.region].includes(restaurant.city)) {
            cityMap[restaurant.region].push(restaurant.city)
          }
        })
        regionCityMap.value = cityMap
      }
    }
  } catch (error) {
    console.error('获取筛选选项失败:', error)
  }
}



// 处理搜索
const handleSearch = async () => {
  try {
    // 重置页码
    dataStore.setPage(1)
    
    // 清除旧的过滤器
    dataStore.clearFilters()
    
    // 设置筛选条件
    Object.keys(filters.value).forEach(key => {
      if (filters.value[key] !== null && filters.value[key] !== '') {
        dataStore.setFilter(key, filters.value[key])
      }
    })
    
    // 添加搜索查询参数
    const searchParams = {}
    if (searchQuery.value && searchQuery.value.trim()) {
      searchParams.q = searchQuery.value.trim()
    }
    
    // 获取分页数据，传入搜索参数
    await dataStore.fetchRestaurants(searchParams)
    
  } catch (error) {
    console.error('搜索失败:', error)
    ElMessage.error('搜索失败: ' + (error.message || '未知错误'))
  }
}

// 重置筛选条件
const resetFilters = async () => {
  searchQuery.value = ''
  filters.value = {
    stars: null,
    region: null,
    city: null,
    cuisine: null,
    price_level: null
  }
  
  dataStore.clearFilters()
  await dataStore.fetchRestaurants()
}



// 导出结果
const exportResults = () => {
  try {
    const data = restaurants.value.map(restaurant => ({
      餐厅名称: restaurant.name,
      星级: restaurant.stars,
      城市: restaurant.city,
      地区: restaurant.region,
      菜系: restaurant.cuisine,
      价格: formatPriceLevel(restaurant.price_level) || '未知',
      获奖年份: restaurant.year
    }))
    
    const csv = [
      Object.keys(data[0]).join(','),
      ...data.map(row => Object.values(row).join(','))
    ].join('\n')
    
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = `米其林餐厅搜索结果-${new Date().toLocaleDateString()}.csv`
    link.click()
    
    ElMessage.success('导出成功！')
  } catch (error) {
    console.error('导出失败:', error)
    ElMessage.error('导出失败')
  }
}



// 分页处理
const handleSizeChange = async (size) => {
  try {
    dataStore.pagination.per_page = size
    dataStore.setPage(1)
    await dataStore.fetchRestaurants()
  } catch (error) {
    console.error('修改页面大小失败:', error)
    ElMessage.error('修改页面大小失败')
  }
}

const handleCurrentChange = async (page) => {
  try {
    dataStore.setPage(page)
    await dataStore.fetchRestaurants()
  } catch (error) {
    console.error('切换页面失败:', error)
    ElMessage.error('切换页面失败')
  }
}

// 显示餐厅详情
const showDetails = (restaurant) => {
  selectedRestaurant.value = restaurant
  detailsVisible.value = true
  
  // 在详情对话框打开后初始化地图
  nextTick(() => {
    if (restaurant.latitude && restaurant.longitude) {
      initMap(restaurant.latitude, restaurant.longitude, restaurant.name)
    }
  })
}

// 初始化地图
const initMap = (lat, lng, restaurantName) => {
  if (mapRef.value) {
    // 清除之前的地图实例
    if (mapInstance) {
      mapInstance.remove()
    }
    
    // 创建新的地图实例
    mapInstance = L.map(mapRef.value).setView([lat, lng], 15)
    
    // 添加地图瓦片层
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(mapInstance)
    
    // 添加餐厅标记
    const marker = L.marker([lat, lng]).addTo(mapInstance)
    marker.bindPopup(`<b>${restaurantName}</b><br/>米其林星级餐厅`).openPopup()
  }
}

// 关闭对话框
const handleDialogClose = () => {
  detailsVisible.value = false
  selectedRestaurant.value = null
}



// 初始化
onMounted(async () => {
  try {
    // 先检查API健康状态
    try {
      await axios.get('/api/health')
    } catch (healthError) {
      ElMessage.error('无法连接到后端服务，请检查服务是否启动')
      return
    }
    
    await fetchFilterOptions()
    await dataStore.fetchRestaurants()
  } catch (error) {
    console.error('页面初始化失败:', error)
  }
})
</script>

<style lang="scss" scoped>
.explore-view {
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  overflow-y: auto;
}

.explore-container {
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

// 搜索区域样式
.search-section {
  margin-bottom: 24px;
  display: flex;
  justify-content: center;
}

.advanced-filters {
  margin-top: 24px;
  
  .filter-form {
    .filter-row {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
      margin-bottom: 20px;
    }
    
    .filter-item {
      margin-bottom: 0;
      
      .el-select {
        width: 100%;
      }
    }
    
    .filter-actions {
      display: flex;
      gap: 12px;
      justify-content: center;
      margin-top: 16px;
    }
  }
}

// 表格控制样式
.table-controls {
  display: flex;
  align-items: center;
}

// 表格样式增强
.restaurant-row {
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #f7fafc !important;
  }
}

.restaurant-name-cell {
  display: flex;
  align-items: center;
}

.restaurant-name {
  cursor: pointer;
  color: #667eea;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
}

.stars-display {
  display: flex;
  justify-content: center;
}

// 卡片视图样式
.restaurant-cards {
  .cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
  }
  
  .restaurant-card {
    background: white;
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    cursor: pointer;
    
    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    }
    
    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
      
      .card-title {
        font-size: 16px;
        font-weight: 600;
        color: #1a202c;
        margin: 0;
      }
    }
    
    .card-content {
      margin-bottom: 16px;
      
      p {
        margin: 8px 0;
        font-size: 14px;
        color: #4a5568;
      }
    }
    
    .card-actions {
      display: flex;
      gap: 8px;
      justify-content: flex-end;
    }
  }
}

.text-gray {
  color: #a0a0a0;
}

.pagination-container {
  margin-top: 24px;
  display: flex;
  justify-content: center;
}

// 餐厅详情对话框样式
.restaurant-details-dialog {
  .el-dialog__body {
    padding: 0;
  }
}

.restaurant-details {
  .restaurant-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 24px;
    padding: 24px 24px 16px;
    border-bottom: 1px solid #e2e8f0;
    
    .header-left {
      flex: 1;
      
      h2 {
        margin: 0 0 12px 0;
        color: #1a202c;
        font-size: 24px;
        font-weight: 600;
      }
      
      .restaurant-meta {
        display: flex;
        align-items: center;
      }
    }
    
    .header-actions {
      display: flex;
      gap: 12px;
    }
  }
  
  .el-tabs {
    margin: 0;
    
    .el-tabs__content {
      padding: 24px;
    }
  }
}

.details-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-bottom: 24px;
}

.detail-item {
  display: flex;
  flex-direction: column;
  
  .label {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    color: #718096;
    margin-bottom: 8px;
    font-weight: 500;
  }
  
  .value {
    font-size: 16px;
    font-weight: 500;
    color: #2d3748;
  }
}

.location-section {
  .coordinates {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-bottom: 24px;
    
    .coordinate-item {
      display: flex;
      flex-direction: column;
      
      .label {
        font-size: 14px;
        color: #718096;
        margin-bottom: 4px;
      }
      
      .value {
        font-size: 16px;
        font-weight: 500;
        color: #2d3748;
        font-family: monospace;
      }
    }
  }
  
  .map-container {
    margin-top: 16px;
    
    .leaflet-map {
      height: 300px;
      width: 100%;
      border-radius: 8px;
    }
  }
}

.no-location {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
}

.contact-section {
  h4 {
    margin-bottom: 16px;
    color: #4a5568;
    font-size: 18px;
  }
  
  .restaurant-link {
    margin-bottom: 24px;
  }
  
  .no-website {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
  }
}

// 响应式设计
@media (max-width: 768px) {
  .explore-container {
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

  .filter-form {
    .el-form-item {
      width: 100%;
      margin-bottom: 16px;
    }
    
    .el-select {
      width: 100%;
    }
  }

  .details-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .restaurant-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
}
</style> 