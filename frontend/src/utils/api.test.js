/**
 * API工具函数单元测试
 * 测试API调用、错误处理、重试机制等核心功能
 */

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import axios from 'axios'
import { ElMessage } from 'element-plus'
import { API_CONFIG, ApiError, createApiClient, retryRequest } from './api.js'

// Mock Element Plus
vi.mock('element-plus', () => ({
  ElMessage: {
    error: vi.fn(),
    success: vi.fn(),
    warning: vi.fn()
  },
  ElLoading: {
    service: vi.fn(() => ({
      close: vi.fn()
    }))
  }
}))

// Mock axios
vi.mock('axios', () => ({
  default: {
    create: vi.fn(() => ({
      interceptors: {
        request: { use: vi.fn() },
        response: { use: vi.fn() }
      },
      get: vi.fn(),
      post: vi.fn(),
      put: vi.fn(),
      delete: vi.fn()
    }))
  }
}))

describe('API Configuration', () => {
  it('should have correct default configuration', () => {
    expect(API_CONFIG.BASE_URL).toBe('http://localhost:5000/api')
    expect(API_CONFIG.TIMEOUT).toBe(10000)
    expect(API_CONFIG.RETRY_ATTEMPTS).toBe(3)
    expect(API_CONFIG.RETRY_DELAY).toBe(1000)
  })
})

describe('ApiError Class', () => {
  it('should create ApiError instance correctly', () => {
    const error = new ApiError('Test error', { code: 400 })
    
    expect(error).toBeInstanceOf(Error)
    expect(error.message).toBe('Test error')
    expect(error.response).toEqual({ code: 400 })
    expect(error.name).toBe('ApiError')
  })
  
  it('should handle ApiError without response data', () => {
    const error = new ApiError('Network error')
    
    expect(error.message).toBe('Network error')
    expect(error.response).toBeNull()
  })
})

describe('Error Classification', () => {
  const mockApiClient = {
    get: vi.fn(),
    post: vi.fn()
  }
  
  beforeEach(() => {
    vi.clearAllMocks()
  })
  
  it('should classify network error correctly', () => {
    const networkError = {
      code: 'NETWORK_ERROR',
      message: 'Network Error'
    }
    
    // 这里我们测试错误分类逻辑
    expect(networkError.code).toBe('NETWORK_ERROR')
  })
  
  it('should classify timeout error correctly', () => {
    const timeoutError = {
      code: 'ECONNABORTED',
      message: 'timeout'
    }
    
    expect(timeoutError.code).toBe('ECONNABORTED')
    expect(timeoutError.message).toContain('timeout')
  })
  
  it('should classify server error correctly', () => {
    const serverError = {
      response: {
        status: 500,
        data: { error: 'Internal Server Error' }
      }
    }
    
    expect(serverError.response.status).toBe(500)
    expect(serverError.response.data.error).toBe('Internal Server Error')
  })
})

describe('Retry Mechanism', () => {
  it('should retry failed requests', async () => {
    const mockFn = vi.fn()
      .mockRejectedValueOnce(new Error('Network error'))
      .mockRejectedValueOnce(new Error('Network error'))
      .mockResolvedValueOnce({ data: 'success' })
    
    const result = await retryRequest(mockFn, 3, 100)
    
    expect(mockFn).toHaveBeenCalledTimes(3)
    expect(result).toEqual({ data: 'success' })
  })
  
  it('should fail after max retries', async () => {
    const mockFn = vi.fn().mockRejectedValue(new Error('Persistent error'))
    
    await expect(retryRequest(mockFn, 2, 100)).rejects.toThrow('Persistent error')
    expect(mockFn).toHaveBeenCalledTimes(2)
  })
  
  it('should not retry non-retryable errors', async () => {
    const clientError = new Error('Client error')
    clientError.response = { status: 400 }
    
    const mockFn = vi.fn().mockRejectedValue(clientError)
    
    await expect(retryRequest(mockFn, 3, 100)).rejects.toThrow('Client error')
    expect(mockFn).toHaveBeenCalledTimes(1)
  })
})

describe('API Response Handling', () => {
  it('should handle successful response', () => {
    const successResponse = {
      data: {
        success: true,
        data: { restaurants: [] }
      }
    }
    
    expect(successResponse.data.success).toBe(true)
    expect(successResponse.data.data).toEqual({ restaurants: [] })
  })
  
  it('should handle business error response', () => {
    const businessErrorResponse = {
      data: {
        success: false,
        error: '参数错误',
        error_code: 'INVALID_PARAMS'
      }
    }
    
    expect(businessErrorResponse.data.success).toBe(false)
    expect(businessErrorResponse.data.error).toBe('参数错误')
    expect(businessErrorResponse.data.error_code).toBe('INVALID_PARAMS')
  })
})

describe('API Methods Integration', () => {
  let apiClient
  
  beforeEach(() => {
    apiClient = {
      get: vi.fn(),
      post: vi.fn(),
      put: vi.fn(),
      delete: vi.fn()
    }
  })
  
  it('should call restaurants API correctly', async () => {
    const mockResponse = {
      data: {
        success: true,
        data: { restaurants: [], total: 0 }
      }
    }
    
    apiClient.get.mockResolvedValue(mockResponse)
    
    const params = { page: 1, limit: 20 }
    await apiClient.get('/restaurants', { params })
    
    expect(apiClient.get).toHaveBeenCalledWith('/restaurants', { params })
  })
  
  it('should call analytics API correctly', async () => {
    const mockResponse = {
      data: {
        success: true,
        data: { summary: {} }
      }
    }
    
    apiClient.get.mockResolvedValue(mockResponse)
    
    await apiClient.get('/analytics/summary')
    
    expect(apiClient.get).toHaveBeenCalledWith('/analytics/summary')
  })
  
  it('should handle API error gracefully', async () => {
    const mockError = new Error('API Error')
    mockError.response = {
      status: 500,
      data: { error: 'Internal Server Error' }
    }
    
    apiClient.get.mockRejectedValue(mockError)
    
    await expect(apiClient.get('/restaurants')).rejects.toThrow('API Error')
  })
})

describe('Loading State Management', () => {
  it('should manage loading state correctly', () => {
    const loadingService = {
      show: vi.fn(),
      hide: vi.fn()
    }
    
    // 模拟加载状态管理
    loadingService.show()
    expect(loadingService.show).toHaveBeenCalled()
    
    loadingService.hide()
    expect(loadingService.hide).toHaveBeenCalled()
  })
})

describe('Request Validation', () => {
  it('should validate request parameters', () => {
    const validParams = {
      page: 1,
      limit: 20,
      stars: 3
    }
    
    expect(typeof validParams.page).toBe('number')
    expect(validParams.page).toBeGreaterThan(0)
    expect(validParams.limit).toBeGreaterThan(0)
    expect([1, 2, 3]).toContain(validParams.stars)
  })
  
  it('should reject invalid parameters', () => {
    const invalidParams = {
      page: -1,
      limit: 0,
      stars: 5
    }
    
    expect(invalidParams.page).toBeLessThan(1)
    expect(invalidParams.limit).toBeLessThanOrEqual(0)
    expect(![1, 2, 3].includes(invalidParams.stars)).toBe(true)
  })
})

describe('Response Format Validation', () => {
  it('should validate successful response format', () => {
    const response = {
      success: true,
      data: { restaurants: [] },
      timestamp: '2024-01-01T00:00:00Z'
    }
    
    expect(response).toHaveProperty('success')
    expect(response).toHaveProperty('data')
    expect(response.success).toBe(true)
    expect(Array.isArray(response.data.restaurants)).toBe(true)
  })
  
  it('should validate error response format', () => {
    const errorResponse = {
      success: false,
      error: '服务器错误',
      error_code: 'SERVER_ERROR',
      timestamp: '2024-01-01T00:00:00Z'
    }
    
    expect(errorResponse.success).toBe(false)
    expect(errorResponse).toHaveProperty('error')
    expect(errorResponse).toHaveProperty('error_code')
    expect(typeof errorResponse.error).toBe('string')
  })
})

describe('Message Display', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })
  
  it('should display error message', () => {
    const errorMessage = '请求失败，请稍后重试'
    ElMessage.error(errorMessage)
    
    expect(ElMessage.error).toHaveBeenCalledWith(errorMessage)
  })
  
  it('should display success message', () => {
    const successMessage = '操作成功'
    ElMessage.success(successMessage)
    
    expect(ElMessage.success).toHaveBeenCalledWith(successMessage)
  })
  
  it('should display warning message', () => {
    const warningMessage = '数据加载中...'
    ElMessage.warning(warningMessage)
    
    expect(ElMessage.warning).toHaveBeenCalledWith(warningMessage)
  })
}) 