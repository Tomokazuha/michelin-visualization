/**
 * 前端工具函数库
 * 提供数据格式化、过滤、验证等通用功能
 */

/**
 * 数字格式化工具
 */
export const formatNumber = {
  /**
   * 格式化大数字，添加千分位分隔符
   * @param {number} num - 要格式化的数字
   * @returns {string} 格式化后的字符串
   */
  withCommas: (num) => {
    if (typeof num !== 'number' || isNaN(num)) return '0'
    return num.toLocaleString()
  },

  /**
   * 格式化百分比
   * @param {number} num - 小数值 (0-1)
   * @param {number} decimals - 小数位数，默认1
   * @returns {string} 百分比字符串
   */
  toPercent: (num, decimals = 1) => {
    if (typeof num !== 'number' || isNaN(num)) return '0%'
    return `${(num * 100).toFixed(decimals)}%`
  },

  /**
   * 格式化小数
   * @param {number} num - 数字
   * @param {number} decimals - 小数位数，默认2
   * @returns {string} 格式化的数字字符串
   */
  toFixed: (num, decimals = 2) => {
    if (typeof num !== 'number' || isNaN(num)) return '0'
    return num.toFixed(decimals)
  }
}

/**
 * 字符串格式化工具
 */
export const formatString = {
  /**
   * 截断字符串并添加省略号
   * @param {string} str - 原始字符串
   * @param {number} maxLength - 最大长度
   * @returns {string} 截断后的字符串
   */
  truncate: (str, maxLength = 50) => {
    if (!str) return ''
    if (str.length <= maxLength) return str
    return str.substring(0, maxLength) + '...'
  },

  /**
   * 首字母大写
   * @param {string} str - 原始字符串
   * @returns {string} 首字母大写的字符串
   */
  capitalize: (str) => {
    if (!str) return ''
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
  },

  /**
   * 清理和标准化字符串
   * @param {string} str - 原始字符串
   * @returns {string} 清理后的字符串
   */
  clean: (str) => {
    if (!str) return ''
    return str.trim().replace(/\s+/g, ' ')
  }
}

/**
 * 餐厅数据格式化工具
 */
export const formatRestaurant = {
  /**
   * 格式化星级显示
   * @param {number} stars - 星级数值 (1-3)
   * @returns {string} 星级字符串
   */
  stars: (stars) => {
    const starCount = parseInt(stars)
    if (starCount < 1 || starCount > 3) return '未评级'
    return '⭐'.repeat(starCount)
  },

  /**
   * 格式化价格等级
   * @param {string} priceLevel - 价格等级
   * @returns {string} 格式化的价格显示
   */
  priceLevel: (priceLevel) => {
    if (!priceLevel) return '价格未知'
    
    const priceMap = {
      'Low': '💰 经济实惠',
      'Moderate': '💰💰 中等价位', 
      'Expensive': '💰💰💰 较贵',
      'Very Expensive': '💰💰💰💰 非常昂贵'
    }
    
    return priceMap[priceLevel] || priceLevel
  },

  /**
   * 格式化餐厅地址
   * @param {Object} restaurant - 餐厅对象
   * @returns {string} 格式化的地址字符串
   */
  address: (restaurant) => {
    const parts = []
    
    if (restaurant.city) parts.push(restaurant.city)
    if (restaurant.region) parts.push(restaurant.region)
    if (restaurant.country) parts.push(restaurant.country)
    
    return parts.join(', ') || '地址未知'
  },

  /**
   * 格式化餐厅概要信息
   * @param {Object} restaurant - 餐厅对象
   * @returns {Object} 格式化的概要信息
   */
  summary: (restaurant) => {
    return {
      name: restaurant.name || '未知餐厅',
      stars: formatRestaurant.stars(restaurant.stars),
      cuisine: restaurant.cuisine || '菜系未知',
      address: formatRestaurant.address(restaurant),
      priceLevel: formatRestaurant.priceLevel(restaurant.price_level),
      year: restaurant.year ? `${restaurant.year}年` : '年份未知'
    }
  }
}

/**
 * 数据过滤工具
 */
export const filterData = {
  /**
   * 根据关键词过滤餐厅列表
   * @param {Array} restaurants - 餐厅数组
   * @param {string} keyword - 搜索关键词
   * @param {Array} searchFields - 搜索字段列表
   * @returns {Array} 过滤后的餐厅数组
   */
  byKeyword: (restaurants, keyword, searchFields = ['name', 'city', 'region', 'cuisine']) => {
    if (!keyword || !keyword.trim()) return restaurants
    
    const lowerKeyword = keyword.toLowerCase().trim()
    
    return restaurants.filter(restaurant => {
      return searchFields.some(field => {
        const value = restaurant[field]
        return value && value.toString().toLowerCase().includes(lowerKeyword)
      })
    })
  },

  /**
   * 根据星级过滤餐厅
   * @param {Array} restaurants - 餐厅数组
   * @param {Array} starLevels - 星级数组 [1, 2, 3]
   * @returns {Array} 过滤后的餐厅数组
   */
  byStars: (restaurants, starLevels) => {
    if (!starLevels || starLevels.length === 0) return restaurants
    return restaurants.filter(restaurant => starLevels.includes(restaurant.stars))
  },

  /**
   * 根据地区过滤餐厅
   * @param {Array} restaurants - 餐厅数组
   * @param {Array} regions - 地区数组
   * @returns {Array} 过滤后的餐厅数组
   */
  byRegions: (restaurants, regions) => {
    if (!regions || regions.length === 0) return restaurants
    return restaurants.filter(restaurant => 
      regions.some(region => 
        restaurant.region && restaurant.region.toLowerCase().includes(region.toLowerCase())
      )
    )
  },

  /**
   * 根据城市过滤餐厅
   * @param {Array} restaurants - 餐厅数组
   * @param {Array} cities - 城市数组
   * @returns {Array} 过滤后的餐厅数组
   */
  byCities: (restaurants, cities) => {
    if (!cities || cities.length === 0) return restaurants
    return restaurants.filter(restaurant => 
      cities.some(city => 
        restaurant.city && restaurant.city.toLowerCase().includes(city.toLowerCase())
      )
    )
  },

  /**
   * 根据菜系过滤餐厅
   * @param {Array} restaurants - 餐厅数组
   * @param {Array} cuisines - 菜系数组
   * @returns {Array} 过滤后的餐厅数组
   */
  byCuisines: (restaurants, cuisines) => {
    if (!cuisines || cuisines.length === 0) return restaurants
    return restaurants.filter(restaurant => 
      cuisines.some(cuisine => 
        restaurant.cuisine && restaurant.cuisine.toLowerCase().includes(cuisine.toLowerCase())
      )
    )
  },

  /**
   * 综合过滤器
   * @param {Array} restaurants - 餐厅数组
   * @param {Object} filters - 过滤条件对象
   * @returns {Array} 过滤后的餐厅数组
   */
  comprehensive: (restaurants, filters) => {
    let result = restaurants

    if (filters.keyword) {
      result = filterData.byKeyword(result, filters.keyword)
    }

    if (filters.stars && filters.stars.length > 0) {
      result = filterData.byStars(result, filters.stars)
    }

    if (filters.regions && filters.regions.length > 0) {
      result = filterData.byRegions(result, filters.regions)
    }

    if (filters.cities && filters.cities.length > 0) {
      result = filterData.byCities(result, filters.cities)
    }

    if (filters.cuisines && filters.cuisines.length > 0) {
      result = filterData.byCuisines(result, filters.cuisines)
    }

    return result
  }
}

/**
 * 数据排序工具
 */
export const sortData = {
  /**
   * 按餐厅名称排序
   * @param {Array} restaurants - 餐厅数组
   * @param {string} order - 排序方向 'asc' | 'desc'
   * @returns {Array} 排序后的数组
   */
  byName: (restaurants, order = 'asc') => {
    return [...restaurants].sort((a, b) => {
      const comparison = (a.name || '').localeCompare(b.name || '')
      return order === 'desc' ? -comparison : comparison
    })
  },

  /**
   * 按星级排序
   * @param {Array} restaurants - 餐厅数组
   * @param {string} order - 排序方向 'asc' | 'desc'
   * @returns {Array} 排序后的数组
   */
  byStars: (restaurants, order = 'desc') => {
    return [...restaurants].sort((a, b) => {
      const comparison = (a.stars || 0) - (b.stars || 0)
      return order === 'desc' ? -comparison : comparison
    })
  },

  /**
   * 按年份排序
   * @param {Array} restaurants - 餐厅数组
   * @param {string} order - 排序方向 'asc' | 'desc'
   * @returns {Array} 排序后的数组
   */
  byYear: (restaurants, order = 'desc') => {
    return [...restaurants].sort((a, b) => {
      const comparison = (a.year || 0) - (b.year || 0)
      return order === 'desc' ? -comparison : comparison
    })
  }
}

/**
 * 数据验证工具
 */
export const validateData = {
  /**
   * 验证餐厅数据完整性
   * @param {Object} restaurant - 餐厅对象
   * @returns {Object} 验证结果
   */
  restaurant: (restaurant) => {
    const errors = []
    const warnings = []

    // 必填字段检查
    if (!restaurant.name) errors.push('餐厅名称不能为空')
    if (!restaurant.stars || ![1, 2, 3].includes(restaurant.stars)) {
      errors.push('星级必须是1、2或3')
    }

    // 可选字段检查
    if (!restaurant.city) warnings.push('缺少城市信息')
    if (!restaurant.cuisine) warnings.push('缺少菜系信息')
    if (!restaurant.latitude || !restaurant.longitude) {
      warnings.push('缺少位置坐标')
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings
    }
  },

  /**
   * 验证坐标数据
   * @param {number} latitude - 纬度
   * @param {number} longitude - 经度
   * @returns {boolean} 是否有效
   */
  coordinates: (latitude, longitude) => {
    return (
      typeof latitude === 'number' &&
      typeof longitude === 'number' &&
      latitude >= -90 && latitude <= 90 &&
      longitude >= -180 && longitude <= 180 &&
      !isNaN(latitude) && !isNaN(longitude)
    )
  }
}

/**
 * 数据统计工具
 */
export const analyzeData = {
  /**
   * 生成餐厅数据统计摘要
   * @param {Array} restaurants - 餐厅数组
   * @returns {Object} 统计摘要
   */
  summary: (restaurants) => {
    if (!restaurants || restaurants.length === 0) {
      return {
        total: 0,
        byStars: {},
        byCuisine: {},
        byRegion: {},
        byCountry: {}
      }
    }

    const summary = {
      total: restaurants.length,
      byStars: {},
      byCuisine: {},
      byRegion: {},
      byCountry: {}
    }

    restaurants.forEach(restaurant => {
      // 星级统计
      const stars = restaurant.stars
      summary.byStars[stars] = (summary.byStars[stars] || 0) + 1

      // 菜系统计
      const cuisine = restaurant.cuisine
      if (cuisine) {
        summary.byCuisine[cuisine] = (summary.byCuisine[cuisine] || 0) + 1
      }

      // 地区统计
      const region = restaurant.region
      if (region) {
        summary.byRegion[region] = (summary.byRegion[region] || 0) + 1
      }

      // 国家统计
      const country = restaurant.country
      if (country) {
        summary.byCountry[country] = (summary.byCountry[country] || 0) + 1
      }
    })

    return summary
  },

  /**
   * 计算数据完整性
   * @param {Array} restaurants - 餐厅数组
   * @returns {Object} 完整性统计
   */
  completeness: (restaurants) => {
    if (!restaurants || restaurants.length === 0) return {}

    const total = restaurants.length
    const fields = ['name', 'stars', 'city', 'region', 'country', 'cuisine', 'latitude', 'longitude']
    
    const completeness = {}
    
    fields.forEach(field => {
      const validCount = restaurants.filter(r => r[field] && r[field] !== '').length
      completeness[field] = {
        valid: validCount,
        percentage: (validCount / total * 100).toFixed(1)
      }
    })

    return completeness
  }
}

/**
 * 默认导出所有工具函数
 */
export default {
  formatNumber,
  formatString,
  formatRestaurant,
  filterData,
  sortData,
  validateData,
  analyzeData
} 