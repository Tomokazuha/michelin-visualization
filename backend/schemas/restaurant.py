"""
餐厅数据校验Schema
使用marshmallow进行参数校验和数据序列化
"""

from marshmallow import Schema, fields, validate, post_load


class RestaurantQuerySchema(Schema):
    """餐厅查询参数校验Schema"""
    
    # 分页参数
    page = fields.Integer(
        missing=1, 
        validate=validate.Range(min=1),
        error_messages={'invalid': '页码必须是正整数'}
    )
    per_page = fields.Integer(
        missing=50, 
        validate=validate.Range(min=1, max=100),
        error_messages={'invalid': '每页数量必须在1-100之间'}
    )
    
    # 过滤参数
    stars = fields.Integer(
        missing=None,
        allow_none=True,
        validate=validate.OneOf([1, 2, 3]),
        error_messages={'invalid': '星级必须是1、2或3'}
    )
    region = fields.String(
        missing=None,
        allow_none=True,
        validate=validate.Length(min=1, max=100),
        error_messages={'invalid': '地区名称长度必须在1-100字符之间'}
    )
    city = fields.String(
        missing=None,
        allow_none=True,
        validate=validate.Length(min=1, max=100),
        error_messages={'invalid': '城市名称长度必须在1-100字符之间'}
    )
    cuisine = fields.String(
        missing=None,
        allow_none=True,
        validate=validate.Length(min=1, max=100),
        error_messages={'invalid': '菜系名称长度必须在1-100字符之间'}
    )
    
    # 排序参数
    sort_by = fields.String(
        missing='name',
        validate=validate.OneOf(['name', 'stars', 'year', 'city', 'cuisine']),
        error_messages={'invalid': '排序字段只能是name、stars、year、city或cuisine'}
    )
    sort_order = fields.String(
        missing='asc',
        validate=validate.OneOf(['asc', 'desc']),
        error_messages={'invalid': '排序方向只能是asc或desc'}
    )
    
    @post_load
    def clean_strings(self, data, **kwargs):
        """清理字符串参数"""
        string_fields = ['region', 'city', 'cuisine']
        for field in string_fields:
            if data.get(field):
                data[field] = data[field].strip()
                if not data[field]:  # 如果清理后为空字符串
                    data[field] = None
        return data


class RestaurantFilterSchema(Schema):
    """餐厅过滤参数校验Schema"""
    
    stars = fields.List(
        fields.Integer(validate=validate.OneOf([1, 2, 3])),
        missing=[],
        error_messages={'invalid': '星级列表中的每个值必须是1、2或3'}
    )
    regions = fields.List(
        fields.String(validate=validate.Length(min=1, max=100)),
        missing=[],
        error_messages={'invalid': '地区列表格式错误'}
    )
    cities = fields.List(
        fields.String(validate=validate.Length(min=1, max=100)),
        missing=[],
        error_messages={'invalid': '城市列表格式错误'}
    )
    cuisines = fields.List(
        fields.String(validate=validate.Length(min=1, max=100)),
        missing=[],
        error_messages={'invalid': '菜系列表格式错误'}
    )
    year_range = fields.Dict(
        keys=fields.String(validate=validate.OneOf(['min', 'max'])),
        values=fields.Integer(validate=validate.Range(min=1900, max=2030)),
        missing={},
        error_messages={'invalid': '年份范围格式错误，应为{min: 年份, max: 年份}'}
    )


class RestaurantSearchSchema(Schema):
    """餐厅搜索参数校验Schema"""
    
    q = fields.String(
        required=True,
        validate=validate.Length(min=2, max=200),
        error_messages={
            'required': '搜索关键词不能为空',
            'invalid': '搜索关键词长度必须在2-200字符之间'
        }
    )
    limit = fields.Integer(
        missing=20,
        validate=validate.Range(min=1, max=100),
        error_messages={'invalid': '结果数量限制必须在1-100之间'}
    )
    stars = fields.Integer(
        missing=None,
        allow_none=True,
        validate=validate.OneOf([1, 2, 3]),
        error_messages={'invalid': '星级过滤必须是1、2或3'}
    )
    
    @post_load
    def clean_query(self, data, **kwargs):
        """清理搜索关键词"""
        data['q'] = data['q'].strip()
        return data


class RestaurantResponseSchema(Schema):
    """餐厅响应数据Schema"""
    
    id = fields.Integer(allow_none=True)
    name = fields.String(required=True)
    city = fields.String(required=True)
    region = fields.String(required=True)
    country = fields.String(required=True)
    stars = fields.Integer(required=True, validate=validate.Range(min=1, max=3))
    cuisine = fields.String(required=True)
    price = fields.String(allow_none=True)
    price_level = fields.String(allow_none=True)
    year = fields.Integer(allow_none=True, validate=validate.Range(min=1900, max=2030))
    latitude = fields.Float(allow_none=True, validate=validate.Range(min=-90, max=90))
    longitude = fields.Float(allow_none=True, validate=validate.Range(min=-180, max=180))
    url = fields.String(allow_none=True)
    continent = fields.String(allow_none=True)
    climate_zone = fields.String(allow_none=True)


class PaginationResponseSchema(Schema):
    """分页响应Schema"""
    
    total = fields.Integer(required=True, validate=validate.Range(min=0))
    page = fields.Integer(required=True, validate=validate.Range(min=1))
    per_page = fields.Integer(required=True, validate=validate.Range(min=1))
    total_pages = fields.Integer(required=True, validate=validate.Range(min=0))
    has_next = fields.Boolean(required=True)
    has_prev = fields.Boolean(required=True)


class RestaurantListResponseSchema(Schema):
    """餐厅列表响应Schema"""
    
    success = fields.Boolean(required=True)
    data = fields.List(fields.Nested(RestaurantResponseSchema), required=True)
    pagination = fields.Nested(PaginationResponseSchema, required=True)
    filters_applied = fields.Dict(missing={})
    error = fields.String(allow_none=True) 