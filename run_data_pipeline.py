#!/usr/bin/env conda run -n data-visualization python3
"""
米其林餐厅数据处理流水线主执行脚本
按顺序执行所有数据处理步骤
"""

import sys
import time
import logging
from pathlib import Path
from datetime import datetime

# 添加scripts目录到Python路径
sys.path.append(str(Path(__file__).parent / "scripts"))

from utils import logger, setup_logging


def run_pipeline():
    """执行完整的数据处理流水线"""
    
    # 设置日志
    setup_logging()
    
    logger.info("=" * 60)
    logger.info("开始执行米其林餐厅数据处理流水线")
    logger.info(f"开始时间: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    logger.info("=" * 60)
    
    pipeline_start_time = time.time()
    
    try:
        # 步骤1: 数据清洗
        logger.info("\n[步骤1] 数据清洗")
        logger.info("-" * 40)
        step_start = time.time()
        
        from clean_data import main as clean_main
        clean_main()
        
        step_time = time.time() - step_start
        logger.info(f"[完成] 数据清洗完成，耗时: {step_time:.2f}秒")
        
        # 步骤2: 地理编码
        logger.info("\n[步骤2] 地理编码")
        logger.info("-" * 40)
        step_start = time.time()
        
        from geocode import main as geocode_main
        geocode_main()
        
        step_time = time.time() - step_start
        logger.info(f"[完成] 地理编码完成，耗时: {step_time:.2f}秒")
        
        # 步骤3: 特征工程
        logger.info("\n[步骤3] 特征工程")
        logger.info("-" * 40)
        step_start = time.time()
        
        from feature_engineering import main as feature_main
        feature_main()
        
        step_time = time.time() - step_start
        logger.info(f"[完成] 特征工程完成，耗时: {step_time:.2f}秒")
        
        # 步骤4: 聚类分析
        logger.info("\n[步骤4] 聚类分析")
        logger.info("-" * 40)
        step_start = time.time()
        
        from clustering import main as clustering_main
        clustering_main()
        
        step_time = time.time() - step_start
        logger.info(f"[完成] 聚类分析完成，耗时: {step_time:.2f}秒")
        
        # 步骤5: 时间序列预测
        logger.info("\n[步骤5] 时间序列预测")
        logger.info("-" * 40)
        step_start = time.time()
        
        from forecast import main as forecast_main
        forecast_main()
        
        step_time = time.time() - step_start
        logger.info(f"[完成] 时间序列预测完成，耗时: {step_time:.2f}秒")
        
        # 流水线完成
        total_time = time.time() - pipeline_start_time
        
        logger.info("\n" + "=" * 60)
        logger.info("[成功] 数据处理流水线执行完成!")
        logger.info(f"总耗时: {total_time:.2f}秒 ({total_time/60:.1f}分钟)")
        logger.info(f"完成时间: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
        logger.info("=" * 60)
        
        # 显示输出文件摘要
        logger.info("\n[文件] 生成的文件:")
        processed_dir = Path("data/processed")
        if processed_dir.exists():
            for file_path in processed_dir.glob("*"):
                if file_path.is_file():
                    size_mb = file_path.stat().st_size / (1024 * 1024)
                    logger.info(f"  - {file_path.name} ({size_mb:.2f} MB)")
        
        logger.info("\n[下一步] 现在可以启动后端API服务:")
        logger.info("  cd backend && python app.py")
        logger.info("\n[下一步] 然后启动前端应用:")
        logger.info("  cd frontend && npm install && npm run dev")
        
        return True
        
    except Exception as e:
        logger.error(f"\n[错误] 流水线执行失败: {e}")
        logger.error("请检查错误信息并重新运行")
        return False


def check_requirements():
    """检查运行环境和依赖"""
    logger.info("[检查] 检查运行环境...")
    
    # 检查Python版本
    import sys
    if sys.version_info < (3, 8):
        logger.error("[错误] 需要Python 3.8或更高版本")
        return False
    
    # 检查必要的包
    required_packages = {
        'pandas': 'pandas',
        'numpy': 'numpy', 
        'sklearn': 'scikit-learn',
        'matplotlib': 'matplotlib',
        'seaborn': 'seaborn',
        'geopy': 'geopy',
        'joblib': 'joblib',
        'flask': 'flask'
    }
    
    missing_packages = []
    for import_name, package_name in required_packages.items():
        try:
            __import__(import_name)
        except ImportError:
            missing_packages.append(package_name)
    
    if missing_packages:
        logger.error(f"[错误] 缺少必要的包: {', '.join(missing_packages)}")
        logger.error("请运行: pip install -r requirements.txt")
        return False
    
    # 检查数据文件
    data_files = [
        "one-star-michelin-restaurants.csv",
        "two-stars-michelin-restaurants.csv", 
        "three-stars-michelin-restaurants.csv"
    ]
    
    missing_files = []
    for file_name in data_files:
        if not Path(file_name).exists():
            missing_files.append(file_name)
    
    if missing_files:
        logger.error(f"[错误] 缺少数据文件: {', '.join(missing_files)}")
        logger.error("请确保CSV数据文件在项目根目录")
        return False
    
    logger.info("[成功] 环境检查通过")
    return True


def main():
    """主函数"""
    print("米其林餐厅数据可视化项目")
    print("=" * 50)
    
    # 检查环境
    if not check_requirements():
        sys.exit(1)
    
    # 询问用户是否继续
    try:
        response = input("\n是否开始执行数据处理流水线? (y/N): ").strip().lower()
        if response not in ['y', 'yes', '是']:
            print("已取消执行")
            sys.exit(0)
    except KeyboardInterrupt:
        print("\n已取消执行")
        sys.exit(0)
    
    # 执行流水线
    success = run_pipeline()
    
    if success:
        print("\n[成功] 流水线执行成功!")
        print("现在可以启动Web应用了")
        sys.exit(0)
    else:
        print("\n[失败] 流水线执行失败")
        sys.exit(1)


if __name__ == "__main__":
    main() 