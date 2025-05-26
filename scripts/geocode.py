"""
地理编码模块
使用GeoPy进行批量地理编码，处理地址信息并生成GeoJSON格式数据
"""

import pandas as pd
import geopandas as gpd
from geopy.geocoders import Nominatim
from geopy.extra.rate_limiter import RateLimiter
import time
import json
from typing import Dict, List, Tuple, Optional
from shapely.geometry import Point
import numpy as np

from utils import logger, path_manager, cache_manager, export_to_format


class GeoCoder:
    """地理编码器"""
    
    def __init__(self, user_agent: str = "michelin_project", requests_per_second: int = 1):
        self.geolocator = Nominatim(user_agent=user_agent)
        self.geocode = RateLimiter(self.geolocator.geocode, min_delay_seconds=1/requests_per_second)
        self.geocoding_cache = {}
        self.failed_geocodes = []
        
    def load_cache(self):
        """加载地理编码缓存"""
        cached_data = cache_manager.get_cache("geocoding_cache")
        if cached_data:
            self.geocoding_cache = cached_data
            logger.info(f"已加载地理编码缓存: {len(self.geocoding_cache)} 条记录")
    
    def save_cache(self):
        """保存地理编码缓存"""
        cache_manager.set_cache("geocoding_cache", self.geocoding_cache)
        logger.info(f"已保存地理编码缓存: {len(self.geocoding_cache)} 条记录")
    
    def create_address_string(self, row: pd.Series) -> str:
        """创建完整地址字符串"""
        address_parts = []
        
        # 添加餐厅名（可选）
        if pd.notna(row.get('name')) and row.get('name') != 'Unknown':
            address_parts.append(str(row['name']))
        
        # 添加城市
        if pd.notna(row.get('city')) and row.get('city') != 'Unknown':
            address_parts.append(str(row['city']))
        
        # 添加区域/州/省
        if pd.notna(row.get('region')) and row.get('region') != 'Unknown':
            address_parts.append(str(row['region']))
        
        # 添加邮编
        if pd.notna(row.get('zipCode')) and row.get('zipCode') != 'Unknown':
            address_parts.append(str(row['zipCode']))
        
        return ', '.join(address_parts) if address_parts else None
    
    def geocode_address(self, address: str, retry_count: int = 3) -> Optional[Tuple[float, float]]:
        """对单个地址进行地理编码"""
        if not address or address.strip() == '':
            return None
        
        # 检查缓存
        if address in self.geocoding_cache:
            return self.geocoding_cache[address]
        
        # 尝试地理编码
        for attempt in range(retry_count):
            try:
                location = self.geocode(address)
                if location:
                    coords = (location.latitude, location.longitude)
                    self.geocoding_cache[address] = coords
                    logger.debug(f"成功编码地址: {address} -> {coords}")
                    return coords
                else:
                    logger.warning(f"未找到地址: {address}")
                    break
                    
            except Exception as e:
                logger.error(f"地理编码错误 (尝试 {attempt + 1}/{retry_count}): {e}")
                if attempt < retry_count - 1:
                    time.sleep(2)  # 等待后重试
        
        # 地理编码失败
        self.geocoding_cache[address] = None
        self.failed_geocodes.append(address)
        return None
    
    def validate_coordinates(self, lat: float, lon: float) -> bool:
        """验证坐标有效性"""
        return (
            isinstance(lat, (int, float)) and isinstance(lon, (int, float)) and
            -90 <= lat <= 90 and -180 <= lon <= 180 and
            not (np.isnan(lat) or np.isnan(lon))
        )
    
    def process_dataframe(self, df: pd.DataFrame) -> pd.DataFrame:
        """处理整个DataFrame"""
        logger.info("开始批量地理编码...")
        
        # 加载缓存
        self.load_cache()
        
        total_records = len(df)
        geocoded_count = 0
        validation_failed = 0
        
        # 检查现有坐标的有效性
        for idx, row in df.iterrows():
            current_lat = row.get('latitude')
            current_lon = row.get('longitude')
            
            # 如果已有有效坐标，跳过
            if (pd.notna(current_lat) and pd.notna(current_lon) and 
                self.validate_coordinates(current_lat, current_lon)):
                continue
            
            # 创建地址字符串
            address = self.create_address_string(row)
            if not address:
                logger.warning(f"无法为记录 {idx} 创建地址字符串")
                continue
            
            # 执行地理编码
            coords = self.geocode_address(address)
            if coords:
                df.at[idx, 'latitude'] = coords[0]
                df.at[idx, 'longitude'] = coords[1]
                df.at[idx, 'geocoded'] = True
                geocoded_count += 1
                
                # 每处理10个地址保存一次缓存
                if geocoded_count % 10 == 0:
                    self.save_cache()
                    logger.info(f"已处理 {geocoded_count}/{total_records} 条记录")
            else:
                df.at[idx, 'geocoded'] = False
                validation_failed += 1
        
        # 最终保存缓存
        self.save_cache()
        
        logger.info(f"地理编码完成:")
        logger.info(f"  - 总记录数: {total_records}")
        logger.info(f"  - 成功编码: {geocoded_count}")
        logger.info(f"  - 编码失败: {validation_failed}")
        logger.info(f"  - 失败率: {validation_failed/total_records*100:.2f}%")
        
        return df
    
    def create_enhanced_features(self, df: pd.DataFrame) -> pd.DataFrame:
        """创建增强的地理特征"""
        logger.info("开始创建增强地理特征...")
        
        # 计算距离特征（以纽约为基准点）
        ny_lat, ny_lon = 40.7128, -74.0060
        
        def haversine_distance(lat1, lon1, lat2, lon2):
            """计算两点间的大圆距离（公里）"""
            from math import radians, cos, sin, asin, sqrt
            
            # 转换为弧度
            lat1, lon1, lat2, lon2 = map(radians, [lat1, lon1, lat2, lon2])
            
            # Haversine公式
            dlat = lat2 - lat1
            dlon = lon2 - lon1
            a = sin(dlat/2)**2 + cos(lat1) * cos(lat2) * sin(dlon/2)**2
            c = 2 * asin(sqrt(a))
            r = 6371  # 地球半径（公里）
            
            return c * r
        
        # 计算到纽约的距离
        df['distance_to_ny'] = df.apply(
            lambda row: haversine_distance(
                row['latitude'], row['longitude'], ny_lat, ny_lon
            ) if pd.notna(row['latitude']) else np.nan,
            axis=1
        )
        
        # 计算密度特征（基于城市的餐厅密度）
        city_counts = df.groupby('city').size()
        df['city_restaurant_density'] = df['city'].map(city_counts)
        
        # 计算地理区域特征
        def get_climate_zone(lat):
            """根据纬度获取气候带"""
            if pd.isna(lat):
                return 'Unknown'
            elif abs(lat) <= 23.5:
                return 'Tropical'
            elif abs(lat) <= 35:
                return 'Subtropical'
            elif abs(lat) <= 50:
                return 'Temperate'
            elif abs(lat) <= 66.5:
                return 'Subarctic'
            else:
                return 'Arctic'
        
        df['climate_zone'] = df['latitude'].apply(get_climate_zone)
        
        # 海岸线接近程度（简化版）
        def estimate_coastal_proximity(lat, lon):
            """估算沿海接近程度（简化版）"""
            if pd.isna(lat) or pd.isna(lon):
                return 'Unknown'
            
            # 这里是简化的逻辑，实际应该使用海岸线数据
            # 基于一些已知的沿海城市进行判断
            coastal_cities = {
                'Hong Kong': (22.3193, 114.1694),
                'New York': (40.7128, -74.0060),
                'San Francisco': (37.7749, -122.4194),
                'Copenhagen': (55.6761, 12.5683),
                'Singapore': (1.3521, 103.8198)
            }
            
            min_distance = float('inf')
            for city, (clat, clon) in coastal_cities.items():
                distance = haversine_distance(lat, lon, clat, clon)
                min_distance = min(min_distance, distance)
            
            if min_distance < 50:
                return 'Coastal'
            elif min_distance < 200:
                return 'Near Coastal'
            else:
                return 'Inland'
        
        df['coastal_proximity'] = df.apply(
            lambda row: estimate_coastal_proximity(row['latitude'], row['longitude']),
            axis=1
        )
        
        logger.info("增强地理特征创建完成")
        
        return df


def create_geojson(df: pd.DataFrame) -> Dict:
    """将DataFrame转换为GeoJSON格式"""
    logger.info("开始创建GeoJSON...")
    
    features = []
    
    for idx, row in df.iterrows():
        # 检查坐标有效性
        if pd.isna(row['latitude']) or pd.isna(row['longitude']):
            continue
        
        # 创建GeoJSON特征
        feature = {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [float(row['longitude']), float(row['latitude'])]
            },
            "properties": {}
        }
        
        # 添加属性
        for col in df.columns:
            if col not in ['latitude', 'longitude']:
                value = row[col]
                if pd.isna(value):
                    feature["properties"][col] = None
                elif isinstance(value, (np.integer, np.floating)):
                    feature["properties"][col] = float(value)
                else:
                    feature["properties"][col] = str(value)
        
        features.append(feature)
    
    geojson = {
        "type": "FeatureCollection",
        "features": features,
        "metadata": {
            "total_features": len(features),
            "created_at": pd.Timestamp.now().isoformat(),
            "source": "Michelin Restaurants Dataset"
        }
    }
    
    logger.info(f"GeoJSON创建完成: {len(features)} 个特征")
    
    return geojson


def analyze_geographic_distribution(df: pd.DataFrame) -> Dict:
    """分析地理分布"""
    logger.info("开始地理分布分析...")
    
    analysis = {}
    
    # 基本统计
    valid_coords = df.dropna(subset=['latitude', 'longitude'])
    analysis['basic_stats'] = {
        'total_records': len(df),
        'valid_coordinates': len(valid_coords),
        'geocoding_success_rate': len(valid_coords) / len(df) * 100,
        'latitude_range': {
            'min': float(valid_coords['latitude'].min()),
            'max': float(valid_coords['latitude'].max()),
            'mean': float(valid_coords['latitude'].mean())
        },
        'longitude_range': {
            'min': float(valid_coords['longitude'].min()),
            'max': float(valid_coords['longitude'].max()),
            'mean': float(valid_coords['longitude'].mean())
        }
    }
    
    # 按大洲分布
    if 'continent' in df.columns:
        continent_dist = df['continent'].value_counts().to_dict()
        analysis['continent_distribution'] = continent_dist
    
    # 按国家/地区分布
    if 'region' in df.columns:
        region_dist = df['region'].value_counts().head(10).to_dict()
        analysis['top_regions'] = region_dist
    
    # 按城市分布
    if 'city' in df.columns:
        city_dist = df['city'].value_counts().head(10).to_dict()
        analysis['top_cities'] = city_dist
    
    # 按星级的地理分布
    if 'stars' in df.columns:
        star_geo_dist = {}
        for star in df['stars'].unique():
            star_data = df[df['stars'] == star]
            if 'continent' in df.columns:
                star_geo_dist[f"{star}_star"] = star_data['continent'].value_counts().to_dict()
        analysis['star_geographic_distribution'] = star_geo_dist
    
    # 密度分析
    if 'city_restaurant_density' in df.columns:
        analysis['density_stats'] = {
            'high_density_cities': df[df['city_restaurant_density'] >= 5]['city'].unique().tolist(),
            'medium_density_cities': df[(df['city_restaurant_density'] >= 2) & 
                                      (df['city_restaurant_density'] < 5)]['city'].unique().tolist(),
            'low_density_cities': df[df['city_restaurant_density'] == 1]['city'].unique().tolist()
        }
    
    logger.info("地理分布分析完成")
    
    return analysis


def main():
    """主函数：执行地理编码流程"""
    logger.info("开始地理编码主流程...")
    
    try:
        # 加载清洗后的数据
        cleaned_data_path = path_manager.get_cleaned_data_path("restaurants_cleaned.csv")
        
        if not cleaned_data_path.exists():
            logger.error("清洗后的数据文件不存在，请先运行数据清洗")
            return
        
        df = pd.read_csv(cleaned_data_path)
        logger.info(f"加载清洗后数据: {df.shape[0]} 条记录")
        
        # 执行地理编码
        geocoder = GeoCoder()
        df = geocoder.process_dataframe(df)
        
        # 创建增强地理特征
        df = geocoder.create_enhanced_features(df)
        
        # 分析地理分布
        geo_analysis = analyze_geographic_distribution(df)
        
        # 创建GeoJSON
        geojson_data = create_geojson(df)
        
        # 保存结果
        # 保存增强后的CSV
        enhanced_csv_path = path_manager.get_cleaned_data_path("restaurants_geocoded.csv")
        export_to_format(df, enhanced_csv_path, "csv")
        
        # 保存GeoJSON
        geojson_path = path_manager.get_cleaned_data_path("restaurants_geo.json")
        with open(geojson_path, 'w', encoding='utf-8') as f:
            json.dump(geojson_data, f, indent=2, ensure_ascii=False)
        
        logger.info(f"GeoJSON已保存: {geojson_path}")
        
        # 保存地理分析报告
        analysis_path = path_manager.get_cleaned_data_path("geographic_analysis.json")
        with open(analysis_path, 'w', encoding='utf-8') as f:
            json.dump(geo_analysis, f, indent=2, ensure_ascii=False)
        
        logger.info(f"地理分析报告已保存: {analysis_path}")
        
        # 缓存数据
        cache_manager.set_cache("geocoded_data", df)
        cache_manager.set_cache("geojson_data", geojson_data)
        cache_manager.set_cache("geographic_analysis", geo_analysis)
        
        logger.info("地理编码流程完成!")
        logger.info(f"成功处理 {len(df)} 条记录")
        
        # 打印失败的地址
        if geocoder.failed_geocodes:
            logger.warning(f"以下 {len(geocoder.failed_geocodes)} 个地址编码失败:")
            for addr in geocoder.failed_geocodes[:10]:  # 只显示前10个
                logger.warning(f"  - {addr}")
        
        return df, geojson_data, geo_analysis
        
    except Exception as e:
        logger.error(f"地理编码过程中发生错误: {e}")
        raise


if __name__ == "__main__":
    main() 