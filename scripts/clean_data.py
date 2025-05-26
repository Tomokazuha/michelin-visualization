"""
数据清洗模块
处理米其林餐厅数据的缺失值、异常值、数据标准化等
"""

import pandas as pd
import numpy as np
import re
from typing import Dict, List, Tuple, Optional
from datetime import datetime
import warnings
warnings.filterwarnings('ignore')

from utils import logger, path_manager, cache_manager, validate_dataframe, export_to_format


class DataCleaner:
    """数据清洗器"""
    
    def __init__(self):
        self.cleaning_log = []
        self.original_shape = None
        self.cleaned_shape = None
    
    def log_operation(self, operation: str, details: Dict):
        """记录清洗操作"""
        log_entry = {
            'timestamp': datetime.now().isoformat(),
            'operation': operation,
            'details': details
        }
        self.cleaning_log.append(log_entry)
        logger.info(f"Data cleaning: {operation} - {details}")
    
    def handle_missing_values(self, df: pd.DataFrame) -> pd.DataFrame:
        """处理缺失值"""
        logger.info("开始处理缺失值...")
        original_missing = df.isnull().sum()
        
        # 处理策略
        cleaning_strategies = {
            'name': 'drop',  # 餐厅名为空则删除记录
            'latitude': 'interpolate',  # 地理坐标插值
            'longitude': 'interpolate',
            'city': 'unknown',  # 城市未知
            'region': 'unknown',  # 地区未知
            'cuisine': 'unknown',  # 菜系未知
            'price': 'median',  # 价格用中位数填充
            'year': 'mode',  # 年份用众数填充
            'zipCode': 'unknown',  # 邮编未知
            'url': 'generate'  # 生成默认URL
        }
        
        for column, strategy in cleaning_strategies.items():
            if column in df.columns and df[column].isnull().any():
                missing_count = df[column].isnull().sum()
                
                if strategy == 'drop':
                    df = df.dropna(subset=[column])
                    self.log_operation(f"Drop missing {column}", 
                                     {'dropped_rows': missing_count})
                
                elif strategy == 'interpolate':
                    if df[column].dtype in ['float64', 'int64']:
                        df[column] = df[column].interpolate(method='linear')
                        self.log_operation(f"Interpolate {column}", 
                                         {'filled_values': missing_count})
                
                elif strategy == 'unknown':
                    df[column] = df[column].fillna('Unknown')
                    self.log_operation(f"Fill {column} with Unknown", 
                                     {'filled_values': missing_count})
                
                elif strategy == 'median':
                    if df[column].dtype in ['float64', 'int64']:
                        median_val = df[column].median()
                        df[column] = df[column].fillna(median_val)
                        self.log_operation(f"Fill {column} with median", 
                                         {'filled_values': missing_count, 'median': median_val})
                
                elif strategy == 'mode':
                    mode_val = df[column].mode().iloc[0] if not df[column].mode().empty else 2019
                    df[column] = df[column].fillna(mode_val)
                    self.log_operation(f"Fill {column} with mode", 
                                     {'filled_values': missing_count, 'mode': mode_val})
                
                elif strategy == 'generate':
                    df[column] = df[column].fillna('https://guide.michelin.com/')
                    self.log_operation(f"Generate default {column}", 
                                     {'filled_values': missing_count})
        
        final_missing = df.isnull().sum()
        self.log_operation("Missing values summary", {
            'before': original_missing.to_dict(),
            'after': final_missing.to_dict()
        })
        
        return df
    
    def handle_outliers(self, df: pd.DataFrame) -> pd.DataFrame:
        """处理异常值"""
        logger.info("开始处理异常值...")
        
        numeric_columns = ['latitude', 'longitude', 'year']
        
        for column in numeric_columns:
            if column in df.columns:
                # 使用IQR方法检测异常值
                Q1 = df[column].quantile(0.25)
                Q3 = df[column].quantile(0.75)
                IQR = Q3 - Q1
                lower_bound = Q1 - 1.5 * IQR
                upper_bound = Q3 + 1.5 * IQR
                
                # 特殊处理地理坐标
                if column == 'latitude':
                    lower_bound = max(lower_bound, -90)
                    upper_bound = min(upper_bound, 90)
                elif column == 'longitude':
                    lower_bound = max(lower_bound, -180)
                    upper_bound = min(upper_bound, 180)
                elif column == 'year':
                    lower_bound = max(lower_bound, 1900)
                    upper_bound = min(upper_bound, datetime.now().year)
                
                outliers_mask = (df[column] < lower_bound) | (df[column] > upper_bound)
                outlier_count = outliers_mask.sum()
                
                if outlier_count > 0:
                    # 用边界值替换异常值
                    df.loc[df[column] < lower_bound, column] = lower_bound
                    df.loc[df[column] > upper_bound, column] = upper_bound
                    
                    self.log_operation(f"Handle outliers in {column}", {
                        'outliers_count': outlier_count,
                        'lower_bound': lower_bound,
                        'upper_bound': upper_bound
                    })
        
        return df
    
    def standardize_text_fields(self, df: pd.DataFrame) -> pd.DataFrame:
        """标准化文本字段"""
        logger.info("开始标准化文本字段...")
        
        text_columns = ['name', 'city', 'region', 'cuisine']
        
        for column in text_columns:
            if column in df.columns:
                original_unique = df[column].nunique()
                
                # 去除首尾空白字符
                df[column] = df[column].astype(str).str.strip()
                
                # 标准化城市名（去除特殊字符，统一格式）
                if column == 'city':
                    df[column] = df[column].str.replace(r'[^\w\s-]', '', regex=True)
                
                # 标准化菜系名
                elif column == 'cuisine':
                    cuisine_mapping = {
                        'French contemporary': 'French',
                        'Modern cuisine': 'Modern',
                        'Contemporary': 'Modern',
                        'Creative': 'Creative',
                        'European contemporary': 'European',
                        'Asian influences': 'Asian',
                        'Cantonese Roast Meats': 'Cantonese',
                        'Noodles and congee': 'Chinese',
                        'Street Food': 'Street Food',
                        'Market cuisine': 'Market',
                        'Classic cuisine': 'Classic',
                        'Traditional British': 'British',
                        'Modern British': 'British',
                        'Classic French': 'French'
                    }
                    df[column] = df[column].replace(cuisine_mapping)
                
                final_unique = df[column].nunique()
                
                self.log_operation(f"Standardize {column}", {
                    'unique_before': original_unique,
                    'unique_after': final_unique
                })
        
        return df
    
    def standardize_price_field(self, df: pd.DataFrame) -> pd.DataFrame:
        """标准化价格字段"""
        logger.info("开始标准化价格字段...")
        
        if 'price' in df.columns:
            original_unique = df['price'].nunique()
            
            # 创建价格等级映射
            def map_price_level(price_str):
                if pd.isna(price_str) or price_str == 'N/A':
                    return 'Unknown'
                
                price_str = str(price_str)
                dollar_count = price_str.count('$')
                
                if dollar_count == 1:
                    return 'Budget'
                elif dollar_count == 2:
                    return 'Moderate'
                elif dollar_count == 3:
                    return 'Expensive'
                elif dollar_count == 4:
                    return 'Very Expensive'
                elif dollar_count >= 5:
                    return 'Luxury'
                else:
                    return 'Unknown'
            
            # 创建数值化的价格等级
            def map_price_numeric(price_str):
                if pd.isna(price_str) or price_str == 'N/A':
                    return 0
                
                price_str = str(price_str)
                dollar_count = price_str.count('$')
                return min(dollar_count, 5)  # 最高5级
            
            df['price_level'] = df['price'].apply(map_price_level)
            df['price_numeric'] = df['price'].apply(map_price_numeric)
            
            final_unique = df['price_level'].nunique()
            
            self.log_operation("Standardize price", {
                'unique_before': original_unique,
                'unique_after': final_unique,
                'price_distribution': df['price_level'].value_counts().to_dict()
            })
        
        return df
    
    def add_derived_features(self, df: pd.DataFrame) -> pd.DataFrame:
        """添加派生特征"""
        logger.info("开始添加派生特征...")
        
        # 添加年份相关特征
        if 'year' in df.columns:
            current_year = datetime.now().year
            df['years_since_award'] = current_year - df['year']
            df['decade'] = (df['year'] // 10) * 10
        
        # 添加地理区域特征
        if 'latitude' in df.columns and 'longitude' in df.columns:
            # 简单的地理区域划分
            df['hemisphere'] = df['latitude'].apply(lambda x: 'Northern' if x >= 0 else 'Southern')
            
            # 根据经纬度粗略划分大洲
            def classify_continent(lat, lon):
                if -180 <= lon <= -30:  # 美洲
                    return 'Americas'
                elif -30 < lon <= 60:   # 欧洲、非洲
                    if lat >= 35:
                        return 'Europe'
                    else:
                        return 'Africa'
                else:  # 亚洲、大洋洲
                    if lat >= -10:
                        return 'Asia'
                    else:
                        return 'Oceania'
            
            df['continent'] = df.apply(lambda row: classify_continent(row['latitude'], row['longitude']), axis=1)
        
        # 添加URL相关特征
        if 'url' in df.columns:
            df['has_url'] = df['url'].notna() & (df['url'] != 'https://guide.michelin.com/')
        
        # 添加餐厅名长度特征
        if 'name' in df.columns:
            df['name_length'] = df['name'].astype(str).str.len()
            df['name_word_count'] = df['name'].astype(str).str.split().str.len()
        
        self.log_operation("Add derived features", {
            'new_features': ['years_since_award', 'decade', 'hemisphere', 'continent', 
                           'has_url', 'name_length', 'name_word_count']
        })
        
        return df
    
    def remove_duplicates(self, df: pd.DataFrame) -> pd.DataFrame:
        """去除重复记录"""
        logger.info("开始去除重复记录...")
        
        original_count = len(df)
        
        # 基于餐厅名、城市、年份去重
        df = df.drop_duplicates(subset=['name', 'city', 'year'], keep='first')
        
        final_count = len(df)
        removed_count = original_count - final_count
        
        self.log_operation("Remove duplicates", {
            'original_count': original_count,
            'final_count': final_count,
            'removed_count': removed_count
        })
        
        return df
    
    def clean_data(self, df: pd.DataFrame) -> pd.DataFrame:
        """执行完整的数据清洗流程"""
        logger.info("开始完整数据清洗流程...")
        
        self.original_shape = df.shape
        
        # 1. 处理缺失值
        df = self.handle_missing_values(df)
        
        # 2. 处理异常值
        df = self.handle_outliers(df)
        
        # 3. 标准化文本字段
        df = self.standardize_text_fields(df)
        
        # 4. 标准化价格字段
        df = self.standardize_price_field(df)
        
        # 5. 添加派生特征
        df = self.add_derived_features(df)
        
        # 6. 去除重复记录
        df = self.remove_duplicates(df)
        
        self.cleaned_shape = df.shape
        
        # 记录清洗摘要
        self.log_operation("Data cleaning completed", {
            'original_shape': self.original_shape,
            'cleaned_shape': self.cleaned_shape,
            'records_removed': self.original_shape[0] - self.cleaned_shape[0],
            'features_added': self.cleaned_shape[1] - self.original_shape[1]
        })
        
        return df
    
    def get_cleaning_report(self) -> Dict:
        """获取清洗报告"""
        return {
            'cleaning_log': self.cleaning_log,
            'original_shape': self.original_shape,
            'cleaned_shape': self.cleaned_shape,
            'summary': {
                'total_operations': len(self.cleaning_log),
                'records_processed': self.original_shape[0] if self.original_shape else 0,
                'final_records': self.cleaned_shape[0] if self.cleaned_shape else 0,
                'data_reduction_rate': (
                    (self.original_shape[0] - self.cleaned_shape[0]) / self.original_shape[0] * 100
                    if self.original_shape and self.original_shape[0] > 0 else 0
                )
            }
        }


def main():
    """主函数：执行数据清洗流程"""
    logger.info("开始数据清洗主流程...")
    
    try:
        # 加载原始数据
        from utils import load_michelin_data
        df = load_michelin_data(path_manager)
        
        logger.info(f"加载原始数据: {df.shape[0]} 条记录, {df.shape[1]} 个字段")
        
        # 数据质量验证
        validation_results = validate_dataframe(df)
        logger.info(f"数据质量验证完成: {validation_results['total_records']} 条记录")
        
        # 执行数据清洗
        cleaner = DataCleaner()
        cleaned_df = cleaner.clean_data(df)
        
        # 保存清洗后的数据
        output_path = path_manager.get_cleaned_data_path("restaurants_cleaned.csv")
        export_to_format(cleaned_df, output_path, "csv")
        
        # 同时保存为JSON格式
        json_path = path_manager.get_cleaned_data_path("restaurants_cleaned.json")
        export_to_format(cleaned_df, json_path, "json")
        
        # 保存清洗报告
        cleaning_report = cleaner.get_cleaning_report()
        report_path = path_manager.get_cleaned_data_path("cleaning_report.json")
        
        import json
        import numpy as np
        
        # 自定义JSON编码器处理numpy数据类型
        class NumpyEncoder(json.JSONEncoder):
            def default(self, obj):
                if isinstance(obj, np.integer):
                    return int(obj)
                elif isinstance(obj, np.floating):
                    return float(obj)
                elif isinstance(obj, np.ndarray):
                    return obj.tolist()
                return super(NumpyEncoder, self).default(obj)
        
        with open(report_path, 'w', encoding='utf-8') as f:
            json.dump(cleaning_report, f, indent=2, ensure_ascii=False, cls=NumpyEncoder)
        
        logger.info(f"清洗报告已保存: {report_path}")
        
        # 缓存清洗后的数据
        cache_manager.set_cache("cleaned_data", cleaned_df)
        cache_manager.set_cache("cleaning_report", cleaning_report)
        
        logger.info("数据清洗流程完成!")
        logger.info(f"原始数据: {cleaner.original_shape}")
        logger.info(f"清洗后数据: {cleaner.cleaned_shape}")
        
        return cleaned_df, cleaning_report
        
    except Exception as e:
        logger.error(f"数据清洗过程中发生错误: {e}")
        raise


if __name__ == "__main__":
    main() 