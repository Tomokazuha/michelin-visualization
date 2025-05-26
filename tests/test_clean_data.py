import pytest
import pandas as pd
import numpy as np
import sys
import os
from unittest.mock import patch, MagicMock

# 添加scripts目录到路径
sys.path.append(os.path.join(os.path.dirname(__file__), '..', 'scripts'))

from clean_data import (
    load_raw_data,
    clean_restaurant_data,
    standardize_columns,
    handle_missing_values,
    detect_outliers
)

class TestDataCleaning:
    """数据清洗功能测试类"""
    
    def setup_method(self):
        """设置测试数据"""
        self.sample_data = pd.DataFrame({
            'Name': ['Restaurant A', 'Restaurant B', '', 'Restaurant D'],
            'Location': ['Paris, France', 'Tokyo, Japan', 'New York, USA', ''],
            'Price': ['$$$', '$$', '', '$$$'],
            'Cuisine Style': ['French', 'Japanese', 'American', 'Italian'],
            'Review': [4.5, 4.8, np.nan, 4.2],
            'Year Awarded': [2020, 2021, 2019, 2022]
        })
    
    def test_load_raw_data_success(self):
        """测试成功加载原始数据"""
        with patch('pandas.read_csv') as mock_read_csv:
            mock_read_csv.return_value = self.sample_data
            result = load_raw_data('dummy_path.csv')
            assert isinstance(result, pd.DataFrame)
            assert len(result) == 4
    
    def test_load_raw_data_file_not_found(self):
        """测试文件不存在的情况"""
        with patch('pandas.read_csv', side_effect=FileNotFoundError):
            result = load_raw_data('nonexistent_file.csv')
            assert result is None
    
    def test_standardize_columns(self):
        """测试列名标准化"""
        df = pd.DataFrame({
            'Restaurant Name': ['Test'],
            'Location Info': ['Paris'],
            'Price Range': ['$$$'],
            'Cuisine Type': ['French']
        })
        
        result = standardize_columns(df)
        expected_columns = ['name', 'location', 'price', 'cuisine']
        
        # 检查列名是否被正确标准化
        for col in expected_columns:
            assert col in result.columns
    
    def test_handle_missing_values(self):
        """测试缺失值处理"""
        df = self.sample_data.copy()
        result = handle_missing_values(df)
        
        # 检查是否没有完全空的行
        assert not result.isnull().all(axis=1).any()
        
        # 检查数值列的缺失值是否被填充
        if 'Review' in result.columns:
            assert not result['Review'].isnull().any()
    
    def test_detect_outliers_iqr_method(self):
        """测试IQR方法检测异常值"""
        data = pd.Series([1, 2, 3, 4, 5, 100])  # 100是明显的异常值
        outliers = detect_outliers(data, method='iqr')
        
        assert 100 in outliers
        assert len(outliers) >= 1
    
    def test_detect_outliers_zscore_method(self):
        """测试Z-score方法检测异常值"""
        data = pd.Series([1, 2, 3, 4, 5, 100])
        outliers = detect_outliers(data, method='zscore', threshold=2)
        
        assert 100 in outliers
    
    def test_clean_restaurant_data_integration(self):
        """测试数据清洗集成流程"""
        with patch('clean_data.load_raw_data') as mock_load:
            mock_load.return_value = self.sample_data
            
            result = clean_restaurant_data('dummy_path.csv')
            
            # 检查返回的数据框不为空
            assert result is not None
            assert isinstance(result, pd.DataFrame)
            
            # 检查基本的数据质量
            assert len(result) > 0
            assert not result.empty
    
    def test_price_standardization(self):
        """测试价格标准化"""
        from clean_data import standardize_price_range
        
        test_prices = ['$', '$$', '$$$', '$$$$', 'Expensive', 'Moderate', '']
        result = standardize_price_range(pd.Series(test_prices))
        
        # 检查价格是否被正确映射
        assert all(price in ['低', '中', '高', '未知'] for price in result)
    
    def test_cuisine_standardization(self):
        """测试菜系标准化"""
        from clean_data import standardize_cuisine_style
        
        test_cuisines = ['French', 'ITALIAN', 'japanese', 'Modern European', '']
        result = standardize_cuisine_style(pd.Series(test_cuisines))
        
        # 检查菜系是否被正确标准化
        assert all(isinstance(cuisine, str) for cuisine in result if cuisine)
        assert all(cuisine.istitle() for cuisine in result if cuisine and cuisine != '未知')

class TestDataValidation:
    """数据验证测试类"""
    
    def test_validate_coordinates(self):
        """测试坐标验证"""
        from clean_data import validate_coordinates
        
        # 有效坐标
        assert validate_coordinates(48.8566, 2.3522)  # Paris
        
        # 无效坐标
        assert not validate_coordinates(200, 200)  # 超出范围
        assert not validate_coordinates(None, None)  # 空值
    
    def test_validate_year(self):
        """测试年份验证"""
        from clean_data import validate_year
        
        assert validate_year(2020)  # 有效年份
        assert validate_year(1900)  # 边界年份
        assert not validate_year(1800)  # 太早的年份
        assert not validate_year(2030)  # 未来年份
    
    def test_validate_rating(self):
        """测试评分验证"""
        from clean_data import validate_rating
        
        assert validate_rating(4.5)  # 有效评分
        assert validate_rating(1.0)  # 最低评分
        assert validate_rating(5.0)  # 最高评分
        assert not validate_rating(0.5)  # 太低
        assert not validate_rating(6.0)  # 太高

@pytest.fixture
def sample_csv_file(tmp_path):
    """创建临时CSV文件用于测试"""
    csv_content = """Name,Location,Price,Cuisine Style,Review,Year Awarded
Restaurant A,Paris France,$$$,French,4.5,2020
Restaurant B,Tokyo Japan,$$,Japanese,4.8,2021
Restaurant C,New York USA,,American,,2019"""
    
    csv_file = tmp_path / "test_restaurants.csv"
    csv_file.write_text(csv_content)
    return str(csv_file)

def test_end_to_end_cleaning(sample_csv_file):
    """端到端数据清洗测试"""
    result = clean_restaurant_data(sample_csv_file)
    
    assert result is not None
    assert len(result) >= 2  # 至少应该有2条有效记录
    assert 'name' in result.columns
    assert 'location' in result.columns
    
    # 检查数据质量
    assert not result['name'].str.strip().eq('').any()  # 名称不应为空 