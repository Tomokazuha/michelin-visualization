@echo off
echo 启动米其林餐厅数据可视化前端应用...
echo.

cd frontend

echo 检查Node.js和npm...
node --version
npm --version
echo.

echo 清理缓存...
rd /s /q node_modules\.vite 2>nul
echo.

echo 安装依赖包...
npm install
echo.

echo 启动开发服务器...
npm run dev

pause 