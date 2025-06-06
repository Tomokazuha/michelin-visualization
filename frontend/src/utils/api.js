/**
 * API调用工具
 * 提供统一的HTTP请求处理、错误拦截和响应格式化
 */

import axios from 'axios'
import { ElMessage, ElLoading } from 'element-plus'

// API基础配置
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api'
const REQUEST_TIMEOUT = 30000 // 30秒超时

/**
 * 创建axios实例
 */
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: REQUEST_TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})

// 加载状态管理
let loadingInstance = null
let loadingCount = 0

/**
 * 显示加载状态
 */
const showLoading = () => {
  loadingCount++
  if (loadingCount === 1) {
    loadingInstance = ElLoading.service({
      lock: true,
      text: '数据加载中...',
      background: 'rgba(0, 0, 0, 0.7)'
    })
  }
}

/**
 * 隐藏加载状态
 */
const hideLoading = () => {
  loadingCount = Math.max(0, loadingCount - 1)
  if (loadingCount === 0 && loadingInstance) {
    loadingInstance.close()
    loadingInstance = null
  }
}

/**
 * 请求拦截器
 */
apiClient.interceptors.request.use(
  (config) => {
    // 显示加载状态（除非明确禁用）
    if (config.showLoading !== false) {
      showLoading()
    }

    // 添加请求时间戳（用于调试）
    config.metadata = { startTime: new Date() }

    // 记录请求信息
    console.log(`[API请求] ${config.method?.toUpperCase()} ${config.url}`, {
      params: config.params,
      data: config.data
    })

    return config
  },
  (error) => {
    hideLoading()
    console.error('[API请求错误]', error)
    return Promise.reject(error)
  }
)

/**
 * 响应拦截器
 */
apiClient.interceptors.response.use(
  (response) => {
    // 隐藏加载状态
    hideLoading()

    // 计算请求耗时
    const duration = new Date() - response.config.metadata.startTime
    console.log(`[API响应] ${response.config.method?.toUpperCase()} ${response.config.url} (${duration}ms)`, {
      status: response.status,
      data: response.data
    })

    // 统一处理业务错误
    if (response.data && response.data.success === false) {
      const errorMessage = response.data.error || '服务器返回错误'
      console.warn('[业务错误]', errorMessage, response.data)
      
      // 显示错误提示（除非明确禁用）
      if (response.config.showError !== false) {
        ElMessage.error(errorMessage)
      }
      
      return Promise.reject(new ApiError(errorMessage, response.data))
    }

    return response.data
  },
  (error) => {
    // 隐藏加载状态
    hideLoading()

    // 处理不同类型的错误
    const errorInfo = handleApiError(error)
    
    console.error('[API错误]', errorInfo, error)

    // 显示错误提示（除非明确禁用）
    if (error.config?.showError !== false) {
      ElMessage.error(errorInfo.message)
    }

    return Promise.reject(errorInfo)
  }
)

/**
 * 自定义API错误类
 */
class ApiError extends Error {
  constructor(message, data = null, status = null) {
    super(message)
    this.name = 'ApiError'
    this.data = data
    this.status = status
    this.isApiError = true
  }
}

/**
 * 处理API错误
 * @param {Error} error - 错误对象
 * @returns {Object} 格式化的错误信息
 */
const handleApiError = (error) => {
  let message = '网络请求失败'
  let status = null
  let data = null

  if (error.response) {
    // 服务器返回错误状态码
    status = error.response.status
    data = error.response.data

    switch (status) {
      case 400:
        message = '请求参数错误'
        break
      case 401:
        message = '未授权访问'
        break
      case 403:
        message = '访问被禁止'
        break
      case 404:
        message = '请求的资源不存在'
        break
      case 405:
        message = '请求方法不被允许'
        break
      case 408:
        message = '请求超时'
        break
      case 500:
        message = '服务器内部错误'
        break
      case 502:
        message = '网关错误'
        break
      case 503:
        message = '服务不可用'
        break
      case 504:
        message = '网关超时'
        break
      default:
        message = `服务器错误 (${status})`
    }

    // 如果服务器返回了具体错误信息，优先使用
    if (data && data.error) {
      message = data.error
    }
  } else if (error.request) {
    // 请求已发出但没有收到响应
    if (error.code === 'ECONNABORTED') {
      message = '请求超时，请稍后重试'
    } else {
      message = '网络连接失败，请检查网络状态'
    }
  } else {
    // 其他错误
    message = error.message || '未知错误'
  }

  return new ApiError(message, data, status)
}

/**
 * 通用API请求方法
 */
export const api = {
  /**
   * GET请求
   * @param {string} url - 请求URL
   * @param {Object} params - 查询参数
   * @param {Object} config - 额外配置
   * @returns {Promise} 请求Promise
   */
  get: (url, params = {}, config = {}) => {
    return apiClient.get(url, { params, ...config })
  },

  /**
   * POST请求
   * @param {string} url - 请求URL
   * @param {Object} data - 请求数据
   * @param {Object} config - 额外配置
   * @returns {Promise} 请求Promise
   */
  post: (url, data = {}, config = {}) => {
    return apiClient.post(url, data, config)
  },

  /**
   * PUT请求
   * @param {string} url - 请求URL
   * @param {Object} data - 请求数据
   * @param {Object} config - 额外配置
   * @returns {Promise} 请求Promise
   */
  put: (url, data = {}, config = {}) => {
    return apiClient.put(url, data, config)
  },

  /**
   * DELETE请求
   * @param {string} url - 请求URL
   * @param {Object} config - 额外配置
   * @returns {Promise} 请求Promise
   */
  delete: (url, config = {}) => {
    return apiClient.delete(url, config)
  }
}

/**
 * 餐厅相关API
 */
export const restaurantApi = {
  /**
   * 获取餐厅列表
   * @param {Object} params - 查询参数
   * @returns {Promise} 餐厅列表数据
   */
  getList: (params = {}) => {
    return api.get('/restaurants', params)
  },

  /**
   * 搜索餐厅
   * @param {string} keyword - 搜索关键词
   * @param {Object} params - 其他参数
   * @returns {Promise} 搜索结果
   */
  search: (keyword, params = {}) => {
    return api.get('/restaurants/search', { q: keyword, ...params })
  },

  /**
   * 获取过滤选项
   * @returns {Promise} 过滤选项数据
   */
  getFilterOptions: () => {
    return api.get('/restaurants/filter-options')
  }
}

/**
 * 分析相关API
 */
export const analyticsApi = {
  /**
   * 获取数据摘要
   * @returns {Promise} 摘要统计数据
   */
  getSummary: () => {
    return api.get('/analytics/summary')
  },

  /**
   * 获取分布分析
   * @param {string} type - 分布类型
   * @param {string} format - 返回格式
   * @returns {Promise} 分布分析数据
   */
  getDistribution: (type = 'stars', format = 'json') => {
    return api.get('/analytics/distribution', { type, format })
  },

  /**
   * 获取趋势分析
   * @param {string} metric - 分析指标
   * @param {string} groupBy - 分组方式
   * @returns {Promise} 趋势分析数据
   */
  getTrends: (metric = 'count', groupBy = 'year') => {
    return api.get('/analytics/trends', { metric, group_by: groupBy })
  },

  /**
   * 获取聚类分析
   * @param {number} clusterId - 聚类ID
   * @param {boolean} includeDetails - 是否包含详细信息
   * @returns {Promise} 聚类分析数据
   */
  getClustering: (clusterId = null, includeDetails = false) => {
    const params = { include_details: includeDetails }
    if (clusterId !== null) {
      params.cluster_id = clusterId
    }
    return api.get('/analytics/clustering', params)
  },

  /**
   * 获取特征分析
   * @returns {Promise} 特征分析数据
   */
  getFeatures: () => {
    return api.get('/analytics/features')
  },

  /**
   * 获取预测分析
   * @param {string} region - 地区过滤
   * @param {string} metric - 预测指标
   * @returns {Promise} 预测分析数据
   */
  getForecasts: (region = null, metric = 'count') => {
    const params = { metric }
    if (region) {
      params.region = region
    }
    return api.get('/analytics/forecasts', params)
  }
}

/**
 * 系统相关API
 */
export const systemApi = {
  /**
   * 健康检查
   * @returns {Promise} 系统状态
   */
  healthCheck: () => {
    return api.get('/health', {}, { showLoading: false })
  },

  /**
   * 重新加载数据
   * @returns {Promise} 重新加载结果
   */
  reloadData: () => {
    return api.post('/data/reload')
  }
}

/**
 * 错误处理工具
 */
export const errorHandler = {
  /**
   * 检查是否为API错误
   * @param {Error} error - 错误对象
   * @returns {boolean} 是否为API错误
   */
  isApiError: (error) => {
    return error && error.isApiError === true
  },

  /**
   * 提取错误消息
   * @param {Error} error - 错误对象
   * @returns {string} 错误消息
   */
  getMessage: (error) => {
    if (errorHandler.isApiError(error)) {
      return error.message
    }
    return error?.message || '未知错误'
  },

  /**
   * 提取错误详情
   * @param {Error} error - 错误对象
   * @returns {Object} 错误详情
   */
  getDetails: (error) => {
    if (errorHandler.isApiError(error)) {
      return {
        message: error.message,
        status: error.status,
        data: error.data
      }
    }
    return { message: error?.message || '未知错误' }
  }
}

/**
 * 请求重试工具
 */
export const retryRequest = {
  /**
   * 带重试的请求
   * @param {Function} requestFn - 请求函数
   * @param {number} maxRetries - 最大重试次数
   * @param {number} delay - 重试延迟（毫秒）
   * @returns {Promise} 请求结果
   */
  async withRetry(requestFn, maxRetries = 3, delay = 1000) {
    let lastError = null
    
    for (let i = 0; i <= maxRetries; i++) {
      try {
        return await requestFn()
      } catch (error) {
        lastError = error
        
        // 如果是最后一次尝试，直接抛出错误
        if (i === maxRetries) {
          throw error
        }
        
        // 对于某些错误类型不进行重试
        if (errorHandler.isApiError(error) && error.status && error.status < 500) {
          throw error
        }
        
        // 等待后重试
        await new Promise(resolve => setTimeout(resolve, delay * (i + 1)))
      }
    }
    
    throw lastError
  }
}

// 导出默认配置的axios实例
export default apiClient 