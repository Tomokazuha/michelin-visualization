<template>
  <div class="not-found">
    <div class="not-found-container">
      <div class="error-content">
        <div class="error-code">404</div>
        <h1 class="error-title">页面未找到</h1>
        <p class="error-message">抱歉，您访问的页面不存在或已被移除。</p>
        
        <div class="error-actions">
          <el-button type="primary" size="large" @click="$router.push('/')">
            <el-icon><HomeFilled /></el-icon>
            返回首页
          </el-button>
          
          <el-button size="large" @click="$router.back()">
            <el-icon><Back /></el-icon>
            返回上页
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { HomeFilled, Back } from '@element-plus/icons-vue'
</script>

<style lang="scss" scoped>
.not-found {
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.not-found-container {
  text-align: center;
  padding: 40px;
}

.error-content {
  max-width: 500px;
}

.error-code {
  font-size: 120px;
  font-weight: 700;
  color: #667eea;
  line-height: 1;
  margin-bottom: 20px;
  text-shadow: 0 4px 8px rgba(102, 126, 234, 0.3);
}

.error-title {
  font-size: 32px;
  font-weight: 600;
  color: #1a202c;
  margin-bottom: 16px;
}

.error-message {
  font-size: 16px;
  color: #718096;
  margin-bottom: 40px;
  line-height: 1.6;
}

.error-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;

  .el-button {
    padding: 12px 24px;
    border-radius: 8px;
    
    .el-icon {
      margin-right: 8px;
    }
  }
}

@media (max-width: 480px) {
  .error-code {
    font-size: 80px;
  }

  .error-title {
    font-size: 24px;
  }

  .error-actions {
    flex-direction: column;
    align-items: center;

    .el-button {
      width: 200px;
    }
  }
}
</style> 