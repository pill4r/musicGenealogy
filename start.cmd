@echo off
chcp 65001 >nul
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo.
  echo 没有找到 Node.js，无法启动本地服务器。
  echo 仍可直接双击 index.html 浏览，但 YouTube 整首播放会报错误 153。
  echo.
  pause
  exit /b 1
)
node serve.js
if errorlevel 1 pause
