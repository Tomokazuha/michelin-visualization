#!/usr/bin/env python3
"""
API测试脚本
测试后端API是否正常工作
"""

import requests
import json
import time

def test_api_endpoint(url, name):
    """测试单个API端点"""
    try:
        print(f"测试 {name}...")
        response = requests.get(url, timeout=5)
        if response.status_code == 200:
            data = response.json()
            if data.get('success', True):
                print(f"✅ {name} - 成功")
                return True
            else:
                print(f"❌ {name} - API返回失败: {data.get('error', '未知错误')}")
                return False
        else:
            print(f"❌ {name} - HTTP {response.status_code}")
            return False
    except requests.exceptions.ConnectionError:
        print(f"❌ {name} - 连接失败，后端服务可能未启动")
        return False
    except requests.exceptions.Timeout:
        print(f"❌ {name} - 请求超时")
        return False
    except Exception as e:
        print(f"❌ {name} - 错误: {e}")
        return False

def main():
    """主测试函数"""
    print("🧪 开始API测试...")
    print("=" * 50)
    
    base_url = "http://localhost:5000/api"
    
    # 定义要测试的API端点
    endpoints = [
        ("/health", "健康检查"),
        ("/analytics/clustering", "聚类分析"),
        ("/analytics/features", "特征分析"),
        ("/analytics/distribution?type=stars", "星级分布"),
        ("/analytics/distribution?type=region", "地区分布"),
        ("/analytics/distribution?type=cuisine", "菜系分布"),
        ("/geojson", "地理数据"),
        ("/filter-options", "筛选选项")
    ]
    
    # 等待服务启动
    print("等待后端服务启动...")
    time.sleep(3)
    
    # 测试所有端点
    success_count = 0
    total_count = len(endpoints)
    
    for endpoint, name in endpoints:
        url = base_url + endpoint
        if test_api_endpoint(url, name):
            success_count += 1
        time.sleep(0.5)  # 避免请求过快
    
    # 输出测试结果
    print("\n" + "=" * 50)
    print(f"测试完成: {success_count}/{total_count} 个API正常工作")
    
    if success_count == total_count:
        print("🎉 所有API测试通过！")
        return True
    else:
        print(f"⚠️  有 {total_count - success_count} 个API测试失败")
        return False

if __name__ == "__main__":
    success = main()
    if not success:
        print("\n💡 提示：请确保后端服务已启动 (python backend/app.py)")
        exit(1) 