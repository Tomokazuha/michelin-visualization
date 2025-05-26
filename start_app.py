#!/usr/bin/env python3
"""
米其林餐厅数据可视化项目启动脚本
同时启动前端和后端应用
"""

import subprocess
import sys
import time
import os
import signal
from pathlib import Path

def check_port(port):
    """检查端口是否被占用"""
    import socket
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    result = sock.connect_ex(('localhost', port))
    sock.close()
    return result == 0

def start_backend():
    """启动后端Flask应用"""
    print("🚀 启动后端服务...")
    backend_dir = Path(__file__).parent / "backend"
    
    if not backend_dir.exists():
        print("❌ 后端目录不存在")
        return None
    
    try:
        # 启动Flask应用
        process = subprocess.Popen(
            [sys.executable, "app.py"],
            cwd=backend_dir,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            text=True
        )
        
        # 等待后端启动
        time.sleep(3)
        
        if check_port(5000):
            print("✅ 后端服务启动成功 (http://localhost:5000)")
            return process
        else:
            print("❌ 后端服务启动失败")
            return None
            
    except Exception as e:
        print(f"❌ 启动后端服务时出错: {e}")
        return None

def start_frontend():
    """启动前端Vue应用"""
    print("🚀 启动前端服务...")
    frontend_dir = Path(__file__).parent / "frontend"
    
    if not frontend_dir.exists():
        print("❌ 前端目录不存在")
        return None
    
    try:
        # 检查是否安装了依赖
        node_modules = frontend_dir / "node_modules"
        if not node_modules.exists():
            print("📦 安装前端依赖...")
            subprocess.run(["npm", "install"], cwd=frontend_dir, check=True)
        
        # 启动开发服务器
        process = subprocess.Popen(
            ["npm", "run", "dev"],
            cwd=frontend_dir,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            text=True
        )
        
        # 等待前端启动
        time.sleep(5)
        
        if check_port(5173):
            print("✅ 前端服务启动成功 (http://localhost:5173)")
            return process
        else:
            print("❌ 前端服务启动失败")
            return None
            
    except Exception as e:
        print(f"❌ 启动前端服务时出错: {e}")
        return None

def main():
    """主函数"""
    print("🌟 米其林餐厅数据可视化项目启动器")
    print("=" * 50)
    
    processes = []
    
    try:
        # 启动后端
        backend_process = start_backend()
        if backend_process:
            processes.append(backend_process)
        
        # 启动前端
        frontend_process = start_frontend()
        if frontend_process:
            processes.append(frontend_process)
        
        if not processes:
            print("❌ 没有成功启动任何服务")
            return
        
        print("\n🎉 应用启动完成!")
        print("📱 前端地址: http://localhost:5173")
        print("🔧 后端API: http://localhost:5000")
        print("\n按 Ctrl+C 停止所有服务...")
        
        # 等待用户中断
        try:
            while True:
                time.sleep(1)
                # 检查进程是否还在运行
                for process in processes[:]:
                    if process.poll() is not None:
                        processes.remove(process)
                        print(f"⚠️  进程 {process.pid} 已退出")
                
                if not processes:
                    print("❌ 所有服务都已停止")
                    break
                    
        except KeyboardInterrupt:
            print("\n🛑 正在停止服务...")
            
    except Exception as e:
        print(f"❌ 启动过程中出错: {e}")
        
    finally:
        # 清理进程
        for process in processes:
            try:
                if process.poll() is None:
                    process.terminate()
                    process.wait(timeout=5)
                    print(f"✅ 进程 {process.pid} 已停止")
            except subprocess.TimeoutExpired:
                process.kill()
                print(f"🔪 强制终止进程 {process.pid}")
            except Exception as e:
                print(f"⚠️  停止进程时出错: {e}")
        
        print("👋 再见!")

if __name__ == "__main__":
    main() 