"""
聚类分析模块
使用DBSCAN/HDBSCAN进行多变量聚类分析，发现餐厅数据中的模式
"""

import pandas as pd
import numpy as np
from sklearn.cluster import DBSCAN, KMeans
from sklearn.preprocessing import StandardScaler
from sklearn.decomposition import PCA
from sklearn.manifold import TSNE
from sklearn.metrics import silhouette_score, calinski_harabasz_score, davies_bouldin_score
import hdbscan
import matplotlib.pyplot as plt
import seaborn as sns
from typing import Dict, List, Tuple, Optional, Any
from datetime import datetime
import joblib
import warnings
warnings.filterwarnings('ignore')

from utils import logger, path_manager, cache_manager, export_to_format


class RestaurantClusterer:
    """餐厅聚类分析器"""
    
    def __init__(self):
        self.clustering_results = {}
        self.evaluation_metrics = {}
        self.feature_importance = {}
        self.analysis_log = []
    
    def log_clustering_operation(self, operation: str, details: Dict):
        """记录聚类操作"""
        log_entry = {
            'timestamp': datetime.now().isoformat(),
            'operation': operation,
            'details': details
        }
        self.analysis_log.append(log_entry)
        logger.info(f"Clustering: {operation} - {details}")
    
    def prepare_clustering_features(self, df: pd.DataFrame) -> Tuple[pd.DataFrame, List[str]]:
        """准备聚类特征"""
        logger.info("准备聚类特征...")
        
        # 选择数值特征进行聚类
        numerical_features = [
            'latitude', 'longitude', 'stars', 'price_numeric', 'year',
            'years_since_award', 'distance_to_ny', 'city_restaurant_density',
            'name_length', 'name_word_count', 'price_star_ratio', 'value_score',
            'freshness_score', 'cuisine_popularity', 'name_complexity'
        ]
        
        # 选择编码后的分类特征
        encoded_features = [col for col in df.columns if col.endswith('_encoded')]
        
        # 选择标准化后的特征
        scaled_features = [col for col in df.columns if col.endswith('_scaled')]
        
        # 组合特征集
        all_features = []
        
        # 优先使用标准化特征
        for feat in numerical_features:
            scaled_feat = f"{feat}_scaled"
            if scaled_feat in df.columns:
                all_features.append(scaled_feat)
            elif feat in df.columns:
                all_features.append(feat)
        
        # 添加重要的编码特征
        important_encoded = [
            'cuisine_type_encoded', 'continent_encoded', 'era_encoded',
            'price_category_encoded', 'climate_zone_encoded'
        ]
        
        for feat in important_encoded:
            if feat in df.columns:
                all_features.append(feat)
        
        # 确保特征存在且无缺失值
        available_features = []
        for feat in all_features:
            if feat in df.columns and df[feat].notna().all():
                available_features.append(feat)
        
        if not available_features:
            raise ValueError("没有可用的聚类特征")
        
        clustering_data = df[available_features].copy()
        
        # 处理任何剩余的缺失值
        clustering_data = clustering_data.fillna(clustering_data.median())
        
        self.log_clustering_operation("Prepare features", {
            'total_features_considered': len(all_features),
            'available_features': len(available_features),
            'selected_features': available_features[:10],  # 只记录前10个
            'data_shape': clustering_data.shape
        })
        
        return clustering_data, available_features
    
    def perform_kmeans_clustering(self, data: pd.DataFrame, k_range: range = range(2, 11)) -> Dict:
        """执行K-means聚类"""
        logger.info("执行K-means聚类...")
        
        results = {}
        best_k = 2
        best_score = -1
        
        for k in k_range:
            try:
                kmeans = KMeans(n_clusters=k, random_state=42, n_init=10)
                labels = kmeans.fit_predict(data)
                
                # 计算评估指标
                silhouette = silhouette_score(data, labels)
                calinski = calinski_harabasz_score(data, labels)
                davies_bouldin = davies_bouldin_score(data, labels)
                
                results[k] = {
                    'model': kmeans,
                    'labels': labels,
                    'silhouette_score': silhouette,
                    'calinski_harabasz_score': calinski,
                    'davies_bouldin_score': davies_bouldin,
                    'inertia': kmeans.inertia_,
                    'cluster_centers': kmeans.cluster_centers_
                }
                
                # 选择最佳K（基于轮廓系数）
                if silhouette > best_score:
                    best_score = silhouette
                    best_k = k
                
                logger.info(f"K={k}: 轮廓系数={silhouette:.3f}, CH指数={calinski:.1f}")
                
            except Exception as e:
                logger.error(f"K-means聚类失败 (k={k}): {e}")
                continue
        
        self.log_clustering_operation("K-means clustering", {
            'k_range': f"{min(k_range)}-{max(k_range)}",
            'best_k': best_k,
            'best_silhouette_score': best_score,
            'total_clusters_tested': len(results)
        })
        
        return results, best_k
    
    def perform_dbscan_clustering(self, data: pd.DataFrame, eps_range: List[float] = None, 
                                min_samples_range: List[int] = None) -> Dict:
        """执行DBSCAN聚类"""
        logger.info("执行DBSCAN聚类...")
        
        if eps_range is None:
            eps_range = [0.3, 0.5, 0.7, 1.0, 1.5]
        if min_samples_range is None:
            min_samples_range = [3, 5, 10]
        
        results = {}
        best_params = None
        best_score = -1
        
        for eps in eps_range:
            for min_samples in min_samples_range:
                try:
                    dbscan = DBSCAN(eps=eps, min_samples=min_samples)
                    labels = dbscan.fit_predict(data)
                    
                    # 检查聚类结果
                    n_clusters = len(set(labels)) - (1 if -1 in labels else 0)
                    n_noise = list(labels).count(-1)
                    
                    if n_clusters < 2:  # 聚类数太少
                        continue
                    
                    # 计算评估指标（排除噪声点）
                    if n_clusters > 1 and n_noise < len(labels) * 0.5:  # 噪声点不超过50%
                        mask = labels != -1
                        if mask.sum() > n_clusters:
                            silhouette = silhouette_score(data[mask], labels[mask])
                            
                            results[f"eps_{eps}_min_{min_samples}"] = {
                                'model': dbscan,
                                'labels': labels,
                                'eps': eps,
                                'min_samples': min_samples,
                                'n_clusters': n_clusters,
                                'n_noise': n_noise,
                                'noise_ratio': n_noise / len(labels),
                                'silhouette_score': silhouette
                            }
                            
                            # 选择最佳参数
                            if silhouette > best_score:
                                best_score = silhouette
                                best_params = (eps, min_samples)
                            
                            logger.info(f"DBSCAN eps={eps}, min_samples={min_samples}: "
                                      f"聚类数={n_clusters}, 噪声比例={n_noise/len(labels):.2%}, "
                                      f"轮廓系数={silhouette:.3f}")
                
                except Exception as e:
                    logger.error(f"DBSCAN聚类失败 (eps={eps}, min_samples={min_samples}): {e}")
                    continue
        
        self.log_clustering_operation("DBSCAN clustering", {
            'parameter_combinations_tested': len(eps_range) * len(min_samples_range),
            'successful_combinations': len(results),
            'best_params': best_params,
            'best_silhouette_score': best_score
        })
        
        return results, best_params
    
    def perform_hdbscan_clustering(self, data: pd.DataFrame, 
                                 min_cluster_size_range: List[int] = None) -> Dict:
        """执行HDBSCAN聚类"""
        logger.info("执行HDBSCAN聚类...")
        
        if min_cluster_size_range is None:
            min_cluster_size_range = [5, 10, 15, 20, 30]
        
        results = {}
        best_params = None
        best_score = -1
        
        for min_cluster_size in min_cluster_size_range:
            try:
                hdb = hdbscan.HDBSCAN(
                    min_cluster_size=min_cluster_size,
                    min_samples=max(1, min_cluster_size // 2),
                    metric='euclidean'
                )
                labels = hdb.fit_predict(data)
                
                # 检查聚类结果
                n_clusters = len(set(labels)) - (1 if -1 in labels else 0)
                n_noise = list(labels).count(-1)
                
                if n_clusters < 2:
                    continue
                
                # 计算评估指标
                if n_clusters > 1 and n_noise < len(labels) * 0.5:
                    mask = labels != -1
                    if mask.sum() > n_clusters:
                        silhouette = silhouette_score(data[mask], labels[mask])
                        
                        results[f"min_size_{min_cluster_size}"] = {
                            'model': hdb,
                            'labels': labels,
                            'min_cluster_size': min_cluster_size,
                            'n_clusters': n_clusters,
                            'n_noise': n_noise,
                            'noise_ratio': n_noise / len(labels),
                            'silhouette_score': silhouette,
                            'cluster_persistence': hdb.cluster_persistence_ if hasattr(hdb, 'cluster_persistence_') else None
                        }
                        
                        if silhouette > best_score:
                            best_score = silhouette
                            best_params = min_cluster_size
                        
                        logger.info(f"HDBSCAN min_cluster_size={min_cluster_size}: "
                                  f"聚类数={n_clusters}, 噪声比例={n_noise/len(labels):.2%}, "
                                  f"轮廓系数={silhouette:.3f}")
            
            except Exception as e:
                logger.error(f"HDBSCAN聚类失败 (min_cluster_size={min_cluster_size}): {e}")
                continue
        
        self.log_clustering_operation("HDBSCAN clustering", {
            'min_cluster_sizes_tested': len(min_cluster_size_range),
            'successful_attempts': len(results),
            'best_min_cluster_size': best_params,
            'best_silhouette_score': best_score
        })
        
        return results, best_params
    
    def analyze_clusters(self, df: pd.DataFrame, labels: np.ndarray, 
                        feature_names: List[str]) -> Dict:
        """分析聚类结果"""
        logger.info("分析聚类结果...")
        
        # 添加聚类标签到数据
        df_with_clusters = df.copy()
        df_with_clusters['cluster'] = labels
        
        analysis = {
            'cluster_sizes': {},
            'cluster_characteristics': {},
            'feature_importance': {},
            'geographic_distribution': {},
            'cuisine_distribution': {},
            'star_distribution': {}
        }
        
        # 聚类大小分布
        unique_labels = set(labels)
        for label in unique_labels:
            cluster_size = np.sum(labels == label)
            analysis['cluster_sizes'][f'cluster_{label}'] = int(cluster_size)
        
        # 每个聚类的特征统计
        for label in unique_labels:
            if label == -1:  # 噪声点
                continue
                
            cluster_mask = labels == label
            cluster_data = df_with_clusters[cluster_mask]
            
            characteristics = {}
            
            # 数值特征统计
            if 'stars' in df.columns:
                characteristics['avg_stars'] = float(cluster_data['stars'].mean())
                characteristics['star_std'] = float(cluster_data['stars'].std())
            
            if 'price_numeric' in df.columns:
                characteristics['avg_price'] = float(cluster_data['price_numeric'].mean())
            
            if 'year' in df.columns:
                characteristics['avg_year'] = float(cluster_data['year'].mean())
                characteristics['year_range'] = f"{cluster_data['year'].min()}-{cluster_data['year'].max()}"
            
            # 地理分布
            if 'continent' in df.columns:
                continent_dist = cluster_data['continent'].value_counts().to_dict()
                characteristics['continent_distribution'] = continent_dist
            
            if 'city' in df.columns:
                top_cities = cluster_data['city'].value_counts().head(5).to_dict()
                characteristics['top_cities'] = top_cities
            
            # 菜系分布
            if 'cuisine' in df.columns:
                cuisine_dist = cluster_data['cuisine'].value_counts().head(5).to_dict()
                characteristics['cuisine_distribution'] = cuisine_dist
            
            analysis['cluster_characteristics'][f'cluster_{label}'] = characteristics
        
        # 整体分布分析
        if 'continent' in df.columns:
            for continent in df['continent'].unique():
                continent_clusters = df_with_clusters[df_with_clusters['continent'] == continent]['cluster'].value_counts()
                analysis['geographic_distribution'][continent] = continent_clusters.to_dict()
        
        if 'cuisine' in df.columns:
            for cuisine in df['cuisine'].value_counts().head(10).index:
                cuisine_clusters = df_with_clusters[df_with_clusters['cuisine'] == cuisine]['cluster'].value_counts()
                analysis['cuisine_distribution'][cuisine] = cuisine_clusters.to_dict()
        
        if 'stars' in df.columns:
            for star in df['stars'].unique():
                star_clusters = df_with_clusters[df_with_clusters['stars'] == star]['cluster'].value_counts()
                analysis['star_distribution'][f'{star}_star'] = star_clusters.to_dict()
        
        self.log_clustering_operation("Analyze clusters", {
            'total_clusters': len(unique_labels) - (1 if -1 in unique_labels else 0),
            'noise_points': int(np.sum(labels == -1)) if -1 in unique_labels else 0,
            'largest_cluster_size': max(analysis['cluster_sizes'].values()) if analysis['cluster_sizes'] else 0,
            'smallest_cluster_size': min([v for k, v in analysis['cluster_sizes'].items() if k != 'cluster_-1']) if analysis['cluster_sizes'] else 0
        })
        
        return analysis
    
    def create_cluster_visualizations(self, data: pd.DataFrame, labels: np.ndarray, 
                                    feature_names: List[str]) -> Dict:
        """创建聚类可视化"""
        logger.info("创建聚类可视化...")
        
        visualizations = {}
        
        try:
            # PCA降维可视化
            pca = PCA(n_components=2)
            data_pca = pca.fit_transform(data)
            
            visualizations['pca'] = {
                'data': data_pca,
                'labels': labels,
                'explained_variance_ratio': pca.explained_variance_ratio_.tolist(),
                'feature_importance': dict(zip(feature_names, pca.components_[0]))
            }
            
            # t-SNE降维可视化（如果数据不太大）
            if len(data) <= 1000:
                tsne = TSNE(n_components=2, random_state=42, perplexity=min(30, len(data)//4))
                data_tsne = tsne.fit_transform(data)
                
                visualizations['tsne'] = {
                    'data': data_tsne,
                    'labels': labels
                }
            
            self.log_clustering_operation("Create visualizations", {
                'pca_explained_variance': f"{sum(pca.explained_variance_ratio_):.3f}",
                'tsne_created': 'tsne' in visualizations,
                'total_visualizations': len(visualizations)
            })
            
        except Exception as e:
            logger.error(f"创建可视化时出错: {e}")
        
        return visualizations
    
    def find_optimal_clusters(self, data: pd.DataFrame, feature_names: List[str]) -> Dict:
        """寻找最优聚类方案"""
        logger.info("寻找最优聚类方案...")
        
        all_results = {}
        
        # 1. K-means聚类
        try:
            kmeans_results, best_k = self.perform_kmeans_clustering(data)
            all_results['kmeans'] = {
                'results': kmeans_results,
                'best_params': {'k': best_k},
                'best_result': kmeans_results.get(best_k)
            }
        except Exception as e:
            logger.error(f"K-means聚类失败: {e}")
        
        # 2. DBSCAN聚类
        try:
            dbscan_results, best_dbscan_params = self.perform_dbscan_clustering(data)
            all_results['dbscan'] = {
                'results': dbscan_results,
                'best_params': {'eps': best_dbscan_params[0], 'min_samples': best_dbscan_params[1]} if best_dbscan_params else None,
                'best_result': dbscan_results.get(f"eps_{best_dbscan_params[0]}_min_{best_dbscan_params[1]}") if best_dbscan_params else None
            }
        except Exception as e:
            logger.error(f"DBSCAN聚类失败: {e}")
        
        # 3. HDBSCAN聚类
        try:
            hdbscan_results, best_hdbscan_params = self.perform_hdbscan_clustering(data)
            all_results['hdbscan'] = {
                'results': hdbscan_results,
                'best_params': {'min_cluster_size': best_hdbscan_params} if best_hdbscan_params else None,
                'best_result': hdbscan_results.get(f"min_size_{best_hdbscan_params}") if best_hdbscan_params else None
            }
        except Exception as e:
            logger.error(f"HDBSCAN聚类失败: {e}")
        
        # 选择最佳算法
        best_algorithm = None
        best_score = -1
        
        for algorithm, results in all_results.items():
            if results.get('best_result') and 'silhouette_score' in results['best_result']:
                score = results['best_result']['silhouette_score']
                if score > best_score:
                    best_score = score
                    best_algorithm = algorithm
        
        self.log_clustering_operation("Find optimal clusters", {
            'algorithms_tested': list(all_results.keys()),
            'best_algorithm': best_algorithm,
            'best_silhouette_score': best_score,
            'total_experiments': sum(len(results.get('results', {})) for results in all_results.values())
        })
        
        return all_results, best_algorithm
    
    def process_clustering(self, df: pd.DataFrame) -> Dict:
        """执行完整的聚类分析流程"""
        logger.info("开始完整聚类分析流程...")
        
        # 1. 准备特征
        clustering_data, feature_names = self.prepare_clustering_features(df)
        
        # 2. 寻找最优聚类
        all_results, best_algorithm = self.find_optimal_clusters(clustering_data, feature_names)
        
        # 3. 分析最佳聚类结果
        analysis_results = {}
        visualization_results = {}
        
        if best_algorithm and all_results[best_algorithm]['best_result']:
            best_labels = all_results[best_algorithm]['best_result']['labels']
            
            # 分析聚类
            analysis_results = self.analyze_clusters(df, best_labels, feature_names)
            
            # 创建可视化
            visualization_results = self.create_cluster_visualizations(
                clustering_data, best_labels, feature_names
            )
        
        # 整合结果
        final_results = {
            'clustering_experiments': all_results,
            'best_algorithm': best_algorithm,
            'cluster_analysis': analysis_results,
            'visualizations': visualization_results,
            'feature_names': feature_names,
            'processing_log': self.analysis_log
        }
        
        self.log_clustering_operation("Clustering process completed", {
            'best_algorithm': best_algorithm,
            'total_experiments': len(self.analysis_log),
            'features_used': len(feature_names),
            'analysis_completed': bool(analysis_results)
        })
        
        return final_results


def main():
    """主函数：执行聚类分析流程"""
    logger.info("开始聚类分析主流程...")
    
    try:
        # 加载特征工程后的数据
        features_path = path_manager.get_processed_data_path("features.joblib")
        
        if not features_path.exists():
            logger.error("特征工程数据文件不存在，请先运行特征工程")
            return
        
        df = joblib.load(features_path)
        logger.info(f"加载特征数据: {df.shape[0]} 条记录, {df.shape[1]} 个特征")
        
        # 执行聚类分析
        clusterer = RestaurantClusterer()
        clustering_results = clusterer.process_clustering(df)
        
        # 保存聚类结果
        clusters_path = path_manager.get_processed_data_path("clusters.joblib")
        joblib.dump(clustering_results, clusters_path)
        logger.info(f"聚类结果已保存: {clusters_path}")
        
        # 保存聚类分析报告
        import json
        report_path = path_manager.get_processed_data_path("clustering_report.json")
        
        # 转换numpy数组为列表以便JSON序列化
        json_results = {}
        for key, value in clustering_results.items():
            if key == 'visualizations':
                # 简化可视化数据
                json_results[key] = {
                    'pca_available': 'pca' in value,
                    'tsne_available': 'tsne' in value,
                    'pca_explained_variance': value.get('pca', {}).get('explained_variance_ratio', [])
                }
            elif key == 'clustering_experiments':
                # 简化实验数据
                json_results[key] = {
                    algorithm: {
                        'best_params': data.get('best_params'),
                        'best_score': data.get('best_result', {}).get('silhouette_score') if data.get('best_result') else None,
                        'experiment_count': len(data.get('results', {}))
                    }
                    for algorithm, data in value.items()
                }
            else:
                json_results[key] = value
        
        with open(report_path, 'w', encoding='utf-8') as f:
            json.dump(json_results, f, indent=2, ensure_ascii=False, default=str)
        
        logger.info(f"聚类分析报告已保存: {report_path}")
        
        # 缓存数据
        cache_manager.set_cache("clustering_results", clustering_results)
        
        logger.info("聚类分析流程完成!")
        
        if clustering_results['best_algorithm']:
            best_result = clustering_results['clustering_experiments'][clustering_results['best_algorithm']]['best_result']
            logger.info(f"最佳算法: {clustering_results['best_algorithm']}")
            logger.info(f"最佳轮廓系数: {best_result['silhouette_score']:.3f}")
            logger.info(f"聚类数: {len(set(best_result['labels'])) - (1 if -1 in best_result['labels'] else 0)}")
        
        return clustering_results
        
    except Exception as e:
        logger.error(f"聚类分析过程中发生错误: {e}")
        raise


if __name__ == "__main__":
    main() 