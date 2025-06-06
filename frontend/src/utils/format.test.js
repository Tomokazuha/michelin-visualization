/**
 * 工具函数测试
 */

import { describe, it, expect } from 'vitest'
import { 
  formatNumber, 
  formatString, 
  formatRestaurant,
  filterData,
  sortData,
  validateData,
  analyzeData
} from './format.js'

describe('formatNumber', () => {
  it('应该正确格式化数字（添加千分位）', () => {
    expect(formatNumber.withCommas(1234)).toBe('1,234')
    expect(formatNumber.withCommas(1234567)).toBe('1,234,567')
    expect(formatNumber.withCommas(0)).toBe('0')
  })

  it('应该处理无效输入', () => {
    expect(formatNumber.withCommas(null)).toBe('0')
    expect(formatNumber.withCommas(undefined)).toBe('0')
    expect(formatNumber.withCommas('abc')).toBe('0')
  })

  it('应该正确格式化百分比', () => {
    expect(formatNumber.toPercent(0.1234)).toBe('12.3%')
    expect(formatNumber.toPercent(0.5)).toBe('50.0%')
    expect(formatNumber.toPercent(1)).toBe('100.0%')
  })

  it('应该正确格式化小数', () => {
    expect(formatNumber.toFixed(3.14159, 2)).toBe('3.14')
    expect(formatNumber.toFixed(10, 0)).toBe('10')
    expect(formatNumber.toFixed(0.1, 3)).toBe('0.100')
  })
})

describe('formatString', () => {
  it('应该正确截断字符串', () => {
    expect(formatString.truncate('Hello World', 5)).toBe('Hello...')
    expect(formatString.truncate('Hi', 10)).toBe('Hi')
    expect(formatString.truncate('', 5)).toBe('')
  })

  it('应该正确转换首字母大写', () => {
    expect(formatString.capitalize('hello')).toBe('Hello')
    expect(formatString.capitalize('WORLD')).toBe('World')
    expect(formatString.capitalize('')).toBe('')
  })

  it('应该正确清理字符串', () => {
    expect(formatString.clean('  hello   world  ')).toBe('hello world')
    expect(formatString.clean('multiple   spaces')).toBe('multiple spaces')
  })
})

describe('formatRestaurant', () => {
  it('应该正确格式化星级', () => {
    expect(formatRestaurant.stars(1)).toBe('⭐')
    expect(formatRestaurant.stars(2)).toBe('⭐⭐')
    expect(formatRestaurant.stars(3)).toBe('⭐⭐⭐')
    expect(formatRestaurant.stars(0)).toBe('未评级')
    expect(formatRestaurant.stars(4)).toBe('未评级')
  })

  it('应该正确格式化价格等级', () => {
    expect(formatRestaurant.priceLevel('Low')).toBe('💰 经济实惠')
    expect(formatRestaurant.priceLevel('Moderate')).toBe('💰💰 中等价位')
    expect(formatRestaurant.priceLevel('Expensive')).toBe('💰💰💰 较贵')
    expect(formatRestaurant.priceLevel('Very Expensive')).toBe('💰💰💰💰 非常昂贵')
    expect(formatRestaurant.priceLevel('')).toBe('价格未知')
  })

  it('应该正确格式化地址', () => {
    const restaurant = {
      city: 'Paris',
      region: 'Île-de-France',
      country: 'France'
    }
    expect(formatRestaurant.address(restaurant)).toBe('Paris, Île-de-France, France')

    const incompleteRestaurant = { city: 'Tokyo' }
    expect(formatRestaurant.address(incompleteRestaurant)).toBe('Tokyo')

    const emptyRestaurant = {}
    expect(formatRestaurant.address(emptyRestaurant)).toBe('地址未知')
  })
})

describe('filterData', () => {
  const sampleRestaurants = [
    { name: 'French Bistro', city: 'Paris', stars: 2, cuisine: 'French' },
    { name: 'Sushi Master', city: 'Tokyo', stars: 3, cuisine: 'Japanese' },
    { name: 'Pizza Corner', city: 'Rome', stars: 1, cuisine: 'Italian' }
  ]

  it('应该根据关键词过滤', () => {
    const result = filterData.byKeyword(sampleRestaurants, 'French')
    expect(result).toHaveLength(1)
    expect(result[0].name).toBe('French Bistro')
  })

  it('应该根据星级过滤', () => {
    const result = filterData.byStars(sampleRestaurants, [2, 3])
    expect(result).toHaveLength(2)
    expect(result.every(r => r.stars >= 2)).toBe(true)
  })

  it('应该处理空过滤条件', () => {
    expect(filterData.byKeyword(sampleRestaurants, '')).toHaveLength(3)
    expect(filterData.byStars(sampleRestaurants, [])).toHaveLength(3)
  })
})

describe('sortData', () => {
  const sampleRestaurants = [
    { name: 'Charlie', stars: 2, year: 2020 },
    { name: 'Alpha', stars: 3, year: 2019 },
    { name: 'Bravo', stars: 1, year: 2021 }
  ]

  it('应该按名称排序', () => {
    const result = sortData.byName(sampleRestaurants, 'asc')
    expect(result[0].name).toBe('Alpha')
    expect(result[2].name).toBe('Charlie')
  })

  it('应该按星级排序', () => {
    const result = sortData.byStars(sampleRestaurants, 'desc')
    expect(result[0].stars).toBe(3)
    expect(result[2].stars).toBe(1)
  })

  it('应该按年份排序', () => {
    const result = sortData.byYear(sampleRestaurants, 'desc')
    expect(result[0].year).toBe(2021)
    expect(result[2].year).toBe(2019)
  })
})

describe('validateData', () => {
  it('应该验证餐厅数据', () => {
    const validRestaurant = {
      name: 'Test Restaurant',
      stars: 2,
      city: 'Test City',
      cuisine: 'Test Cuisine'
    }
    
    const result = validateData.restaurant(validRestaurant)
    expect(result.isValid).toBe(true)
    expect(result.errors).toHaveLength(0)
  })

  it('应该识别无效餐厅数据', () => {
    const invalidRestaurant = {
      name: '',
      stars: 5
    }
    
    const result = validateData.restaurant(invalidRestaurant)
    expect(result.isValid).toBe(false)
    expect(result.errors.length).toBeGreaterThan(0)
  })

  it('应该验证坐标', () => {
    expect(validateData.coordinates(48.8566, 2.3522)).toBe(true)
    expect(validateData.coordinates(91, 0)).toBe(false) // 纬度超出范围
    expect(validateData.coordinates(0, 181)).toBe(false) // 经度超出范围
  })
})

describe('analyzeData', () => {
  const sampleRestaurants = [
    { stars: 1, cuisine: 'French', region: 'Paris' },
    { stars: 2, cuisine: 'Italian', region: 'Rome' },
    { stars: 1, cuisine: 'French', region: 'Lyon' }
  ]

  it('应该生成正确的摘要统计', () => {
    const summary = analyzeData.summary(sampleRestaurants)
    expect(summary.total).toBe(3)
    expect(summary.byStars[1]).toBe(2)
    expect(summary.byStars[2]).toBe(1)
    expect(summary.byCuisine['French']).toBe(2)
  })

  it('应该处理空数据', () => {
    const summary = analyzeData.summary([])
    expect(summary.total).toBe(0)
    expect(Object.keys(summary.byStars)).toHaveLength(0)
  })

  it('应该计算数据完整性', () => {
    const completeness = analyzeData.completeness(sampleRestaurants)
    expect(completeness.stars.valid).toBe(3)
    expect(completeness.stars.percentage).toBe('100.0')
  })
}) 