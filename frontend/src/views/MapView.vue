<template>
  <div class="map-view">
    <div class="map-container">
      <div class="page-header">
        <h1 class="page-title">地图分析</h1>
        <p class="page-subtitle">全球米其林餐厅地理分布可视化</p>
      </div>
      
      <!-- 地图控制面板 -->
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">地图筛选</h3>
        </div>
        <div class="card-body">
          <div class="map-controls">
            <el-form inline>
              <el-form-item label="星级筛选">
                <el-checkbox-group v-model="selectedStars" @change="filterMarkers">
                  <el-checkbox-button v-for="star in [1, 2, 3]" :key="star" :label="star">
                    {{ star }}星
                  </el-checkbox-button>
                </el-checkbox-group>
              </el-form-item>
              
              <el-form-item label="地区筛选">
                <el-select 
                  v-model="selectedRegion" 
                  placeholder="全部地区" 
                  clearable 
                  @change="filterMarkers"
                  style="width: 200px"
                >
                  <el-option 
                    v-for="region in availableRegions" 
                    :key="region" 
                    :label="region" 
                    :value="region" 
                  />
                </el-select>
              </el-form-item>
              
              <el-form-item>
                <el-button @click="resetFilters">
                  <el-icon><RefreshLeft /></el-icon>
                  重置筛选
                </el-button>
              </el-form-item>
            </el-form>


          </div>
        </div>
      </div>
      
      <!-- 地图主体 -->
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">全球分布地图（地图的加载需要使用代理访问）</h3>
          <p class="card-subtitle">
            总计 {{ filteredRestaurants.length }} 家餐厅
          </p>
        </div>
        <div class="card-body">
          <MapHeatmap
            :restaurants="filteredRestaurants"
            :loading="loading"
            :selected-stars="selectedStars"
            :selected-region="selectedRegion"
            @restaurant-click="handleRestaurantClick"
            @view-change="handleViewChange"
          />
        </div>
      </div>
      
      <!-- 统计信息 -->
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-number">{{ geoStats.totalRestaurants }}</div>
          <div class="stat-label">总餐厅数</div>
        </div>
        
        <div class="stat-card">
          <div class="stat-number">{{ geoStats.countries }}</div>
          <div class="stat-label">覆盖地区</div>
        </div>
        
        <div class="stat-card">
          <div class="stat-number">{{ geoStats.cities }}</div>
          <div class="stat-label">覆盖城市</div>
        </div>
        
        <div class="stat-card">
          <div class="stat-number">{{ geoStats.continents }}</div>
          <div class="stat-label">覆盖大陆</div>
        </div>
      </div>
      
      <!-- 地区分布表格 -->
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">地区分布统计</h3>
        </div>
        <div class="card-body">
          <el-table :data="regionStats" stripe style="width: 100%">
            <el-table-column prop="region" label="地区" min-width="150" />
            <el-table-column prop="total" label="总数" width="80" align="center" />
            <el-table-column prop="star1" label="1星" width="60" align="center" />
            <el-table-column prop="star2" label="2星" width="60" align="center" />
            <el-table-column prop="star3" label="3星" width="60" align="center" />
            <el-table-column prop="percentage" label="占比" width="80" align="center">
              <template #default="scope">
                {{ scope.row.percentage }}%
              </template>
            </el-table-column>
            <el-table-column label="分布条" min-width="150">
              <template #default="scope">
                <el-progress 
                  :percentage="scope.row.percentage" 
                  :stroke-width="12"
                  :show-text="false"
                />
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useDataStore } from '@/store/data'
import { RefreshLeft, InfoFilled } from '@element-plus/icons-vue'
import MapHeatmap from '@/components/charts/MapHeatmap.vue'
import { ElMessage } from 'element-plus'

const dataStore = useDataStore()
const loading = computed(() => dataStore.loading)

// 数据和筛选条件
const geojsonData = ref(null)
const allRestaurants = ref([])
const availableRegions = ref([])

// 筛选条件 - 从localStorage恢复
const selectedStars = ref(JSON.parse(localStorage.getItem('mapFilters_stars') || '[1, 2, 3]'))
const selectedRegion = ref(localStorage.getItem('mapFilters_region') || null)

// 过滤后的餐厅数据
const filteredRestaurants = computed(() => {
  return allRestaurants.value.filter(restaurant => {
    const starMatch = selectedStars.value.includes(restaurant.stars)
    const regionMatch = !selectedRegion.value || restaurant.region === selectedRegion.value
    return starMatch && regionMatch && restaurant.latitude && restaurant.longitude
  })
})

// 统计数据
const geoStats = ref({
  totalRestaurants: 0,
  countries: 0,
  cities: 0,
  continents: 0
})

const regionStats = ref([])

// 保存筛选条件到localStorage
const saveFilters = () => {
  localStorage.setItem('mapFilters_stars', JSON.stringify(selectedStars.value))
  localStorage.setItem('mapFilters_region', selectedRegion.value || '')
}

// 事件处理
const handleRestaurantClick = (restaurant) => {
  ElMessage({
    message: `选中餐厅: ${restaurant.name}`,
    type: 'info',
    duration: 2000
  })
  // 这里可以添加更多的处理逻辑，比如显示详情弹窗
}

const handleViewChange = (view) => {
  console.log('地图视图切换到:', view)
}

// 获取地图数据
const fetchMapData = async () => {
  try {
    loading.value = true
    await dataStore.fetchGeoJSON()
    geojsonData.value = dataStore.geojson
    
    // 从GeoJSON提取餐厅数据
    if (geojsonData.value && geojsonData.value.features) {
      allRestaurants.value = geojsonData.value.features.map(feature => {
        const props = feature.properties
        const coords = feature.geometry.coordinates
        
        return {
          id: props.id,
          name: props.name,
          stars: Number(props.stars) || 0,
          city: props.city,
          region: props.region,
          continent: props.continent,
          cuisine: props.cuisine,
          price: props.price,
          latitude: coords[1], // GeoJSON格式是[经度,纬度]
          longitude: coords[0],
          year: props.year,
          website: props.website || props.url
        }
      })
      
      console.log(`成功加载${allRestaurants.value.length}家餐厅数据`)
      
      // 提取可用地区
      const regions = [...new Set(allRestaurants.value.map(r => r.region).filter(Boolean))]
      availableRegions.value = regions.sort()
      
      // 计算统计数据
      calculateStats()
    } else {
      console.error('无法获取地理数据或数据格式不正确')
    }
  } catch (error) {
    console.error('获取地图数据失败:', error)
  } finally {
    loading.value = false
  }
}



// 筛选标记
const filterMarkers = () => {
  saveFilters()
}

// 计算统计数据
const calculateStats = () => {
  const restaurants = allRestaurants.value
  
  // 检查数据是否有效
  if (!restaurants.length) {
    console.warn('无法计算统计数据：没有加载餐厅数据')
    return
  }
  
  geoStats.value = {
    totalRestaurants: restaurants.length,
    countries: [...new Set(restaurants.map(r => r.region).filter(Boolean))].length,
    cities: [...new Set(restaurants.map(r => r.city).filter(Boolean))].length,
    continents: [...new Set(restaurants.map(r => r.continent).filter(Boolean))].length
  }
  
  console.log('地理统计数据:', geoStats.value)
  
  // 计算地区统计
  const regionMap = {}
  restaurants.forEach(restaurant => {
    const region = restaurant.region || '未知'
    if (!regionMap[region]) {
      regionMap[region] = { star1: 0, star2: 0, star3: 0, total: 0 }
    }
    regionMap[region].total++
    regionMap[region][`star${restaurant.stars}`]++
  })
  
  regionStats.value = Object.entries(regionMap)
    .map(([region, stats]) => ({
      region,
      ...stats,
      percentage: ((stats.total / restaurants.length) * 100).toFixed(1)
    }))
    .sort((a, b) => b.total - a.total)
}



// 重置筛选
const resetFilters = () => {
  selectedStars.value = [1, 2, 3]
  selectedRegion.value = null
  filterMarkers()
}

// 监听筛选条件变化
watch([selectedStars, selectedRegion], () => {
  saveFilters()
}, { deep: true })

// 初始化
onMounted(async () => {
  try {
    console.log("开始加载地图数据...")
    await fetchMapData()
    console.log(`地图数据加载完成: 总共 ${allRestaurants.value.length} 家餐厅`)
  } catch (error) {
    console.error("地图数据加载失败:", error)
  }
})
</script>

<style lang="scss" scoped>
.map-view {
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  overflow-y: auto;
}

.map-container {
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

.map-controls {
  .el-form-item {
    margin-bottom: 0;
  }
}



.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  margin: 48px 0;
}

// 响应式设计
@media (max-width: 768px) {
  .map-container {
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


}
</style> 