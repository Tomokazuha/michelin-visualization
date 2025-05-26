# 米其林餐厅数据可视化平台 - 设计规范

## 🎨 视觉设计系统

### 配色方案

#### 主色调
- **品牌蓝**: `#1E88E5` - 主要强调色，用于标题、按钮、链接
- **深色文本**: `#212121` - 主要文本颜色
- **浅色背景**: `#F5F5F5` - 页面背景色

#### 辅助色彩
- **成功色**: `#4CAF50` - 成功状态、正向数据
- **警告色**: `#FF9800` - 警告信息、中性数据  
- **错误色**: `#F44336` - 错误状态、负向数据
- **信息色**: `#2196F3` - 提示信息、中性状态

#### 星级专用色彩
- **一星**: `#FFD700` (金色) - 米其林一星餐厅
- **二星**: `#FF6B6B` (红色) - 米其林二星餐厅
- **三星**: `#4ECDC4` (青色) - 米其林三星餐厅

#### 灰度色阶
```css
--gray-50: #FAFAFA
--gray-100: #F5F5F5
--gray-200: #EEEEEE
--gray-300: #E0E0E0
--gray-400: #BDBDBD
--gray-500: #9E9E9E
--gray-600: #757575
--gray-700: #616161
--gray-800: #424242
--gray-900: #212121
```

### 间距系统

基于 4px 基础单位的间距尺度：

```css
--spacing-1: 4px   /* 超小间距 */
--spacing-2: 8px   /* 小间距 */
--spacing-3: 12px  /* 中小间距 */
--spacing-4: 16px  /* 基础间距 */
--spacing-5: 20px  /* 中等间距 */
--spacing-6: 24px  /* 大间距 */
--spacing-8: 32px  /* 超大间距 */
--spacing-10: 40px /* 特大间距 */
--spacing-12: 48px /* 巨大间距 */
```

### 圆角规范

```css
--radius-sm: 4px   /* 小圆角 - 按钮、标签 */
--radius-md: 8px   /* 中圆角 - 卡片、输入框 */
--radius-lg: 12px  /* 大圆角 - 模态框、面板 */
--radius-xl: 16px  /* 超大圆角 - 特殊容器 */
--radius-2xl: 24px /* 特大圆角 - 主要卡片 */
--radius-full: 50% /* 圆形 - 头像、图标 */
```

### 阴影系统

```css
/* 轻微阴影 - 悬浮状态 */
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05)

/* 小阴影 - 按钮、小卡片 */  
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1)

/* 中等阴影 - 主要卡片 */
--shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1)

/* 大阴影 - 模态框、浮层 */
--shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.15)

/* 特大阴影 - 重要元素强调 */
--shadow-2xl: 0 25px 50px rgba(0, 0, 0, 0.2)
```

## 📝 字体规范

### 字体族
- **中文**: PingFang SC, Microsoft YaHei, sans-serif
- **英文**: Inter, -apple-system, BlinkMacSystemFont, sans-serif
- **代码**: JetBrains Mono, Consolas, Monaco, monospace

### 字体大小
```css
--text-xs: 12px    /* 辅助文本 */
--text-sm: 14px    /* 小文本 */
--text-base: 16px  /* 基础文本 */
--text-lg: 18px    /* 大文本 */
--text-xl: 20px    /* 特大文本 */
--text-2xl: 24px   /* 标题 */
--text-3xl: 30px   /* 大标题 */
--text-4xl: 36px   /* 超大标题 */
```

### 行高
```css
--leading-tight: 1.25  /* 紧凑行高 */
--leading-normal: 1.5  /* 正常行高 */
--leading-relaxed: 1.75 /* 宽松行高 */
```

## 🧩 组件设计规范

### 按钮组件

#### 主要按钮 (Primary)
```css
background: #1E88E5
color: white
padding: 12px 24px
border-radius: 8px
font-size: 16px
font-weight: 500
```

#### 次要按钮 (Secondary)  
```css
background: transparent
color: #1E88E5
border: 2px solid #1E88E5
padding: 10px 22px
border-radius: 8px
```

#### 按钮状态
- **Hover**: 透明度变为 0.9
- **Active**: 轻微缩放 scale(0.98)
- **Disabled**: 透明度 0.5，禁用交互

### 卡片组件

#### 基础卡片
```css
background: white
border-radius: 12px
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1)
padding: 24px
```

#### 统计卡片
```css
background: white
border-radius: 16px
box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1)
padding: 32px
border-left: 4px solid #1E88E5
```

### 表单组件

#### 输入框
```css
border: 2px solid #E0E0E0
border-radius: 8px
padding: 12px 16px
font-size: 16px
transition: border-color 0.2s ease

/* Focus状态 */
border-color: #1E88E5
box-shadow: 0 0 0 3px rgba(30, 136, 229, 0.1)
```

## 📊 图表设计规范

### 颜色主题
```javascript
const chartColorPalette = [
  '#1E88E5', // 品牌蓝
  '#FF6B6B', // 珊瑚红  
  '#4ECDC4', // 薄荷绿
  '#45B7D1', // 天空蓝
  '#96CEB4', // 薄荷绿2
  '#FFEAA7', // 柠檬黄
  '#DDA0DD', // 薰衣草紫
  '#98D8C8', // 海绿色
  '#F39C12', // 橙色
  '#E74C3C'  // 红色
]
```

### 图表通用样式
```javascript
const commonChartStyle = {
  title: {
    textStyle: {
      color: '#1E88E5',
      fontSize: 18,
      fontWeight: 'bold',
      fontFamily: 'PingFang SC, sans-serif'
    }
  },
  tooltip: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: 8,
    textStyle: {
      color: '#212121',
      fontSize: 14
    }
  },
  legend: {
    textStyle: {
      color: '#616161',
      fontSize: 12
    }
  }
}
```

## 📱 响应式设计

### 断点定义
```css
/* 小屏幕手机 */
@media (max-width: 640px) { ... }

/* 大屏幕手机/小平板 */  
@media (min-width: 641px) and (max-width: 768px) { ... }

/* 平板 */
@media (min-width: 769px) and (max-width: 1024px) { ... }

/* 小桌面 */
@media (min-width: 1025px) and (max-width: 1280px) { ... }

/* 大桌面 */
@media (min-width: 1281px) { ... }
```

### 栅格系统
基于 24 列栅格系统：
- **手机**: 24列 (span-24)
- **平板**: 12列 (span-12) 
- **桌面**: 6列或8列 (span-6, span-8)

## 🎭 动画规范

### 缓动函数
```css
--ease-in: cubic-bezier(0.4, 0, 1, 1)
--ease-out: cubic-bezier(0, 0, 0.2, 1)  
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1)
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55)
```

### 动画时长
```css
--duration-fast: 150ms    /* 快速过渡 */
--duration-normal: 250ms  /* 正常过渡 */
--duration-slow: 350ms    /* 慢速过渡 */
--duration-slower: 500ms  /* 更慢过渡 */
```

### 常用动画
```css
/* 淡入淡出 */
.fade-enter-active, .fade-leave-active {
  transition: opacity 250ms ease-out;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* 滑动效果 */
.slide-enter-active, .slide-leave-active {
  transition: transform 250ms ease-out;
}
.slide-enter-from {
  transform: translateX(-100%);
}
.slide-leave-to {
  transform: translateX(100%);
}
```

## ♿ 无障碍设计

### 对比度要求
- **正常文本**: 最小对比度 4.5:1
- **大文本**: 最小对比度 3:1  
- **交互元素**: 最小对比度 3:1

### 键盘导航
- 所有交互元素支持 Tab 键导航
- 焦点状态明显可见
- 支持 Enter/Space 键激活

### ARIA 标注
```html
<!-- 图表容器 -->
<div role="img" aria-label="米其林餐厅分布地图">
  
<!-- 按钮 -->
<button aria-label="筛选餐厅数据" aria-expanded="false">

<!-- 表格 -->
<table role="table" aria-label="餐厅列表数据">
```

## 📐 界面布局规范

### 页面结构
```
Header (64px高度)
├── Logo + 导航菜单
├── 搜索框 (可选)
└── 用户操作区

Main Content
├── 侧边栏 (280px宽度, 可折叠)
└── 主内容区 (自适应)

Footer (可选)
```

### 内容间距
- **页面边距**: 24px (桌面), 16px (移动端)
- **卡片间距**: 24px
- **组件内边距**: 16px ~ 32px
- **文字行间距**: 1.5倍行高

这些设计规范确保了整个平台的视觉一致性和用户体验质量。所有组件都应遵循这些规范进行开发。 