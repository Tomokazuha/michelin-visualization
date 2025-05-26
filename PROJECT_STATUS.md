# 米其林餐厅数据可视化项目 - 当前状态

## 🎯 项目概述

这是一个基于Vue.js和Flask的全栈数据可视化平台，专注于分析全球米其林星级餐厅的空间分布、时间演化和影响因素。

## ✅ 已完成功能

### 后端 (Flask API)
- ✅ **数据处理流水线完整实现**
  - 数据清洗 (695条餐厅记录)
  - 地理编码和GeoJSON生成
  - 特征工程 (157个特征)
  - 聚类分析 (DBSCAN/HDBSCAN)
  - 时间序列预测 (Prophet)

- ✅ **RESTful API服务**
  - 健康检查接口 (`/api/health`)
  - 数据摘要接口 (`/api/summary`)
  - 餐厅数据查询 (`/api/restaurants`)
  - GeoJSON地理数据 (`/api/geojson`)
  - 分析数据接口 (`/api/analytics/*`)
  - 搜索功能 (`/api/search`)

- ✅ **数据文件生成**
  - 清洗后数据: `restaurants_cleaned.csv/json`
  - 地理编码数据: `restaurants_geocoded.csv`
  - GeoJSON格式: `restaurants_geo.json`
  - 特征数据: `features.joblib`
  - 聚类结果: `clusters.joblib`
  - 预测结果: `forecasts.joblib`

### 前端 (Vue.js)
- ✅ **项目架构搭建**
  - Vue 3 + Composition API
  - Element Plus UI组件库
  - Pinia状态管理
  - Vue Router路由
  - Vite构建工具

- ✅ **核心组件开发**
  - 应用头部导航 (`AppHeader.vue`)
  - 全局消息提示 (`GlobalMessage.vue`)
  - 数据概览仪表板 (`Dashboard.vue`)
  - 页面路由配置

- ✅ **状态管理**
  - 应用状态管理 (`store/app.js`)
  - 数据状态管理 (`store/data.js`)
  - API接口封装

## 🚀 当前可用功能

### 1. 后端API服务
- **地址**: `http://localhost:5000`
- **状态**: ✅ 运行中
- **数据**: 695条米其林餐厅记录已处理

### 2. 数据概览仪表板
- 总体统计指标显示
- 星级分布可视化
- 价格分布分析
- 快速导航功能

## 🔧 启动指南

### 后端服务
```bash
# 1. 确保数据处理完成
python run_data_pipeline.py

# 2. 启动API服务
cd backend
python app.py
```

### 前端应用
```bash
# 方法1: 使用批处理文件 (Windows)
start_frontend.bat

# 方法2: 手动启动
cd frontend
npm install
npm run dev
```

## 📊 数据统计

- **总餐厅数**: 695家
- **覆盖地区**: 24个
- **覆盖城市**: 180个
- **菜系类型**: 62种
- **星级分布**: 1星549家, 2星110家, 3星36家
- **特征维度**: 157个 (经过特征工程)
- **聚类数**: 28个 (DBSCAN算法)

## 🎨 技术栈

### 后端
- **框架**: Flask 2.3.3
- **数据处理**: Pandas, NumPy
- **机器学习**: Scikit-learn, HDBSCAN
- **时间序列**: Prophet
- **地理处理**: GeoPy, Geopandas

### 前端
- **框架**: Vue 3 (Composition API)
- **构建工具**: Vite 4.4.9
- **UI库**: Element Plus 2.3.12
- **状态管理**: Pinia 2.1.6
- **路由**: Vue Router 4.2.4

## 🔄 开发中功能

### 即将实现
1. **交互式地图** - Leaflet地图集成
2. **深度分析页面** - 聚类结果可视化
3. **数据探索工具** - 高级筛选和搜索
4. **图表组件** - ECharts集成
5. **响应式设计优化**

### 计划功能
1. **实时数据更新**
2. **用户偏好设置**
3. **数据导出功能**
4. **多语言支持**
5. **主题切换**

## 🐛 已知问题

1. **前端依赖安装** - 需要Node.js 16+环境
2. **地图组件** - Leaflet集成待完成
3. **图表渲染** - ECharts组件待开发
4. **移动端适配** - 响应式设计需优化

## 📝 下一步计划

### 短期目标 (1-2周)
1. 完成前端依赖安装和基础运行
2. 实现数据概览页面的完整功能
3. 集成ECharts图表组件
4. 添加基础的数据筛选功能

### 中期目标 (2-4周)
1. 实现交互式地图功能
2. 完成聚类分析可视化
3. 开发数据探索工具
4. 优化用户体验和界面设计

### 长期目标 (1-2月)
1. 完善所有分析功能
2. 添加高级可视化组件
3. 实现数据导出和分享
4. 性能优化和部署准备

## 🤝 贡献指南

1. 确保后端API服务正常运行
2. 前端开发使用Vue 3 Composition API
3. 遵循Element Plus设计规范
4. 保持代码风格一致性
5. 添加适当的错误处理和加载状态

## 📞 技术支持

如遇到问题，请检查：
1. Python环境和依赖包安装
2. Node.js和npm版本兼容性
3. 后端API服务状态
4. 浏览器控制台错误信息

---

**项目状态**: 🟡 开发中 (核心功能已实现，前端界面开发中)
**最后更新**: 2025-05-26
**版本**: v0.1.0-alpha 