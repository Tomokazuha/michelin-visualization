<template>
  <div class="explore-view">
    <div class="explore-container">
      <div class="page-header">
        <h1 class="page-title">数据探索</h1>
        <p class="page-subtitle">交互式数据查询和探索工具</p>
      </div>
      
      <!-- 筛选面板 -->
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">筛选条件</h3>
        </div>
        <div class="card-body">
          <div class="filter-form">
            <el-form :model="filters" label-width="80px" inline>
              <el-form-item label="星级">
                <el-select v-model="filters.stars" placeholder="全部星级" clearable>
                  <el-option v-for="n in 3" :key="n" :label="`${n}星`" :value="n" />
                </el-select>
              </el-form-item>
              
              <el-form-item label="地区">
                <el-select v-model="filters.region" placeholder="全部地区" clearable filterable>
                  <el-option v-for="region in filterOptions.regions" :key="region" :label="region" :value="region" />
                </el-select>
              </el-form-item>
              
              <el-form-item label="城市">
                <el-select v-model="filters.city" placeholder="全部城市" clearable filterable>
                  <el-option v-for="city in filterOptions.cities" :key="city" :label="city" :value="city" />
                </el-select>
              </el-form-item>
              
              <el-form-item label="菜系">
                <el-select v-model="filters.cuisine" placeholder="全部菜系" clearable filterable>
                  <el-option v-for="cuisine in filterOptions.cuisines" :key="cuisine" :label="cuisine" :value="cuisine" />
                </el-select>
              </el-form-item>
              
              <el-form-item>
                <el-button type="primary" @click="handleSearch" :loading="loading">
                  <el-icon><Search /></el-icon>
                  搜索
                </el-button>
                <el-button @click="resetFilters">
                  <el-icon><RefreshLeft /></el-icon>
                  重置
                </el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
      
      <!-- 结果表格 -->
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">餐厅列表</h3>
          <p class="card-subtitle">找到 {{ pagination.total }} 家符合条件的餐厅</p>
        </div>
        <div class="card-body">
          <el-table 
            v-loading="loading" 
            :data="restaurants" 
            stripe 
            style="width: 100%"
            :empty-text="loading ? '加载中...' : '没有符合条件的餐厅'"
          >
            <el-table-column prop="name" label="餐厅名称" min-width="180">
              <template #default="scope">
                <el-text class="restaurant-name" @click="showDetails(scope.row)">
                  {{ scope.row.name }}
                </el-text>
              </template>
            </el-table-column>
            <el-table-column prop="stars" label="星级" width="80" align="center">
              <template #default="scope">
                <el-tag :type="getStarType(scope.row.stars)">
                  {{ scope.row.stars }} 星
                </el-tag>
              </template>
            </el-table-column>
            <el-table-column prop="city" label="城市" width="120" />
            <el-table-column prop="region" label="地区" width="120" />
            <el-table-column prop="cuisine" label="菜系" min-width="120" />
            <el-table-column prop="price_level" label="价格" width="100">
              <template #default="scope">
                <el-tag v-if="scope.row.price_level" size="small" type="info">
                  {{ scope.row.price_level }}
                </el-tag>
                <span v-else class="text-gray">未知</span>
              </template>
            </el-table-column>
            <el-table-column label="操作" width="120" fixed="right">
              <template #default="scope">
                <el-button 
                  type="primary" 
                  size="small" 
                  @click="showDetails(scope.row)"
                >
                  详情
                </el-button>
              </template>
            </el-table-column>
          </el-table>
          
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
            />
          </div>
        </div>
      </div>
      
      <!-- 餐厅详情对话框 -->
      <el-dialog
        v-model="detailsVisible"
        title="餐厅详情"
        width="800px"
        :before-close="handleDialogClose"
      >
        <div v-if="selectedRestaurant" class="restaurant-details">
          <div class="restaurant-header">
            <h2>{{ selectedRestaurant.name }}</h2>
            <el-tag :type="getStarType(selectedRestaurant.stars)" size="large">
              {{ selectedRestaurant.stars }} 星米其林
            </el-tag>
          </div>
          
          <div class="details-grid">
            <div class="detail-item">
              <span class="label">城市:</span>
              <span class="value">{{ selectedRestaurant.city }}</span>
            </div>
            <div class="detail-item">
              <span class="label">地区:</span>
              <span class="value">{{ selectedRestaurant.region }}</span>
            </div>
            <div class="detail-item">
              <span class="label">菜系:</span>
              <span class="value">{{ selectedRestaurant.cuisine }}</span>
            </div>
            <div class="detail-item">
              <span class="label">价格:</span>
              <span class="value">{{ selectedRestaurant.price_level || '未知' }}</span>
            </div>
            <div class="detail-item">
              <span class="label">年份:</span>
              <span class="value">{{ selectedRestaurant.year }}</span>
            </div>
            <div class="detail-item">
              <span class="label">大陆:</span>
              <span class="value">{{ selectedRestaurant.continent || '未知' }}</span>
            </div>
          </div>
          
          <div v-if="selectedRestaurant.latitude && selectedRestaurant.longitude" class="location-section">
            <h3>地理位置</h3>
            <div class="coordinates">
              <span>纬度: {{ selectedRestaurant.latitude.toFixed(4) }}</span>
              <span>经度: {{ selectedRestaurant.longitude.toFixed(4) }}</span>
            </div>
          </div>
          
          <div v-if="selectedRestaurant.url" class="restaurant-link">
            <h3>网站链接</h3>
            <el-link :href="selectedRestaurant.url" target="_blank" type="primary">
              {{ selectedRestaurant.url }}
            </el-link>
          </div>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useDataStore } from '@/store/data'
import { Search, RefreshLeft } from '@element-plus/icons-vue'
import axios from 'axios'

const dataStore = useDataStore()
const restaurants = computed(() => dataStore.restaurants)
const loading = computed(() => dataStore.loading)
const pagination = computed(() => dataStore.pagination)

// 筛选选项
const filterOptions = ref({
  regions: [],
  cities: [],
  cuisines: [],
  years: [],
  price_levels: []
})

// 筛选条件
const filters = ref({
  stars: null,
  region: null,
  city: null,
  cuisine: null
})

// 餐厅详情
const detailsVisible = ref(false)
const selectedRestaurant = ref(null)

// 获取星级标签类型
const getStarType = (stars) => {
  switch (stars) {
    case 3: return 'danger'
    case 2: return 'warning'
    case 1: return 'success'
    default: return 'info'
  }
}

// 获取筛选选项数据
const fetchFilterOptions = async () => {
  try {
    const response = await axios.get('/api/filter-options')
    if (response.data.success) {
      filterOptions.value = response.data.data
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
    
    // 设置筛选条件
    Object.keys(filters.value).forEach(key => {
      dataStore.setFilter(key, filters.value[key])
    })
    
    // 获取数据
    await dataStore.fetchRestaurants()
  } catch (error) {
    console.error('搜索失败:', error)
  }
}

// 重置筛选条件
const resetFilters = async () => {
  filters.value = {
    stars: null,
    region: null,
    city: null,
    cuisine: null
  }
  
  dataStore.clearFilters()
  await dataStore.fetchRestaurants()
}

// 分页处理
const handleSizeChange = async (size) => {
  dataStore.pagination.per_page = size
  await dataStore.fetchRestaurants()
}

const handleCurrentChange = async (page) => {
  dataStore.setPage(page)
  await dataStore.fetchRestaurants()
}

// 显示餐厅详情
const showDetails = (restaurant) => {
  selectedRestaurant.value = restaurant
  detailsVisible.value = true
}

// 关闭对话框
const handleDialogClose = () => {
  detailsVisible.value = false
  selectedRestaurant.value = null
}

// 初始化
onMounted(async () => {
  await fetchFilterOptions()
  await dataStore.fetchRestaurants()
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

.filter-form {
  .el-form-item {
    margin-bottom: 0;
  }
  
  .el-select {
    width: 180px;
  }
}

.restaurant-name {
  cursor: pointer;
  color: #667eea;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
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

// 餐厅详情样式
.restaurant-details {
  .restaurant-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
    padding-bottom: 16px;
    border-bottom: 1px solid #e2e8f0;
    
    h2 {
      margin: 0;
      color: #1a202c;
      font-size: 24px;
      font-weight: 600;
    }
  }
}

.details-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 24px;
}

.detail-item {
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
  }
}

.location-section {
  margin-bottom: 24px;
  
  h3 {
    margin-bottom: 12px;
    color: #4a5568;
    font-size: 18px;
  }
  
  .coordinates {
    display: flex;
    gap: 20px;
    font-size: 14px;
    color: #718096;
  }
}

.restaurant-link {
  h3 {
    margin-bottom: 12px;
    color: #4a5568;
    font-size: 18px;
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