<template>
  <div class="map-heatmap">
    <div class="map-controls">
      <div class="view-toggle">
        <el-radio-group v-model="currentView" @change="switchView">
          <el-radio-button label="markers">标记点</el-radio-button>
          <el-radio-button label="heatmap">热力图</el-radio-button>
          <el-radio-button label="cluster">聚合</el-radio-button>
        </el-radio-group>
      </div>
      
      <div class="density-control" v-if="currentView === 'heatmap'">
        <span>密度调节</span>
        <el-slider 
          v-model="heatmapRadius" 
          :min="10" 
          :max="50" 
          @change="updateHeatmap"
          style="width: 120px; margin-left: 12px;"
        />
      </div>
      
      <div class="cluster-control" v-if="currentView === 'cluster'">
        <span>聚合距离</span>
        <el-slider 
          v-model="clusterDistance" 
          :min="20" 
          :max="100" 
          @change="updateClusters"
          style="width: 120px; margin-left: 12px;"
        />
      </div>
    </div>
    
    <div class="map-legend" v-if="currentView === 'heatmap'">
      <div class="legend-title">餐厅密度</div>
      <div class="legend-gradient">
        <div class="gradient-bar"></div>
        <div class="gradient-labels">
          <span>低</span>
          <span>中</span>
          <span>高</span>
        </div>
      </div>
    </div>
    
    <div class="map-stats">
      <div class="stat-item">
        <span class="stat-label">显示模式:</span>
        <span class="stat-value">{{ viewModeText }}</span>
      </div>
      <div class="stat-item">
        <span class="stat-label">可见点数:</span>
        <span class="stat-value">{{ visibleCount }}</span>
      </div>
      <div class="stat-item" v-if="currentView === 'cluster'">
        <span class="stat-label">聚合组数:</span>
        <span class="stat-value">{{ clusterCount }}</span>
      </div>
    </div>
    
    <div 
      :id="mapId" 
      class="map-container"
      v-loading="loading"
      element-loading-text="正在加载地图..."
    ></div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet.heat'
import 'leaflet.markercluster'
import 'leaflet.markercluster/dist/MarkerCluster.css'
import 'leaflet.markercluster/dist/MarkerCluster.Default.css'

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

const props = defineProps({
  restaurants: {
    type: Array,
    required: true
  },
  loading: {
    type: Boolean,
    default: false
  },
  selectedStars: {
    type: Array,
    default: () => [1, 2, 3]
  },
  selectedRegion: {
    type: String,
    default: null
  }
})

const emit = defineEmits(['restaurant-click', 'view-change'])

// 生成唯一的地图ID
const mapId = ref(`map-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`)

// 地图相关
let map = null
let markersLayer = null
let heatmapLayer = null
let clusterGroup = null

// 控制状态
const currentView = ref('markers')
const heatmapRadius = ref(25)
const clusterDistance = ref(50)

// 统计数据
const visibleCount = ref(0)
const clusterCount = ref(0)

// 过滤后的餐厅数据
const filteredRestaurants = computed(() => {
  return props.restaurants.filter(restaurant => {
    const starMatch = props.selectedStars.includes(restaurant.stars)
    const regionMatch = !props.selectedRegion || restaurant.region === props.selectedRegion
    return starMatch && regionMatch && restaurant.latitude && restaurant.longitude
  })
})

// 视图模式文本
const viewModeText = computed(() => {
  const modes = {
    markers: '标记点模式',
    heatmap: '热力图模式',
    cluster: '聚合模式'
  }
  return modes[currentView.value]
})

// 初始化地图
const initMap = async () => {
  await nextTick()
  
  const mapElement = document.getElementById(mapId.value)
  if (!mapElement) return
  
  // 创建地图
  map = L.map(mapId.value, {
    center: [40, 0],
    zoom: 2,
    zoomControl: true,
    attributionControl: false
  })
  
  // 添加底图
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors',
    maxZoom: 18
  }).addTo(map)
  
  // 创建图层组
  markersLayer = L.layerGroup()
  clusterGroup = L.markerClusterGroup({
    maxClusterRadius: clusterDistance.value,
    spiderfyOnMaxZoom: true,
    showCoverageOnHover: false,
    zoomToBoundsOnClick: true
  })
  
  // 初始化标记
  updateMap()
}

// 更新地图显示
const updateMap = () => {
  if (!map) return
  
  clearLayers()
  
  switch (currentView.value) {
    case 'markers':
      showMarkers()
      break
    case 'heatmap':
      showHeatmap()
      break
    case 'cluster':
      showClusters()
      break
  }
  
  // 调整地图视野
  if (filteredRestaurants.value.length > 0) {
    const bounds = L.latLngBounds(
      filteredRestaurants.value.map(r => [r.latitude, r.longitude])
    )
    map.fitBounds(bounds, { padding: [20, 20] })
  }
}

// 清除所有图层
const clearLayers = () => {
  if (markersLayer) {
    markersLayer.clearLayers()
    map.removeLayer(markersLayer)
  }
  
  if (heatmapLayer) {
    map.removeLayer(heatmapLayer)
    heatmapLayer = null
  }
  
  if (clusterGroup) {
    clusterGroup.clearLayers()
    map.removeLayer(clusterGroup)
  }
}

// 显示标记点
const showMarkers = () => {
  markersLayer.clearLayers()
  
  filteredRestaurants.value.forEach(restaurant => {
    const marker = createMarker(restaurant)
    markersLayer.addLayer(marker)
  })
  
  map.addLayer(markersLayer)
  visibleCount.value = filteredRestaurants.value.length
}

// 显示热力图
const showHeatmap = () => {
  // 为每个星级设置不同的权重，使差异更明显
  const heatData = filteredRestaurants.value.map(restaurant => {
    const weight = restaurant.stars === 3 ? 1.0 : restaurant.stars === 2 ? 0.6 : 0.3
    return [
      restaurant.latitude,
      restaurant.longitude,
      weight // 使用调整后的权重
    ]
  })
  
  heatmapLayer = L.heatLayer(heatData, {
    radius: heatmapRadius.value,
    blur: 10, // 减少模糊效果，使边界更清晰
    maxZoom: 15, // 降低最大缩放级别，提高可见性
    minOpacity: 0.6, // 提高最小透明度
    max: 1.0, // 设置最大权重值为1.0
    gradient: {
      0.1: 'rgba(0, 100, 255, 0.7)',      // 深蓝色 - 最低密度
      0.3: 'rgba(0, 180, 255, 0.8)',      // 浅蓝色 - 低密度
      0.5: 'rgba(0, 255, 150, 0.8)',      // 绿色 - 中密度
      0.7: 'rgba(255, 200, 0, 0.9)',      // 橙色 - 中高密度
      0.9: 'rgba(255, 100, 0, 0.95)',     // 深橙色 - 高密度
      1.0: 'rgba(255, 0, 0, 1.0)'         // 红色 - 最高密度
    }
  }).addTo(map)
  
  visibleCount.value = filteredRestaurants.value.length
}

// 显示聚合
const showClusters = () => {
  // 更新聚合距离
  clusterGroup.options.maxClusterRadius = clusterDistance.value
  clusterGroup.clearLayers()
  
  filteredRestaurants.value.forEach(restaurant => {
    const marker = createMarker(restaurant)
    clusterGroup.addLayer(marker)
  })
  
  map.addLayer(clusterGroup)
  visibleCount.value = filteredRestaurants.value.length
  
  // 计算聚合组数
  clusterCount.value = clusterGroup.getLayers().length
}

// 创建标记
const createMarker = (restaurant) => {
  const { latitude, longitude, stars, name, city, region, cuisine, price } = restaurant
  
  // 根据星级选择颜色和大小
  const getMarkerStyle = (stars) => {
    const styles = {
      1: { color: '#10b981', size: 12 },
      2: { color: '#f59e0b', size: 16 },
      3: { color: '#ef4444', size: 20 }
    }
    return styles[stars] || styles[1]
  }
  
  const style = getMarkerStyle(stars)
  
  // 创建自定义图标
  const customIcon = L.divIcon({
    html: `<div style="
      background-color: ${style.color};
      width: ${style.size}px;
      height: ${style.size}px;
      border-radius: 50%;
      border: 2px solid white;
      box-shadow: 0 2px 6px rgba(0,0,0,0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: ${Math.max(8, style.size - 6)}px;
      font-weight: bold;
      cursor: pointer;
      transition: transform 0.2s ease;
    " onmouseover="this.style.transform='scale(1.2)'" 
       onmouseout="this.style.transform='scale(1)'">${stars}</div>`,
    className: 'custom-marker',
    iconSize: [style.size, style.size],
    iconAnchor: [style.size / 2, style.size / 2]
  })
  
  const marker = L.marker([latitude, longitude], { icon: customIcon })
  
  // 创建弹出窗口
  const popupContent = `
    <div class="restaurant-popup">
      <h3 class="popup-title">${name}</h3>
      <div class="popup-details">
        <div class="detail-item">
          <strong>⭐ ${stars}星米其林餐厅</strong>
        </div>
        <div class="detail-item">
          📍 ${city || ''}${city && region ? ', ' : ''}${region || ''}
        </div>
        <div class="detail-item">
          🍽️ ${cuisine || '未知菜系'}
        </div>
        ${price ? `<div class="detail-item">💰 ${price}</div>` : ''}
      </div>
      <div class="popup-actions">
        <button class="detail-btn" onclick="window.showRestaurantDetail('${restaurant.id}')">
          查看详情
        </button>
      </div>
    </div>
  `
  
  marker.bindPopup(popupContent, {
    maxWidth: 300,
    className: 'custom-popup'
  })
  
  // 点击事件
  marker.on('click', () => {
    emit('restaurant-click', restaurant)
  })
  
  return marker
}

// 切换视图
const switchView = (view) => {
  currentView.value = view
  updateMap()
  emit('view-change', view)
}

// 更新热力图
const updateHeatmap = () => {
  if (currentView.value === 'heatmap') {
    clearLayers()
    showHeatmap()
  }
}

// 更新聚合
const updateClusters = () => {
  if (currentView.value === 'cluster') {
    clearLayers()
    showClusters()
  }
}

// 监听数据变化
watch(() => [props.restaurants, props.selectedStars, props.selectedRegion], () => {
  if (map) {
    updateMap()
  }
}, { deep: true })

// 生命周期
onMounted(() => {
  initMap()
  
  // 全局方法供弹出窗口使用
  window.showRestaurantDetail = (id) => {
    const restaurant = props.restaurants.find(r => r.id === id)
    if (restaurant) {
      emit('restaurant-click', restaurant)
    }
  }
})

onUnmounted(() => {
  if (map) {
    map.remove()
    map = null
  }
  
  // 清理全局方法
  if (window.showRestaurantDetail) {
    delete window.showRestaurantDetail
  }
})
</script>

<style lang="scss" scoped>
.map-heatmap {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #e5e7eb;
}

.map-controls {
  padding: 16px 20px;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  background: #f9fafb;
  
  .view-toggle {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  .density-control,
  .cluster-control {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    color: #6b7280;
  }
}

.map-legend {
  padding: 12px 20px;
  border-bottom: 1px solid #e5e7eb;
  background: #fefefe;
  
  .legend-title {
    font-size: 14px;
    font-weight: 500;
    color: #374151;
    margin-bottom: 8px;
  }
  
  .legend-gradient {
    display: flex;
    align-items: center;
    gap: 12px;
    
    .gradient-bar {
      width: 120px;
      height: 12px;
      background: linear-gradient(
        to right,
        #313695,
        #4575b4,
        #74add1,
        #ffffcc,
        #fdae61,
        #d73027,
        #a50026
      );
      border-radius: 6px;
      border: 1px solid #e5e7eb;
    }
    
    .gradient-labels {
      display: flex;
      justify-content: space-between;
      width: 60px;
      font-size: 12px;
      color: #6b7280;
    }
  }
}

.map-stats {
  padding: 12px 20px;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  background: #fefefe;
  
  .stat-item {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 14px;
    
    .stat-label {
      color: #6b7280;
    }
    
    .stat-value {
      color: #1f2937;
      font-weight: 500;
    }
  }
}

.map-container {
  height: 600px;
  width: 100%;
  position: relative;
}

// 自定义弹出窗口样式
:global(.custom-popup) {
  .leaflet-popup-content-wrapper {
    border-radius: 8px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
  
  .restaurant-popup {
    .popup-title {
      font-size: 16px;
      font-weight: 600;
      color: #1f2937;
      margin: 0 0 12px 0;
      line-height: 1.3;
    }
    
    .popup-details {
      margin-bottom: 12px;
      
      .detail-item {
        margin-bottom: 6px;
        font-size: 14px;
        color: #4b5563;
        line-height: 1.4;
        
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
    
    .popup-actions {
      text-align: center;
      
      .detail-btn {
        background: #3b82f6;
        color: white;
        border: none;
        padding: 6px 12px;
        border-radius: 4px;
        font-size: 12px;
        cursor: pointer;
        transition: background 0.2s ease;
        
        &:hover {
          background: #2563eb;
        }
      }
    }
  }
}

// 聚合样式
:global(.marker-cluster) {
  background: rgba(59, 130, 246, 0.8) !important;
  border: 2px solid white !important;
  border-radius: 50% !important;
  color: white !important;
  font-weight: bold !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
  
  &:hover {
    background: rgba(37, 99, 235, 0.9) !important;
    transform: scale(1.1);
  }
}

:global(.marker-cluster-small) {
  background: rgba(16, 185, 129, 0.8) !important;
}

:global(.marker-cluster-medium) {
  background: rgba(245, 158, 11, 0.8) !important;
}

:global(.marker-cluster-large) {
  background: rgba(239, 68, 68, 0.8) !important;
}

// 响应式设计
@media (max-width: 768px) {
  .map-controls {
    padding: 12px 16px;
    gap: 12px;
  }
  
  .map-legend,
  .map-stats {
    padding: 12px 16px;
  }
  
  .map-container {
    height: 400px;
  }
  
  .map-stats {
    flex-direction: column;
    gap: 8px;
  }
}
</style> 