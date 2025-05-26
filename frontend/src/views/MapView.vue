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
          <div class="map-header">
            <div>
              <h3 class="card-title">全球分布地图</h3>
              <p class="card-subtitle">显示 {{ filteredCount }} 家餐厅</p>
            </div>
            <div class="map-legend">
              <div class="legend-item">
                <span class="legend-marker star-1"></span>
                <span>1星餐厅</span>
              </div>
              <div class="legend-item">
                <span class="legend-marker star-2"></span>
                <span>2星餐厅</span>
              </div>
              <div class="legend-item">
                <span class="legend-marker star-3"></span>
                <span>3星餐厅</span>
              </div>
            </div>
          </div>
        </div>
        <div class="card-body">
          <div v-loading="loading" element-loading-text="加载地图数据...">
            <div id="map" class="map-container-div"></div>
          </div>
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
          <div class="stat-label">覆盖国家</div>
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
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import { useDataStore } from '@/store/data'
import { RefreshLeft } from '@element-plus/icons-vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// 修复 Leaflet 默认图标问题
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png'
import iconUrl from 'leaflet/dist/images/marker-icon.png'
import shadowUrl from 'leaflet/dist/images/marker-shadow.png'

delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
})

const dataStore = useDataStore()
const loading = computed(() => dataStore.loading)

// 地图和数据
let map = null
let markersLayer = null
const geojsonData = ref(null)
const allRestaurants = ref([])

// 筛选条件
const selectedStars = ref([1, 2, 3])
const selectedRegion = ref(null)
const availableRegions = ref([])

// 统计数据
const geoStats = ref({
  totalRestaurants: 0,
  countries: 0,
  cities: 0,
  continents: 0
})

const regionStats = ref([])

// 计算筛选后的数量
const filteredCount = computed(() => {
  if (!allRestaurants.value.length) return 0
  
  return allRestaurants.value.filter(restaurant => {
    const starMatch = selectedStars.value.includes(restaurant.stars)
    const regionMatch = !selectedRegion.value || restaurant.region === selectedRegion.value
    return starMatch && regionMatch
  }).length
})

// 获取地图数据
const fetchMapData = async () => {
  try {
    await dataStore.fetchGeoJSON()
    geojsonData.value = dataStore.geojson
    
    // 从GeoJSON提取餐厅数据
    if (geojsonData.value && geojsonData.value.features) {
      allRestaurants.value = geojsonData.value.features.map(feature => ({
        ...feature.properties,
        coordinates: feature.geometry.coordinates
      }))
      
      // 提取可用地区
      const regions = [...new Set(allRestaurants.value.map(r => r.region).filter(Boolean))]
      availableRegions.value = regions.sort()
      
      // 计算统计数据
      calculateStats()
    }
  } catch (error) {
    console.error('获取地图数据失败:', error)
  }
}

// 计算统计数据
const calculateStats = () => {
  const restaurants = allRestaurants.value
  
  geoStats.value = {
    totalRestaurants: restaurants.length,
    countries: [...new Set(restaurants.map(r => r.region).filter(Boolean))].length,
    cities: [...new Set(restaurants.map(r => r.city).filter(Boolean))].length,
    continents: [...new Set(restaurants.map(r => r.continent).filter(Boolean))].length
  }
  
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

// 初始化地图
const initMap = async () => {
  await nextTick()
  
  const mapElement = document.getElementById('map')
  if (!mapElement) return
  
  // 创建地图
  map = L.map('map').setView([40, 0], 2)
  
  // 添加底图
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 18
  }).addTo(map)
  
  // 创建标记图层组
  markersLayer = L.layerGroup().addTo(map)
  
  // 添加餐厅标记
  addRestaurantMarkers()
}

// 添加餐厅标记
const addRestaurantMarkers = () => {
  if (!markersLayer || !allRestaurants.value.length) return
  
  // 清除现有标记
  markersLayer.clearLayers()
  
  // 筛选餐厅
  const filteredRestaurants = allRestaurants.value.filter(restaurant => {
    const starMatch = selectedStars.value.includes(restaurant.stars)
    const regionMatch = !selectedRegion.value || restaurant.region === selectedRegion.value
    return starMatch && regionMatch && restaurant.latitude && restaurant.longitude
  })
  
  // 添加标记
  filteredRestaurants.forEach(restaurant => {
    const { latitude, longitude, stars, name, city, region, cuisine, price } = restaurant
    
    // 根据星级选择颜色
    const getMarkerColor = (stars) => {
      switch (stars) {
        case 3: return '#ee6666' // 红色 - 3星
        case 2: return '#fac858' // 橙色 - 2星
        case 1: return '#91cc75' // 绿色 - 1星
        default: return '#5470c6' // 蓝色 - 默认
      }
    }
    
    // 创建自定义图标
    const customIcon = L.divIcon({
      html: `<div style="
        background-color: ${getMarkerColor(stars)};
        width: ${8 + stars * 4}px;
        height: ${8 + stars * 4}px;
        border-radius: 50%;
        border: 2px solid white;
        box-shadow: 0 2px 4px rgba(0,0,0,0.3);
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 10px;
        font-weight: bold;
      ">${stars}</div>`,
      className: 'custom-marker',
      iconSize: [16 + stars * 4, 16 + stars * 4],
      iconAnchor: [8 + stars * 2, 8 + stars * 2]
    })
    
    // 创建标记
    const marker = L.marker([latitude, longitude], { icon: customIcon })
    
    // 创建弹出窗口内容
    const popupContent = `
      <div style="min-width: 200px;">
        <h3 style="margin: 0 0 8px 0; color: #333;">${name}</h3>
        <div style="margin-bottom: 4px;">
          <strong>${stars}星米其林餐厅</strong>
        </div>
        <div style="margin-bottom: 4px;">
          📍 ${city}, ${region}
        </div>
        <div style="margin-bottom: 4px;">
          🍽️ ${cuisine || '未知菜系'}
        </div>
        ${price ? `<div style="margin-bottom: 4px;">💰 ${price}</div>` : ''}
        <div style="font-size: 12px; color: #666; margin-top: 8px;">
          纬度: ${latitude.toFixed(4)}, 经度: ${longitude.toFixed(4)}
        </div>
      </div>
    `
    
    marker.bindPopup(popupContent)
    markersLayer.addLayer(marker)
  })
}

// 筛选标记
const filterMarkers = () => {
  addRestaurantMarkers()
}

// 重置筛选
const resetFilters = () => {
  selectedStars.value = [1, 2, 3]
  selectedRegion.value = null
  filterMarkers()
}

// 初始化
onMounted(async () => {
  await fetchMapData()
  await initMap()
})

// 清理
onUnmounted(() => {
  if (map) {
    map.remove()
    map = null
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

.map-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.map-legend {
  display: flex;
  gap: 20px;
  
  .legend-item {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 14px;
    
    .legend-marker {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      border: 2px solid white;
      box-shadow: 0 2px 4px rgba(0,0,0,0.3);
      
      &.star-1 {
        background-color: #91cc75;
      }
      
      &.star-2 {
        background-color: #fac858;
      }
      
      &.star-3 {
        background-color: #ee6666;
      }
    }
  }
}

.map-container-div {
  height: 600px;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
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

  .map-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }

  .map-legend {
    flex-wrap: wrap;
    gap: 12px;
  }

  .map-container-div {
    height: 400px;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
}

@media (max-width: 480px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }
  
  .map-controls {
    .el-form {
      flex-direction: column;
      align-items: stretch;
      
      .el-form-item {
        margin-bottom: 16px;
      }
    }
  }
}

// 全局样式 - Leaflet相关
:deep(.leaflet-popup-content) {
  margin: 8px 12px !important;
}

:deep(.leaflet-popup-content-wrapper) {
  border-radius: 8px !important;
}

:deep(.custom-marker) {
  background: transparent !important;
  border: none !important;
}
</style> 