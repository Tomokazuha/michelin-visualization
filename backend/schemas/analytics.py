"""
数据分析相关校验Schema
"""

from marshmallow import Schema, fields, validate


class AnalyticsQuerySchema(Schema):
    """分析查询参数Schema"""
    
    type = fields.String(
        missing='stars',
        validate=validate.OneOf(['stars', 'price', 'region', 'cuisine', 'year']),
        error_messages={'invalid': '分析类型必须是stars、price、region、cuisine或year之一'}
    )
    format = fields.String(
        missing='json',
        validate=validate.OneOf(['json', 'chart']),
        error_messages={'invalid': '返回格式必须是json或chart'}
    )


class ClusteringParamsSchema(Schema):
    """聚类分析参数Schema"""
    
    cluster_id = fields.Integer(
        missing=None,
        allow_none=True,
        validate=validate.Range(min=0),
        error_messages={'invalid': '聚类ID必须是非负整数'}
    )
    include_details = fields.Boolean(
        missing=False,
        error_messages={'invalid': 'include_details必须是布尔值'}
    )


class TrendsQuerySchema(Schema):
    """趋势分析查询Schema"""
    
    metric = fields.String(
        missing='count',
        validate=validate.OneOf(['count', 'stars_avg', 'new_entries']),
        error_messages={'invalid': '指标必须是count、stars_avg或new_entries之一'}
    )
    group_by = fields.String(
        missing='year',
        validate=validate.OneOf(['year', 'region', 'cuisine']),
        error_messages={'invalid': '分组方式必须是year、region或cuisine之一'}
    )


class ForecastQuerySchema(Schema):
    """预测查询参数Schema"""
    
    region = fields.String(
        missing=None,
        allow_none=True,
        validate=validate.Length(min=1, max=100),
        error_messages={'invalid': '地区名称长度必须在1-100字符之间'}
    )
    metric = fields.String(
        missing='count',
        validate=validate.OneOf(['count', 'stars_avg']),
        error_messages={'invalid': '预测指标必须是count或stars_avg'}
    ) 