# Script for deploying portfolio to GitHub
# Run this script in PowerShell

Write-Host "🚀 شروع آپلود پروژه به GitHub..." -ForegroundColor Green

# Check if Git is installed
try {
    $gitVersion = git --version
    Write-Host "✅ Git نصب است: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Git نصب نیست! لطفاً از https://git-scm.com/download/win دانلود کنید." -ForegroundColor Red
    exit 1
}

# Navigate to project directory
$projectPath = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $projectPath

Write-Host "📁 پوشه پروژه: $projectPath" -ForegroundColor Cyan

# Initialize Git if needed
if (-not (Test-Path ".git")) {
    Write-Host "🔧 ایجاد Git repository..." -ForegroundColor Yellow
    git init
}

# Add remote if not exists
$remoteExists = git remote | Select-String -Pattern "origin"
if (-not $remoteExists) {
    Write-Host "🔗 اضافه کردن remote repository..." -ForegroundColor Yellow
    git remote add origin https://github.com/MrAbol777/Abol-FULL-STACK.git
} else {
    Write-Host "✅ Remote repository از قبل وجود دارد" -ForegroundColor Green
    git remote set-url origin https://github.com/MrAbol777/Abol-FULL-STACK.git
}

# Add all files
Write-Host "📦 اضافه کردن فایل‌ها..." -ForegroundColor Yellow
git add .

# Check if there are changes to commit
$status = git status --porcelain
if ($status) {
    Write-Host "💾 ایجاد commit..." -ForegroundColor Yellow
    git commit -m "Initial commit: Portfolio website with admin panel and contact messages management"
    
    # Check current branch
    $currentBranch = git branch --show-current
    if (-not $currentBranch) {
        git branch -M main
        $currentBranch = "main"
    }
    
    Write-Host "📤 آپلود به GitHub..." -ForegroundColor Yellow
    Write-Host "⚠️  اگر خطا گرفتید، ممکن است نیاز به pull داشته باشید:" -ForegroundColor Yellow
    Write-Host "   git pull origin main --allow-unrelated-histories" -ForegroundColor Cyan
    
    try {
        git push -u origin $currentBranch
        Write-Host "✅ پروژه با موفقیت آپلود شد!" -ForegroundColor Green
    } catch {
        Write-Host "❌ خطا در آپلود. لطفاً دستی انجام دهید:" -ForegroundColor Red
        Write-Host "   git pull origin main --allow-unrelated-histories" -ForegroundColor Cyan
        Write-Host "   git push -u origin main" -ForegroundColor Cyan
    }
} else {
    Write-Host "ℹ️  تغییری برای commit وجود ندارد" -ForegroundColor Cyan
}

Write-Host "`n✨ تمام!" -ForegroundColor Green

