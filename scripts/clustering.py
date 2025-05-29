#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""
米其林餐厅数据聚类分析脚本
使用真实的米其林餐厅数据进行聚类分析
"""

import os
import sys
import json
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from pathlib import Path
import joblib
from sklearn.preprocessing import StandardScaler
from sklearn.decomposition import PCA
from sklearn.cluster import KMeans, DBSCAN, AgglomerativeClustering
from sklearn.metrics import silhouette_score
from sklearn.impute import SimpleImputer

# 添加项目根目录到Python路径
sys.path.append(str(Path(__file__).parent.parent))

# 导入项目自定义工具
from scripts.utils import load_restaurants, preprocess_restaurant_data, setup_directories

# 设置目录
project_root = Path(__file__).parent.parent
data_dir = project_root / "data"
raw_data_dir = data_dir / "raw"
processed_dir = data_dir / "processed"
output_dir = data_dir / "output"

def extract_features(restaurants_df):
    """
    从餐厅数据中提取用于聚类的特征
    """
    print(f"原始数据形状: {restaurants_df.shape}")
    
    # 提取数值特征
    features = []
    
    # 1. 星级 (1-3)
    if 'stars' in restaurants_df.columns:
        features.append('stars')
    
    # 2. 价格水平 (使用价格符号的数量作为指标)
    if 'price' in restaurants_df.columns:
        # 如果有价格数据，计算价格级别 (1-5)
        restaurants_df['price_level'] = restaurants_df['price'].apply(
            lambda x: len(str(x)) if isinstance(x, str) and x.startswith('¥') else 
                     (int(float(x)/500) if isinstance(x, (int, float)) or (isinstance(x, str) and x.isdigit()) else 2)
        )
        features.append('price_level')
    
    # 3. 位置信息 (经纬度)
    if 'latitude' in restaurants_df.columns and 'longitude' in restaurants_df.columns:
        features.append('latitude')
        features.append('longitude')
    
    # 4. 菜系的One-Hot编码
    if 'cuisine' in restaurants_df.columns:
        # 获取主要菜系
        restaurants_df['main_cuisine'] = restaurants_df['cuisine'].apply(
            lambda x: str(x).split(',')[0].strip() if isinstance(x, str) else 'Unknown'
        )
        
        # 只保留出现频率较高的菜系
        cuisine_counts = restaurants_df['main_cuisine'].value_counts()
        major_cuisines = cuisine_counts[cuisine_counts >= 5].index.tolist()
        
        print(f"主要菜系类型: {major_cuisines}")
        
        # 为主要菜系创建One-Hot编码
        for cuisine in major_cuisines:
            restaurants_df[f'cuisine_{cuisine}'] = (restaurants_df['main_cuisine'] == cuisine).astype(int)
            features.append(f'cuisine_{cuisine}')
    
    # 5. 区域的One-Hot编码
    if 'region' in restaurants_df.columns:
        # 获取主要区域
        region_counts = restaurants_df['region'].value_counts()
        major_regions = region_counts[region_counts >= 10].index.tolist()
        
        print(f"主要区域: {major_regions}")
        
        # 为主要区域创建One-Hot编码
        for region in major_regions:
            restaurants_df[f'region_{region}'] = (restaurants_df['region'] == region).astype(int)
            features.append(f'region_{region}')
    
    # 创建特征矩阵
    print(f"使用的特征: {features}")
    X = restaurants_df[features].copy()
    
    # 处理缺失值
    imputer = SimpleImputer(strategy='mean')
    X_imputed = imputer.fit_transform(X)
    
    return X_imputed, features, restaurants_df

def perform_clustering(X, restaurants_df, n_clusters_range=(3, 15), random_state=42):
    """
    对餐厅数据执行聚类分析，尝试多种算法和参数
    """
    # 标准化特征
    scaler = StandardScaler()
    X_scaled = scaler.fit_transform(X)
    
    # 使用PCA降维，便于可视化
    pca = PCA(n_components=2)
    X_pca = pca.fit_transform(X_scaled)
    
    print(f"PCA解释方差比: {pca.explained_variance_ratio_}")
    
    # 存储聚类实验结果
    clustering_experiments = {}
    
    # 1. K-means聚类
    kmeans_results = {}
    best_kmeans_silhouette = -1
    best_kmeans_n = 0
    
    for n in range(n_clusters_range[0], n_clusters_range[1] + 1):
        kmeans = KMeans(n_clusters=n, random_state=random_state, n_init=10)
        labels = kmeans.fit_predict(X_scaled)
        
        if len(set(labels)) > 1:  # 确保至少有两个聚类才计算轮廓系数
            silhouette_avg = silhouette_score(X_scaled, labels)
            kmeans_results[n] = {
                'silhouette_score': silhouette_avg,
                'labels': labels,
                'centers': kmeans.cluster_centers_,
                'inertia': kmeans.inertia_
            }
            
            if silhouette_avg > best_kmeans_silhouette:
                best_kmeans_silhouette = silhouette_avg
                best_kmeans_n = n
    
    if best_kmeans_n > 0:
        clustering_experiments['kmeans'] = {
            'best_n': best_kmeans_n,
            'best_silhouette': best_kmeans_silhouette,
            'best_result': kmeans_results[best_kmeans_n]
        }
    
    # 2. DBSCAN聚类 - 使用更宽松的参数范围
    dbscan_results = {}
    best_dbscan_score = -1
    best_dbscan_params = None
    
    # 调整参数范围，更关注聚类有效性而不是轮廓系数
    for eps in [0.5, 0.8, 1.0, 1.2, 1.5, 2.0, 2.5]:
        for min_samples in [3, 5, 8, 10]:
            dbscan = DBSCAN(eps=eps, min_samples=min_samples)
            labels = dbscan.fit_predict(X_scaled)
            
            # 计算有效聚类数(排除噪声点-1)
            n_clusters = len(set(labels)) - (1 if -1 in labels else 0)
            noise_ratio = np.sum(labels == -1) / len(labels)
            
            # 只考虑噪声点比例低于50%且至少有3个聚类的结果
            if n_clusters >= 3 and noise_ratio < 0.5:
                # 对于DBSCAN，我们需要排除噪声点(-1)来计算轮廓系数
                non_noise_mask = labels != -1
                if sum(non_noise_mask) > 10:  # 确保有足够的非噪声点
                    silhouette_avg = silhouette_score(X_scaled[non_noise_mask], labels[non_noise_mask])
                    
                    # 综合评分：轮廓系数 + 噪声点惩罚 + 聚类数量奖励
                    combined_score = silhouette_avg * (1 - noise_ratio) * min(1.0, n_clusters / 8)
                    
                    param_key = f"eps{eps}_min{min_samples}"
                    dbscan_results[param_key] = {
                        'silhouette_score': silhouette_avg,
                        'combined_score': combined_score,
                        'labels': labels,
                        'n_clusters': n_clusters,
                        'noise_ratio': noise_ratio,
                        'params': {'eps': eps, 'min_samples': min_samples}
                    }
                    
                    if combined_score > best_dbscan_score:
                        best_dbscan_score = combined_score
                        best_dbscan_params = param_key
                        
                    print(f"DBSCAN eps={eps}, min_samples={min_samples}: 聚类数={n_clusters}, 噪声比例={noise_ratio:.2%}, 轮廓系数={silhouette_avg:.3f}, 综合评分={combined_score:.3f}")
    
    if best_dbscan_params:
        clustering_experiments['dbscan'] = {
            'best_params': best_dbscan_params,
            'best_silhouette': dbscan_results[best_dbscan_params]['silhouette_score'],
            'best_score': best_dbscan_score,
            'best_result': dbscan_results[best_dbscan_params]
        }
    
    # 3. 层次聚类
    hc_results = {}
    best_hc_silhouette = -1
    best_hc_n = 0
    
    for n in range(n_clusters_range[0], n_clusters_range[1] + 1):
        hc = AgglomerativeClustering(n_clusters=n, linkage='ward')
        labels = hc.fit_predict(X_scaled)
        
        if len(set(labels)) > 1:
            silhouette_avg = silhouette_score(X_scaled, labels)
            hc_results[n] = {
                'silhouette_score': silhouette_avg,
                'labels': labels
            }
            
            if silhouette_avg > best_hc_silhouette:
                best_hc_silhouette = silhouette_avg
                best_hc_n = n
    
    if best_hc_n > 0:
        clustering_experiments['hierarchical'] = {
            'best_n': best_hc_n,
            'best_silhouette': best_hc_silhouette,
            'best_result': hc_results[best_hc_n]
        }
    
    # 优先选择K-means，除非其他算法明显更好
    best_algorithm = None
    best_score = -1
    
    # 评估每个算法
    algorithm_scores = {}
    
    if 'kmeans' in clustering_experiments:
        kmeans_score = clustering_experiments['kmeans']['best_silhouette']
        algorithm_scores['kmeans'] = kmeans_score
        print(f"K-means最佳评分: {kmeans_score:.3f} (聚类数: {clustering_experiments['kmeans']['best_n']})")
    
    if 'dbscan' in clustering_experiments:
        dbscan_score = clustering_experiments['dbscan']['best_score']
        algorithm_scores['dbscan'] = dbscan_score
        print(f"DBSCAN最佳评分: {dbscan_score:.3f}")
    
    if 'hierarchical' in clustering_experiments:
        hc_score = clustering_experiments['hierarchical']['best_silhouette']
        algorithm_scores['hierarchical'] = hc_score
        print(f"层次聚类最佳评分: {hc_score:.3f} (聚类数: {clustering_experiments['hierarchical']['best_n']})")
    
    # 选择最佳算法，优先考虑K-means
    if 'kmeans' in algorithm_scores:
        kmeans_score = algorithm_scores['kmeans']
        # K-means优先，除非其他算法明显更好(差距超过0.1)
        if all(kmeans_score + 0.1 >= score for algo, score in algorithm_scores.items() if algo != 'kmeans'):
            best_algorithm = 'kmeans'
            best_score = kmeans_score
        else:
            # 选择评分最高的算法
            best_algorithm = max(algorithm_scores, key=algorithm_scores.get)
            best_score = algorithm_scores[best_algorithm]
    else:
        # 如果没有K-means结果，选择评分最高的
        best_algorithm = max(algorithm_scores, key=algorithm_scores.get) if algorithm_scores else None
        best_score = algorithm_scores[best_algorithm] if best_algorithm else -1
    
    print(f"选择的最佳算法: {best_algorithm}, 评分: {best_score:.3f}")
    
    # 获取最佳聚类结果
    if best_algorithm:
        best_labels = clustering_experiments[best_algorithm]['best_result']['labels']
        
        # 将聚类结果添加到原始数据
        restaurants_df['cluster'] = best_labels
        
        # 分析聚类特征
        cluster_analysis = analyze_clusters(restaurants_df, best_labels)
        
        # 创建结果对象
        clustering_result = {
            'best_algorithm': best_algorithm,
            'clustering_experiments': clustering_experiments,
            'pca_components': pca.components_,
            'pca_explained_variance': pca.explained_variance_ratio_.tolist(),
            'visualizations': {
                'pca': {
                    'data': X_pca,
                    'explained_variance': pca.explained_variance_ratio_.tolist()
                }
            },
            'cluster_analysis': cluster_analysis
        }
        
        return clustering_result, X_pca, best_labels
    
    return None, X_pca, None

def analyze_clusters(restaurants_df, labels):
    """分析聚类特征"""
    # 计算每个聚类的餐厅数量
    cluster_sizes = {}
    for i in set(labels):
        cluster_label = 'noise' if i == -1 else f'cluster_{i}'
        cluster_sizes[cluster_label] = sum(labels == i)
    
    # 每个聚类的平均特征
    cluster_features = {}
    
    # 对每个聚类计算特征统计
    for i in set(labels):
        if i == -1:  # 跳过噪声点
            continue
            
        cluster_mask = (labels == i)
        cluster_df = restaurants_df[cluster_mask]
        
        # 计算该聚类的基本统计信息
        cluster_stats = {
            'size': len(cluster_df),
            'avg_stars': cluster_df['stars'].mean() if 'stars' in cluster_df.columns else None,
            'avg_price_level': cluster_df['price_level'].mean() if 'price_level' in cluster_df.columns else None,
        }
        
        # 最常见的菜系
        if 'cuisine' in cluster_df.columns:
            top_cuisines = cluster_df['cuisine'].value_counts().head(3).to_dict()
            cluster_stats['top_cuisines'] = top_cuisines
        
        # 最常见的区域
        if 'region' in cluster_df.columns:
            top_regions = cluster_df['region'].value_counts().head(3).to_dict()
            cluster_stats['top_regions'] = top_regions
        
        cluster_features[f'cluster_{i}'] = cluster_stats
    
    return {
        'cluster_sizes': cluster_sizes,
        'cluster_features': cluster_features
    }

def visualize_clusters(X_pca, labels, restaurants_df, output_path):
    """
    可视化聚类结果
    """
    plt.figure(figsize=(12, 8))
    
    # 获取唯一聚类标签(排除噪声点)
    unique_clusters = sorted(list(set([label for label in labels if label != -1])))
    
    # 为每个聚类使用不同颜色
    cmap = plt.cm.get_cmap('tab10', len(unique_clusters))
    
    # 绘制每个聚类
    for i, cluster in enumerate(unique_clusters):
        cluster_points = X_pca[labels == cluster]
        plt.scatter(
            cluster_points[:, 0], 
            cluster_points[:, 1], 
            s=50, 
            color=cmap(i), 
            alpha=0.7, 
            label=f'Cluster {cluster}'
        )
    
    # 单独绘制噪声点(如果有)
    if -1 in labels:
        noise_points = X_pca[labels == -1]
        plt.scatter(
            noise_points[:, 0], 
            noise_points[:, 1], 
            s=30, 
            color='black', 
            alpha=0.3, 
            label='Noise'
        )
    
    plt.title('米其林餐厅聚类分析 (PCA降维可视化)')
    plt.xlabel('主成分 1 (价格和奢华程度)')
    plt.ylabel('主成分 2 (菜系特色和创新度)')
    plt.legend()
    plt.grid(True, linestyle='--', alpha=0.7)
    
    # 添加部分餐厅名称标注
    np.random.seed(42)
    if 'name' in restaurants_df.columns:
        sample_indices = np.random.choice(
            range(len(restaurants_df)), 
            size=min(20, len(restaurants_df)), 
            replace=False
        )
        
        for idx in sample_indices:
            plt.annotate(
                restaurants_df.iloc[idx]['name'],
                (X_pca[idx, 0], X_pca[idx, 1]),
                fontsize=8,
                alpha=0.8
            )
    
    plt.tight_layout()
    plt.savefig(output_path)
    plt.close()

def save_clustering_results(clustering_result, restaurants_df, output_dir):
    """
    保存聚类结果
    """
    # 创建聚类报告
    cluster_report = {
        'timestamp': pd.Timestamp.now().isoformat(),
        'total_restaurants': int(len(restaurants_df)),
        'best_algorithm': str(clustering_result['best_algorithm']),
        'n_clusters': int(len(set(restaurants_df['cluster'])) - (1 if -1 in restaurants_df['cluster'].values else 0)),
        'silhouette_score': float(clustering_result['clustering_experiments'][clustering_result['best_algorithm']]['best_silhouette']),
        'cluster_sizes': {},
        'pca_explained_variance': [float(var) for var in clustering_result['pca_explained_variance']]
    }
    
    # 转换cluster_sizes为标准Python类型
    for key, value in clustering_result['cluster_analysis']['cluster_sizes'].items():
        cluster_report['cluster_sizes'][key] = int(value)
    
    # 保存聚类报告为JSON
    report_path = output_dir / 'clustering_report.json'
    with open(report_path, 'w', encoding='utf-8') as f:
        json.dump(cluster_report, f, ensure_ascii=False, indent=2)
    
    # 保存带聚类标签的餐厅数据
    clustered_df_path = output_dir / 'restaurants_with_clusters.csv'
    restaurants_df.to_csv(clustered_df_path, index=False, encoding='utf-8')
    
    # 转换numpy数组为Python列表 - 保存完整的聚类结果
    # 创建可JSON序列化的副本
    serializable_result = {}
    
    for key, value in clustering_result.items():
        if key == 'clustering_experiments':
            # 处理实验结果
            serializable_result[key] = {}
            for alg, alg_data in value.items():
                serializable_result[key][alg] = {}
                for k, v in alg_data.items():
                    if k == 'best_result':
                        # 处理最佳结果
                        serializable_result[key][alg][k] = {}
                        for res_k, res_v in v.items():
                            if hasattr(res_v, 'tolist'):
                                serializable_result[key][alg][k][res_k] = res_v.tolist()
                            else:
                                serializable_result[key][alg][k][res_k] = res_v
                    else:
                        serializable_result[key][alg][k] = v
        elif key == 'pca_components':
            # 处理PCA组件
            if hasattr(value, 'tolist'):
                serializable_result[key] = value.tolist()
            else:
                serializable_result[key] = value
        elif key == 'visualizations':
            # 处理可视化数据
            serializable_result[key] = {}
            for vis_k, vis_v in value.items():
                serializable_result[key][vis_k] = {}
                for data_k, data_v in vis_v.items():
                    if data_k == 'data' and hasattr(data_v, 'tolist'):
                        serializable_result[key][vis_k][data_k] = data_v.tolist()
                    else:
                        serializable_result[key][vis_k][data_k] = data_v
        elif key == 'cluster_analysis':
            # 处理聚类分析
            serializable_result[key] = {}
            for analysis_k, analysis_v in value.items():
                if isinstance(analysis_v, dict):
                    serializable_result[key][analysis_k] = {}
                    for stat_k, stat_v in analysis_v.items():
                        if hasattr(stat_v, 'tolist'):
                            serializable_result[key][analysis_k][stat_k] = stat_v.tolist()
                        elif isinstance(stat_v, (np.int32, np.int64)):
                            serializable_result[key][analysis_k][stat_k] = int(stat_v)
                        elif isinstance(stat_v, (np.float32, np.float64)):
                            serializable_result[key][analysis_k][stat_k] = float(stat_v)
                        else:
                            serializable_result[key][analysis_k][stat_k] = stat_v
                else:
                    serializable_result[key][analysis_k] = analysis_v
        else:
            # 处理其他键
            serializable_result[key] = value
    
    # 保存完整的聚类结果
    # 使用joblib保存模型对象(不需要序列化)
    joblib.dump(clustering_result, output_dir / 'clusters.joblib')
    
    # 同时保存一个JSON版本以便前端使用
    clusters_json_path = output_dir / 'clusters.json'
    with open(clusters_json_path, 'w', encoding='utf-8') as f:
        json.dump(serializable_result, f, ensure_ascii=False, indent=2)
    
    print(f"聚类结果已保存到 {output_dir}")

def main():
    """
    主函数 - 执行聚类分析流程
    """
    # 设置目录
    setup_directories([processed_dir, output_dir])
    
    # 加载餐厅数据
    print("加载米其林餐厅数据...")
    restaurants_df = load_restaurants(raw_data_dir)
    
    # 预处理数据
    print("预处理数据...")
    restaurants_df = preprocess_restaurant_data(restaurants_df)
    
    # 提取特征
    print("提取聚类特征...")
    X, features, enhanced_df = extract_features(restaurants_df)
    
    # 执行聚类
    print("执行聚类分析...")
    clustering_result, X_pca, labels = perform_clustering(X, enhanced_df)
    
    if clustering_result:
        # 可视化聚类结果
        print("可视化聚类结果...")
        visualize_clusters(X_pca, labels, enhanced_df, output_dir / 'clustering_visualization.png')
        
        # 保存结果
        print("保存聚类结果...")
        save_clustering_results(clustering_result, enhanced_df, processed_dir)
        
        print(f"聚类分析完成! 使用{clustering_result['best_algorithm']}算法识别出{clustering_result['cluster_analysis']['cluster_sizes']}个聚类。")
    else:
        print("聚类分析失败，未能找到有效的聚类结果。")

if __name__ == "__main__":
    main() 