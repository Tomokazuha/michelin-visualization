import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  test: {
    // 测试环境配置
    environment: 'jsdom',
    
    // 全局测试配置
    globals: true,
    
    // 测试文件匹配模式
    include: ['src/**/*.{test,spec}.{js,ts,vue}'],
    
    // 排除的文件
    exclude: [
      'node_modules',
      'dist',
      '.nuxt',
      '.output',
      '.vuepress'
    ],
    
    // 覆盖率配置
    coverage: {
      provider: 'c8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'src/main.js',
        'src/assets/',
        '**/*.d.ts',
        '**/*.config.{js,ts}',
        'src/router/',
        'src/store/'
      ]
    },
    
    // 设置文件
    setupFiles: ['./src/tests/setup.js']
  },
  
  // 解析别名
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
}) 