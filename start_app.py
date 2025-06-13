#!/usr/bin/env python3
"""
米其林餐厅数据可视化平台启动脚本
自动启动前端和后端服务，支持单独启动选项
"""

import subprocess
import sys
import time
import os
import socket
import webbrowser
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor
import argparse
import platform

class Colors:
    """终端颜色类"""
    HEADER = '\033[95m'
    BLUE = '\033[94m'
    CYAN = '\033[96m'
    GREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'

def print_colored(text, color=Colors.BLUE):
    """彩色打印"""
    print(f"{color}{text}{Colors.ENDC}")

def print_banner():
    """打印项目横幅"""
    banner = """
    ╔══════════════════════════════════════════════════════╗
    ║          🌟 米其林餐厅数据可视化平台 🌟            ║
    ║              Michelin Restaurant Analytics            ║
    ╚══════════════════════════════════════════════════════╝
    """
    print_colored(banner, Colors.HEADER)

def check_port(port, host='localhost'):
    """检查端口是否被占用"""
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
        sock.settimeout(1)
        result = sock.connect_ex((host, port))
        return result == 0

def wait_for_service(port, service_name, timeout=30):
    """等待服务启动"""
    print_colored(f"⏳ 等待 {service_name} 启动...", Colors.CYAN)
    start_time = time.time()
    
    while time.time() - start_time < timeout:
        if check_port(port):
            print_colored(f"✅ {service_name} 启动成功!", Colors.GREEN)
            return True
        time.sleep(1)
    
    print_colored(f"❌ {service_name} 启动超时", Colors.FAIL)
    return False

def check_requirements():
    """检查运行环境"""
    print_colored("🔍 检查运行环境...", Colors.CYAN)
    
    # 检查Python版本
    if sys.version_info < (3, 9):
        print_colored("❌ 需要Python 3.9或更高版本", Colors.FAIL)
        return False
    
    # 检查后端目录和requirements.txt
    backend_dir = Path("backend")
    requirements_file = Path("requirements.txt")
    
    if not backend_dir.exists():
        print_colored("❌ 后端目录不存在", Colors.FAIL)
        return False
    
    if not requirements_file.exists():
        print_colored("❌ requirements.txt文件不存在", Colors.FAIL)
        return False
    
    # 检查前端目录
    frontend_dir = Path("frontend")
    if not frontend_dir.exists():
        print_colored("❌ 前端目录不存在", Colors.FAIL)
        return False
    
    package_json = frontend_dir / "package.json"
    if not package_json.exists():
        print_colored("❌ package.json文件不存在", Colors.FAIL)
        return False
    
    print_colored("✅ 环境检查通过", Colors.GREEN)
    return True

def install_backend_deps():
    """安装后端依赖"""
    print_colored("📦 安装Python依赖...", Colors.CYAN)
    try:
        result = subprocess.run([
            sys.executable, "-m", "pip", "install", "-r", "requirements.txt"
        ], capture_output=True, text=True, check=True)
        print_colored("✅ Python依赖安装成功", Colors.GREEN)
        return True
    except subprocess.CalledProcessError as e:
        print_colored(f"❌ Python依赖安装失败: {e.stderr}", Colors.FAIL)
        return False

def get_npm_command():
    """获取适合当前系统的npm命令"""
    if platform.system() == "Windows":
        return "npm.cmd"
    return "npm"

def install_frontend_deps():
    """安装前端依赖"""
    print_colored("📦 安装前端依赖...", Colors.CYAN)
    frontend_dir = Path("frontend")
    
    if not (frontend_dir / "node_modules").exists():
        try:
            npm_cmd = get_npm_command()
            subprocess.run([npm_cmd, "install"], cwd=frontend_dir, check=True)
            print_colored("✅ 前端依赖安装成功", Colors.GREEN)
            return True
        except subprocess.CalledProcessError as e:
            print_colored(f"❌ 前端依赖安装失败: {e}", Colors.FAIL)
            return False
        except FileNotFoundError:
            print_colored("❌ 找不到npm命令，请确保Node.js已正确安装", Colors.FAIL)
            return False
    else:
        print_colored("✅ 前端依赖已存在", Colors.GREEN)
        return True

def start_backend():
    """启动后端服务"""
    print_colored("🚀 启动后端Flask服务...", Colors.BLUE)
    backend_dir = Path("backend")
    
    try:
        process = subprocess.Popen(
            [sys.executable, "app.py"],
            cwd=backend_dir,
            stdout=subprocess.PIPE,
            stderr=subprocess.STDOUT,
            text=True,
            bufsize=1,
            universal_newlines=True
        )
        
        if wait_for_service(5000, "后端API服务"):
            print_colored("🔗 后端服务地址: http://localhost:5000", Colors.GREEN)
            return process
        
    except Exception as e:
        print_colored(f"❌ 启动后端服务失败: {e}", Colors.FAIL)
    
    return None

def start_frontend():
    """启动前端服务"""
    print_colored("🚀 启动前端Vue应用...", Colors.BLUE)
    frontend_dir = Path("frontend")
    
    try:
        npm_cmd = get_npm_command()
        process = subprocess.Popen(
            [npm_cmd, "run", "dev"],
            cwd=frontend_dir,
            stdout=subprocess.PIPE,
            stderr=subprocess.STDOUT,
            text=True,
            bufsize=1,
            universal_newlines=True
        )
        
        # Vue dev server可能使用5173或3000端口
        ports_to_check = [3000, 5173]
        for port in ports_to_check:
            if wait_for_service(port, "前端开发服务", timeout=15):
                print_colored(f"🔗 前端应用地址: http://localhost:{port}", Colors.GREEN)
                return process, port
        
        print_colored("❌ 前端服务启动失败", Colors.FAIL)
        
    except FileNotFoundError:
        print_colored("❌ 找不到npm命令，请确保Node.js已正确安装并添加到PATH环境变量", Colors.FAIL)
    except Exception as e:
        print_colored(f"❌ 启动前端服务失败: {e}", Colors.FAIL)
    
    return None, None

def main():
    """主启动函数"""
    parser = argparse.ArgumentParser(description='米其林餐厅数据可视化平台启动器')
    parser.add_argument('--backend-only', action='store_true', help='只启动后端服务')
    parser.add_argument('--frontend-only', action='store_true', help='只启动前端服务')
    parser.add_argument('--no-browser', action='store_true', help='不自动打开浏览器')
    parser.add_argument('--install-deps', action='store_true', help='强制重新安装依赖')
    
    args = parser.parse_args()
    
    print_banner()
    
    # 检查运行环境
    if not check_requirements():
        sys.exit(1)
    
    processes = []
    frontend_port = None
    
    try:
        # 安装依赖
        if args.install_deps:
            if not args.frontend_only:
                if not install_backend_deps():
                    sys.exit(1)
            if not args.backend_only:
                if not install_frontend_deps():
                    sys.exit(1)
        
        print_colored("\n" + "="*60, Colors.HEADER)
        
        # 启动服务
        if args.backend_only:
            backend_process = start_backend()
            if backend_process:
                processes.append(backend_process)
                
        elif args.frontend_only:
            if not install_frontend_deps():
                sys.exit(1)
            frontend_process, frontend_port = start_frontend()
            if frontend_process:
                processes.append(frontend_process)
                
        else:
            # 同时启动前后端
            with ThreadPoolExecutor(max_workers=2) as executor:
                # 先启动后端
                backend_future = executor.submit(start_backend)
                
                # 安装前端依赖并启动
                if install_frontend_deps():
                    frontend_future = executor.submit(start_frontend)
                else:
                    sys.exit(1)
                
                # 等待后端结果
                backend_process = backend_future.result()
                if backend_process:
                    processes.append(backend_process)
                
                # 等待前端结果
                frontend_process, frontend_port = frontend_future.result()
                if frontend_process:
                    processes.append(frontend_process)
        
        if not processes:
            print_colored("❌ 没有成功启动任何服务", Colors.FAIL)
            sys.exit(1)
        
        # 显示启动成功信息
        print_colored("\n" + "="*60, Colors.HEADER)
        print_colored("🎉 应用启动成功!", Colors.GREEN)
        
        if not args.backend_only:
            print_colored("📱 前端应用: http://localhost:5173", Colors.CYAN)
        if not args.frontend_only:
            print_colored("🔧 后端API: http://localhost:5000", Colors.CYAN)
        
        print_colored("\n💡 提示:", Colors.WARNING)
        print_colored("   - 按 Ctrl+C 停止所有服务", Colors.WARNING)
        print_colored("   - 使用 --help 查看更多选项", Colors.WARNING)
        
        # 自动打开浏览器
        if not args.no_browser and not args.backend_only and frontend_port:
            time.sleep(2)
            try:
                webbrowser.open(f'http://localhost:{frontend_port}')
                print_colored("🌐 已自动打开浏览器", Colors.GREEN)
            except:
                pass
        
        print_colored("\n⏳ 服务运行中...\n", Colors.BLUE)
        
        # 保持运行直到用户中断
        try:
            while True:
                time.sleep(1)
                # 检查进程状态
                for process in processes[:]:
                    if process.poll() is not None:
                        processes.remove(process)
                        print_colored(f"⚠️  进程 {process.pid} 已退出", Colors.WARNING)
                
                if not processes:
                    print_colored("❌ 所有服务都已停止", Colors.FAIL)
                    break
                    
        except KeyboardInterrupt:
            print_colored("\n🛑 正在停止服务...", Colors.WARNING)
            
    except Exception as e:
        print_colored(f"❌ 启动过程中出错: {e}", Colors.FAIL)
        
    finally:
        # 清理进程
        for process in processes:
            try:
                if process.poll() is None:
                    process.terminate()
                    process.wait(timeout=5)
                    print_colored(f"✅ 进程 {process.pid} 已停止", Colors.GREEN)
            except subprocess.TimeoutExpired:
                process.kill()
                print_colored(f"🔪 强制终止进程 {process.pid}", Colors.WARNING)
            except Exception as e:
                print_colored(f"⚠️  停止进程时出错: {e}", Colors.WARNING)
        
        print_colored("\n👋 感谢使用米其林数据可视化平台!", Colors.HEADER)

if __name__ == "__main__":
    main() 