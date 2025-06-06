"""
数据服务模块
负责数据加载、缓存和基本统计操作
"""

import pandas as pd
import numpy as np
import json
import joblib
from pathlib import Path
import logging
from typing import Dict, List, Any, Optional
from datetime import datetime

logger = logging.getLogger(__name__)


class DataService:
    """
    数据服务类
    
    功能：
    1. 数据加载和缓存管理
    2. 数据格式转换
    3. 基本统计计算
    4. 数据完整性检查
    """
    
    def __init__(self, base_dir: Path):
        """
        初始化数据服务
        
        Args:
            base_dir: 项目根目录路径
        """
        self.base_dir = base_dir
        self.data_dir = base_dir / "data"
        self.processed_dir = self.data_dir / "processed"
        self.cleaned_dir = self.data_dir / "cleaned"
        
        # 数据缓存
        self.data_cache = {}
        self.cache_timestamps = {}
        
        # 数据加载状态
        self.is_loaded = False
        self.load_errors = []
        
        # 自动加载数据
        self.load_all_data()
    
    def load_all_data(self) -> None:
        """
        加载所有处理后的数据到缓存
        
        加载顺序：
        1. 清洗后的原始数据
        2. 特征工程数据
        3. 聚类分析结果
        4. 预测分析结果
        5. GeoJSON地理数据
        """
        try:
            logger.info("开始加载数据...")
            self.load_errors.clear()
            
            # 1. 加载清洗后的数据
            self._load_cleaned_data()
            
            # 2. 加载特征工程数据
            self._load_features_data()
            
            # 3. 加载聚类结果
            self._load_clustering_data()
            
            # 4. 加载预测结果
            self._load_forecasts_data()
            
            # 5. 加载GeoJSON数据
            self._load_geojson_data()
            
            # 数据完整性检查
            self._validate_data_integrity()
            
            self.is_loaded = True
            logger.info(f"数据加载完成，已加载: {list(self.data_cache.keys())}")
            
            if self.load_errors:
                logger.warning(f"加载过程中出现错误: {self.load_errors}")
            
        except Exception as e:
            logger.error(f"数据加载失败: {e}", exc_info=True)
            self.is_loaded = False
            self.load_errors.append(str(e))
    
    def _load_cleaned_data(self) -> None:
        """加载清洗后的餐厅数据"""
        try:
            cleaned_csv_path = self.cleaned_dir / "restaurants_cleaned.csv"
            
            if cleaned_csv_path.exists():
                df = pd.read_csv(cleaned_csv_path)
                
                # 数据类型优化
                df = self._optimize_dtypes(df)
                
                self.data_cache['cleaned'] = df
                self.cache_timestamps['cleaned'] = datetime.now()
                
                logger.info(f"加载清洗数据: {len(df)} 条记录, {len(df.columns)} 列")
            else:
                logger.warning(f"清洗数据文件不存在: {cleaned_csv_path}")
                self.load_errors.append("清洗数据文件不存在")
                
        except Exception as e:
            logger.error(f"加载清洗数据时出错: {e}")
            self.load_errors.append(f"清洗数据加载错误: {e}")
    
    def _load_features_data(self) -> None:
        """加载特征工程数据"""
        try:
            features_path = self.processed_dir / "features.joblib"
            
            if features_path.exists():
                features_data = joblib.load(features_path)
                
                self.data_cache['features'] = features_data
                self.cache_timestamps['features'] = datetime.now()
                
                # 记录特征数量
                if 'feature_matrix' in features_data:
                    matrix = features_data['feature_matrix']
                    if hasattr(matrix, 'shape'):
                        logger.info(f"加载特征数据: {matrix.shape[0]} 样本, {matrix.shape[1]} 特征")
                    else:
                        logger.info("加载特征数据: 格式未知")
                else:
                    logger.warning("特征数据缺少feature_matrix字段")
                    
            else:
                logger.warning(f"特征数据文件不存在: {features_path}")
                self.load_errors.append("特征数据文件不存在")
                
        except Exception as e:
            logger.error(f"加载特征数据时出错: {e}")
            self.load_errors.append(f"特征数据加载错误: {e}")
    
    def _load_clustering_data(self) -> None:
        """加载聚类分析结果"""
        try:
            clustering_path = self.processed_dir / "clusters.joblib"
            
            if clustering_path.exists():
                clustering_data = joblib.load(clustering_path)
                
                self.data_cache['clustering'] = clustering_data
                self.cache_timestamps['clustering'] = datetime.now()
                
                # 记录聚类信息
                n_clusters = clustering_data.get('n_clusters', 'unknown')
                algorithm = clustering_data.get('algorithm', 'unknown')
                logger.info(f"加载聚类结果: {n_clusters} 个聚类 ({algorithm})")
                
            else:
                logger.warning(f"聚类数据文件不存在: {clustering_path}")
                self.load_errors.append("聚类数据文件不存在")
                
        except Exception as e:
            logger.error(f"加载聚类数据时出错: {e}")
            self.load_errors.append(f"聚类数据加载错误: {e}")
    
    def _load_forecasts_data(self) -> None:
        """加载预测分析结果"""
        try:
            forecast_path = self.processed_dir / "forecasts.joblib"
            
            if forecast_path.exists():
                forecasts_data = joblib.load(forecast_path)
                
                self.data_cache['forecasts'] = forecasts_data
                self.cache_timestamps['forecasts'] = datetime.now()
                
                # 记录预测信息
                if 'forecasts' in forecasts_data:
                    n_forecasts = len(forecasts_data['forecasts'])
                    logger.info(f"加载预测结果: {n_forecasts} 个地区的预测")
                else:
                    logger.warning("预测数据缺少forecasts字段")
                    
            else:
                logger.warning(f"预测数据文件不存在: {forecast_path}")
                self.load_errors.append("预测数据文件不存在")
                
        except Exception as e:
            logger.error(f"加载预测数据时出错: {e}")
            self.load_errors.append(f"预测数据加载错误: {e}")
    
    def _load_geojson_data(self) -> None:
        """加载GeoJSON地理数据"""
        try:
            geojson_path = self.cleaned_dir / "restaurants_geo.json"
            
            if geojson_path.exists():
                with open(geojson_path, 'r', encoding='utf-8') as f:
                    geojson_data = json.load(f)
                
                self.data_cache['geojson'] = geojson_data
                self.cache_timestamps['geojson'] = datetime.now()
                
                # 记录地理数据信息
                if 'features' in geojson_data:
                    n_features = len(geojson_data['features'])
                    logger.info(f"加载GeoJSON数据: {n_features} 个地理要素")
                else:
                    logger.warning("GeoJSON数据格式异常")
                    
            else:
                logger.warning(f"GeoJSON文件不存在: {geojson_path}")
                self.load_errors.append("GeoJSON文件不存在")
                
        except Exception as e:
            logger.error(f"加载GeoJSON数据时出错: {e}")
            self.load_errors.append(f"GeoJSON数据加载错误: {e}")
    
    def _optimize_dtypes(self, df: pd.DataFrame) -> pd.DataFrame:
        """
        优化DataFrame的数据类型以节省内存
        
        Args:
            df: 输入的DataFrame
            
        Returns:
            优化后的DataFrame
        """
        optimized_df = df.copy()
        
        # 优化整数列
        int_cols = df.select_dtypes(include=['int64']).columns
        for col in int_cols:
            if df[col].min() >= 0:
                if df[col].max() < 255:
                    optimized_df[col] = df[col].astype('uint8')
                elif df[col].max() < 65535:
                    optimized_df[col] = df[col].astype('uint16')
                elif df[col].max() < 4294967295:
                    optimized_df[col] = df[col].astype('uint32')
            else:
                if df[col].min() > -128 and df[col].max() < 127:
                    optimized_df[col] = df[col].astype('int8')
                elif df[col].min() > -32768 and df[col].max() < 32767:
                    optimized_df[col] = df[col].astype('int16')
                elif df[col].min() > -2147483648 and df[col].max() < 2147483647:
                    optimized_df[col] = df[col].astype('int32')
        
        # 优化浮点数列
        float_cols = df.select_dtypes(include=['float64']).columns
        for col in float_cols:
            optimized_df[col] = df[col].astype('float32')
        
        # 优化字符串列
        str_cols = df.select_dtypes(include=['object']).columns
        for col in str_cols:
            if df[col].nunique() / len(df) < 0.5:  # 如果唯一值比例小于50%
                optimized_df[col] = df[col].astype('category')
        
        return optimized_df
    
    def _validate_data_integrity(self) -> None:
        """验证数据完整性"""
        
        # 检查必要的数据是否存在
        required_data = ['cleaned']
        missing_data = [key for key in required_data if key not in self.data_cache]
        
        if missing_data:
            error_msg = f"缺少必要数据: {missing_data}"
            logger.error(error_msg)
            self.load_errors.append(error_msg)
            return
        
        # 检查清洗数据的完整性
        if 'cleaned' in self.data_cache:
            df = self.data_cache['cleaned']
            
            # 检查必要列
            required_columns = ['name', 'city', 'region', 'stars']
            missing_columns = [col for col in required_columns if col not in df.columns]
            
            if missing_columns:
                error_msg = f"清洗数据缺少必要列: {missing_columns}"
                logger.warning(error_msg)
                self.load_errors.append(error_msg)
            
            # 检查数据质量
            if df.empty:
                error_msg = "清洗数据为空"
                logger.error(error_msg)
                self.load_errors.append(error_msg)
            
            # 检查星级数据
            if 'stars' in df.columns:
                invalid_stars = df[~df['stars'].isin([1, 2, 3])]['stars'].nunique()
                if invalid_stars > 0:
                    logger.warning(f"发现 {invalid_stars} 种无效星级值")
        
        logger.info("数据完整性检查完成")
    
    def get_data(self, data_type: str) -> Any:
        """
        获取指定类型的数据
        
        Args:
            data_type: 数据类型 (cleaned|features|clustering|forecasts|geojson)
            
        Returns:
            对应的数据，如果不存在返回None
        """
        if not self.is_loaded:
            logger.warning(f"数据服务未完全加载，请求数据类型: {data_type}")
        
        data = self.data_cache.get(data_type)
        
        if data is not None:
            logger.debug(f"返回数据类型: {data_type}")
        else:
            logger.warning(f"请求的数据类型不存在: {data_type}")
        
        return data
    
    def get_summary_stats(self) -> Dict:
        """
        获取数据摘要统计
        
        Returns:
            包含各种统计信息的字典
        """
        if 'cleaned' not in self.data_cache:
            logger.warning("无法生成摘要统计 - 清洗数据未加载")
            return {}
        
        df = self.data_cache['cleaned']
        
        try:
            stats = {
                'total_restaurants': len(df),
                'regions': df['region'].nunique() if 'region' in df.columns else 0,
                'cities': df['city'].nunique() if 'city' in df.columns else 0,
                'countries': df['country'].nunique() if 'country' in df.columns else 0,
                'cuisines': df['cuisine'].nunique() if 'cuisine' in df.columns else 0,
                'data_quality': {
                    'completeness': {
                        'name': (df['name'].notna().sum() / len(df) * 100) if 'name' in df.columns else 0,
                        'location': (df[['latitude', 'longitude']].notna().all(axis=1).sum() / len(df) * 100) if all(col in df.columns for col in ['latitude', 'longitude']) else 0,
                        'cuisine': (df['cuisine'].notna().sum() / len(df) * 100) if 'cuisine' in df.columns else 0
                    }
                },
                'cache_info': {
                    'loaded_data_types': list(self.data_cache.keys()),
                    'last_updated': max(self.cache_timestamps.values()).isoformat() if self.cache_timestamps else None,
                    'load_errors': self.load_errors
                }
            }
            
            # 年份范围
            if 'year' in df.columns and df['year'].notna().any():
                stats['year_range'] = {
                    'min': int(df['year'].min()),
                    'max': int(df['year'].max())
                }
            
            # 星级分布
            if 'stars' in df.columns:
                stars_dist = df['stars'].value_counts().sort_index()
                stats['star_distribution'] = stars_dist.to_dict()
            
            # 价格分布
            if 'price_level' in df.columns:
                price_dist = df['price_level'].value_counts()
                stats['price_distribution'] = price_dist.to_dict()
            
            logger.debug("生成摘要统计成功")
            return stats
            
        except Exception as e:
            logger.error(f"生成摘要统计时出错: {e}", exc_info=True)
            return {'error': str(e)}
    
    def reload_data(self) -> Dict:
        """
        重新加载所有数据
        
        Returns:
            重新加载的结果信息
        """
        logger.info("开始重新加载数据...")
        
        # 清空缓存
        old_cache_keys = list(self.data_cache.keys())
        self.data_cache.clear()
        self.cache_timestamps.clear()
        
        # 重新加载
        self.load_all_data()
        
        result = {
            'success': self.is_loaded,
            'old_data_types': old_cache_keys,
            'new_data_types': list(self.data_cache.keys()),
            'load_errors': self.load_errors,
            'reload_time': datetime.now().isoformat()
        }
        
        logger.info(f"数据重新加载完成: {result}")
        return result
    
    def get_cache_status(self) -> Dict:
        """
        获取缓存状态信息
        
        Returns:
            缓存状态字典
        """
        status = {
            'is_loaded': self.is_loaded,
            'cached_data_types': list(self.data_cache.keys()),
            'cache_timestamps': {
                key: timestamp.isoformat() 
                for key, timestamp in self.cache_timestamps.items()
            },
            'load_errors': self.load_errors,
            'memory_usage': {}
        }
        
        # 计算内存使用（简单估算）
        for key, data in self.data_cache.items():
            if hasattr(data, 'memory_usage'):
                # pandas DataFrame
                status['memory_usage'][key] = f"{data.memory_usage(deep=True).sum() / 1024 / 1024:.2f} MB"
            elif isinstance(data, dict):
                # 字典类型
                status['memory_usage'][key] = f"~{len(str(data)) / 1024:.2f} KB"
            else:
                status['memory_usage'][key] = "Unknown"
        
        return status 