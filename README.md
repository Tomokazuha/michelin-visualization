# 🌟 米其林餐厅数据可视化平台

---

## 📝 项目简介

米其林餐厅数据可视化平台是一个基于 **Vue.js 3** 和 **Flask** 构建的全栈数据分析应用，通过交互式可视化展示全球米其林星级餐厅的空间分布、星级分布和多维度特征分析。

### ✨ 核心亮点

- 🗺️ **交互式地图可视化** - 基于 Leaflet 的全球餐厅分布图、热力图、聚合图
- 📈 **智能数据分析** - 多维度统计分析和趋势预测
- 🎯 **机器学习集成** - DBSCAN/HDBSCAN 聚类分析
- 💫 **现代化 UI/UX** - Element Plus + Vue 3 组合式 API 设计

---

## 📊 功能特色

### 🎛️ 数据概览仪表板
- 📊 全局统计指标实时展示
- 🥇 星级分布与地区分析
- 📈 历史趋势和增长分析
- 🔍 快速搜索和筛选

### 🗺️ 交互式地图可视化
- 🌍 全球餐厅位置精确标记
- 🔥 密度热力图和聚类展示
- 🎯 多层级地图缩放浏览
- 💬 详细信息卡片弹窗

### 📈 数据分析与洞察
- 🤖 机器学习聚类分析
- ⏰ 多维度特征分析
- 📊 多维度统计图表
- 📝 智能分析报告生成

### 🔍 高级数据探索
- 🎛️ 动态多条件筛选器
- 🔎 全文检索和模糊匹配
- 📋 响应式数据表格
- 📤 多格式数据导出

---

## 🏗️ 项目架构

```
michelin-visualization/
├── 📂 backend/                 # Flask 后端 API 服务
│   ├── app.py                 # 主应用入口
│   ├── routes/                # API 路由模块
│   ├── services/              # 业务逻辑层
│   └── schemas/               # 数据模型定义
├── 📂 frontend/               # Vue.js 前端应用
│   ├── src/
│   │   ├── components/        # 可复用组件
│   │   ├── views/            # 页面视图组件
│   │   ├── store/            # Pinia 状态管理
│   │   ├── router/           # 路由配置
│   │   └── utils/            # 工具函数库
│   ├── package.json          # 前端依赖配置
│   └── vite.config.js        # Vite 构建配置
├── 📂 data/                   # 数据文件目录
│   ├── raw/                  # 原始数据集
│   ├── cleaned/              # 清洗后数据
│   ├── processed/            # 处理后数据
│   └── output/               # 分析结果输出
├── 📂 scripts/                # 数据处理脚本
│   ├── clean_data.py         # 数据清洗
│   ├── geocode.py            # 地理编码
│   ├── feature_engineering.py # 特征工程
│   ├── clustering.py         # 聚类分析
│   └── utils.py              # 工具函数
├── requirements.txt           # Python 依赖包
├── start_app.py              # 一键启动脚本
└── README.md                 # 项目文档
```

---

## 🚀 快速开始

### 📋 环境要求

| 环境 | 版本要求 | 说明 |
|------|----------|------|
| Python | 3.9+ | 后端运行环境 |
| Node.js | 16.0+ | 前端构建环境 |
| npm | 8.0+ | 包管理工具 |

### ⚡ 一键启动（推荐）

```bash
# 克隆项目
git clone https://github.com/your-username/michelin-visualization.git
cd michelin-visualization

# 一键启动所有服务
python start_app.py

# 可选启动选项
python start_app.py --help
```

启动选项说明：
- `--backend-only` - 仅启动后端服务
- `--frontend-only` - 仅启动前端服务  
- `--no-browser` - 不自动打开浏览器
- `--install-deps` - 强制重新安装依赖

### 🔧 手动部署

#### 1️⃣ 后端服务部署

```bash
# 安装 Python 依赖 (可选：创建一个 python 版本在3.9以上的虚拟环境)
pip install -r requirements.txt

# 启动后端 Flask 服务
cd backend
python app.py
```

#### 2️⃣ 前端应用部署

```bash
# 安装前端依赖
cd frontend
npm install

# 启动开发服务器
npm run dev
```

---

## 🔧 技术栈详解

### 🎨 前端技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| Vue.js | 3.3+ | 响应式前端框架 |
| Vite | 4.4+ | 现代构建工具 |
| Element Plus | 2.3+ | UI 组件库 |
| Pinia | 2.1+ | 状态管理 |
| Vue Router | 4.2+ | 路由管理 |
| ECharts | 5.4+ | 数据可视化图表 |
| Leaflet | 1.9+ | 交互式地图 |
| Axios | 1.5+ | HTTP 客户端 |

### ⚙️ 后端技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| Flask | 2.3+ | 轻量级 Web 框架 |
| Flask-CORS | 4.0+ | 跨域资源共享 |
| Pandas | 1.5+ | 数据处理分析 |
| Scikit-learn | 1.3+ | 机器学习算法 |
| Matplotlib | 3.8+ | 数据可视化 |
| Seaborn | 0.13+ | 统计图表绘制 |
| Joblib | 1.2+ | 模型序列化 |

---

## 📊 数据集说明

项目使用三个米其林餐厅 CSV 数据集：

- **一星餐厅**: `one-star-michelin-restaurants.csv` (551 条记录)
- **二星餐厅**: `two-stars-michelin-restaurants.csv` (112 条记录)  
- **三星餐厅**: `three-stars-michelin-restaurants.csv` (38 条记录)

### 数据字段说明

| 字段名 | 类型 | 说明 |
|--------|------|------|
| name | String | 餐厅名称 |
| year | Integer | 获评年份 |
| latitude | Float | 纬度坐标 |
| longitude | Float | 经度坐标 |
| city | String | 所在城市 |
| region | String | 所在地区 |
| zipCode | String | 邮政编码 |
| cuisine | String | 菜系类型 |
| price | String | 价格区间 |
| url | String | 官方链接 |


---

## 🎯 数据处理流程

### 1️⃣ 数据清洗 (`clean_data.py`)
- ✨ 缺失值智能处理
- 🔍 异常值检测与修正
- 📏 数据标准化和归一化
- 🔄 重复数据识别与去除

### 2️⃣ 地理编码 (`geocode.py`)
- 📍 地址到坐标转换
- 🌍 地理特征增强计算
- 📋 GeoJSON 格式标准化
- 🗺️ 空间索引优化

### 3️⃣ 特征工程 (`feature_engineering.py`)
- 💰 价格特征量化提取
- 📐 地理距离特征计算
- 🔗 交互特征组合创建

### 4️⃣ 聚类分析 (`clustering.py`)
- 🎯 K-means 质心聚类
- 🔍 DBSCAN 密度聚类
- 🌳 HDBSCAN 层次聚类
- 📊 聚类效果评估可视化
