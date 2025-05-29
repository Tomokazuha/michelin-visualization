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

def setup_directories(directories):
    """
    确保目录存在，如果不存在则创建
    
    Args:
        directories: 目录路径列表
    """
    for directory in directories:
        if not isinstance(directory, Path):
            directory = Path(directory)
        directory.mkdir(parents=True, exist_ok=True)
        logger.info(f"目录准备完成: {directory}")

def load_restaurants(raw_data_dir):
    """
    从raw目录加载所有米其林餐厅数据
    
    Args:
        raw_data_dir: 原始数据目录
        
    Returns:
        合并后的DataFrame
    """
    logger.info(f"从{raw_data_dir}加载米其林餐厅数据")
    
    # 检查目录是否存在
    if not isinstance(raw_data_dir, Path):
        raw_data_dir = Path(raw_data_dir)
    
    if not raw_data_dir.exists():
        raise FileNotFoundError(f"原始数据目录不存在: {raw_data_dir}")
    
    # 加载各星级餐厅数据
    dataframes = []
    files = [
        "one-star-michelin-restaurants.csv",
        "two-stars-michelin-restaurants.csv", 
        "three-stars-michelin-restaurants.csv"
    ]
    
    for file in files:
        file_path = raw_data_dir / file
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
                
                # 基本数据验证
                if len(df) > 0:
                    dataframes.append(df)
                    logger.info(f"从{file}加载了{len(df)}条餐厅记录")
                else:
                    logger.warning(f"文件{file}不包含任何数据")
                
            except Exception as e:
                logger.error(f"加载{file}时出错: {e}")
        else:
            logger.warning(f"文件不存在: {file_path}")
    
    if not dataframes:
        raise FileNotFoundError("未找到任何有效的米其林餐厅数据文件")
    
    # 合并所有数据
    combined_df = pd.concat(dataframes, ignore_index=True)
    logger.info(f"合并数据集包含{len(combined_df)}条餐厅记录")
    
    return combined_df

def preprocess_restaurant_data(df):
    """
    预处理餐厅数据用于聚类分析
    
    Args:
        df: 原始餐厅数据DataFrame
        
    Returns:
        预处理后的DataFrame
    """
    # 复制数据，避免修改原始数据
    processed_df = df.copy()
    
    logger.info(f"开始预处理{len(processed_df)}条餐厅数据")
    
    # 1. 处理列名 - 确保列名规范化
    processed_df.columns = [col.lower().strip().replace(' ', '_') for col in processed_df.columns]
    
    # 2. 检查必要的列是否存在
    required_columns = ['name', 'stars']
    missing_columns = [col for col in required_columns if col not in processed_df.columns]
    if missing_columns:
        logger.warning(f"数据缺少必要的列: {missing_columns}")
        # 添加缺失的列
        for col in missing_columns:
            if col == 'stars':
                # 默认为1星
                processed_df['stars'] = 1
                logger.info("添加默认星级列(stars=1)")
            else:
                processed_df[col] = None
                logger.info(f"添加空列: {col}")
    
    # 3. 处理缺失值
    # 为数值型字段填充缺失值
    num_cols = ['stars', 'latitude', 'longitude']
    for col in num_cols:
        if col in processed_df.columns:
            # 为数值列填充0
            processed_df[col] = processed_df[col].fillna(0)
    
    # 为字符型字段填充缺失值
    str_cols = ['name', 'city', 'region', 'cuisine', 'price']
    for col in str_cols:
        if col in processed_df.columns:
            # 为字符列填充'未知'
            processed_df[col] = processed_df[col].fillna('未知')
    
    # 4. 数据类型转换
    # 确保星级是整数
    if 'stars' in processed_df.columns:
        processed_df['stars'] = processed_df['stars'].astype(int)
    
    # 确保经纬度是浮点数
    if 'latitude' in processed_df.columns and 'longitude' in processed_df.columns:
        processed_df['latitude'] = pd.to_numeric(processed_df['latitude'], errors='coerce').fillna(0)
        processed_df['longitude'] = pd.to_numeric(processed_df['longitude'], errors='coerce').fillna(0)
    
    # 5. 去除重复记录
    before_drop = len(processed_df)
    processed_df = processed_df.drop_duplicates(subset=['name', 'city'], keep='first')
    after_drop = len(processed_df)
    if before_drop > after_drop:
        logger.info(f"移除了{before_drop - after_drop}条重复记录")
    
    # 6. 处理价格信息 - 转换为价格级别
    if 'price' in processed_df.columns:
        # 创建价格级别
        def parse_price_level(price):
            if pd.isna(price) or price == '未知':
                return 2  # 默认中等价位
            if isinstance(price, str):
                if price.startswith('¥'):
                    return len(price)  # 根据¥符号数量确定级别
                elif price.isdigit() or (price.replace('.', '', 1).isdigit() and price.count('.') <= 1):
                    # 如果是数字，根据数值范围确定级别
                    try:
                        price_val = float(price)
                        if price_val < 300:
                            return 1
                        elif price_val < 800:
                            return 2
                        elif price_val < 1500:
                            return 3
                        elif price_val < 3000:
                            return 4
                        else:
                            return 5
                    except:
                        return 2
            return 2  # 默认中等价位
        
        processed_df['price_level'] = processed_df['price'].apply(parse_price_level)
        logger.info("已创建价格级别(price_level)列")
    
    # 7. 规范化菜系信息
    if 'cuisine' in processed_df.columns:
        # 处理菜系，规范化格式
        processed_df['cuisine'] = processed_df['cuisine'].str.strip()
        
        # 合并相似菜系
        cuisine_mapping = {
            '日本': '日式',
            '日本料理': '日式',
            '日料': '日式',
            '法国': '法式',
            '法餐': '法式',
            '意大利': '意式',
            '意餐': '意式',
            '中国': '中式',
            '中餐': '中式',
            '亚洲': '亚洲风味',
            '东南亚': '亚洲风味',
            '现代': '现代创新',
            '创意': '现代创新',
            '创新': '现代创新'
        }
        
        for old, new in cuisine_mapping.items():
            processed_df.loc[processed_df['cuisine'].str.contains(old, na=False), 'cuisine'] = new
    
    logger.info(f"数据预处理完成，最终数据集包含{len(processed_df)}条记录")
    return processed_df 