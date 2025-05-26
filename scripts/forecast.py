"""
时间序列预测模块
使用Prophet进行米其林餐厅获奖趋势的年度/季度预测
"""

import pandas as pd
import numpy as np
from prophet import Prophet
import matplotlib.pyplot as plt
from typing import Dict, List, Tuple, Optional, Any
from datetime import datetime, timedelta
import warnings
warnings.filterwarnings('ignore')
import joblib

from utils import logger, path_manager, cache_manager, export_to_format


class RestaurantForecaster:
    """餐厅趋势预测器"""
    
    def __init__(self):
        self.models = {}
        self.forecasts = {}
        self.model_performance = {}
        self.forecast_log = []
    
    def log_forecast_operation(self, operation: str, details: Dict):
        """记录预测操作"""
        log_entry = {
            'timestamp': datetime.now().isoformat(),
            'operation': operation,
            'details': details
        }
        self.forecast_log.append(log_entry)
        logger.info(f"Forecasting: {operation} - {details}")
    
    def prepare_time_series_data(self, df: pd.DataFrame) -> Dict[str, pd.DataFrame]:
        """准备时间序列数据"""
        logger.info("准备时间序列数据...")
        
        if 'year' not in df.columns:
            raise ValueError("数据中缺少年份信息")
        
        time_series_data = {}
        
        # 1. 总体获奖趋势
        yearly_awards = df.groupby('year').size().reset_index(name='awards')
        yearly_awards['ds'] = pd.to_datetime(yearly_awards['year'], format='%Y')
        yearly_awards['y'] = yearly_awards['awards']
        time_series_data['total_awards'] = yearly_awards[['ds', 'y']].copy()
        
        # 2. 按星级分组的趋势
        if 'stars' in df.columns:
            for star in sorted(df['stars'].unique()):
                star_data = df[df['stars'] == star].groupby('year').size().reset_index(name='awards')
                star_data['ds'] = pd.to_datetime(star_data['year'], format='%Y')
                star_data['y'] = star_data['awards']
                time_series_data[f'{star}_star_awards'] = star_data[['ds', 'y']].copy()
        
        # 3. 按菜系分组的趋势（主要菜系）
        if 'cuisine' in df.columns:
            top_cuisines = df['cuisine'].value_counts().head(5).index
            for cuisine in top_cuisines:
                cuisine_data = df[df['cuisine'] == cuisine].groupby('year').size().reset_index(name='awards')
                if len(cuisine_data) >= 3:  # 至少3年数据
                    cuisine_data['ds'] = pd.to_datetime(cuisine_data['year'], format='%Y')
                    cuisine_data['y'] = cuisine_data['awards']
                    time_series_data[f'cuisine_{cuisine.lower().replace(" ", "_")}'] = cuisine_data[['ds', 'y']].copy()
        
        # 4. 按地区分组的趋势（主要地区）
        if 'continent' in df.columns:
            for continent in df['continent'].unique():
                if pd.notna(continent):
                    continent_data = df[df['continent'] == continent].groupby('year').size().reset_index(name='awards')
                    if len(continent_data) >= 3:  # 至少3年数据
                        continent_data['ds'] = pd.to_datetime(continent_data['year'], format='%Y')
                        continent_data['y'] = continent_data['awards']
                        time_series_data[f'continent_{continent.lower().replace(" ", "_")}'] = continent_data[['ds', 'y']].copy()
        
        # 5. 按价格等级分组的趋势
        if 'price_category' in df.columns:
            for price_cat in df['price_category'].unique():
                if pd.notna(price_cat):
                    price_data = df[df['price_category'] == price_cat].groupby('year').size().reset_index(name='awards')
                    if len(price_data) >= 3:
                        price_data['ds'] = pd.to_datetime(price_data['year'], format='%Y')
                        price_data['y'] = price_data['awards']
                        time_series_data[f'price_{price_cat.lower().replace(" ", "_")}'] = price_data[['ds', 'y']].copy()
        
        self.log_forecast_operation("Prepare time series data", {
            'total_series': len(time_series_data),
            'series_names': list(time_series_data.keys()),
            'date_range': f"{df['year'].min()}-{df['year'].max()}",
            'total_records': len(df)
        })
        
        return time_series_data
    
    def create_prophet_model(self, series_name: str, data: pd.DataFrame, 
                           custom_params: Dict = None) -> Prophet:
        """创建Prophet模型"""
        logger.info(f"为 {series_name} 创建Prophet模型...")
        
        # 默认参数
        default_params = {
            'yearly_seasonality': True,
            'weekly_seasonality': False,
            'daily_seasonality': False,
            'changepoint_prior_scale': 0.05,
            'seasonality_prior_scale': 10.0,
            'holidays_prior_scale': 10.0,
            'mcmc_samples': 0,
            'interval_width': 0.80,
            'uncertainty_samples': 1000
        }
        
        # 更新参数
        if custom_params:
            default_params.update(custom_params)
        
        # 创建模型
        model = Prophet(**default_params)
        
        # 添加自定义季节性（如果需要）
        if len(data) > 10:  # 数据点足够多时添加自定义趋势
            model.add_seasonality(name='custom_yearly', period=365.25, fourier_order=3)
        
        # 添加节假日效果（简化版）
        holidays = pd.DataFrame({
            'holiday': 'michelin_announcement',
            'ds': pd.to_datetime(['2019-01-01', '2020-01-01', '2021-01-01', '2022-01-01']),
            'lower_window': 0,
            'upper_window': 365
        })
        
        for _, holiday in holidays.iterrows():
            if holiday['ds'] >= data['ds'].min() and holiday['ds'] <= data['ds'].max():
                model.add_holiday(
                    name=holiday['holiday'],
                    holiday=holidays[holidays['holiday'] == holiday['holiday']]
                )
        
        return model
    
    def train_and_validate_model(self, series_name: str, data: pd.DataFrame) -> Dict:
        """训练和验证模型"""
        logger.info(f"训练和验证 {series_name} 模型...")
        
        if len(data) < 3:
            logger.warning(f"数据点太少，跳过 {series_name}")
            return None
        
        try:
            # 分割训练和验证数据
            split_point = int(len(data) * 0.8)
            train_data = data.iloc[:split_point].copy()
            val_data = data.iloc[split_point:].copy()
            
            # 创建和训练模型
            model = self.create_prophet_model(series_name, train_data)
            model.fit(train_data)
            
            # 验证预测
            validation_results = {}
            if len(val_data) > 0:
                val_forecast = model.predict(val_data[['ds']])
                
                # 计算误差指标
                mae = np.mean(np.abs(val_data['y'] - val_forecast['yhat']))
                mape = np.mean(np.abs((val_data['y'] - val_forecast['yhat']) / val_data['y'])) * 100
                rmse = np.sqrt(np.mean((val_data['y'] - val_forecast['yhat']) ** 2))
                
                validation_results = {
                    'mae': mae,
                    'mape': mape,
                    'rmse': rmse,
                    'actual_values': val_data['y'].tolist(),
                    'predicted_values': val_forecast['yhat'].tolist(),
                    'validation_period': f"{val_data['ds'].min().strftime('%Y')}-{val_data['ds'].max().strftime('%Y')}"
                }
            
            # 使用全部数据重新训练最终模型
            final_model = self.create_prophet_model(series_name, data)
            final_model.fit(data)
            
            result = {
                'model': final_model,
                'validation': validation_results,
                'training_period': f"{data['ds'].min().strftime('%Y')}-{data['ds'].max().strftime('%Y')}",
                'data_points': len(data),
                'series_stats': {
                    'mean': float(data['y'].mean()),
                    'std': float(data['y'].std()),
                    'min': float(data['y'].min()),
                    'max': float(data['y'].max()),
                    'trend': 'increasing' if data['y'].iloc[-1] > data['y'].iloc[0] else 'decreasing'
                }
            }
            
            self.log_forecast_operation(f"Train model for {series_name}", {
                'data_points': len(data),
                'validation_mae': validation_results.get('mae', 'N/A'),
                'validation_mape': validation_results.get('mape', 'N/A'),
                'model_created': True
            })
            
            return result
            
        except Exception as e:
            logger.error(f"训练 {series_name} 模型时出错: {e}")
            return None
    
    def generate_forecasts(self, model_results: Dict, forecast_periods: int = 5) -> Dict:
        """生成预测"""
        logger.info(f"生成未来 {forecast_periods} 年的预测...")
        
        forecasts = {}
        
        for series_name, model_data in model_results.items():
            if model_data is None:
                continue
            
            try:
                model = model_data['model']
                
                # 创建未来日期
                last_date = model.history['ds'].max()
                future_dates = []
                for i in range(1, forecast_periods + 1):
                    future_dates.append(last_date + pd.DateOffset(years=i))
                
                future_df = pd.DataFrame({'ds': future_dates})
                
                # 生成预测
                forecast = model.predict(future_df)
                
                # 整理预测结果
                forecast_result = {
                    'dates': [d.strftime('%Y-%m-%d') for d in forecast['ds']],
                    'predictions': forecast['yhat'].tolist(),
                    'lower_bounds': forecast['yhat_lower'].tolist(),
                    'upper_bounds': forecast['yhat_upper'].tolist(),
                    'trend': forecast['trend'].tolist(),
                    'yearly_effect': forecast.get('yearly', [0] * len(forecast)).tolist(),
                    'model_performance': model_data['validation'],
                    'series_stats': model_data['series_stats']
                }
                
                # 计算预测摘要
                avg_prediction = np.mean(forecast['yhat'])
                trend_direction = 'increasing' if forecast['yhat'].iloc[-1] > forecast['yhat'].iloc[0] else 'decreasing'
                confidence_width = np.mean(forecast['yhat_upper'] - forecast['yhat_lower'])
                
                forecast_result['summary'] = {
                    'average_prediction': float(avg_prediction),
                    'trend_direction': trend_direction,
                    'confidence_interval_width': float(confidence_width),
                    'forecast_period': f"{future_dates[0].year}-{future_dates[-1].year}"
                }
                
                forecasts[series_name] = forecast_result
                
                self.log_forecast_operation(f"Generate forecast for {series_name}", {
                    'forecast_years': f"{future_dates[0].year}-{future_dates[-1].year}",
                    'average_prediction': float(avg_prediction),
                    'trend_direction': trend_direction,
                    'confidence_width': float(confidence_width)
                })
                
            except Exception as e:
                logger.error(f"生成 {series_name} 预测时出错: {e}")
                continue
        
        return forecasts
    
    def analyze_forecast_insights(self, forecasts: Dict, historical_data: Dict) -> Dict:
        """分析预测洞察"""
        logger.info("分析预测洞察...")
        
        insights = {
            'overall_trends': {},
            'comparative_analysis': {},
            'risk_assessment': {},
            'recommendations': []
        }
        
        # 1. 整体趋势分析
        if 'total_awards' in forecasts:
            total_forecast = forecasts['total_awards']
            current_avg = total_forecast['series_stats']['mean']
            future_avg = total_forecast['summary']['average_prediction']
            growth_rate = (future_avg - current_avg) / current_avg * 100
            
            insights['overall_trends'] = {
                'current_average_awards': current_avg,
                'predicted_average_awards': future_avg,
                'growth_rate_percent': growth_rate,
                'trend_direction': total_forecast['summary']['trend_direction'],
                'confidence_level': 'high' if total_forecast['summary']['confidence_interval_width'] < current_avg * 0.5 else 'medium'
            }
        
        # 2. 星级比较分析
        star_trends = {}
        for series_name, forecast_data in forecasts.items():
            if 'star_awards' in series_name:
                star_level = series_name.split('_')[0]
                star_trends[star_level] = {
                    'trend': forecast_data['summary']['trend_direction'],
                    'avg_prediction': forecast_data['summary']['average_prediction'],
                    'growth_potential': forecast_data['summary']['average_prediction'] / forecast_data['series_stats']['mean']
                }
        
        insights['comparative_analysis']['star_level_trends'] = star_trends
        
        # 3. 地区比较分析
        regional_trends = {}
        for series_name, forecast_data in forecasts.items():
            if 'continent_' in series_name:
                region = series_name.replace('continent_', '').replace('_', ' ').title()
                regional_trends[region] = {
                    'trend': forecast_data['summary']['trend_direction'],
                    'avg_prediction': forecast_data['summary']['average_prediction'],
                    'volatility': forecast_data['series_stats']['std'] / forecast_data['series_stats']['mean']
                }
        
        insights['comparative_analysis']['regional_trends'] = regional_trends
        
        # 4. 风险评估
        high_volatility_series = []
        declining_series = []
        
        for series_name, forecast_data in forecasts.items():
            # 检查波动性
            if forecast_data['series_stats']['std'] / forecast_data['series_stats']['mean'] > 0.5:
                high_volatility_series.append(series_name)
            
            # 检查下降趋势
            if forecast_data['summary']['trend_direction'] == 'decreasing':
                declining_series.append(series_name)
        
        insights['risk_assessment'] = {
            'high_volatility_series': high_volatility_series,
            'declining_trends': declining_series,
            'overall_risk_level': 'high' if len(declining_series) > len(forecasts) * 0.3 else 'low'
        }
        
        # 5. 建议生成
        recommendations = []
        
        if insights['overall_trends'].get('growth_rate_percent', 0) > 5:
            recommendations.append("预计米其林餐厅整体增长强劲，建议关注新兴美食市场")
        elif insights['overall_trends'].get('growth_rate_percent', 0) < -5:
            recommendations.append("预计米其林餐厅增长放缓，建议关注质量提升和创新")
        
        if 'Asia' in insights['comparative_analysis'].get('regional_trends', {}):
            asia_trend = insights['comparative_analysis']['regional_trends']['Asia']
            if asia_trend['trend'] == 'increasing':
                recommendations.append("亚洲地区显示强劲增长趋势，建议重点关注亚洲市场")
        
        if len(high_volatility_series) > 0:
            recommendations.append(f"以下类别存在高波动性：{', '.join(high_volatility_series[:3])}，建议加强监控")
        
        insights['recommendations'] = recommendations
        
        self.log_forecast_operation("Analyze insights", {
            'total_series_analyzed': len(forecasts),
            'high_volatility_count': len(high_volatility_series),
            'declining_trends_count': len(declining_series),
            'recommendations_generated': len(recommendations)
        })
        
        return insights
    
    def process_forecasting(self, df: pd.DataFrame, forecast_years: int = 5) -> Dict:
        """执行完整的预测分析流程"""
        logger.info("开始完整预测分析流程...")
        
        # 1. 准备时间序列数据
        time_series_data = self.prepare_time_series_data(df)
        
        # 2. 训练模型
        model_results = {}
        for series_name, data in time_series_data.items():
            result = self.train_and_validate_model(series_name, data)
            if result:
                model_results[series_name] = result
                self.models[series_name] = result['model']
                self.model_performance[series_name] = result['validation']
        
        # 3. 生成预测
        forecasts = self.generate_forecasts(model_results, forecast_years)
        self.forecasts = forecasts
        
        # 4. 分析洞察
        insights = self.analyze_forecast_insights(forecasts, time_series_data)
        
        # 整合结果
        final_results = {
            'forecasts': forecasts,
            'model_performance': self.model_performance,
            'insights': insights,
            'time_series_data': time_series_data,
            'forecast_parameters': {
                'forecast_years': forecast_years,
                'models_trained': len(model_results),
                'successful_forecasts': len(forecasts)
            },
            'processing_log': self.forecast_log
        }
        
        self.log_forecast_operation("Forecasting process completed", {
            'total_models_trained': len(model_results),
            'successful_forecasts': len(forecasts),
            'forecast_period': f"{datetime.now().year + 1}-{datetime.now().year + forecast_years}",
            'insights_generated': bool(insights)
        })
        
        return final_results


def main():
    """主函数：执行预测分析流程"""
    logger.info("开始预测分析主流程...")
    
    try:
        # 加载特征工程后的数据
        features_path = path_manager.get_processed_data_path("features.joblib")
        
        if not features_path.exists():
            logger.error("特征工程数据文件不存在，请先运行特征工程")
            return
        
        df = joblib.load(features_path)
        logger.info(f"加载特征数据: {df.shape[0]} 条记录, {df.shape[1]} 个特征")
        
        # 执行预测分析
        forecaster = RestaurantForecaster()
        forecast_results = forecaster.process_forecasting(df, forecast_years=5)
        
        # 保存预测结果
        forecast_path = path_manager.get_processed_data_path("forecasts.joblib")
        joblib.dump(forecast_results, forecast_path)
        logger.info(f"预测结果已保存: {forecast_path}")
        
        # 保存预测模型
        models_path = path_manager.get_processed_data_path("forecast_models.joblib")
        joblib.dump(forecaster.models, models_path)
        logger.info(f"预测模型已保存: {models_path}")
        
        # 保存预测分析报告
        import json
        report_path = path_manager.get_processed_data_path("forecast_report.json")
        
        # 转换为JSON可序列化的格式
        json_results = {}
        for key, value in forecast_results.items():
            if key == 'time_series_data':
                # 简化时间序列数据
                json_results[key] = {
                    series_name: {
                        'data_points': len(data),
                        'date_range': f"{data['ds'].min().strftime('%Y')}-{data['ds'].max().strftime('%Y')}",
                        'value_range': f"{data['y'].min()}-{data['y'].max()}"
                    }
                    for series_name, data in value.items()
                }
            else:
                json_results[key] = value
        
        with open(report_path, 'w', encoding='utf-8') as f:
            json.dump(json_results, f, indent=2, ensure_ascii=False, default=str)
        
        logger.info(f"预测分析报告已保存: {report_path}")
        
        # 缓存数据
        cache_manager.set_cache("forecast_results", forecast_results)
        cache_manager.set_cache("forecast_models", forecaster.models)
        
        logger.info("预测分析流程完成!")
        logger.info(f"成功训练 {len(forecaster.models)} 个预测模型")
        logger.info(f"生成 {len(forecast_results['forecasts'])} 个预测序列")
        
        # 显示主要预测结果
        if 'total_awards' in forecast_results['forecasts']:
            total_forecast = forecast_results['forecasts']['total_awards']
            logger.info(f"总体趋势预测: {total_forecast['summary']['trend_direction']}")
            logger.info(f"未来平均获奖数: {total_forecast['summary']['average_prediction']:.1f}")
        
        return forecast_results
        
    except Exception as e:
        logger.error(f"预测分析过程中发生错误: {e}")
        raise


if __name__ == "__main__":
    main() 