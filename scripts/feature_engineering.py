"""
特征工程模块
处理数据分桶、映射、文本处理等高级特征工程任务
"""

import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler, LabelEncoder, MinMaxScaler
from sklearn.feature_extraction.text import TfidfVectorizer
import re
from typing import Dict, List, Tuple, Optional, Any
from datetime import datetime
import joblib

from utils import logger, path_manager, cache_manager, export_to_format


class FeatureEngineer:
    """特征工程器"""
    
    def __init__(self):
        self.feature_transformers = {}
        self.feature_mappings = {}
        self.feature_statistics = {}
        self.processing_log = []
    
    def log_feature_operation(self, operation: str, details: Dict):
        """记录特征工程操作"""
        log_entry = {
            'timestamp': datetime.now().isoformat(),
            'operation': operation,
            'details': details
        }
        self.processing_log.append(log_entry)
        logger.info(f"Feature engineering: {operation} - {details}")
    
    def create_price_features(self, df: pd.DataFrame) -> pd.DataFrame:
        """创建价格相关特征"""
        logger.info("创建价格相关特征...")
        
        if 'price_numeric' in df.columns:
            # 价格分档
            def price_category(price_num):
                if price_num <= 1:
                    return 'Budget'
                elif price_num <= 2:
                    return 'Moderate'
                elif price_num <= 3:
                    return 'Expensive'
                elif price_num <= 4:
                    return 'Very Expensive'
                else:
                    return 'Luxury'
            
            df['price_category'] = df['price_numeric'].apply(price_category)
            
            # 价格-星级比率（性价比指标）
            if 'stars' in df.columns:
                df['price_star_ratio'] = df['price_numeric'] / df['stars']
                df['value_score'] = df['stars'] / (df['price_numeric'] + 1)  # 避免除零
            
            # 价格分布位置
            df['price_percentile'] = df['price_numeric'].rank(pct=True) * 100
            
            self.log_feature_operation("Create price features", {
                'new_features': ['price_category', 'price_star_ratio', 'value_score', 'price_percentile'],
                'price_distribution': df['price_category'].value_counts().to_dict()
            })
        
        return df
    
    def create_geographic_features(self, df: pd.DataFrame) -> pd.DataFrame:
        """创建地理相关特征"""
        logger.info("创建地理相关特征...")
        
        # 地理坐标分组
        if 'latitude' in df.columns and 'longitude' in df.columns:
            # 纬度带
            df['latitude_band'] = pd.cut(
                df['latitude'], 
                bins=[-90, -60, -30, 0, 30, 60, 90],
                labels=['Antarctic', 'South Temperate', 'South Subtropical', 
                       'Equatorial', 'North Subtropical', 'North Temperate']
            )
            
            # 经度带
            df['longitude_band'] = pd.cut(
                df['longitude'],
                bins=[-180, -120, -60, 0, 60, 120, 180],
                labels=['Far West', 'West', 'West Central', 
                       'East Central', 'East', 'Far East']
            )
            
            # 地理区域热度（基于餐厅密度）
            if 'city_restaurant_density' in df.columns:
                density_quantiles = df['city_restaurant_density'].quantile([0.25, 0.5, 0.75])
                
                def density_level(density):
                    if density <= density_quantiles[0.25]:
                        return 'Low Density'
                    elif density <= density_quantiles[0.5]:
                        return 'Medium Density'
                    elif density <= density_quantiles[0.75]:
                        return 'High Density'
                    else:
                        return 'Very High Density'
                
                df['density_level'] = df['city_restaurant_density'].apply(density_level)
            
            self.log_feature_operation("Create geographic features", {
                'new_features': ['latitude_band', 'longitude_band', 'density_level'],
                'latitude_distribution': df['latitude_band'].value_counts().to_dict(),
                'longitude_distribution': df['longitude_band'].value_counts().to_dict()
            })
        
        return df
    
    def create_temporal_features(self, df: pd.DataFrame) -> pd.DataFrame:
        """创建时间相关特征"""
        logger.info("创建时间相关特征...")
        
        if 'year' in df.columns:
            current_year = datetime.now().year
            
            # 年代分组
            df['era'] = pd.cut(
                df['year'],
                bins=[1900, 2010, 2015, 2020, current_year + 1],
                labels=['Historic', 'Early Modern', 'Recent', 'Current'],
                right=False
            )
            
            # 新鲜度评分（基于年份）
            df['freshness_score'] = np.exp(-(current_year - df['year']) / 5)  # 5年衰减
            
            # 时代趋势
            if 'stars' in df.columns:
                # 计算各年份的平均星级
                yearly_avg_stars = df.groupby('year')['stars'].mean()
                df['year_avg_stars'] = df['year'].map(yearly_avg_stars)
                df['above_year_avg'] = df['stars'] > df['year_avg_stars']
            
            self.log_feature_operation("Create temporal features", {
                'new_features': ['era', 'freshness_score', 'year_avg_stars', 'above_year_avg'],
                'era_distribution': df['era'].value_counts().to_dict(),
                'year_range': f"{df['year'].min()}-{df['year'].max()}"
            })
        
        return df
    
    def create_cuisine_features(self, df: pd.DataFrame) -> pd.DataFrame:
        """创建菜系相关特征"""
        logger.info("创建菜系相关特征...")
        
        if 'cuisine' in df.columns:
            # 菜系流行度
            cuisine_counts = df['cuisine'].value_counts()
            df['cuisine_popularity'] = df['cuisine'].map(cuisine_counts)
            
            # 菜系分类
            asian_cuisines = ['Japanese', 'Chinese', 'Thai', 'Korean', 'Asian', 'Cantonese', 
                            'Sushi', 'Teppanyaki', 'Shanghainese', 'Sichuan']
            european_cuisines = ['French', 'Italian', 'Spanish', 'British', 'European']
            modern_cuisines = ['Modern', 'Contemporary', 'Creative', 'Innovative', 'Fusion']
            
            def classify_cuisine_type(cuisine):
                if cuisine in asian_cuisines:
                    return 'Asian'
                elif cuisine in european_cuisines:
                    return 'European'
                elif cuisine in modern_cuisines:
                    return 'Modern'
                else:
                    return 'Other'
            
            df['cuisine_type'] = df['cuisine'].apply(classify_cuisine_type)
            
            # 菜系-星级关系
            if 'stars' in df.columns:
                cuisine_star_avg = df.groupby('cuisine')['stars'].mean()
                df['cuisine_avg_stars'] = df['cuisine'].map(cuisine_star_avg)
                df['above_cuisine_avg'] = df['stars'] > df['cuisine_avg_stars']
            
            # 稀有菜系标记
            df['rare_cuisine'] = df['cuisine_popularity'] <= 3
            
            self.log_feature_operation("Create cuisine features", {
                'new_features': ['cuisine_popularity', 'cuisine_type', 'cuisine_avg_stars', 
                               'above_cuisine_avg', 'rare_cuisine'],
                'cuisine_type_distribution': df['cuisine_type'].value_counts().to_dict(),
                'popular_cuisines': cuisine_counts.head(10).to_dict()
            })
        
        return df
    
    def create_text_features(self, df: pd.DataFrame) -> pd.DataFrame:
        """创建文本相关特征"""
        logger.info("创建文本相关特征...")
        
        # 餐厅名特征
        if 'name' in df.columns:
            # 名称复杂度
            df['name_complexity'] = df['name'].astype(str).apply(
                lambda x: len(re.findall(r'[A-Z]', x)) + len(re.findall(r'[0-9]', x))
            )
            
            # 是否包含特殊词汇
            special_keywords = ['royal', 'grand', 'palace', 'house', 'manor', 'castle']
            df['has_special_keyword'] = df['name'].str.lower().str.contains(
                '|'.join(special_keywords), na=False
            )
            
            # 名称语言特征（简单检测）
            def detect_name_style(name):
                name = str(name).lower()
                if re.search(r'[àáâãäåæçèéêëìíîïñòóôõöøùúûüý]', name):
                    return 'European'
                elif re.search(r'[亜-熹一-龯]', name):
                    return 'Asian'
                elif re.search(r'[а-я]', name):
                    return 'Cyrillic'
                else:
                    return 'English'
            
            df['name_style'] = df['name'].apply(detect_name_style)
        
        # 城市名特征
        if 'city' in df.columns:
            # 城市名长度
            df['city_name_length'] = df['city'].astype(str).str.len()
            
            # 是否为知名美食城市
            famous_food_cities = ['paris', 'tokyo', 'new york', 'london', 'hong kong', 
                                'singapore', 'barcelona', 'copenhagen', 'bangkok']
            df['famous_food_city'] = df['city'].str.lower().isin(famous_food_cities)
        
        self.log_feature_operation("Create text features", {
            'new_features': ['name_complexity', 'has_special_keyword', 'name_style', 
                           'city_name_length', 'famous_food_city'],
            'name_style_distribution': df['name_style'].value_counts().to_dict(),
            'famous_city_count': df['famous_food_city'].sum()
        })
        
        return df
    
    def create_interaction_features(self, df: pd.DataFrame) -> pd.DataFrame:
        """创建交互特征"""
        logger.info("创建交互特征...")
        
        # 星级-菜系交互
        if 'stars' in df.columns and 'cuisine_type' in df.columns:
            df['stars_cuisine_interaction'] = df['stars'].astype(str) + '_' + df['cuisine_type']
        
        # 价格-地理交互
        if 'price_category' in df.columns and 'continent' in df.columns:
            df['price_continent_interaction'] = df['price_category'] + '_' + df['continent']
        
        # 年代-星级交互
        if 'era' in df.columns and 'stars' in df.columns:
            df['era_stars_interaction'] = df['era'].astype(str) + '_' + df['stars'].astype(str) + 'star'
        
        self.log_feature_operation("Create interaction features", {
            'new_features': ['stars_cuisine_interaction', 'price_continent_interaction', 
                           'era_stars_interaction'],
            'interaction_counts': {
                'stars_cuisine': df['stars_cuisine_interaction'].nunique() if 'stars_cuisine_interaction' in df.columns else 0,
                'price_continent': df['price_continent_interaction'].nunique() if 'price_continent_interaction' in df.columns else 0,
                'era_stars': df['era_stars_interaction'].nunique() if 'era_stars_interaction' in df.columns else 0
            }
        })
        
        return df
    
    def create_aggregation_features(self, df: pd.DataFrame) -> pd.DataFrame:
        """创建聚合特征"""
        logger.info("创建聚合特征...")
        
        # 城市层面聚合
        if 'city' in df.columns:
            city_stats = df.groupby('city').agg({
                'stars': ['mean', 'std', 'count'],
                'price_numeric': ['mean', 'std'] if 'price_numeric' in df.columns else 'count',
                'years_since_award': ['mean', 'min', 'max'] if 'years_since_award' in df.columns else 'count'
            }).round(2)
            
            # 展平列名
            city_stats.columns = ['_'.join(col).strip() for col in city_stats.columns.values]
            city_stats = city_stats.add_prefix('city_')
            
            # 合并回原数据
            df = df.merge(city_stats, left_on='city', right_index=True, how='left')
        
        # 菜系层面聚合
        if 'cuisine' in df.columns:
            cuisine_stats = df.groupby('cuisine').agg({
                'stars': ['mean', 'count'],
                'price_numeric': 'mean' if 'price_numeric' in df.columns else 'count'
            }).round(2)
            
            cuisine_stats.columns = ['_'.join(col).strip() for col in cuisine_stats.columns.values]
            cuisine_stats = cuisine_stats.add_prefix('cuisine_')
            
            df = df.merge(cuisine_stats, left_on='cuisine', right_index=True, how='left')
        
        # 年份层面聚合
        if 'year' in df.columns:
            year_stats = df.groupby('year').agg({
                'stars': 'count'
            })
            year_stats.columns = ['year_total_awards']
            
            df = df.merge(year_stats, left_on='year', right_index=True, how='left')
        
        self.log_feature_operation("Create aggregation features", {
            'city_features_added': len([col for col in df.columns if col.startswith('city_')]),
            'cuisine_features_added': len([col for col in df.columns if col.startswith('cuisine_')]),
            'year_features_added': len([col for col in df.columns if col.startswith('year_')])
        })
        
        return df
    
    def encode_categorical_features(self, df: pd.DataFrame) -> pd.DataFrame:
        """编码分类特征"""
        logger.info("编码分类特征...")
        
        categorical_columns = [
            'cuisine', 'city', 'region', 'price_category', 'cuisine_type',
            'era', 'latitude_band', 'longitude_band', 'density_level',
            'name_style', 'hemisphere', 'continent', 'climate_zone'
        ]
        
        # 标签编码
        for col in categorical_columns:
            if col in df.columns:
                le = LabelEncoder()
                df[f'{col}_encoded'] = le.fit_transform(df[col].astype(str))
                self.feature_transformers[f'{col}_label_encoder'] = le
        
        # 独热编码（只对低基数分类变量）
        low_cardinality_cols = []
        for col in categorical_columns:
            if col in df.columns and df[col].nunique() <= 10:
                low_cardinality_cols.append(col)
        
        if low_cardinality_cols:
            encoded_df = pd.get_dummies(df[low_cardinality_cols], prefix=low_cardinality_cols)
            df = pd.concat([df, encoded_df], axis=1)
        
        self.log_feature_operation("Encode categorical features", {
            'label_encoded_features': len([col for col in df.columns if col.endswith('_encoded')]),
            'one_hot_encoded_features': len([col for col in df.columns if any(col.startswith(prefix + '_') for prefix in low_cardinality_cols)]),
            'low_cardinality_columns': low_cardinality_cols
        })
        
        return df
    
    def scale_numerical_features(self, df: pd.DataFrame) -> pd.DataFrame:
        """标准化数值特征"""
        logger.info("标准化数值特征...")
        
        numerical_columns = [
            'latitude', 'longitude', 'year', 'stars', 'price_numeric',
            'years_since_award', 'name_length', 'name_word_count',
            'distance_to_ny', 'city_restaurant_density', 'price_star_ratio',
            'value_score', 'price_percentile', 'freshness_score',
            'cuisine_popularity', 'name_complexity', 'city_name_length'
        ]
        
        # 标准化
        scaler = StandardScaler()
        numerical_features = [col for col in numerical_columns if col in df.columns]
        
        if numerical_features:
            scaled_features = scaler.fit_transform(df[numerical_features])
            scaled_df = pd.DataFrame(
                scaled_features, 
                columns=[f'{col}_scaled' for col in numerical_features],
                index=df.index
            )
            df = pd.concat([df, scaled_df], axis=1)
            self.feature_transformers['standard_scaler'] = scaler
        
        # 最小-最大标准化
        minmax_scaler = MinMaxScaler()
        if numerical_features:
            normalized_features = minmax_scaler.fit_transform(df[numerical_features])
            normalized_df = pd.DataFrame(
                normalized_features,
                columns=[f'{col}_normalized' for col in numerical_features],
                index=df.index
            )
            df = pd.concat([df, normalized_df], axis=1)
            self.feature_transformers['minmax_scaler'] = minmax_scaler
        
        self.log_feature_operation("Scale numerical features", {
            'standardized_features': len([col for col in df.columns if col.endswith('_scaled')]),
            'normalized_features': len([col for col in df.columns if col.endswith('_normalized')]),
            'numerical_columns_processed': len(numerical_features)
        })
        
        return df
    
    def create_target_encoding(self, df: pd.DataFrame, target_col: str = 'stars') -> pd.DataFrame:
        """创建目标编码特征"""
        logger.info(f"创建基于 {target_col} 的目标编码特征...")
        
        if target_col not in df.columns:
            logger.warning(f"目标列 {target_col} 不存在，跳过目标编码")
            return df
        
        categorical_columns = ['cuisine', 'city', 'region', 'cuisine_type', 'era']
        
        for col in categorical_columns:
            if col in df.columns:
                # 计算每个类别的目标均值
                target_mean = df.groupby(col)[target_col].mean()
                df[f'{col}_target_encoded'] = df[col].map(target_mean)
                
                # 计算每个类别的目标标准差
                target_std = df.groupby(col)[target_col].std().fillna(0)
                df[f'{col}_target_std'] = df[col].map(target_std)
        
        self.log_feature_operation("Create target encoding", {
            'target_encoded_features': len([col for col in df.columns if col.endswith('_target_encoded')]),
            'target_column': target_col,
            'processed_columns': [col for col in categorical_columns if col in df.columns]
        })
        
        return df
    
    def process_features(self, df: pd.DataFrame) -> pd.DataFrame:
        """执行完整的特征工程流程"""
        logger.info("开始完整特征工程流程...")
        
        original_shape = df.shape
        
        # 1. 创建价格特征
        df = self.create_price_features(df)
        
        # 2. 创建地理特征
        df = self.create_geographic_features(df)
        
        # 3. 创建时间特征
        df = self.create_temporal_features(df)
        
        # 4. 创建菜系特征
        df = self.create_cuisine_features(df)
        
        # 5. 创建文本特征
        df = self.create_text_features(df)
        
        # 6. 创建交互特征
        df = self.create_interaction_features(df)
        
        # 7. 创建聚合特征
        df = self.create_aggregation_features(df)
        
        # 8. 编码分类特征
        df = self.encode_categorical_features(df)
        
        # 9. 标准化数值特征
        df = self.scale_numerical_features(df)
        
        # 10. 创建目标编码
        df = self.create_target_encoding(df)
        
        final_shape = df.shape
        
        self.log_feature_operation("Feature engineering completed", {
            'original_shape': original_shape,
            'final_shape': final_shape,
            'features_added': final_shape[1] - original_shape[1],
            'total_operations': len(self.processing_log)
        })
        
        return df
    
    def get_feature_importance_analysis(self, df: pd.DataFrame) -> Dict:
        """获取特征重要性分析"""
        logger.info("分析特征重要性...")
        
        analysis = {
            'feature_counts': {
                'original_features': len([col for col in df.columns if not any(
                    suffix in col for suffix in ['_scaled', '_normalized', '_encoded', '_target_encoded']
                )]),
                'encoded_features': len([col for col in df.columns if '_encoded' in col]),
                'scaled_features': len([col for col in df.columns if '_scaled' in col]),
                'normalized_features': len([col for col in df.columns if '_normalized' in col]),
                'target_encoded_features': len([col for col in df.columns if '_target_encoded' in col])
            },
            'feature_types': {
                'numerical': len(df.select_dtypes(include=[np.number]).columns),
                'categorical': len(df.select_dtypes(include=['object']).columns),
                'boolean': len(df.select_dtypes(include=['bool']).columns)
            },
            'missing_values': df.isnull().sum().to_dict(),
            'feature_statistics': {}
        }
        
        # 数值特征统计
        numerical_cols = df.select_dtypes(include=[np.number]).columns
        for col in numerical_cols:
            analysis['feature_statistics'][col] = {
                'mean': float(df[col].mean()),
                'std': float(df[col].std()),
                'min': float(df[col].min()),
                'max': float(df[col].max()),
                'unique_count': int(df[col].nunique())
            }
        
        return analysis


def main():
    """主函数：执行特征工程流程"""
    logger.info("开始特征工程主流程...")
    
    try:
        # 加载地理编码后的数据
        geocoded_data_path = path_manager.get_cleaned_data_path("restaurants_geocoded.csv")
        
        if not geocoded_data_path.exists():
            logger.error("地理编码数据文件不存在，请先运行地理编码")
            return
        
        df = pd.read_csv(geocoded_data_path)
        logger.info(f"加载地理编码数据: {df.shape[0]} 条记录, {df.shape[1]} 个特征")
        
        # 执行特征工程
        engineer = FeatureEngineer()
        enhanced_df = engineer.process_features(df)
        
        # 分析特征重要性
        feature_analysis = engineer.get_feature_importance_analysis(enhanced_df)
        
        # 保存增强后的数据
        features_path = path_manager.get_processed_data_path("features.joblib")
        joblib.dump(enhanced_df, features_path)
        logger.info(f"特征数据已保存: {features_path}")
        
        # 保存特征转换器
        transformers_path = path_manager.get_processed_data_path("transformers.joblib")
        joblib.dump(engineer.feature_transformers, transformers_path)
        logger.info(f"特征转换器已保存: {transformers_path}")
        
        # 保存特征工程报告
        report = {
            'processing_log': engineer.processing_log,
            'feature_analysis': feature_analysis,
            'transformers_info': {name: str(type(transformer)) for name, transformer in engineer.feature_transformers.items()}
        }
        
        import json
        report_path = path_manager.get_processed_data_path("feature_engineering_report.json")
        with open(report_path, 'w', encoding='utf-8') as f:
            json.dump(report, f, indent=2, ensure_ascii=False, default=str)
        
        logger.info(f"特征工程报告已保存: {report_path}")
        
        # 缓存数据
        cache_manager.set_cache("enhanced_features", enhanced_df)
        cache_manager.set_cache("feature_transformers", engineer.feature_transformers)
        cache_manager.set_cache("feature_analysis", feature_analysis)
        
        logger.info("特征工程流程完成!")
        logger.info(f"原始特征数: {df.shape[1]}")
        logger.info(f"增强后特征数: {enhanced_df.shape[1]}")
        logger.info(f"新增特征数: {enhanced_df.shape[1] - df.shape[1]}")
        
        return enhanced_df, engineer.feature_transformers, feature_analysis
        
    except Exception as e:
        logger.error(f"特征工程过程中发生错误: {e}")
        raise


if __name__ == "__main__":
    main() 