import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import axios from 'axios'

// 配置axios
const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  timeout: 10000
})

export const useDataStore = defineStore('data', () => {
  // 状态
  const summary = ref(null)
  const restaurants = ref([])
  const geojson = ref(null)
  const analytics = ref({})
  const filters = ref({
    stars: null,
    region: null,
    city: null,
    cuisine: null,
    year: null
  })
  const pagination = ref({
    page: 1,
    per_page: 50,
    total: 0,
    pages: 0
  })
  const loading = ref(false)
  const error = ref(null)

  // 计算属性
  const filteredRestaurantsCount = computed(() => restaurants.value.length)
  const hasData = computed(() => summary.value !== null)

  // API方法
  const checkApiHealth = async () => {
    try {
      const response = await api.get('/health')
      return response.data
    } catch (err) {
      error.value = '无法连接到后端服务'
      throw err
    }
  }

  const fetchSummary = async () => {
    try {
      loading.value = true
      error.value = null
      const response = await api.get('/summary')
      summary.value = response.data.data
      
      // 添加时间戳
      summary.value._lastUpdated = new Date().toISOString()
      return response.data.data
    } catch (err) {
      const errorMsg = err.response?.data?.message || '获取数据摘要失败'
      error.value = {
        type: 'fetch_summary',
        message: errorMsg,
        details: err.message,
        timestamp: new Date().toISOString()
      }
      throw err
    } finally {
      loading.value = false
    }
  }

  const fetchRestaurants = async (params = {}) => {
    try {
      loading.value = true
      const queryParams = {
        page: pagination.value.page,
        per_page: pagination.value.per_page,
        ...filters.value,
        ...params
      }
      
      // 移除空值
      Object.keys(queryParams).forEach(key => {
        if (queryParams[key] === null || queryParams[key] === '') {
          delete queryParams[key]
        }
      })

      const response = await api.get('/restaurants', { params: queryParams })
      restaurants.value = response.data.data.restaurants
      pagination.value = response.data.data.pagination
      return response.data.data
    } catch (err) {
      error.value = '获取餐厅数据失败'
      throw err
    } finally {
      loading.value = false
    }
  }

  const fetchGeoJSON = async () => {
    try {
      loading.value = true
      const response = await api.get('/geojson')
      geojson.value = response.data.data
      return response.data.data
    } catch (err) {
      error.value = '获取地理数据失败'
      throw err
    } finally {
      loading.value = false
    }
  }

  const fetchAnalytics = async (type) => {
    try {
      loading.value = true
      const response = await api.get(`/analytics/${type}`)
      analytics.value[type] = response.data.data
      return response.data.data
    } catch (err) {
      error.value = `获取${type}分析数据失败`
      throw err
    } finally {
      loading.value = false
    }
  }

  const searchRestaurants = async (query) => {
    try {
      loading.value = true
      const response = await api.get('/search', { params: { q: query } })
      return response.data.data
    } catch (err) {
      error.value = '搜索失败'
      throw err
    } finally {
      loading.value = false
    }
  }

  const generateChart = async (chartConfig) => {
    try {
      loading.value = true
      const response = await api.post('/charts/generate', chartConfig)
      return response.data.data
    } catch (err) {
      error.value = '生成图表失败'
      throw err
    } finally {
      loading.value = false
    }
  }

  // 过滤器方法
  const setFilter = (key, value) => {
    filters.value[key] = value
    pagination.value.page = 1 // 重置页码
  }

  const clearFilters = () => {
    filters.value = {
      stars: null,
      region: null,
      city: null,
      cuisine: null,
      year: null
    }
    pagination.value.page = 1
  }

  const setPage = (page) => {
    pagination.value.page = page
  }

  // 初始化数据
  const initializeData = async () => {
    try {
      await Promise.all([
        fetchSummary(),
        fetchRestaurants(),
        fetchGeoJSON()
      ])
    } catch (err) {
      console.error('初始化数据失败:', err)
      throw err
    }
  }

  // 清除错误
  const clearError = () => {
    error.value = null
  }

  return {
    // 状态
    summary,
    restaurants,
    geojson,
    analytics,
    filters,
    pagination,
    loading,
    error,

    // 计算属性
    filteredRestaurantsCount,
    hasData,

    // 方法
    checkApiHealth,
    fetchSummary,
    fetchRestaurants,
    fetchGeoJSON,
    fetchAnalytics,
    searchRestaurants,
    generateChart,
    setFilter,
    clearFilters,
    setPage,
    initializeData,
    clearError
  }
}) 