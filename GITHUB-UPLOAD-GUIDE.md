# 📤 راهنمای کامل آپلود پروژه به GitHub

## ⚠️ مشکل: Git نصب نیست

برای آپلود پروژه به GitHub، باید Git نصب باشد.

---

## 🚀 روش 1: نصب Git و آپلود دستی (پیشنهادی)

### مرحله 1: نصب Git

1. به آدرس زیر بروید:
   **https://git-scm.com/download/win**

2. فایل نصب را دانلود کنید (64-bit Git for Windows)

3. فایل را اجرا کنید و Next را بزنید (تنظیمات پیش‌فرض مناسب است)

4. بعد از نصب، **PowerShell یا Command Prompt را ببندید و دوباره باز کنید**

### مرحله 2: آپلود پروژه

بعد از نصب Git، این دستورات را در PowerShell یا Command Prompt اجرا کنید:

```powershell
# رفتن به پوشه پروژه
cd D:\WEBs\ABOL-FULL-STACK\portfolio-simple

# بررسی وضعیت
git status

# اگر repository وجود ندارد
git init

# اضافه کردن remote repository
git remote add origin https://github.com/MrAbol777/Abol-FULL-STACK.git

# اضافه کردن همه فایل‌ها
git add .

# ایجاد commit
git commit -m "Initial commit: Portfolio website with admin panel"

# تغییر branch به main
git branch -M main

# آپلود به GitHub
git push -u origin main
```

**⚠️ نکته:** اگر repository از قبل وجود دارد و خالی نیست:
```powershell
git pull origin main --allow-unrelated-histories
git push -u origin main
```

---

## 🎯 روش 2: استفاده از GitHub Desktop (ساده‌تر)

### مرحله 1: دانلود GitHub Desktop

1. به آدرس زیر بروید:
   **https://desktop.github.com/**

2. GitHub Desktop را دانلود و نصب کنید

3. با حساب GitHub خود لاگین کنید

### مرحله 2: آپلود پروژه

1. GitHub Desktop را باز کنید

2. روی **File > Add Local Repository** کلیک کنید

3. مسیر پروژه را انتخاب کنید:
   ```
   D:\WEBs\ABOL-FULL-STACK\portfolio-simple
   ```

4. اگر repository وجود ندارد، روی **Create a New Repository** کلیک کنید:
   - Name: `Abol-FULL-STACK`
   - Local Path: `D:\WEBs\ABOL-FULL-STACK\portfolio-simple`
   - Description: `Portfolio website with admin panel`
   - ✅ Initialize this repository with a README (اختیاری)

5. همه فایل‌ها را انتخاب کنید (Ctrl+A)

6. در پایین صفحه:
   - Summary: `Initial commit: Portfolio website with admin panel`
   - روی **Commit to main** کلیک کنید

7. روی **Publish repository** کلیک کنید

8. Repository name: `Abol-FULL-STACK`
9. ✅ Keep this code private (اگر می‌خواهید private باشد)
10. روی **Publish Repository** کلیک کنید

---

## 🔧 روش 3: استفاده از VS Code (اگر از VS Code استفاده می‌کنید)

1. VS Code را باز کنید
2. پوشه `portfolio-simple` را در VS Code باز کنید
3. روی آیکون Source Control (Ctrl+Shift+G) کلیک کنید
4. روی **Initialize Repository** کلیک کنید
5. همه فایل‌ها را stage کنید (+)
6. پیام commit بنویسید: `Initial commit: Portfolio website`
7. روی ✓ کلیک کنید
8. روی **...** کلیک کنید و **Publish to GitHub** را انتخاب کنید
9. Repository name: `Abol-FULL-STACK`
10. Public یا Private را انتخاب کنید
11. روی **Publish** کلیک کنید

---

## ✅ بررسی آپلود موفق

بعد از آپلود، به آدرس زیر بروید:
**https://github.com/MrAbol777/Abol-FULL-STACK**

باید تمام فایل‌های پروژه را ببینید.

---

## 🆘 حل مشکلات رایج

### مشکل 1: "git is not recognized"
**راه حل:** Git را نصب کنید و Terminal را restart کنید

### مشکل 2: "Authentication failed"
**راه حل:** 
- از GitHub Desktop استفاده کنید
- یا Personal Access Token بسازید

### مشکل 3: "Repository already exists"
**راه حل:**
```powershell
git pull origin main --allow-unrelated-histories
git push -u origin main
```

### مشکل 4: "Permission denied"
**راه حل:** مطمئن شوید که به repository دسترسی دارید

---

## 📝 فایل‌های مهم پروژه

پروژه شامل این فایل‌هاست:
- ✅ `index.html` - صفحه اصلی
- ✅ `admin.html` - پنل مدیریت
- ✅ `login.html` - صفحه ورود
- ✅ `assets/` - لوگوها و تصاویر
- ✅ تمام فایل‌های CSS و JS

---

**💡 پیشنهاد:** اگر تازه کار هستید، از **GitHub Desktop** استفاده کنید (روش 2) - ساده‌تر و بدون نیاز به دستورات!

