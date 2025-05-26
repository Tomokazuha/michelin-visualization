# 米其林餐厅数据可视化项目 - 项目总结

## 🎯 项目概述

这是一个全栈的米其林餐厅数据可视化项目，提供了完整的数据处理、分析和可视化功能。项目包含数据清洗、地理编码、特征工程、聚类分析等数据科学功能，以及现代化的Web界面。

## 🏗️ 项目架构

```
michelin-project/
├── backend/                 # Flask后端API
│   ├── app.py              # 主应用文件
│   └── requirements.txt    # Python依赖
├── frontend/               # Vue.js前端应用
│   ├── src/
│   │   ├── components/     # Vue组件
│   │   ├── views/         # 页面视图
│   │   ├── store/         # Pinia状态管理
│   │   └── router/        # Vue Router路由
│   ├── package.json       # Node.js依赖
│   └── vite.config.js     # Vite配置
├── scripts/               # 数据处理脚本
│   ├── clean_data.py      # 数据清洗
│   ├── geocode.py         # 地理编码
│   ├── feature_engineering.py # 特征工程
│   ├── clustering.py      # 聚类分析
│   └── utils.py          # 工具函数
├── data/                  # 数据目录
│   ├── raw/              # 原始数据
│   ├── processed/        # 处理后数据
│   └── cleaned/          # 清洗后数据
├── run_data_pipeline.py   # 数据处理管道
├── start_app.py          # 应用启动脚本
└── README.md             # 项目说明
```

## ✨ 已实现功能

### 🔧 数据处理功能

1. **数据清洗 (`scripts/clean_data.py`)**
   - 标准化价格字段
   - 添加衍生特征（年份、地区分类等）
   - 去除重复记录
   - 生成清洗报告

2. **地理编码 (`scripts/geocode.py`)**
   - 使用GeoPy进行批量地理编码
   - 缓存机制提高效率
   - 生成GeoJSON格式数据
   - 地理分布分析

3. **特征工程 (`scripts/feature_engineering.py`)**
   - 价格特征工程
   - 地理特征生成
   - 时间特征提取
   - 文本特征处理
   - 交互特征创建

4. **聚类分析 (`scripts/clustering.py`)**
   - K-means聚类
   - DBSCAN密度聚类
   - HDBSCAN层次聚类
   - 聚类可视化
   - 聚类评估指标

### 🌐 Web应用功能

#### 后端API (`backend/app.py`)

- **健康检查**: `/api/health`
- **数据摘要**: `/api/summary`
- **餐厅数据**: `/api/restaurants`
- **地理数据**: `/api/geojson`
- **筛选选项**: `/api/filter-options`
- **分析数据**: `/api/analytics/*`

#### 前端界面

1. **首页 (`Home.vue`)**
   - 项目介绍和概览
   - 数据统计卡片
   - 快速导航

2. **数据探索页 (`Explore.vue`)**
   - 交互式数据查询工具
   - 多维度筛选功能
   - 分页浏览餐厅列表
   - 餐厅详情弹窗

3. **深度分析页 (`Analytics.vue`)**
   - 聚类分析结果展示
   - 特征重要性分析
   - 分布统计图表
   - 多维度数据可视化

4. **地图分析页 (`MapView.vue`)**
   - 全球米其林餐厅分布地图
   - 基于Leaflet的交互式地图
   - 星级和地区筛选
   - 餐厅标记和信息弹窗
   - 地区分布统计表

## 🛠️ 技术栈

### 后端技术
- **Python 3.8+**
- **Flask** - Web框架
- **Pandas** - 数据处理
- **NumPy** - 数值计算
- **Scikit-learn** - 机器学习
- **GeoPy** - 地理编码
- **HDBSCAN** - 聚类算法

### 前端技术
- **Vue.js 3** - 前端框架
- **Vite** - 构建工具
- **Element Plus** - UI组件库
- **ECharts** - 数据可视化
- **Leaflet** - 地图组件
- **Pinia** - 状态管理

## 🚀 快速启动

### 方法1：使用启动脚本（推荐）

```bash
# 运行启动脚本
python start_app.py
```

### 方法2：手动启动

```bash
# 启动后端
cd backend
python app.py

# 启动前端（新终端）
cd frontend
npm install
npm run dev
```

### 方法3：运行完整数据处理管道

```bash
# 运行数据处理管道
python run_data_pipeline.py
```

## 📊 数据处理流程

1. **数据清洗**: 标准化和清理原始数据
2. **地理编码**: 获取餐厅地理坐标
3. **特征工程**: 创建分析所需的特征
4. **聚类分析**: 识别餐厅群体模式
5. **可视化**: 生成图表和地图

## 🎨 界面特色

- **响应式设计**: 适配桌面和移动设备
- **现代化UI**: 使用Element Plus组件库
- **交互式图表**: ECharts数据可视化
- **实时地图**: Leaflet地图组件
- **流畅动画**: CSS过渡效果

## 📈 分析功能

### 聚类分析
- 基于多维特征的餐厅聚类
- 支持K-means、DBSCAN、HDBSCAN算法
- 聚类结果可视化和评估

### 地理分析
- 全球餐厅分布可视化
- 地区密度分析
- 距离和位置特征

### 特征分析
- 价格、星级、地理位置等特征
- 特征重要性排序
- 交互特征和聚合特征

## 🔍 使用场景

1. **餐厅数据探索**: 查询和筛选米其林餐厅
2. **地理分布分析**: 了解全球米其林餐厅分布
3. **聚类模式发现**: 识别餐厅群体特征
4. **商业决策支持**: 为餐饮业提供数据洞察

## 🎯 项目亮点

- ✅ **完整的数据科学流程**: 从数据清洗到可视化
- ✅ **现代化技术栈**: Vue3 + Flask + 机器学习
- ✅ **交互式可视化**: 地图、图表、筛选器
- ✅ **模块化设计**: 清晰的代码结构
- ✅ **响应式界面**: 优秀的用户体验
- ✅ **可扩展架构**: 易于添加新功能

## 📝 开发说明

### 添加新功能
1. 后端：在`backend/app.py`中添加新的API端点
2. 前端：在`frontend/src/views/`中创建新页面
3. 数据处理：在`scripts/`中添加新的处理脚本

### 自定义配置
- 修改`backend/app.py`中的API配置
- 调整`frontend/vite.config.js`中的构建配置
- 更新`requirements.txt`和`package.json`中的依赖

## 🎉 项目完成状态

✅ **数据处理模块** - 完成  
✅ **后端API服务** - 完成  
✅ **前端界面** - 完成  
✅ **地图可视化** - 完成  
✅ **聚类分析** - 完成  
✅ **部署脚本** - 完成  

项目已完全实现，可以直接运行和使用！ 