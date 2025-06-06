"""
数据分析相关路由模块
提供聚类分析、趋势分析、特征重要性分析等API接口
"""

from flask import Blueprint, request, jsonify
import pandas as pd
import numpy as np
import logging
from typing import Dict, List, Any, Optional
import json
import base64
import io
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
import seaborn as sns
from ..schemas.analytics import AnalyticsQuerySchema, ClusteringParamsSchema
from marshmallow import ValidationError

logger = logging.getLogger(__name__)

# 创建蓝图
analytics_bp = Blueprint('analytics', __name__, url_prefix='/api/analytics')

def get_data_service():
    """获取数据服务实例"""
    from ..app import data_service
    return data_service


@analytics_bp.route('/summary', methods=['GET'])
def get_summary():
    """
    获取数据摘要统计
    
    Returns:
        JSON: 包含总体统计信息的响应
    """
    try:
        data_service = get_data_service()
        stats = data_service.get_summary_stats()
        
        if not stats:
            logger.warning("无法获取摘要统计 - 数据未加载")
            return jsonify({
                'success': False,
                'error': '数据未加载'
            }), 404
        
        logger.info("返回数据摘要统计")
        return jsonify({
            'success': True,
            'data': stats
        })
        
    except Exception as e:
        logger.error(f"获取摘要统计时出错: {e}", exc_info=True)
        return jsonify({
            'success': False,
            'error': '服务器内部错误'
        }), 500 