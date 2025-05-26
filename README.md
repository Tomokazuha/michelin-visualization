# 米其林餐厅数据可视化平台

一个基于Vue.js和Flask的全栈数据可视化平台，专注于分析全球米其林星级餐厅的空间分布、时间演化和影响因素。

## 🌟 项目特色

- **交互式地图可视化**: 基于Leaflet的全球餐厅分布地图
- **多维度数据分析**: 星级、地区、菜系、价格等多角度分析
- **时间序列预测**: 使用Prophet进行趋势预测
- **聚类分析**: DBSCAN和HDBSCAN多变量聚类
- **现代化UI**: Element Plus + Vue 3组合式API
- **高性能后端**: Flask RESTful API + 数据缓存

## 📊 数据集

项目使用三个米其林餐厅CSV数据集：
- `one-star-michelin-restaurants.csv` (551条记录)
- `two-stars-michelin-restaurants.csv` (112条记录)  
- `three-stars-michelin-restaurants.csv` (38条记录)

## 🏗️ 项目架构

```
michelin-project/
├── data/                    # 数据文件
│   ├── raw/                # 原始数据
│   ├── cleaned/            # 清洗后数据
│   └── processed/          # 处理后数据
├── scripts/                # 数据处理脚本
│   ├── utils.py           # 工具函数
│   ├── clean_data.py      # 数据清洗
│   ├── geocode.py         # 地理编码
│   ├── feature_engineering.py  # 特征工程
│   ├── clustering.py      # 聚类分析
│   └── forecast.py        # 时间序列预测
├── backend/               # Flask后端
│   └── app.py            # API服务
├── frontend/             # Vue.js前端
│   ├── src/
│   │   ├── components/   # Vue组件
│   │   ├── views/        # 页面视图
│   │   ├── store/        # Pinia状态管理
│   │   └── router/       # 路由配置
│   ├── package.json
│   └── vite.config.js
├── tests/                # 测试文件
├── docs/                 # 文档
├── requirements.txt      # Python依赖
└── README.md
```

## 🚀 快速开始

### 环境要求

- Python 3.8+
- Node.js 16+
- npm 或 yarn

### 后端设置

1. **安装Python依赖**
```bash
pip install -r requirements.txt
```

2. **运行数据处理流程**
```bash
# 数据清洗
python scripts/clean_data.py

# 地理编码
python scripts/geocode.py

# 特征工程
python scripts/feature_engineering.py

# 聚类分析
python scripts/clustering.py

# 时间序列预测
python scripts/forecast.py
```

3. **启动后端API服务**
```bash
cd backend
python app.py
```

后端服务将在 `http://localhost:5000` 启动

### 前端设置

1. **安装依赖**
```bash
cd frontend
npm install
```

2. **启动开发服务器**
```bash
npm run dev
```

前端应用将在 `http://localhost:3000` 启动

## 📱 功能模块

### 1. 数据概览仪表板
- 全局统计指标
- 星级分布图表
- 地区分布分析
- 年度趋势图

### 2. 交互式地图
- 全球餐厅位置标记
- 聚类热力图
- 筛选和搜索功能
- 详细信息弹窗

### 3. 分析报告
- 多维度统计分析
- 聚类结果可视化
- 时间序列预测图表
- 洞察和建议

### 4. 数据探索
- 动态筛选器
- 多字段搜索
- 数据表格展示
- 导出功能

## 🔧 技术栈

### 后端
- **框架**: Flask
- **数据处理**: Pandas, NumPy
- **机器学习**: Scikit-learn, HDBSCAN
- **时间序列**: Prophet
- **地理处理**: GeoPy, Geopandas
- **可视化**: Matplotlib, Seaborn

### 前端
- **框架**: Vue 3 (Composition API)
- **构建工具**: Vite
- **UI库**: Element Plus
- **状态管理**: Pinia
- **路由**: Vue Router
- **图表**: ECharts
- **地图**: Leaflet

## 📊 API接口

### 核心接口

- `GET /api/health` - 健康检查
- `GET /api/summary` - 数据摘要统计
- `GET /api/restaurants` - 餐厅数据查询
- `GET /api/geojson` - GeoJSON地理数据
- `GET /api/analytics/distribution` - 分布分析
- `GET /api/analytics/trends` - 趋势分析
- `GET /api/analytics/clustering` - 聚类结果
- `GET /api/analytics/forecasts` - 预测结果
- `POST /api/charts/generate` - 图表生成
- `GET /api/search` - 搜索功能

## 🎯 数据处理流程

1. **数据清洗** (`clean_data.py`)
   - 处理缺失值
   - 异常值检测和处理
   - 数据标准化
   - 重复数据去除

2. **地理编码** (`geocode.py`)
   - 地址转坐标
   - 地理特征增强
   - GeoJSON格式转换

3. **特征工程** (`feature_engineering.py`)
   - 价格特征提取
   - 地理特征计算
   - 时间特征生成
   - 交互特征创建

4. **聚类分析** (`clustering.py`)
   - K-means聚类
   - DBSCAN密度聚类
   - HDBSCAN层次聚类
   - 聚类评估和可视化

5. **时间序列预测** (`forecast.py`)
   - Prophet模型训练
   - 多序列预测
   - 趋势分析
   - 预测洞察生成

## 🎨 设计规范

### 色彩方案
- 主色调: `#667eea` (蓝紫色)
- 辅助色: `#764ba2` (深紫色)
- 成功色: `#67C23A`
- 警告色: `#E6A23C`
- 错误色: `#F56C6C`

### 字体
- 主字体: Inter, -apple-system, BlinkMacSystemFont
- 代码字体: 'Fira Code', monospace

## 🧪 测试

```bash
# 运行Python测试
pytest tests/ -v --cov=scripts

# 运行前端测试
cd frontend
npm run test
```

## 📈 性能优化

- **后端缓存**: 使用内存和文件缓存
- **前端优化**: 代码分割、懒加载
- **数据压缩**: GZip压缩API响应
- **图片优化**: WebP格式支持

## 🔒 安全考虑

- CORS配置
- 输入验证
- 错误处理
- 日志记录

## 📝 开发指南

### 代码规范
- Python: Black + Flake8
- JavaScript: ESLint + Prettier
- 提交信息: Conventional Commits

### 分支策略
- `main`: 生产环境
- `develop`: 开发环境
- `feature/*`: 功能分支

## 🤝 贡献指南

1. Fork项目
2. 创建功能分支
3. 提交更改
4. 推送到分支
5. 创建Pull Request

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 👥 团队

- **数据科学**: 数据处理和分析算法
- **后端开发**: API设计和实现
- **前端开发**: 用户界面和交互
- **UI/UX设计**: 视觉设计和用户体验

## 📞 联系方式

- 项目地址: [GitHub Repository]
- 问题反馈: [Issues]
- 文档: [Documentation]

---

⭐ 如果这个项目对您有帮助，请给我们一个星标！ 