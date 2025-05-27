// 图表初始化辅助工具

/**
 * 等待容器准备就绪的通用函数
 * @param {Ref} containerRef - 容器引用
 * @param {number} maxRetries - 最大重试次数
 * @param {number} delay - 重试间隔
 * @returns {Promise}
 */
export const waitForContainer = async (containerRef, maxRetries = 50, delay = 200) => {
  let retryCount = 0
  
  return new Promise((resolve, reject) => {
    const checkContainer = () => {
      if (containerRef.value) {
        // 检查容器是否存在且可见
        const rect = containerRef.value.getBoundingClientRect()
        const isVisible = rect.width > 0 && rect.height > 0
        const hasSize = containerRef.value.offsetWidth > 0 && containerRef.value.offsetHeight > 0
        
        if (isVisible || hasSize) {
          resolve()
        } else if (retryCount < maxRetries) {
          retryCount++
          setTimeout(checkContainer, delay)
        } else {
          // 即使容器不可见，也尝试初始化，让ECharts自己处理
          console.warn(`Container may be hidden, attempting to initialize anyway`)
          resolve()
        }
      } else if (retryCount < maxRetries) {
        retryCount++
        setTimeout(checkContainer, delay)
      } else {
        reject(new Error(`Container not found after ${maxRetries} retries`))
      }
    }
    checkContainer()
  })
}

/**
 * 确保容器有正确的尺寸
 * @param {Ref} containerRef - 容器引用
 * @param {number} defaultHeight - 默认高度
 */
export const ensureContainerSize = async (containerRef, defaultHeight = 600) => {
  if (containerRef.value && (!containerRef.value.clientWidth || !containerRef.value.clientHeight)) {
    containerRef.value.style.width = '100%'
    containerRef.value.style.height = `${defaultHeight}px`
    // 等待样式应用
    await new Promise(resolve => setTimeout(resolve, 50))
  }
}

/**
 * 创建可见性观察器
 * @param {Ref} containerRef - 容器引用
 * @param {Function} callback - 可见时的回调函数
 * @returns {IntersectionObserver}
 */
export const createVisibilityObserver = (containerRef, callback) => {
  if (!containerRef.value) return null
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.intersectionRatio > 0) {
        // 容器变为可见时，延迟执行回调
        setTimeout(callback, 100)
      }
    })
  }, {
    threshold: 0.1
  })
  
  observer.observe(containerRef.value)
  return observer
}

/**
 * 获取图表的默认配置
 */
export const getDefaultChartConfig = () => ({
  backgroundColor: '#fff',
  animation: true,
  animationDuration: 800,
  animationEasing: 'cubicOut'
})

/**
 * 米其林餐厅星级颜色配置
 */
export const MICHELIN_COLORS = {
  1: '#D4AF37', // 金色
  2: '#DC143C', // 深红色
  3: '#40E0D0'  // 青绿色
}

/**
 * 价格等级颜色配置
 */
export const PRICE_COLORS = {
  1: '#4CAF50',  // 绿色
  2: '#FFC107',  // 黄色
  3: '#FF9800',  // 橙色
  4: '#F44336',  // 红色
  5: '#9C27B0'   // 紫色
} 