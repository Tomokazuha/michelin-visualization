<template>
  <span class="animated-number">{{ displayValue }}</span>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'

const props = defineProps({
  value: {
    type: [Number, String],
    required: true
  },
  format: {
    type: String,
    default: 'number',
    validator: (value) => ['number', 'currency', 'percentage', 'compact'].includes(value)
  },
  duration: {
    type: Number,
    default: 1000
  },
  decimals: {
    type: Number,
    default: 0
  },
  prefix: {
    type: String,
    default: ''
  },
  suffix: {
    type: String,
    default: ''
  },
  locale: {
    type: String,
    default: 'zh-CN'
  }
})

const currentValue = ref(0)

const displayValue = computed(() => {
  const num = Number(currentValue.value)
  
  if (isNaN(num)) return props.value
  
  let formatted = ''
  
  switch (props.format) {
    case 'currency':
      formatted = new Intl.NumberFormat(props.locale, {
        style: 'currency',
        currency: 'CNY',
        minimumFractionDigits: props.decimals,
        maximumFractionDigits: props.decimals
      }).format(num)
      break
      
    case 'percentage':
      formatted = new Intl.NumberFormat(props.locale, {
        style: 'percent',
        minimumFractionDigits: props.decimals,
        maximumFractionDigits: props.decimals
      }).format(num / 100)
      break
      
    case 'compact':
      if (num >= 1000000) {
        formatted = (num / 1000000).toFixed(props.decimals) + 'M'
      } else if (num >= 1000) {
        formatted = (num / 1000).toFixed(props.decimals) + 'K'
      } else {
        formatted = num.toFixed(props.decimals)
      }
      break
      
    default:
      formatted = new Intl.NumberFormat(props.locale, {
        minimumFractionDigits: props.decimals,
        maximumFractionDigits: props.decimals
      }).format(num)
  }
  
  return props.prefix + formatted + props.suffix
})

const animateValue = (start, end, duration) => {
  if (start === end) return
  
  const startTime = performance.now()
  const startValue = Number(start) || 0
  const endValue = Number(end) || 0
  const range = endValue - startValue
  
  const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4)
  
  const step = (currentTime) => {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    
    const easedProgress = easeOutQuart(progress)
    currentValue.value = startValue + (range * easedProgress)
    
    if (progress < 1) {
      requestAnimationFrame(step)
    } else {
      currentValue.value = endValue
    }
  }
  
  requestAnimationFrame(step)
}

watch(() => props.value, (newValue, oldValue) => {
  const newNum = Number(newValue)
  const oldNum = Number(oldValue) || 0
  
  if (!isNaN(newNum)) {
    animateValue(currentValue.value, newNum, props.duration)
  } else {
    currentValue.value = newValue
  }
}, { immediate: false })

onMounted(() => {
  const targetValue = Number(props.value)
  if (!isNaN(targetValue)) {
    animateValue(0, targetValue, props.duration)
  } else {
    currentValue.value = props.value
  }
})
</script>

<style lang="scss" scoped>
.animated-number {
  display: inline-block;
  font-variant-numeric: tabular-nums;
  font-feature-settings: 'tnum';
}
</style> 