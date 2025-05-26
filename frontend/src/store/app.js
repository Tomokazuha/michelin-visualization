import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  // 状态
  const loading = ref(false)
  const theme = ref('light')
  const language = ref('zh-CN')
  const message = ref(null)
  const searchVisible = ref(false)
  const aboutDialogVisible = ref(false)

  // 设置加载状态
  const setLoading = (status) => {
    loading.value = status
  }

  // 显示消息
  const showMessage = (text, type = 'info', duration = 3000) => {
    message.value = {
      text,
      type,
      duration,
      timestamp: Date.now()
    }
  }

  // 清除消息
  const clearMessage = () => {
    message.value = null
  }

  // 切换主题
  const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
    showMessage(`已切换到${theme.value === 'light' ? '浅色' : '深色'}主题`, 'success')
  }

  // 切换语言
  const toggleLanguage = () => {
    language.value = language.value === 'zh-CN' ? 'en-US' : 'zh-CN'
    showMessage(`Language switched to ${language.value === 'zh-CN' ? '中文' : 'English'}`, 'success')
  }

  // 切换搜索框显示
  const toggleSearch = () => {
    searchVisible.value = !searchVisible.value
  }

  // 显示关于对话框
  const showAboutDialog = () => {
    aboutDialogVisible.value = true
  }

  // 关闭所有模态框
  const closeModals = () => {
    searchVisible.value = false
    aboutDialogVisible.value = false
  }

  return {
    // 状态
    loading,
    theme,
    language,
    message,
    searchVisible,
    aboutDialogVisible,
    
    // 方法
    setLoading,
    showMessage,
    clearMessage,
    toggleTheme,
    toggleLanguage,
    toggleSearch,
    showAboutDialog,
    closeModals
  }
}) 