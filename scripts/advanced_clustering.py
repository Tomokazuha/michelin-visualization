#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""
高级米其林餐厅聚类分析模块
包含深度特征工程、多算法对比、稳定性评估和丰富可视化
"""

import os
import sys
import json
import warnings
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from pathlib import Path
import joblib
from typing import Dict, List, Tuple, Optional, Any
from datetime import datetime

# 机器学习库
from sklearn.preprocessing import StandardScaler, RobustScaler, MinMaxScaler
from sklearn.decomposition import PCA, TruncatedSVD
from sklearn.manifold import TSNE
from sklearn.cluster import (
    KMeans, DBSCAN, AgglomerativeClustering, 
    SpectralClustering, OPTICS, Birch
)
from sklearn.mixture import GaussianMixture
from sklearn.metrics import (
    silhouette_score, calinski_harabasz_score, davies_bouldin_score,
    adjusted_rand_score, adjusted_mutual_info_score
)
from sklearn.model_selection import cross_val_score
from sklearn.ensemble import IsolationForest
from sklearn.feature_selection import SelectKBest, f_classif, mutual_info_classif

# 聚类评估和可视化
try:
    import plotly.express as px
    import plotly.graph_objects as go
    from plotly.subplots import make_subplots
    import plotly.figure_factory as ff
    PLOTLY_AVAILABLE = True
except ImportError:
    print("警告: plotly未安装，3D交互式可视化功能将被禁用")
    PLOTLY_AVAILABLE = False

# 忽略警告
warnings.filterwarnings('ignore')

# 添加项目根目录到Python路径
sys.path.append(str(Path(__file__).parent.parent))
from scripts.utils import load_restaurants, preprocess_restaurant_data, setup_directories

# 设置中文字体
plt.rcParams['font.sans-serif'] = ['SimHei', 'Arial Unicode MS', 'DejaVu Sans']
plt.rcParams['axes.unicode_minus'] = False

# 设置目录
project_root = Path(__file__).parent.parent
data_dir = project_root / "data"
raw_data_dir = data_dir / "raw"
processed_dir = data_dir / "processed"
output_dir = data_dir / "output"


class AdvancedFeatureEngineer:
    """高级特征工程器"""
    
    def __init__(self):
        self.feature_importance = {}
        self.feature_correlations = {}
        self.created_features = []
    
    def create_business_features(self, df: pd.DataFrame) -> pd.DataFrame:
        """创建业务相关的高级特征"""
        print("创建业务特征...")
        
        # 1. 品质指标
        if 'stars' in df.columns and 'price_level' in df.columns:
            # 性价比评分 (星级/价格比)
            df['value_score'] = df['stars'] / (df['price_level'] + 0.1)
            
            # 奢华程度 (星级 * 价格)
            df['luxury_score'] = df['stars'] * df['price_level']
            
            self.created_features.extend(['value_score', 'luxury_score'])
        
        # 2. 地理集聚特征
        if 'latitude' in df.columns and 'longitude' in df.columns:
            # 计算到市中心的距离
            df['distance_to_center'] = self._calculate_distance_to_center(df)
            
            # 餐厅密度特征
            df['local_density'] = self._calculate_local_density(df)
            
            self.created_features.extend(['distance_to_center', 'local_density'])
        
        # 3. 菜系复杂度特征
        if 'cuisine' in df.columns:
            # 菜系稀有度
            cuisine_counts = df['cuisine'].value_counts()
            df['cuisine_rarity'] = df['cuisine'].map(lambda x: 1 / (cuisine_counts.get(x, 1) + 1))
            
            # 菜系类型多样性
            df['cuisine_diversity'] = df['cuisine'].apply(self._calculate_cuisine_diversity)
            
            self.created_features.extend(['cuisine_rarity', 'cuisine_diversity'])
        
        # 4. 区域竞争程度
        if 'region' in df.columns:
            region_stats = df.groupby('region').agg({
                'stars': ['mean', 'std', 'count'],
                'price_level': ['mean', 'std'] if 'price_level' in df.columns else None
            }).fillna(0)
            
            # 展平多级索引
            region_stats.columns = ['_'.join(col).strip() for col in region_stats.columns]
            
            # 区域竞争强度
            df['region_competition'] = df['region'].map(region_stats['stars_count'])
            df['region_quality_std'] = df['region'].map(region_stats['stars_std'])
            
            self.created_features.extend(['region_competition', 'region_quality_std'])
        
        return df
    
    def _calculate_distance_to_center(self, df: pd.DataFrame) -> pd.Series:
        """计算到各城市中心的距离"""
        if 'region' in df.columns:
            # 计算每个区域的中心点
            region_centers = df.groupby('region')[['latitude', 'longitude']].mean()
            
            distances = []
            for _, row in df.iterrows():
                if row['region'] in region_centers.index:
                    center_lat = region_centers.loc[row['region'], 'latitude']
                    center_lon = region_centers.loc[row['region'], 'longitude']
                    
                    # 简化的距离计算
                    dist = np.sqrt((row['latitude'] - center_lat)**2 + 
                                 (row['longitude'] - center_lon)**2)
                    distances.append(dist)
                else:
                    distances.append(0)
            
            return pd.Series(distances, index=df.index)
        else:
            return pd.Series(0, index=df.index)
    
    def _calculate_local_density(self, df: pd.DataFrame, radius=0.1) -> pd.Series:
        """计算局部餐厅密度"""
        densities = []
        
        for i, row in df.iterrows():
            # 计算在指定半径内的餐厅数量
            distances = np.sqrt((df['latitude'] - row['latitude'])**2 + 
                              (df['longitude'] - row['longitude'])**2)
            nearby_count = (distances <= radius).sum() - 1  # 减去自己
            densities.append(nearby_count)
        
        return pd.Series(densities, index=df.index)
    
    def _calculate_cuisine_diversity(self, cuisine_str: str) -> float:
        """计算菜系多样性指数"""
        if pd.isna(cuisine_str) or cuisine_str == '':
            return 0
        
        # 分割菜系类型
        cuisines = str(cuisine_str).split(',')
        cuisines = [c.strip() for c in cuisines if c.strip()]
        
        # 使用类型数量作为多样性指标
        return len(set(cuisines))
    
    def create_interaction_features(self, df: pd.DataFrame) -> pd.DataFrame:
        """创建特征交互项"""
        print("创建交互特征...")
        
        # 星级和价格的交互
        if 'stars' in df.columns and 'price_level' in df.columns:
            df['stars_price_interaction'] = df['stars'] * df['price_level']
            self.created_features.append('stars_price_interaction')
        
        # 地理和质量的交互
        if 'local_density' in df.columns and 'stars' in df.columns:
            df['density_quality_interaction'] = df['local_density'] * df['stars']
            self.created_features.append('density_quality_interaction')
        
        return df
    
    def select_optimal_features(self, X: np.ndarray, feature_names: List[str], 
                              y: Optional[np.ndarray] = None, k: int = 20) -> Tuple[np.ndarray, List[str]]:
        """选择最优特征子集"""
        print(f"从{len(feature_names)}个特征中选择最优的{k}个特征...")
        
        if y is not None:
            # 有监督特征选择
            selector = SelectKBest(score_func=mutual_info_classif, k=min(k, len(feature_names)))
            X_selected = selector.fit_transform(X, y)
            selected_features = [feature_names[i] for i in selector.get_support(indices=True)]
        else:
            # 无监督特征选择 - 基于方差
            variances = np.var(X, axis=0)
            top_k_indices = np.argsort(variances)[-k:]
            X_selected = X[:, top_k_indices]
            selected_features = [feature_names[i] for i in top_k_indices]
        
        print(f"选择的特征: {selected_features}")
        return X_selected, selected_features


class ClusteringEvaluator:
    """聚类评估器"""
    
    def __init__(self):
        self.evaluation_metrics = {}
        self.stability_scores = {}
    
    def comprehensive_evaluation(self, X: np.ndarray, labels: np.ndarray, 
                                algorithm_name: str) -> Dict[str, float]:
        """综合评估聚类结果"""
        metrics = {}
        
        # 排除噪声点
        valid_mask = labels != -1
        if np.sum(valid_mask) < 2:
            return {'error': 'insufficient_valid_points'}
        
        X_valid = X[valid_mask]
        labels_valid = labels[valid_mask]
        
        # 确保至少有2个聚类
        if len(np.unique(labels_valid)) < 2:
            return {'error': 'insufficient_clusters'}
        
        try:
            # 轮廓系数
            metrics['silhouette_score'] = silhouette_score(X_valid, labels_valid)
            
            # Calinski-Harabasz指数
            metrics['calinski_harabasz_score'] = calinski_harabasz_score(X_valid, labels_valid)
            
            # Davies-Bouldin指数
            metrics['davies_bouldin_score'] = davies_bouldin_score(X_valid, labels_valid)
            
            # 聚类数量
            metrics['n_clusters'] = len(np.unique(labels_valid))
            
            # 噪声点比例
            metrics['noise_ratio'] = 1 - np.sum(valid_mask) / len(labels)
            
            # 聚类大小均衡性
            cluster_sizes = [np.sum(labels_valid == i) for i in np.unique(labels_valid)]
            metrics['balance_score'] = 1 - np.std(cluster_sizes) / (np.mean(cluster_sizes) + 1e-8)
            
            # 综合评分
            metrics['composite_score'] = self._calculate_composite_score(metrics)
            
        except Exception as e:
            print(f"评估出错: {e}")
            return {'error': str(e)}
        
        return metrics
    
    def _calculate_composite_score(self, metrics: Dict[str, float]) -> float:
        """计算综合评分"""
        # 标准化各项指标到[0,1]区间
        silhouette_norm = (metrics['silhouette_score'] + 1) / 2  # [-1,1] -> [0,1]
        calinski_norm = min(metrics['calinski_harabasz_score'] / 1000, 1)  # 限制在[0,1]
        davies_norm = 1 / (1 + metrics['davies_bouldin_score'])  # 越小越好，转换为越大越好
        balance_norm = metrics['balance_score']
        noise_penalty = 1 - metrics['noise_ratio']
        
        # 加权平均
        composite = (
            0.3 * silhouette_norm +
            0.2 * calinski_norm +
            0.2 * davies_norm +
            0.15 * balance_norm +
            0.15 * noise_penalty
        )
        
        return composite
    
    def stability_analysis(self, X: np.ndarray, clustering_func, n_runs: int = 10) -> float:
        """稳定性分析"""
        print(f"进行{n_runs}次稳定性分析...")
        
        all_labels = []
        
        for i in range(n_runs):
            # 添加小量噪声
            X_noisy = X + np.random.normal(0, 0.01 * np.std(X), X.shape)
            labels = clustering_func(X_noisy)
            all_labels.append(labels)
        
        # 计算成对的ARI
        ari_scores = []
        for i in range(n_runs):
            for j in range(i + 1, n_runs):
                ari = adjusted_rand_score(all_labels[i], all_labels[j])
                ari_scores.append(ari)
        
        stability_score = np.mean(ari_scores)
        print(f"稳定性评分: {stability_score:.3f}")
        
        return stability_score


class AdvancedClusteringPipeline:
    """高级聚类分析流水线"""
    
    def __init__(self):
        self.feature_engineer = AdvancedFeatureEngineer()
        self.evaluator = ClusteringEvaluator()
        self.results = {}
        self.best_model = None
    
    def extract_enhanced_features(self, df: pd.DataFrame) -> Tuple[np.ndarray, List[str], pd.DataFrame]:
        """提取增强特征"""
        print("开始高级特征工程...")
        
        # 基础特征
        features = []
        
        # 1. 数值特征
        numeric_features = ['stars', 'price_level', 'latitude', 'longitude']
        for feat in numeric_features:
            if feat in df.columns:
                features.append(feat)
        
        # 2. 业务特征
        df = self.feature_engineer.create_business_features(df)
        features.extend(self.feature_engineer.created_features)
        
        # 3. 分类特征编码
        categorical_features = ['cuisine', 'region']
        for feat in categorical_features:
            if feat in df.columns:
                # 获取主要类别
                top_categories = df[feat].value_counts().head(10).index
                for category in top_categories:
                    feature_name = f'{feat}_{category}'
                    df[feature_name] = (df[feat] == category).astype(int)
                    features.append(feature_name)
        
        # 4. 交互特征
        df = self.feature_engineer.create_interaction_features(df)
        features.extend([f for f in self.feature_engineer.created_features 
                        if f not in features])
        
        # 创建特征矩阵
        print(f"总共提取了{len(features)}个特征")
        X = df[features].fillna(0).values
        
        return X, features, df
    
    def optimize_clustering_algorithms(self, X: np.ndarray, feature_names: List[str]) -> Dict:
        """优化多种聚类算法"""
        print("开始多算法聚类优化...")
        
        # 数据预处理
        scaler = RobustScaler()  # 使用RobustScaler，对异常值更鲁棒
        X_scaled = scaler.fit_transform(X)
        
        # 异常值检测和清理
        isolation_forest = IsolationForest(contamination=0.1, random_state=42)
        outlier_mask = isolation_forest.fit_predict(X_scaled) == 1
        X_clean = X_scaled[outlier_mask]
        
        print(f"清理了{len(X_scaled) - len(X_clean)}个异常值")
        
        algorithms = {}
        
        # 1. 优化K-means
        print("优化K-means...")
        algorithms['kmeans'] = self._optimize_kmeans(X_clean)
        
        # 2. 优化DBSCAN
        print("优化DBSCAN...")
        algorithms['dbscan'] = self._optimize_dbscan(X_clean)
        
        # 3. 优化Gaussian Mixture
        print("优化高斯混合模型...")
        algorithms['gaussian_mixture'] = self._optimize_gaussian_mixture(X_clean)
        
        # 4. 优化层次聚类
        print("优化层次聚类...")
        algorithms['hierarchical'] = self._optimize_hierarchical(X_clean)
        
        # 5. 谱聚类
        print("优化谱聚类...")
        algorithms['spectral'] = self._optimize_spectral(X_clean)
        
        return {
            'algorithms': algorithms,
            'clean_data': X_clean,
            'outlier_mask': outlier_mask,
            'scaler': scaler
        }
    
    def _optimize_kmeans(self, X: np.ndarray) -> Dict:
        """优化K-means参数"""
        best_score = -1
        best_params = None
        best_result = None
        
        # 使用肘部法则和轮廓系数确定最优k
        for k in range(3, min(20, len(X) // 10)):
            kmeans = KMeans(n_clusters=k, random_state=42, n_init=10)
            labels = kmeans.fit_predict(X)
            
            metrics = self.evaluator.comprehensive_evaluation(X, labels, 'kmeans')
            if 'composite_score' in metrics and metrics['composite_score'] > best_score:
                best_score = metrics['composite_score']
                best_params = {'n_clusters': k}
                best_result = {
                    'model': kmeans,
                    'labels': labels,
                    'metrics': metrics
                }
        
        return best_result
    
    def _optimize_dbscan(self, X: np.ndarray) -> Dict:
        """优化DBSCAN参数"""
        best_score = -1
        best_result = None
        
        # 更精细的参数搜索
        eps_range = np.linspace(0.3, 2.0, 10)
        min_samples_range = [3, 5, 8, 10, 15]
        
        for eps in eps_range:
            for min_samples in min_samples_range:
                dbscan = DBSCAN(eps=eps, min_samples=min_samples)
                labels = dbscan.fit_predict(X)
                
                # 确保有足够的聚类
                n_clusters = len(set(labels)) - (1 if -1 in labels else 0)
                noise_ratio = np.sum(labels == -1) / len(labels)
                
                if n_clusters >= 3 and noise_ratio < 0.3:  # 更严格的噪声控制
                    metrics = self.evaluator.comprehensive_evaluation(X, labels, 'dbscan')
                    if 'composite_score' in metrics and metrics['composite_score'] > best_score:
                        best_score = metrics['composite_score']
                        best_result = {
                            'model': dbscan,
                            'labels': labels,
                            'metrics': metrics,
                            'params': {'eps': eps, 'min_samples': min_samples}
                        }
        
        return best_result
    
    def _optimize_gaussian_mixture(self, X: np.ndarray) -> Dict:
        """优化高斯混合模型"""
        best_score = -1
        best_result = None
        
        for n_components in range(3, min(15, len(X) // 20)):
            for covariance_type in ['full', 'tied', 'diag']:
                try:
                    gmm = GaussianMixture(
                        n_components=n_components,
                        covariance_type=covariance_type,
                        random_state=42,
                        max_iter=200
                    )
                    labels = gmm.fit_predict(X)
                    
                    metrics = self.evaluator.comprehensive_evaluation(X, labels, 'gaussian_mixture')
                    if 'composite_score' in metrics and metrics['composite_score'] > best_score:
                        best_score = metrics['composite_score']
                        best_result = {
                            'model': gmm,
                            'labels': labels,
                            'metrics': metrics,
                            'params': {'n_components': n_components, 'covariance_type': covariance_type}
                        }
                except:
                    continue
        
        return best_result
    
    def _optimize_hierarchical(self, X: np.ndarray) -> Dict:
        """优化层次聚类"""
        best_score = -1
        best_result = None
        
        for n_clusters in range(3, min(15, len(X) // 10)):
            for linkage in ['ward', 'complete', 'average']:
                try:
                    hc = AgglomerativeClustering(n_clusters=n_clusters, linkage=linkage)
                    labels = hc.fit_predict(X)
                    
                    metrics = self.evaluator.comprehensive_evaluation(X, labels, 'hierarchical')
                    if 'composite_score' in metrics and metrics['composite_score'] > best_score:
                        best_score = metrics['composite_score']
                        best_result = {
                            'model': hc,
                            'labels': labels,
                            'metrics': metrics,
                            'params': {'n_clusters': n_clusters, 'linkage': linkage}
                        }
                except:
                    continue
        
        return best_result
    
    def _optimize_spectral(self, X: np.ndarray) -> Dict:
        """优化谱聚类"""
        best_score = -1
        best_result = None
        
        for n_clusters in range(3, min(12, len(X) // 15)):
            try:
                spectral = SpectralClustering(
                    n_clusters=n_clusters,
                    random_state=42,
                    affinity='rbf'
                )
                labels = spectral.fit_predict(X)
                
                metrics = self.evaluator.comprehensive_evaluation(X, labels, 'spectral')
                if 'composite_score' in metrics and metrics['composite_score'] > best_score:
                    best_score = metrics['composite_score']
                    best_result = {
                        'model': spectral,
                        'labels': labels,
                        'metrics': metrics,
                        'params': {'n_clusters': n_clusters}
                    }
            except:
                continue
        
        return best_result
    
    def select_best_algorithm(self, algorithm_results: Dict) -> Dict:
        """选择最佳算法"""
        best_algorithm = None
        best_score = -1
        
        print("\n算法评估结果:")
        for alg_name, result in algorithm_results['algorithms'].items():
            if result and 'metrics' in result:
                score = result['metrics'].get('composite_score', 0)
                print(f"{alg_name}: {score:.3f}")
                
                if score > best_score:
                    best_score = score
                    best_algorithm = alg_name
        
        print(f"\n选择的最佳算法: {best_algorithm} (评分: {best_score:.3f})")
        
        return {
            'best_algorithm': best_algorithm,
            'best_result': algorithm_results['algorithms'][best_algorithm],
            'all_results': algorithm_results
        }


class AdvancedVisualizer:
    """高级可视化器"""
    
    def __init__(self):
        if PLOTLY_AVAILABLE:
            self.color_palette = px.colors.qualitative.Set3
        else:
            self.color_palette = None
    
    def create_comprehensive_visualizations(self, X: np.ndarray, labels: np.ndarray, 
                                          df: pd.DataFrame, feature_names: List[str],
                                          output_dir: Path):
        """创建全面的可视化分析"""
        print("创建可视化分析...")
        
        # 1. PCA可视化
        self._create_pca_visualization(X, labels, df, output_dir)
        
        # 2. t-SNE可视化
        self._create_tsne_visualization(X, labels, df, output_dir)
        
        # 3. 聚类特征分析
        self._create_cluster_analysis_plots(X, labels, df, feature_names, output_dir)
        
        # 4. 交互式3D可视化
        self._create_interactive_3d_plot(X, labels, df, output_dir)
        
        # 5. 聚类热力图
        self._create_cluster_heatmap(X, labels, feature_names, output_dir)
    
    def _create_pca_visualization(self, X: np.ndarray, labels: np.ndarray, 
                                 df: pd.DataFrame, output_dir: Path):
        """创建PCA可视化"""
        pca = PCA(n_components=2, random_state=42)
        X_pca = pca.fit_transform(X)
        
        plt.figure(figsize=(12, 8))
        scatter = plt.scatter(X_pca[:, 0], X_pca[:, 1], c=labels, 
                             cmap='tab20', alpha=0.7, s=50)
        plt.colorbar(scatter)
        plt.title('PCA降维聚类可视化', fontsize=16)
        plt.xlabel(f'主成分1 ({pca.explained_variance_ratio_[0]:.1%} 方差)', fontsize=12)
        plt.ylabel(f'主成分2 ({pca.explained_variance_ratio_[1]:.1%} 方差)', fontsize=12)
        
        # 添加聚类中心
        unique_labels = np.unique(labels[labels != -1])
        for label in unique_labels:
            cluster_points = X_pca[labels == label]
            center = np.mean(cluster_points, axis=0)
            plt.scatter(center[0], center[1], c='red', marker='x', s=200, linewidths=3)
        
        plt.grid(True, alpha=0.3)
        plt.tight_layout()
        plt.savefig(output_dir / 'pca_clustering.png', dpi=300, bbox_inches='tight')
        plt.close()
    
    def _create_tsne_visualization(self, X: np.ndarray, labels: np.ndarray, 
                                  df: pd.DataFrame, output_dir: Path):
        """创建t-SNE可视化"""
        if len(X) > 1000:  # 对大数据集进行采样
            sample_indices = np.random.choice(len(X), 1000, replace=False)
            X_sample = X[sample_indices]
            labels_sample = labels[sample_indices]
        else:
            X_sample = X
            labels_sample = labels
        
        tsne = TSNE(n_components=2, random_state=42, perplexity=min(30, len(X_sample)//4))
        X_tsne = tsne.fit_transform(X_sample)
        
        plt.figure(figsize=(12, 8))
        scatter = plt.scatter(X_tsne[:, 0], X_tsne[:, 1], c=labels_sample, 
                             cmap='tab20', alpha=0.7, s=50)
        plt.colorbar(scatter)
        plt.title('t-SNE降维聚类可视化', fontsize=16)
        plt.xlabel('t-SNE 1', fontsize=12)
        plt.ylabel('t-SNE 2', fontsize=12)
        plt.grid(True, alpha=0.3)
        plt.tight_layout()
        plt.savefig(output_dir / 'tsne_clustering.png', dpi=300, bbox_inches='tight')
        plt.close()
    
    def _create_cluster_analysis_plots(self, X: np.ndarray, labels: np.ndarray, 
                                      df: pd.DataFrame, feature_names: List[str], 
                                      output_dir: Path):
        """创建聚类分析图表"""
        unique_labels = np.unique(labels[labels != -1])
        
        # 1. 聚类大小分布
        plt.figure(figsize=(10, 6))
        cluster_sizes = [np.sum(labels == label) for label in unique_labels]
        plt.bar(range(len(unique_labels)), cluster_sizes, color='skyblue', alpha=0.7)
        plt.title('聚类大小分布', fontsize=14)
        plt.xlabel('聚类ID', fontsize=12)
        plt.ylabel('餐厅数量', fontsize=12)
        plt.xticks(range(len(unique_labels)), [f'聚类{i}' for i in unique_labels])
        plt.grid(True, alpha=0.3)
        plt.tight_layout()
        plt.savefig(output_dir / 'cluster_sizes.png', dpi=300, bbox_inches='tight')
        plt.close()
        
        # 2. 特征重要性分析
        if 'stars' in df.columns:
            plt.figure(figsize=(12, 8))
            
            cluster_means = []
            for label in unique_labels:
                cluster_mask = labels == label
                cluster_mean = np.mean(X[cluster_mask], axis=0)
                cluster_means.append(cluster_mean)
            
            cluster_means = np.array(cluster_means)
            
            # 绘制热力图
            sns.heatmap(cluster_means.T, 
                       xticklabels=[f'聚类{i}' for i in unique_labels],
                       yticklabels=feature_names[:min(20, len(feature_names))],
                       cmap='RdYlBu_r', center=0, 
                       annot=False, fmt='.2f')
            plt.title('聚类特征热力图', fontsize=14)
            plt.tight_layout()
            plt.savefig(output_dir / 'cluster_features_heatmap.png', dpi=300, bbox_inches='tight')
            plt.close()
    
    def _create_interactive_3d_plot(self, X: np.ndarray, labels: np.ndarray, 
                                   df: pd.DataFrame, output_dir: Path):
        """创建交互式3D可视化"""
        if not PLOTLY_AVAILABLE:
            print("跳过3D交互式可视化（plotly未安装）")
            return
            
        # 使用PCA降到3维
        pca_3d = PCA(n_components=3, random_state=42)
        X_pca_3d = pca_3d.fit_transform(X)
        
        # 创建DataFrame用于plotly
        plot_df = pd.DataFrame({
            'PC1': X_pca_3d[:, 0],
            'PC2': X_pca_3d[:, 1],
            'PC3': X_pca_3d[:, 2],
            'Cluster': labels,
            'Restaurant': df['name'] if 'name' in df.columns else range(len(df))
        })
        
        # 创建3D散点图
        fig = px.scatter_3d(
            plot_df, x='PC1', y='PC2', z='PC3',
            color='Cluster', hover_name='Restaurant',
            title='3D聚类可视化 (PCA)',
            labels={
                'PC1': f'主成分1 ({pca_3d.explained_variance_ratio_[0]:.1%})',
                'PC2': f'主成分2 ({pca_3d.explained_variance_ratio_[1]:.1%})',
                'PC3': f'主成分3 ({pca_3d.explained_variance_ratio_[2]:.1%})'
            }
        )
        
        fig.update_layout(width=1000, height=800)
        fig.write_html(output_dir / 'interactive_3d_clustering.html')
    
    def _create_cluster_heatmap(self, X: np.ndarray, labels: np.ndarray, 
                               feature_names: List[str], output_dir: Path):
        """创建聚类热力图"""
        unique_labels = np.unique(labels[labels != -1])
        
        # 计算每个聚类的特征均值
        cluster_profiles = []
        for label in unique_labels:
            cluster_mask = labels == label
            cluster_profile = np.mean(X[cluster_mask], axis=0)
            cluster_profiles.append(cluster_profile)
        
        cluster_profiles = np.array(cluster_profiles)
        
        # 标准化以便比较
        from sklearn.preprocessing import StandardScaler
        scaler = StandardScaler()
        cluster_profiles_scaled = scaler.fit_transform(cluster_profiles.T).T
        
        plt.figure(figsize=(15, 8))
        sns.heatmap(cluster_profiles_scaled,
                   xticklabels=feature_names[:min(15, len(feature_names))],
                   yticklabels=[f'聚类{i}' for i in unique_labels],
                   cmap='RdBu_r', center=0,
                   annot=True, fmt='.2f')
        plt.title('聚类特征轮廓热力图', fontsize=16)
        plt.xlabel('特征', fontsize=12)
        plt.ylabel('聚类', fontsize=12)
        plt.xticks(rotation=45, ha='right')
        plt.tight_layout()
        plt.savefig(output_dir / 'cluster_profile_heatmap.png', dpi=300, bbox_inches='tight')
        plt.close()


def analyze_cluster_business_insights(df: pd.DataFrame, labels: np.ndarray) -> Dict:
    """分析聚类的业务洞察"""
    insights = {}
    unique_labels = np.unique(labels[labels != -1])
    
    for label in unique_labels:
        cluster_mask = labels == label
        cluster_df = df[cluster_mask]
        
        cluster_insights = {
            'size': len(cluster_df),
            'avg_stars': cluster_df['stars'].mean() if 'stars' in cluster_df.columns else None,
            'avg_price': cluster_df['price_level'].mean() if 'price_level' in cluster_df.columns else None,
            'top_cuisines': cluster_df['cuisine'].value_counts().head(3).to_dict() if 'cuisine' in cluster_df.columns else {},
            'top_regions': cluster_df['region'].value_counts().head(3).to_dict() if 'region' in cluster_df.columns else {},
            'geographic_spread': {
                'lat_range': (cluster_df['latitude'].min(), cluster_df['latitude'].max()) if 'latitude' in cluster_df.columns else None,
                'lon_range': (cluster_df['longitude'].min(), cluster_df['longitude'].max()) if 'longitude' in cluster_df.columns else None
            }
        }
        
        # 业务特征
        if 'value_score' in cluster_df.columns:
            cluster_insights['avg_value_score'] = cluster_df['value_score'].mean()
        if 'luxury_score' in cluster_df.columns:
            cluster_insights['avg_luxury_score'] = cluster_df['luxury_score'].mean()
        
        # 聚类特征描述
        if cluster_insights['avg_stars'] and cluster_insights['avg_price']:
            if cluster_insights['avg_stars'] >= 2.5 and cluster_insights['avg_price'] >= 3:
                cluster_insights['category'] = '高端奢华餐厅'
            elif cluster_insights['avg_stars'] >= 2 and cluster_insights['avg_price'] <= 2:
                cluster_insights['category'] = '高性价比餐厅'
            elif cluster_insights['avg_price'] >= 3:
                cluster_insights['category'] = '高价位餐厅'
            else:
                cluster_insights['category'] = '普通餐厅'
        
        insights[f'cluster_{label}'] = cluster_insights
    
    return insights


def save_comprehensive_results(results: Dict, output_dir: Path):
    """保存综合结果"""
    # 创建结果报告
    report = {
        'timestamp': datetime.now().isoformat(),
        'best_algorithm': results['best_algorithm'],
        'clustering_performance': results['best_result']['metrics'],
        'cluster_insights': results.get('business_insights', {}),
        'total_restaurants': results.get('total_restaurants', 0),
        'feature_count': results.get('feature_count', 0)
    }
    
    # 保存JSON报告
    with open(output_dir / 'advanced_clustering_report.json', 'w', encoding='utf-8') as f:
        json.dump(report, f, ensure_ascii=False, indent=2)
    
    # 保存完整结果
    joblib.dump(results, output_dir / 'advanced_clustering_results.joblib')
    
    print(f"综合结果已保存到 {output_dir}")


def main():
    """主函数"""
    print("开始高级米其林餐厅聚类分析...")
    
    # 设置目录
    setup_directories([processed_dir, output_dir])
    
    # 初始化流水线
    pipeline = AdvancedClusteringPipeline()
    visualizer = AdvancedVisualizer()
    
    # 1. 加载和预处理数据
    print("加载餐厅数据...")
    restaurants_df = load_restaurants(raw_data_dir)
    restaurants_df = preprocess_restaurant_data(restaurants_df)
    
    print(f"加载了{len(restaurants_df)}家餐厅的数据")
    
    # 2. 提取增强特征
    X, feature_names, enhanced_df = pipeline.extract_enhanced_features(restaurants_df)
    
    # 3. 优化聚类算法
    algorithm_results = pipeline.optimize_clustering_algorithms(X, feature_names)
    
    # 4. 选择最佳算法
    best_results = pipeline.select_best_algorithm(algorithm_results)
    
    if best_results['best_algorithm']:
        best_labels = best_results['best_result']['labels']
        
        # 将标签映射回原始数据
        full_labels = np.full(len(enhanced_df), -1)
        full_labels[algorithm_results['outlier_mask']] = best_labels
        
        enhanced_df['cluster'] = full_labels
        
        # 5. 业务洞察分析
        business_insights = analyze_cluster_business_insights(enhanced_df, full_labels)
        best_results['business_insights'] = business_insights
        best_results['total_restaurants'] = len(restaurants_df)
        best_results['feature_count'] = len(feature_names)
        
        # 6. 创建可视化
        visualizer.create_comprehensive_visualizations(
            algorithm_results['clean_data'], best_labels, 
            enhanced_df[algorithm_results['outlier_mask']], 
            feature_names, output_dir
        )
        
        # 7. 保存结果
        save_comprehensive_results(best_results, processed_dir)
        
        # 8. 输出总结
        print(f"\n=== 聚类分析完成 ===")
        print(f"最佳算法: {best_results['best_algorithm']}")
        print(f"聚类数量: {best_results['best_result']['metrics']['n_clusters']}")
        print(f"综合评分: {best_results['best_result']['metrics']['composite_score']:.3f}")
        print(f"轮廓系数: {best_results['best_result']['metrics']['silhouette_score']:.3f}")
        print(f"噪声比例: {best_results['best_result']['metrics']['noise_ratio']:.1%}")
        
        print(f"\n业务洞察:")
        for cluster_id, insights in business_insights.items():
            print(f"{cluster_id}: {insights.get('category', '未分类')} ({insights['size']}家餐厅)")
        
    else:
        print("聚类分析失败，未能找到合适的聚类结果")


if __name__ == "__main__":
    main() 