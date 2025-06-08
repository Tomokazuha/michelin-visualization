# 🌟 米其林餐厅数据可视化平台

<div align="center">

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Python](https://img.shields.io/badge/python-3.8+-green.svg)
![Node.js](https://img.shields.io/badge/node.js-16+-green.svg)
![Vue.js](https://img.shields.io/badge/vue.js-3.0-4fc08d.svg)
![Flask](https://img.shields.io/badge/flask-2.3+-orange.svg)

**一个现代化的全栈数据可视化平台，专注于全球米其林星级餐厅的深度分析**

[🚀 快速开始](#快速开始) • [📊 功能特色](#功能特色) • [🏗️ 项目架构](#项目架构) • [📱 在线演示](#在线演示)

</div>

---

## 📝 项目简介

米其林餐厅数据可视化平台是一个基于 **Vue.js 3** 和 **Flask** 构建的全栈数据分析应用，通过交互式可视化展示全球米其林星级餐厅的空间分布、时间演化趋势和多维度特征分析。

### ✨ 核心亮点

- 🗺️ **交互式地图可视化** - 基于 Leaflet 的全球餐厅分布热力图
- 📈 **智能数据分析** - 多维度统计分析和趋势预测
- 🎯 **机器学习集成** - DBSCAN/HDBSCAN 聚类分析和 Prophet 时间序列预测
- 💫 **现代化 UI/UX** - Element Plus + Vue 3 组合式 API 设计
- ⚡ **高性能架构** - Flask RESTful API + Redis 缓存优化

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
- ⏰ 时间序列趋势预测
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
| Python | 3.8+ | 后端运行环境 |
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
# 安装 Python 依赖
pip install -r requirements.txt

# 启动后端 Flask 服务
cd backend
python app.py
```

后端服务将在 `http://localhost:5000` 启动

#### 2️⃣ 前端应用部署

```bash
# 安装前端依赖
cd frontend
npm install

# 启动开发服务器
npm run dev
```

前端应用将在 `http://localhost:5173` 启动

### 🎯 访问应用

- **前端应用**: http://localhost:5173
- **后端 API**: http://localhost:5000
- **API 文档**: http://localhost:5000/docs

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

## 🔌 API 接口文档

### 🏥 系统接口

| 端点 | 方法 | 说明 |
|------|------|------|
| `/api/health` | GET | 服务健康检查 |
| `/api/summary` | GET | 数据统计摘要 |

### 📊 数据接口

| 端点 | 方法 | 说明 |
|------|------|------|
| `/api/restaurants` | GET | 餐厅数据查询 |
| `/api/geojson` | GET | GeoJSON 地理数据 |
| `/api/search` | POST | 高级搜索功能 |

### 📈 分析接口

| 端点 | 方法 | 说明 |
|------|------|------|
| `/api/analytics/distribution` | GET | 分布统计分析 |
| `/api/analytics/trends` | GET | 时间趋势分析 |
| `/api/analytics/clustering` | GET | 聚类分析结果 |
| `/api/analytics/forecasts` | GET | 时间序列预测 |

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
- ⏰ 时间序列特征生成
- 🔗 交互特征组合创建

### 4️⃣ 聚类分析 (`clustering.py`)
- 🎯 K-means 质心聚类
- 🔍 DBSCAN 密度聚类
- 🌳 HDBSCAN 层次聚类
- 📊 聚类效果评估可视化

---

## 🎨 UI/UX 设计指南

### 🎭 设计理念
- **现代简约**: 干净整洁的视觉设计
- **响应式布局**: 适配多种设备屏幕
- **交互友好**: 直观的用户操作体验
- **数据驱动**: 突出数据可视化效果

### 🌈 色彩方案

| 用途 | 颜色代码 | 示例 |
|------|----------|------|
| 主色调 | `#667eea` | <span style="color: #667eea">■</span> 蓝紫渐变 |
| 辅助色 | `#764ba2` | <span style="color: #764ba2">■</span> 深紫色 |
| 成功色 | `#67C23A` | <span style="color: #67C23A">■</span> 翠绿色 |
| 警告色 | `#E6A23C` | <span style="color: #E6A23C">■</span> 橙黄色 |
| 危险色 | `#F56C6C` | <span style="color: #F56C6C">■</span> 珊瑚红 |

### 🔤 字体规范
- **主字体**: `Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`
- **代码字体**: `'Fira Code', 'JetBrains Mono', monospace`
- **中文字体**: `'PingFang SC', 'Microsoft YaHei', sans-serif`

---

## 🧪 测试与质量保证

### 🔬 测试类型

```bash
# Python 后端测试
pytest tests/ -v --cov=backend --cov-report=html

# 前端单元测试
cd frontend
npm run test

# 端到端测试
npm run test:e2e

# 代码覆盖率
npm run test:coverage
```

### 📏 代码规范

- **Python**: Black + Flake8 代码格式化
- **JavaScript**: ESLint + Prettier 代码检查
- **提交规范**: Conventional Commits 标准

### 🚀 性能优化

- **后端优化**: 内存缓存 + 数据库查询优化
- **前端优化**: 代码分割 + 懒加载 + 资源压缩
- **网络优化**: Gzip 压缩 + CDN 加速

---

## 🤝 贡献指南

我们欢迎任何形式的贡献！请遵循以下步骤：

### 📝 贡献流程

1. **Fork 项目** 到你的 GitHub 账户
2. **创建特性分支** (`git checkout -b feature/AmazingFeature`)
3. **提交更改** (`git commit -m 'Add some AmazingFeature'`)
4. **推送分支** (`git push origin feature/AmazingFeature`)
5. **创建 Pull Request** 并详细描述你的更改

### 🌿 分支策略

- `main` - 生产环境稳定版本
- `develop` - 开发环境集成分支
- `feature/*` - 新功能开发分支
- `hotfix/*` - 紧急修复分支

### 📋 代码提交规范

```
<type>(<scope>): <subject>

<body>

<footer>
```

**类型说明**:
- `feat`: 新功能
- `fix`: Bug 修复
- `docs`: 文档更新
- `style`: 代码格式调整
- `refactor`: 代码重构
- `test`: 测试相关
- `chore`: 构建/工具变动

---

## 📄 许可证

本项目基于 [MIT License](LICENSE) 开源协议，你可以自由使用、修改和分发。

---

## 🙏 致谢

### 🏆 核心贡献者

- **数据科学团队** - 算法设计与数据分析
- **后端开发团队** - API 架构与性能优化
- **前端开发团队** - 用户界面与交互设计
- **UI/UX 设计团队** - 视觉设计与用户体验

### 📚 开源依赖

感谢以下优秀的开源项目：
- [Vue.js](https://vuejs.org/) - 渐进式 JavaScript 框架
- [Flask](https://flask.palletsprojects.com/) - 轻量级 Python Web 框架
- [Element Plus](https://element-plus.org/) - Vue 3 组件库
- [ECharts](https://echarts.apache.org/) - 数据可视化图表库
- [Leaflet](https://leafletjs.com/) - 开源地图库

---

## 📞 联系我们

<div align="center">

### 🔗 相关链接

[![GitHub](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)](https://github.com/your-username/michelin-visualization)
[![Documentation](https://img.shields.io/badge/Documentation-blue?style=for-the-badge&logo=read-the-docs)](https://your-docs-url.com)
[![Issues](https://img.shields.io/badge/Issues-red?style=for-the-badge&logo=github)](https://github.com/your-username/michelin-visualization/issues)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

### 💬 技术支持

如果你在使用过程中遇到任何问题，请通过以下方式联系我们：

- 📧 **邮箱**: support@michelin-viz.com
- 💬 **讨论区**: [GitHub Discussions](https://github.com/your-username/michelin-visualization/discussions)
- 🐛 **问题报告**: [GitHub Issues](https://github.com/your-username/michelin-visualization/issues)

---

⭐ **如果这个项目对你有帮助，请给我们一个 Star！**

*Built with ❤️ by Michelin Data Visualization Team*

</div>
