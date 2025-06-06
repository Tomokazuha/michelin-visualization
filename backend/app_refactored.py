"""
米其林餐厅数据可视化后端API服务 (重构版本)
使用模块化设计，将业务逻辑分离到不同模块

主要改进：
1. 模块化架构 - 将路由拆分到独立模块
2. 参数校验 - 使用marshmallow进行严格的参数校验
3. 统一日志 - 完善的日志记录系统
4. 错误处理 - 统一的错误处理机制
5. 文档化 - 详细的API文档和代码注释
"""

from flask import Flask, jsonify, request
from flask_cors import CORS
import logging
from pathlib import Path
from datetime import datetime
import traceback

# 导入自定义模块
from services.data_service import DataService
from routes.restaurant import restaurant_bp
from routes.analytics import analytics_bp

# 应用配置
class Config:
    """应用配置类"""
    
    # 基础配置
    DEBUG = False
    TESTING = False
    SECRET_KEY = 'your-secret-key-here'  # 生产环境中应该从环境变量读取
    
    # CORS配置
    CORS_ORIGINS = ["http://localhost:3000", "http://127.0.0.1:3000"]
    
    # 数据配置
    BASE_DIR = Path(__file__).parent.parent
    DATA_DIR = BASE_DIR / "data"
    
    # 日志配置
    LOG_LEVEL = logging.INFO
    LOG_FORMAT = '%(asctime)s - %(name)s - %(levelname)s - %(message)s'
    
    # API配置
    API_VERSION = "v1"
    MAX_CONTENT_LENGTH = 16 * 1024 * 1024  # 16MB


def create_app(config_class=Config):
    """
    应用工厂函数
    
    Args:
        config_class: 配置类
        
    Returns:
        Flask应用实例
    """
    
    # 创建Flask应用
    app = Flask(__name__)
    app.config.from_object(config_class)
    
    # 配置CORS
    CORS(app, origins=config_class.CORS_ORIGINS)
    
    # 配置日志
    _setup_logging(app, config_class)
    
    # 初始化数据服务
    _init_data_service(app, config_class)
    
    # 注册蓝图
    _register_blueprints(app)
    
    # 注册错误处理器
    _register_error_handlers(app)
    
    # 注册全局钩子
    _register_hooks(app)
    
    # 添加健康检查端点
    _register_health_check(app)
    
    logger = logging.getLogger(__name__)
    logger.info("应用初始化完成")
    
    return app


def _setup_logging(app, config):
    """配置日志系统"""
    
    # 创建日志目录
    log_dir = config.BASE_DIR / "logs"
    log_dir.mkdir(exist_ok=True)
    
    # 配置根日志器
    logging.basicConfig(
        level=config.LOG_LEVEL,
        format=config.LOG_FORMAT,
        handlers=[
            logging.FileHandler(log_dir / "app.log", encoding='utf-8'),
            logging.StreamHandler()  # 控制台输出
        ]
    )
    
    # 配置Flask应用日志
    app.logger.setLevel(config.LOG_LEVEL)
    
    # 配置第三方库日志级别
    logging.getLogger('werkzeug').setLevel(logging.WARNING)
    logging.getLogger('matplotlib').setLevel(logging.WARNING)
    
    app.logger.info("日志系统配置完成")


def _init_data_service(app, config):
    """初始化数据服务"""
    
    try:
        # 创建数据服务实例
        data_service = DataService(config.BASE_DIR)
        
        # 将数据服务添加到应用上下文
        app.data_service = data_service
        
        # 创建全局访问点
        global data_service_instance
        data_service_instance = data_service
        
        app.logger.info("数据服务初始化完成")
        
    except Exception as e:
        app.logger.error(f"数据服务初始化失败: {e}", exc_info=True)
        raise


def _register_blueprints(app):
    """注册蓝图"""
    
    # 注册餐厅相关路由
    app.register_blueprint(restaurant_bp)
    app.logger.info("注册餐厅路由蓝图")
    
    # 注册分析相关路由
    app.register_blueprint(analytics_bp)
    app.logger.info("注册分析路由蓝图")


def _register_error_handlers(app):
    """注册错误处理器"""
    
    @app.errorhandler(400)
    def bad_request(error):
        """处理400错误"""
        app.logger.warning(f"400错误: {error}")
        return jsonify({
            'success': False,
            'error': '请求参数错误',
            'error_code': 400,
            'timestamp': datetime.now().isoformat()
        }), 400
    
    @app.errorhandler(404)
    def not_found(error):
        """处理404错误"""
        app.logger.warning(f"404错误: {request.path}")
        return jsonify({
            'success': False,
            'error': '请求的资源不存在',
            'error_code': 404,
            'path': request.path,
            'timestamp': datetime.now().isoformat()
        }), 404
    
    @app.errorhandler(405)
    def method_not_allowed(error):
        """处理405错误"""
        app.logger.warning(f"405错误: {request.method} {request.path}")
        return jsonify({
            'success': False,
            'error': '请求方法不允许',
            'error_code': 405,
            'method': request.method,
            'path': request.path,
            'timestamp': datetime.now().isoformat()
        }), 405
    
    @app.errorhandler(500)
    def internal_error(error):
        """处理500错误"""
        app.logger.error(f"500错误: {error}", exc_info=True)
        return jsonify({
            'success': False,
            'error': '服务器内部错误',
            'error_code': 500,
            'timestamp': datetime.now().isoformat()
        }), 500
    
    @app.errorhandler(Exception)
    def handle_unexpected_error(error):
        """处理未捕获的异常"""
        app.logger.error(f"未捕获异常: {error}", exc_info=True)
        return jsonify({
            'success': False,
            'error': '服务器内部错误',
            'error_code': 500,
            'timestamp': datetime.now().isoformat()
        }), 500


def _register_hooks(app):
    """注册全局钩子"""
    
    @app.before_request
    def log_request_info():
        """记录请求信息"""
        if request.path.startswith('/api/'):
            app.logger.info(
                f"API请求: {request.method} {request.path} "
                f"来源: {request.remote_addr} "
                f"用户代理: {request.headers.get('User-Agent', 'Unknown')}"
            )
    
    @app.after_request
    def log_response_info(response):
        """记录响应信息"""
        if request.path.startswith('/api/'):
            app.logger.info(
                f"API响应: {request.method} {request.path} "
                f"状态码: {response.status_code} "
                f"内容长度: {response.content_length or 0}"
            )
        return response
    
    @app.teardown_appcontext
    def cleanup(error):
        """清理应用上下文"""
        if error:
            app.logger.error(f"应用上下文错误: {error}")


def _register_health_check(app):
    """注册健康检查端点"""
    
    @app.route('/health', methods=['GET'])
    @app.route('/api/health', methods=['GET'])
    def health_check():
        """
        健康检查接口
        
        返回应用运行状态和数据加载状态
        """
        try:
            data_service = getattr(app, 'data_service', None)
            
            health_status = {
                'status': 'healthy',
                'timestamp': datetime.now().isoformat(),
                'version': app.config.get('API_VERSION', 'unknown'),
                'environment': 'development' if app.debug else 'production'
            }
            
            if data_service:
                cache_status = data_service.get_cache_status()
                health_status.update({
                    'data_service': {
                        'loaded': cache_status['is_loaded'],
                        'data_types': cache_status['cached_data_types'],
                        'errors': cache_status['load_errors']
                    }
                })
            else:
                health_status['data_service'] = {
                    'loaded': False,
                    'error': 'Data service not initialized'
                }
            
            return jsonify(health_status)
            
        except Exception as e:
            app.logger.error(f"健康检查失败: {e}", exc_info=True)
            return jsonify({
                'status': 'unhealthy',
                'error': str(e),
                'timestamp': datetime.now().isoformat()
            }), 500
    
    @app.route('/api/data/reload', methods=['POST'])
    def reload_data():
        """
        重新加载数据接口
        
        用于在数据文件更新后重新加载缓存
        """
        try:
            data_service = getattr(app, 'data_service', None)
            
            if not data_service:
                return jsonify({
                    'success': False,
                    'error': '数据服务未初始化'
                }), 500
            
            # 重新加载数据
            reload_result = data_service.reload_data()
            
            app.logger.info("数据重新加载完成")
            return jsonify({
                'success': True,
                'result': reload_result
            })
            
        except Exception as e:
            app.logger.error(f"数据重新加载失败: {e}", exc_info=True)
            return jsonify({
                'success': False,
                'error': '数据重新加载失败'
            }), 500


# 全局数据服务实例（用于在蓝图中访问）
data_service_instance = None


def get_data_service():
    """
    获取全局数据服务实例
    
    在蓝图中使用此函数获取数据服务
    """
    return data_service_instance


# 创建应用实例
app = create_app()

# 开发模式配置
if __name__ == '__main__':
    # 开发环境配置
    app.config['DEBUG'] = True
    logging.getLogger().setLevel(logging.DEBUG)
    
    print("=" * 60)
    print("米其林数据可视化后端API服务")
    print("=" * 60)
    print(f"环境: 开发环境")
    print(f"调试模式: {app.config['DEBUG']}")
    print(f"数据目录: {app.config['BASE_DIR'] / 'data'}")
    print(f"API版本: {app.config['API_VERSION']}")
    print("=" * 60)
    
    # 启动开发服务器
    app.run(
        host='0.0.0.0',
        port=5000,
        debug=True,
        threaded=True
    ) 