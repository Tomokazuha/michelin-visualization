#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""
高级聚类分析启动脚本
执行全面优化的米其林餐厅聚类分析
"""

import sys
import os
from pathlib import Path

# 添加scripts目录到Python路径
project_root = Path(__file__).parent
scripts_dir = project_root / "scripts"
sys.path.append(str(scripts_dir))

def main():
    """运行高级聚类分析"""
    print("=" * 60)
    print("🍽️  米其林餐厅高级聚类分析系统")
    print("=" * 60)
    print()
    print("本系统将执行以下优化:")
    print("✓ 深度特征工程 - 业务洞察特征创建")
    print("✓ 多算法对比 - K-means, DBSCAN, 高斯混合, 层次聚类, 谱聚类")
    print("✓ 自动参数优化 - 综合评估指标选择最优参数")
    print("✓ 异常值清理 - 提高聚类质量")
    print("✓ 稳定性评估 - 确保聚类结果可靠")
    print("✓ 丰富可视化 - PCA, t-SNE, 3D交互式图表")
    print("✓ 业务洞察分析 - 自动生成聚类特征描述")
    print()
    
    try:
        # 导入并运行高级聚类模块
        from advanced_clustering import main as run_advanced_clustering
        
        print("开始执行高级聚类分析...")
        print("-" * 40)
        
        run_advanced_clustering()
        
        print()
        print("=" * 60)
        print("✅ 聚类分析完成!")
        print("=" * 60)
        print()
        print("📊 查看结果:")
        print("• 聚类报告: data/processed/advanced_clustering_report.json")
        print("• 可视化图表: data/output/")
        print("• 完整结果: data/processed/advanced_clustering_results.joblib")
        print()
        print("🔍 主要改进:")
        print("• 减少噪声点比例")
        print("• 提高聚类可解释性")
        print("• 增强业务价值")
        print("• 改善可视化效果")
        
    except ImportError as e:
        print(f"❌ 导入错误: {e}")
        print("请确保所有依赖项已安装:")
        print("pip install -r requirements.txt")
    
    except Exception as e:
        print(f"❌ 执行错误: {e}")
        print("请检查数据文件是否存在于data/raw/目录中")

if __name__ == "__main__":
    main() 