#!/bin/bash

# 安装地图相关依赖
echo "正在安装地图功能所需的依赖..."

# 进入前端目录
cd frontend

# 安装热力图支持
echo "安装 leaflet.heat (热力图支持)..."
npm install leaflet.heat

# 安装标记聚合支持
echo "安装 leaflet.markercluster (标记聚合支持)..."
npm install leaflet.markercluster

echo "依赖安装完成！"
echo "现在可以在 MapHeatmap 组件中取消注释相关代码以启用完整功能。"
echo ""
echo "需要取消注释的文件："
echo "- frontend/src/components/charts/MapHeatmap.vue"
echo ""
echo "注意事项："
echo "1. 取消 import 语句的注释"
echo "2. 取消热力图和聚合功能代码的注释"
echo "3. 移除临时的替代代码" 