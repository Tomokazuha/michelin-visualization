# 米其林数据可视化API文档

## 概述

米其林数据可视化后端API提供餐厅数据查询、分析和可视化服务。API采用RESTful设计，支持JSON格式的请求和响应。

**基础URL**: `http://localhost:5000/api`  
**API版本**: v1  
**响应格式**: JSON  

## 认证

当前版本无需认证。

## 通用响应格式

### 成功响应
```json
{
  "success": true,
  "data": {},
  "pagination": {},  // 仅分页接口
  "filters_applied": {}  // 仅筛选接口
}
```

### 错误响应
```json
{
  "success": false,
  "error": "错误描述",
  "error_code": 400,
  "timestamp": "2024-01-01T12:00:00Z",
  "details": {}  // 可选，详细错误信息
}
```

## 状态码

- `200` - 成功
- `400` - 请求参数错误
- `404` - 资源不存在
- `405` - 请求方法不允许
- `500` - 服务器内部错误

---

## 健康检查接口

### GET /health

检查API服务运行状态。

**响应示例**:
```json
{
  "status": "healthy",
  "timestamp": "2024-01-01T12:00:00Z",
  "version": "v1",
  "environment": "development",
  "data_service": {
    "loaded": true,
    "data_types": ["cleaned", "features", "clustering"],
    "errors": []
  }
}
```

---

## 餐厅数据接口

### GET /api/restaurants

获取餐厅数据列表，支持分页和过滤。

**查询参数**:
- `page` (int, 可选): 页码，默认1
- `per_page` (int, 可选): 每页数量，默认50，最大100
- `stars` (int, 可选): 星级过滤，取值1-3
- `region` (string, 可选): 地区过滤，支持模糊匹配
- `city` (string, 可选): 城市过滤，支持模糊匹配
- `cuisine` (string, 可选): 菜系过滤，支持模糊匹配
- `sort_by` (string, 可选): 排序字段，取值：name|stars|year|city|cuisine，默认name
- `sort_order` (string, 可选): 排序方向，取值：asc|desc，默认asc

**请求示例**:
```
GET /api/restaurants?page=1&per_page=20&stars=3&region=France&sort_by=stars&sort_order=desc
```

**响应示例**:
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Restaurant Name",
      "city": "Paris",
      "region": "Île-de-France",
      "country": "France",
      "stars": 3,
      "cuisine": "French",
      "price": "€€€€",
      "price_level": "Very Expensive",
      "year": 2023,
      "latitude": 48.8566,
      "longitude": 2.3522,
      "url": "https://example.com",
      "continent": "Europe",
      "climate_zone": "Temperate"
    }
  ],
  "pagination": {
    "total": 150,
    "page": 1,
    "per_page": 20,
    "total_pages": 8,
    "has_next": true,
    "has_prev": false
  },
  "filters_applied": {
    "stars": 3,
    "region": "France",
    "city": null,
    "cuisine": null
  }
}
```

### GET /api/restaurants/search

搜索餐厅，支持多字段模糊搜索。

**查询参数**:
- `q` (string, 必填): 搜索关键词，最少2个字符
- `limit` (int, 可选): 结果数量限制，默认20，最大100
- `stars` (int, 可选): 星级过滤，取值1-3

**请求示例**:
```
GET /api/restaurants/search?q=French&limit=10&stars=2
```

**响应示例**:
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "French Bistro",
      "city": "Lyon",
      "region": "Auvergne-Rhône-Alpes",
      "stars": 2,
      "cuisine": "French"
    }
  ],
  "query": "French",
  "count": 1
}
```

### GET /api/restaurants/filter-options

获取所有可用的过滤选项。

**响应示例**:
```json
{
  "success": true,
  "data": {
    "regions": ["Île-de-France", "Provence-Alpes-Côte d'Azur", ...],
    "cities": ["Paris", "Lyon", "Marseille", ...],
    "cuisines": ["French", "Italian", "Japanese", ...],
    "countries": ["France", "Italy", "Japan", ...],
    "stars": [1, 2, 3],
    "price_levels": ["Moderate", "Expensive", "Very Expensive"],
    "years": {
      "min": 2000,
      "max": 2023
    }
  }
}
```

---

## 数据分析接口

### GET /api/analytics/summary

获取数据摘要统计。

**响应示例**:
```json
{
  "success": true,
  "data": {
    "total_restaurants": 2500,
    "regions": 45,
    "cities": 180,
    "countries": 15,
    "cuisines": 25,
    "year_range": {
      "min": 2000,
      "max": 2023
    },
    "star_distribution": {
      "1": 1500,
      "2": 800,
      "3": 200
    },
    "price_distribution": {
      "Moderate": 500,
      "Expensive": 1200,
      "Very Expensive": 800
    },
    "data_quality": {
      "completeness": {
        "name": 99.8,
        "location": 95.2,
        "cuisine": 98.5
      }
    }
  }
}
```

### GET /api/analytics/distribution

获取数据分布分析。

**查询参数**:
- `type` (string, 可选): 分布类型，取值：stars|price|region|cuisine|year，默认stars
- `format` (string, 可选): 返回格式，取值：json|chart，默认json

**请求示例**:
```
GET /api/analytics/distribution?type=stars&format=json
```

**响应示例**:
```json
{
  "success": true,
  "data": {
    "count": 2500,
    "unique_values": 3,
    "distribution": {
      "1": 1500,
      "2": 800,
      "3": 200
    },
    "mean": 1.32,
    "median": 1.0,
    "std": 0.58
  },
  "type": "stars"
}
```

### GET /api/analytics/trends

获取趋势分析数据。

**查询参数**:
- `metric` (string, 可选): 分析指标，取值：count|stars_avg|new_entries，默认count
- `group_by` (string, 可选): 分组方式，取值：year|region|cuisine，默认year

**请求示例**:
```
GET /api/analytics/trends?metric=count&group_by=year
```

**响应示例**:
```json
{
  "success": true,
  "data": {
    "trends": [
      {"year": 2020, "value": 100},
      {"year": 2021, "value": 120},
      {"year": 2022, "value": 150},
      {"year": 2023, "value": 180}
    ],
    "summary": {
      "total_points": 4,
      "metric": "count",
      "group_by": "year",
      "min_value": 100,
      "max_value": 180,
      "avg_value": 137.5
    }
  },
  "metric": "count",
  "group_by": "year"
}
```

### GET /api/analytics/clustering

获取聚类分析结果。

**查询参数**:
- `cluster_id` (int, 可选): 特定聚类ID
- `include_details` (bool, 可选): 是否包含详细信息，默认false

**请求示例**:
```
GET /api/analytics/clustering?include_details=true
```

**响应示例**:
```json
{
  "success": true,
  "data": {
    "cluster_count": 5,
    "algorithm": "HDBSCAN",
    "silhouette_score": 0.75,
    "cluster_summary": {
      "0": {"size": 500, "avg_stars": 1.2},
      "1": {"size": 300, "avg_stars": 2.1},
      "2": {"size": 200, "avg_stars": 2.8}
    },
    "all_clusters": {
      "0": {
        "restaurants": ["Restaurant A", "Restaurant B"],
        "characteristics": ["Urban", "Moderate Price"]
      }
    }
  }
}
```

### GET /api/analytics/features

获取特征重要性分析。

**响应示例**:
```json
{
  "success": true,
  "data": {
    "feature_stats": {
      "location_score": {
        "mean": 0.65,
        "std": 0.25,
        "variance": 0.063
      },
      "cuisine_diversity": {
        "mean": 0.42,
        "std": 0.18,
        "variance": 0.032
      }
    },
    "importance_ranking": [
      {"feature": "location_score", "importance_score": 0.063},
      {"feature": "cuisine_diversity", "importance_score": 0.032}
    ],
    "total_features": 15
  }
}
```

### GET /api/analytics/forecasts

获取预测分析结果。

**查询参数**:
- `region` (string, 可选): 地区过滤
- `metric` (string, 可选): 预测指标，取值：count|stars_avg，默认count

**请求示例**:
```
GET /api/analytics/forecasts?region=France&metric=count
```

**响应示例**:
```json
{
  "success": true,
  "data": {
    "forecasts": {
      "France": {
        "metric": "count",
        "forecast": [
          {"year": 2024, "value": 195, "lower": 180, "upper": 210},
          {"year": 2025, "value": 205, "lower": 185, "upper": 225}
        ],
        "confidence_intervals": {
          "level": 0.95
        },
        "historical_data": [
          {"year": 2020, "value": 150},
          {"year": 2023, "value": 180}
        ]
      }
    },
    "metadata": {
      "total_regions": 1,
      "metric": "count",
      "forecast_horizon": "2 years"
    }
  }
}
```

---

## 数据重新加载接口

### POST /api/data/reload

重新加载缓存数据。用于数据文件更新后刷新缓存。

**响应示例**:
```json
{
  "success": true,
  "result": {
    "success": true,
    "old_data_types": ["cleaned", "features"],
    "new_data_types": ["cleaned", "features", "clustering"],
    "load_errors": [],
    "reload_time": "2024-01-01T12:00:00Z"
  }
}
```

---

## 错误处理

### 常见错误类型

1. **参数验证错误** (400)
```json
{
  "success": false,
  "error": "参数格式错误",
  "error_code": 400,
  "details": {
    "stars": ["星级必须是1、2或3"],
    "per_page": ["每页数量必须在1-100之间"]
  }
}
```

2. **资源不存在** (404)
```json
{
  "success": false,
  "error": "数据未加载",
  "error_code": 404
}
```

3. **服务器错误** (500)
```json
{
  "success": false,
  "error": "服务器内部错误",
  "error_code": 500,
  "timestamp": "2024-01-01T12:00:00Z"
}
```

---

## 性能注意事项

1. **分页**: 建议使用分页查询大量数据，避免一次性获取过多记录
2. **缓存**: 数据在服务器启动时加载到内存，查询性能较好
3. **过滤**: 多重过滤条件会影响查询性能
4. **搜索**: 搜索功能基于字符串匹配，复杂查询可能较慢

## 使用示例

### Python客户端示例

```python
import requests

# 基础URL
BASE_URL = "http://localhost:5000/api"

# 获取餐厅列表
response = requests.get(f"{BASE_URL}/restaurants", params={
    "page": 1,
    "per_page": 20,
    "stars": 3,
    "region": "France"
})

if response.status_code == 200:
    data = response.json()
    restaurants = data['data']
    pagination = data['pagination']
    print(f"Found {pagination['total']} restaurants")
else:
    print(f"Error: {response.status_code}")
```

### JavaScript客户端示例

```javascript
// 使用fetch获取数据
async function getRestaurants(filters = {}) {
    const params = new URLSearchParams(filters);
    const response = await fetch(`/api/restaurants?${params}`);
    
    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
}

// 使用示例
getRestaurants({ stars: 3, region: 'France' })
    .then(data => {
        console.log('Restaurants:', data.data);
        console.log('Total:', data.pagination.total);
    })
    .catch(error => {
        console.error('Error:', error);
    });
```

---

## 版本历史

### v1.0.0 (当前版本)
- 初始API版本
- 基本餐厅数据查询功能
- 数据分析和可视化接口
- 完整的错误处理机制 