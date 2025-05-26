"""
通用工具函数模块
提供文件路径处理、缓存、日志记录等通用功能
"""

import os
import json
import pickle
import hashlib
import logging
from pathlib import Path
from typing import Any, Dict, List, Optional, Union
from datetime import datetime
import pandas as pd


# 配置日志
def setup_logging(log_level: str = "INFO") -> logging.Logger:
    """
    设置日志配置
    
    Args:
        log_level: 日志级别 (DEBUG, INFO, WARNING, ERROR, CRITICAL)
    
    Returns:
        配置好的logger对象
    """
    # 创建logs目录
    log_dir = Path("logs")
    log_dir.mkdir(exist_ok=True)
    
    # 配置日志格式
    log_format = "%(asctime)s - %(name)s - %(levelname)s - %(message)s"
    
    # 配置日志处理器
    handlers = []
    
    # 文件处理器
    file_handler = logging.FileHandler(
        log_dir / "michelin_project.log", 
        encoding='utf-8'
    )
    file_handler.setFormatter(logging.Formatter(log_format))
    handlers.append(file_handler)
    
    # 控制台处理器 - 使用简化格式避免编码问题
    console_handler = logging.StreamHandler()
    console_format = "%(asctime)s - %(levelname)s - %(message)s"
    console_handler.setFormatter(logging.Formatter(console_format))
    handlers.append(console_handler)
    
    # 配置根日志器
    logging.basicConfig(
        level=getattr(logging, log_level.upper()),
        handlers=handlers,
        force=True
    )
    
    return logging.getLogger(__name__)


logger = setup_logging()


class PathManager:
    """路径管理器，统一管理项目中的各种路径"""
    
    def __init__(self, project_root: str = None):
        if project_root is None:
            self.project_root = Path(__file__).parent.parent
        else:
            self.project_root = Path(project_root)
        
        # 数据路径
        self.data_dir = self.project_root / "data"
        self.raw_data_dir = self.data_dir / "raw"
        self.cleaned_data_dir = self.data_dir / "cleaned"
        self.processed_data_dir = self.data_dir / "processed"
        
        # 确保目录存在
        for dir_path in [self.raw_data_dir, self.cleaned_data_dir, self.processed_data_dir]:
            dir_path.mkdir(parents=True, exist_ok=True)
    
    def get_raw_data_path(self, filename: str) -> Path:
        """获取原始数据文件路径"""
        return self.raw_data_dir / filename
    
    def get_cleaned_data_path(self, filename: str) -> Path:
        """获取清洗后数据文件路径"""
        return self.cleaned_data_dir / filename
    
    def get_processed_data_path(self, filename: str) -> Path:
        """获取处理后数据文件路径"""
        return self.processed_data_dir / filename


class CacheManager:
    """缓存管理器，支持文件缓存和内存缓存"""
    
    def __init__(self, cache_dir: str = None):
        if cache_dir is None:
            self.cache_dir = Path(__file__).parent.parent / "data" / "cache"
        else:
            self.cache_dir = Path(cache_dir)
        
        self.cache_dir.mkdir(parents=True, exist_ok=True)
        self._memory_cache = {}
    
    def _get_cache_key(self, data: Any) -> str:
        """生成缓存键"""
        if isinstance(data, str):
            return hashlib.md5(data.encode()).hexdigest()
        elif isinstance(data, dict):
            return hashlib.md5(json.dumps(data, sort_keys=True).encode()).hexdigest()
        else:
            return hashlib.md5(str(data).encode()).hexdigest()
    
    def set_cache(self, key: str, data: Any, use_file: bool = True) -> None:
        """设置缓存"""
        if use_file:
            cache_file = self.cache_dir / f"{key}.pkl"
            with open(cache_file, 'wb') as f:
                pickle.dump(data, f)
            logger.info(f"Data cached to file: {cache_file}")
        else:
            self._memory_cache[key] = data
            logger.info(f"Data cached to memory with key: {key}")
    
    def get_cache(self, key: str, use_file: bool = True) -> Optional[Any]:
        """获取缓存"""
        try:
            if use_file:
                cache_file = self.cache_dir / f"{key}.pkl"
                if cache_file.exists():
                    with open(cache_file, 'rb') as f:
                        data = pickle.load(f)
                    logger.info(f"Data loaded from cache file: {cache_file}")
                    return data
            else:
                if key in self._memory_cache:
                    logger.info(f"Data loaded from memory cache: {key}")
                    return self._memory_cache[key]
        except Exception as e:
            logger.error(f"Error loading cache {key}: {e}")
        
        return None
    
    def clear_cache(self, key: str = None, use_file: bool = True) -> None:
        """清空缓存"""
        if key is None:
            # 清空所有缓存
            if use_file:
                for cache_file in self.cache_dir.glob("*.pkl"):
                    cache_file.unlink()
                logger.info("All file cache cleared")
            else:
                self._memory_cache.clear()
                logger.info("All memory cache cleared")
        else:
            # 清空指定缓存
            if use_file:
                cache_file = self.cache_dir / f"{key}.pkl"
                if cache_file.exists():
                    cache_file.unlink()
                    logger.info(f"File cache cleared: {cache_file}")
            else:
                self._memory_cache.pop(key, None)
                logger.info(f"Memory cache cleared: {key}")


def load_michelin_data(path_manager: PathManager = None) -> pd.DataFrame:
    """
    加载所有米其林餐厅数据并合并
    
    Args:
        path_manager: 路径管理器实例
        
    Returns:
        合并后的DataFrame
    """
    if path_manager is None:
        path_manager = PathManager()
    
    dataframes = []
    files = [
        "one-star-michelin-restaurants.csv",
        "two-stars-michelin-restaurants.csv", 
        "three-stars-michelin-restaurants.csv"
    ]
    
    for file in files:
        file_path = path_manager.get_raw_data_path(file)
        if file_path.exists():
            try:
                df = pd.read_csv(file_path)
                # 从文件名提取星级信息
                if "one-star" in file:
                    df['stars'] = 1
                elif "two-stars" in file:
                    df['stars'] = 2
                elif "three-stars" in file:
                    df['stars'] = 3
                
                dataframes.append(df)
                logger.info(f"Loaded {len(df)} records from {file}")
                
            except Exception as e:
                logger.error(f"Error loading {file}: {e}")
        else:
            logger.warning(f"File not found: {file_path}")
    
    if not dataframes:
        raise FileNotFoundError("No data files found")
    
    # 合并所有数据
    combined_df = pd.concat(dataframes, ignore_index=True)
    logger.info(f"Combined dataset: {len(combined_df)} total records")
    
    return combined_df


def validate_dataframe(df: pd.DataFrame) -> Dict[str, Any]:
    """
    验证DataFrame的质量并返回统计信息
    
    Args:
        df: 要验证的DataFrame
        
    Returns:
        包含验证结果的字典
    """
    validation_results = {
        'total_records': len(df),
        'columns': list(df.columns),
        'missing_values': df.isnull().sum().to_dict(),
        'data_types': df.dtypes.to_dict(),
        'duplicate_records': df.duplicated().sum(),
        'unique_values': {}
    }
    
    # 统计分类字段的唯一值
    categorical_columns = ['region', 'city', 'cuisine', 'price', 'stars']
    for col in categorical_columns:
        if col in df.columns:
            validation_results['unique_values'][col] = df[col].nunique()
    
    # 检查地理坐标的有效性
    if 'latitude' in df.columns and 'longitude' in df.columns:
        valid_coords = (
            (df['latitude'].between(-90, 90)) & 
            (df['longitude'].between(-180, 180))
        )
        validation_results['invalid_coordinates'] = (~valid_coords).sum()
    
    return validation_results


def export_to_format(df: pd.DataFrame, output_path: str, format_type: str = "csv") -> None:
    """
    将DataFrame导出为指定格式
    
    Args:
        df: 要导出的DataFrame
        output_path: 输出文件路径
        format_type: 导出格式 (csv, json, excel)
    """
    output_path = Path(output_path)
    output_path.parent.mkdir(parents=True, exist_ok=True)
    
    try:
        if format_type.lower() == "csv":
            df.to_csv(output_path, index=False, encoding='utf-8')
        elif format_type.lower() == "json":
            # 创建DataFrame副本并转换数据类型以避免JSON序列化错误
            df_copy = df.copy()
            
            # 将numpy数据类型转换为Python原生类型
            for col in df_copy.columns:
                if df_copy[col].dtype == 'int64':
                    df_copy[col] = df_copy[col].astype(int)
                elif df_copy[col].dtype == 'float64':
                    df_copy[col] = df_copy[col].astype(float)
                elif df_copy[col].dtype == 'bool':
                    df_copy[col] = df_copy[col].astype(bool)
            
            df_copy.to_json(output_path, orient='records', force_ascii=False, indent=2)
        elif format_type.lower() == "excel":
            df.to_excel(output_path, index=False)
        else:
            raise ValueError(f"Unsupported format: {format_type}")
        
        logger.info(f"Data exported to {output_path}")
        
    except Exception as e:
        logger.error(f"Error exporting data to {output_path}: {e}")
        raise


def create_project_summary() -> Dict[str, Any]:
    """创建项目摘要信息"""
    path_manager = PathManager()
    
    summary = {
        'project_name': 'Michelin Restaurants Visualization',
        'created_at': datetime.now().isoformat(),
        'data_sources': [],
        'total_records': 0,
        'data_quality': {},
        'processing_status': {}
    }
    
    try:
        # 加载数据并生成摘要
        df = load_michelin_data(path_manager)
        summary['total_records'] = len(df)
        summary['data_quality'] = validate_dataframe(df)
        
        # 检查处理状态
        processed_files = list(path_manager.processed_data_dir.glob("*.pkl"))
        summary['processing_status'] = {
            'cleaned_data_available': (path_manager.cleaned_data_dir / "restaurants_cleaned.csv").exists(),
            'geocoded_data_available': (path_manager.cleaned_data_dir / "restaurants_geo.json").exists(),
            'features_available': (path_manager.processed_data_dir / "features.joblib").exists(),
            'clusters_available': (path_manager.processed_data_dir / "clusters.joblib").exists(),
            'processed_files_count': len(processed_files)
        }
        
    except Exception as e:
        logger.error(f"Error creating project summary: {e}")
        summary['error'] = str(e)
    
    return summary


# 全局实例
path_manager = PathManager()
cache_manager = CacheManager() 