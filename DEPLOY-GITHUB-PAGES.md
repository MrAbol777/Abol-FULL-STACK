# ⚡ راهنمای سریع: Deploy روی GitHub Pages

## 🎯 در 3 مرحله ساده

### مرحله 1: آپلود به GitHub

اگر هنوز آپلود نکرده‌اید:

**با GitHub Desktop:**
1. File > Add Local Repository
2. مسیر: `D:\WEBs\ABOL-FULL-STACK\portfolio-simple`
3. Commit و Publish کنید

**یا با Git:**
```bash
cd D:\WEBs\ABOL-FULL-STACK\portfolio-simple
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/MrAbol777/Abol-FULL-STACK.git
git branch -M main
git push -u origin main
```

---

### مرحله 2: فعال‌سازی GitHub Pages

1. به repository بروید: https://github.com/MrAbol777/Abol-FULL-STACK

2. **Settings** (در منوی بالا) > **Pages** (سمت چپ)

3. در بخش **Source**:
   - Branch: `main`
   - Folder: `/portfolio-simple` (اگر فایل‌ها در این پوشه هستند)
   - یا `/ (root)` (اگر فایل‌ها در root هستند)

4. **Save** کنید

5. 1-2 دقیقه صبر کنید

---

### مرحله 3: دسترسی به سایت

سایت شما در این آدرس در دسترس است:
**https://mrabol777.github.io/Abol-FULL-STACK/**

یا اگر فایل‌ها در `portfolio-simple` هستند:
**https://mrabol777.github.io/Abol-FULL-STACK/portfolio-simple/**

---

## 🔧 اگر فایل‌ها در پوشه `portfolio-simple` هستند

**گزینه 1:** فایل‌ها را به root منتقل کنید (پیشنهادی)

**گزینه 2:** در Settings > Pages، Folder را `/portfolio-simple` تنظیم کنید

**گزینه 3:** یک branch جدید بسازید فقط برای GitHub Pages

---

## ✅ بررسی

بعد از 1-2 دقیقه، به URL سایت بروید. باید سایت شما نمایش داده شود!

---

## 🆘 مشکل دارید؟

- فایل `FREE-HOSTING-GUIDE.md` را بخوانید
- یا از Netlify استفاده کنید (ساده‌تر)

