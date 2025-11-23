# راهنمای آپلود پروژه به GitHub

## مراحل آپلود پروژه

### 1. نصب Git (اگر نصب نیست)
دانلود از: https://git-scm.com/download/win

### 2. دستورات Git

```bash
# رفتن به پوشه پروژه
cd portfolio-simple

# بررسی وضعیت Git
git status

# اگر repository وجود ندارد، ایجاد کنید
git init

# اضافه کردن remote repository
git remote add origin https://github.com/MrAbol777/Abol-FULL-STACK.git

# اضافه کردن همه فایل‌ها
git add .

# ایجاد commit
git commit -m "Initial commit: Portfolio website with admin panel"

# Push به GitHub
git push -u origin main
```

### 3. اگر branch اصلی master است:

```bash
git branch -M main
git push -u origin main
```

### 4. اگر repository از قبل وجود دارد:

```bash
git pull origin main --allow-unrelated-histories
git push -u origin main
```

## فایل‌های پروژه

پروژه شامل:
- ✅ صفحه اصلی پورتفولیو (index.html)
- ✅ پنل مدیریت (admin.html)
- ✅ سیستم لاگین (login.html)
- ✅ لوگوهای SVG
- ✅ استایل‌ها و اسکریپت‌ها
- ✅ سیستم مدیریت پیام‌های تماس

## نکات مهم

- پسورد پنل مدیریت: `125874Abol`
- یوزرنیم: `admin`
- تمام داده‌ها در localStorage ذخیره می‌شوند

