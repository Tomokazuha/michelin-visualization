"""
餐厅数据相关路由模块
提供餐厅数据查询、搜索、过滤等API接口
"""

from flask import Blueprint, request, jsonify
import pandas as pd
import logging
from typing import Dict, List, Any, Optional
from ..schemas.restaurant import RestaurantQuerySchema, RestaurantFilterSchema
from marshmallow import ValidationError

logger = logging.getLogger(__name__)

# 创建蓝图
restaurant_bp = Blueprint('restaurant', __name__, url_prefix='/api/restaurants')

def get_data_service():
    """获取数据服务实例"""
    from ..app import data_service
    return data_service


@restaurant_bp.route('', methods=['GET'])
def get_restaurants():
    """
    获取餐厅数据列表
    支持分页、过滤和排序
    
    Query Parameters:
        page (int): 页码，默认1
        per_page (int): 每页数量，默认50，最大100
        stars (int): 星级过滤 (1-3)
        region (str): 地区过滤
        city (str): 城市过滤
        cuisine (str): 菜系过滤
        sort_by (str): 排序字段 (name|stars|year)
        sort_order (str): 排序方向 (asc|desc)
    
    Returns:
        JSON: 餐厅数据列表和分页信息
    """
    try:
        # 参数校验
        schema = RestaurantQuerySchema()
        try:
            args = schema.load(request.args)
        except ValidationError as e:
            logger.warning(f"参数校验失败: {e.messages}")
            return jsonify({
                'success': False, 
                'error': '参数格式错误',
                'details': e.messages
            }), 400
        
        data_service = get_data_service()
        df = data_service.get_data('cleaned')
        
        if df is None or df.empty:
            logger.warning("餐厅数据未加载或为空")
            return jsonify({
                'success': False, 
                'error': '数据未加载'
            }), 404
        
        # 应用过滤器
        filtered_df = _apply_filters(df, args)
        
        # 应用排序
        filtered_df = _apply_sorting(filtered_df, args)
        
        # 分页处理
        total = len(filtered_df)
        page = args['page']
        per_page = args['per_page']
        start_idx = (page - 1) * per_page
        end_idx = start_idx + per_page
        page_data = filtered_df.iloc[start_idx:end_idx]
        
        # 转换为JSON格式
        restaurants = _convert_to_json(page_data)
        
        # 构建响应
        response_data = {
            'success': True,
            'data': {
                'restaurants': restaurants,
                'pagination': {
                    'total': total,
                    'page': page,
                    'per_page': per_page,
                    'total_pages': (total + per_page - 1) // per_page,
                    'has_next': end_idx < total,
                    'has_prev': page > 1
                },
                'filters_applied': {
                    'stars': args.get('stars'),
                    'region': args.get('region'),
                    'city': args.get('city'),
                    'cuisine': args.get('cuisine')
                }
            }
        }
        
        logger.info(f"返回餐厅数据: {len(restaurants)} 条 (总数: {total})")
        return jsonify(response_data)
        
    except Exception as e:
        logger.error(f"获取餐厅数据时出错: {e}", exc_info=True)
        return jsonify({
            'success': False,
            'error': '服务器内部错误'
        }), 500


@restaurant_bp.route('/search', methods=['GET'])
def search_restaurants():
    """
    搜索餐厅
    支持模糊搜索餐厅名称、城市、地区、菜系
    
    Query Parameters:
        q (str): 搜索关键词 (必填)
        limit (int): 结果数量限制，默认20，最大100
        stars (int): 星级过滤 (1-3)
    
    Returns:
        JSON: 搜索结果列表
    """
    try:
        # 获取搜索参数
        query = request.args.get('q', '').strip()
        limit = min(int(request.args.get('limit', 20)), 100)
        stars = request.args.get('stars')
        
        if not query:
            return jsonify({
                'success': False,
                'error': '搜索关键词不能为空'
            }), 400
            
        if len(query) < 2:
            return jsonify({
                'success': False,
                'error': '搜索关键词至少需要2个字符'
            }), 400
        
        data_service = get_data_service()
        df = data_service.get_data('cleaned')
        
        if df is None or df.empty:
            return jsonify({
                'success': False,
                'error': '数据未加载'
            }), 404
        
        # 执行搜索
        search_results = _perform_search(df, query, stars, limit)
        
        logger.info(f"搜索 '{query}' 返回 {len(search_results)} 条结果")
        return jsonify({
            'success': True,
            'data': {
                'restaurants': search_results,
                'total': len(search_results),
                'query': query
            }
        })
        
    except ValueError as e:
        logger.warning(f"搜索参数错误: {e}")
        return jsonify({
            'success': False,
            'error': '参数格式错误'
        }), 400
    except Exception as e:
        logger.error(f"搜索餐厅时出错: {e}", exc_info=True)
        return jsonify({
            'success': False,
            'error': '服务器内部错误'
        }), 500


@restaurant_bp.route('/filter-options', methods=['GET'])
def get_filter_options():
    """
    获取过滤选项
    返回所有可用的地区、城市、菜系等选项
    
    Returns:
        JSON: 过滤选项字典
    """
    try:
        data_service = get_data_service()
        df = data_service.get_data('cleaned')
        
        if df is None or df.empty:
            return jsonify({
                'success': False,
                'error': '数据未加载'
            }), 404
        
        # 生成过滤选项
        filter_options = {
            'regions': sorted(df['region'].dropna().unique().tolist()) if 'region' in df.columns else [],
            'cities': sorted(df['city'].dropna().unique().tolist()) if 'city' in df.columns else [],
            'cuisines': sorted(df['cuisine'].dropna().unique().tolist()) if 'cuisine' in df.columns else [],
            'countries': sorted(df['country'].dropna().unique().tolist()) if 'country' in df.columns else [],
            'stars': sorted(df['stars'].dropna().unique().tolist()) if 'stars' in df.columns else [],
            'price_levels': sorted(df['price_level'].dropna().unique().tolist()) if 'price_level' in df.columns else [],
            'years': {
                'min': int(df['year'].min()) if 'year' in df.columns and df['year'].notna().any() else None,
                'max': int(df['year'].max()) if 'year' in df.columns and df['year'].notna().any() else None
            }
        }
        
        logger.info("返回过滤选项")
        return jsonify({
            'success': True,
            'data': filter_options
        })
        
    except Exception as e:
        logger.error(f"获取过滤选项时出错: {e}", exc_info=True)
        return jsonify({
            'success': False,
            'error': '服务器内部错误'
        }), 500


def _apply_filters(df: pd.DataFrame, filters: Dict) -> pd.DataFrame:
    """
    应用过滤条件
    
    Args:
        df: 数据框
        filters: 过滤条件字典
    
    Returns:
        过滤后的数据框
    """
    filtered_df = df.copy()
    
    # 星级过滤
    if filters.get('stars'):
        filtered_df = filtered_df[filtered_df['stars'] == filters['stars']]
    
    # 地区过滤 (模糊匹配)
    if filters.get('region'):
        filtered_df = filtered_df[
            filtered_df['region'].str.contains(
                filters['region'], case=False, na=False, regex=False
            )
        ]
    
    # 城市过滤 (模糊匹配)  
    if filters.get('city'):
        filtered_df = filtered_df[
            filtered_df['city'].str.contains(
                filters['city'], case=False, na=False, regex=False
            )
        ]
    
    # 菜系过滤 (模糊匹配)
    if filters.get('cuisine'):
        filtered_df = filtered_df[
            filtered_df['cuisine'].str.contains(
                filters['cuisine'], case=False, na=False, regex=False
            )
        ]
    
    return filtered_df


def _apply_sorting(df: pd.DataFrame, params: Dict) -> pd.DataFrame:
    """
    应用排序
    
    Args:
        df: 数据框
        params: 参数字典
    
    Returns:
        排序后的数据框
    """
    sort_by = params.get('sort_by', 'name')
    sort_order = params.get('sort_order', 'asc')
    
    if sort_by in df.columns:
        ascending = (sort_order == 'asc')
        return df.sort_values(by=sort_by, ascending=ascending)
    
    return df


def _perform_search(df: pd.DataFrame, query: str, stars: Optional[str], limit: int) -> List[Dict]:
    """
    执行搜索
    
    Args:
        df: 数据框
        query: 搜索关键词
        stars: 星级过滤
        limit: 结果数量限制
    
    Returns:
        搜索结果列表
    """
    # 星级过滤
    if stars:
        df = df[df['stars'] == int(stars)]
    
    # 多字段模糊搜索
    search_columns = ['name', 'city', 'region', 'cuisine']
    search_mask = pd.Series([False] * len(df))
    
    for col in search_columns:
        if col in df.columns:
            search_mask |= df[col].str.contains(
                query, case=False, na=False, regex=False
            )
    
    # 应用搜索过滤
    search_results = df[search_mask].head(limit)
    
    # 转换为JSON格式
    return _convert_to_json(search_results)


def _convert_to_json(df: pd.DataFrame) -> List[Dict]:
    """
    将DataFrame转换为JSON格式
    
    Args:
        df: 数据框
    
    Returns:
        JSON格式的数据列表
    """
    restaurants = []
    
    for _, row in df.iterrows():
        restaurant = {
            'id': int(row.get('id', 0)) if pd.notna(row.get('id')) else None,
            'name': str(row.get('name', '')),
            'city': str(row.get('city', '')),
            'region': str(row.get('region', '')),
            'country': str(row.get('country', '')),
            'stars': int(row.get('stars', 0)) if pd.notna(row.get('stars')) else 0,
            'cuisine': str(row.get('cuisine', '')),
            'price': str(row.get('price', '')),
            'price_level': str(row.get('price_level', '')),
            'year': int(row.get('year', 0)) if pd.notna(row.get('year')) else None,
            'latitude': float(row.get('latitude', 0)) if pd.notna(row.get('latitude')) else None,
            'longitude': float(row.get('longitude', 0)) if pd.notna(row.get('longitude')) else None,
            'url': str(row.get('url', '')),
            'continent': str(row.get('continent', '')),
            'climate_zone': str(row.get('climate_zone', ''))
        }
        restaurants.append(restaurant)
    
    return restaurants 