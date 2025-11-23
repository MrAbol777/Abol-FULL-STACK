@echo off
chcp 65001 >nul
echo 🚀 شروع آپلود پروژه به GitHub...
echo.

cd /d "%~dp0"

REM Check if Git is installed
git --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Git نصب نیست! لطفاً از https://git-scm.com/download/win دانلود کنید.
    pause
    exit /b 1
)

echo ✅ Git نصب است
echo.

REM Initialize Git if needed
if not exist ".git" (
    echo 🔧 ایجاد Git repository...
    git init
)

REM Add remote
git remote get-url origin >nul 2>&1
if errorlevel 1 (
    echo 🔗 اضافه کردن remote repository...
    git remote add origin https://github.com/MrAbol777/Abol-FULL-STACK.git
) else (
    echo ✅ Remote repository از قبل وجود دارد
    git remote set-url origin https://github.com/MrAbol777/Abol-FULL-STACK.git
)

echo.
echo 📦 اضافه کردن فایل‌ها...
git add .

echo.
echo 💾 ایجاد commit...
git commit -m "Initial commit: Portfolio website with admin panel and contact messages management"

echo.
echo 📤 آپلود به GitHub...
git branch -M main 2>nul
git push -u origin main

if errorlevel 1 (
    echo.
    echo ⚠️  اگر خطا گرفتید، دستورات زیر را اجرا کنید:
    echo    git pull origin main --allow-unrelated-histories
    echo    git push -u origin main
) else (
    echo.
    echo ✅ پروژه با موفقیت آپلود شد!
)

echo.
pause

