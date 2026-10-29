---
name: skill-master-theme
description: Master architectural and design system skill for the minimalist portfolio of Ebtehaj Ghanadzadeh. Guides the global layout, typography, navigation states, and responsive behavior across all 5 pages.
---

# Skill: Master Minimalist Portfolio Architecture (قالب کلان سایت مینیمال)

## ۱. هدف و فلسفه مهارت
این مهارت راهنمای جامع و استانداردی برای پیاده‌سازی و توسعهٔ اسکلت اصلی (Global Layout) وب‌سایت هنری آقای ابتهاج قنادزاده است. وب‌سایت باید تجربه‌ای مشابه یک **گالری مکعب سفید مدرن** و یک **مونوگراف مکتوب نفیس** ارائه دهد؛ با رابط کاربری نامرئی (Quiet UI) و دوری مطلق از هرگونه زوائد تجاری، پاپ‌آپ، یا گرافیک‌های پر زرق و برق.

---

## ۲. مشخصات هسته طراحی (Core Design Tokens)
* **رنگ زمینه (Canvas)**: `#FFFFFF` (سفید یکدست)
* **رنگ تایپوگرافی اصلی (Primary Text)**: `#000000`
* **رنگ ناوبری غیرفعال (Muted Links)**: `#999999` (با تغییر به `#000000` در هاور و وضعیت اکتیو)
* **تایپ‌فیس‌های استاندارد**: 
  - `font-family: 'Space Mono', 'JetBrains Mono', 'Courier New', monospace, sans-serif;`
* **فاصله‌گذاری حروف (Letter Spacing)**: `0.08em` تا `0.12em` برای تمامی تیترها و لینک‌ها

---

## ۳. ساختار HTML پایه (Global Layout Blueprint)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>EBTEHAJ GHANADZADEH | PHOTOGRAPHY</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="site-container">
    <!-- Header -->
    <header class="site-header">
      <h1 class="artist-name"><a href="index.html">EBTEHAJ GHANADZADEH</a></h1>
      <span class="badge-photography">PHOTOGRAPHY</span>
    </header>

    <div class="main-layout">
      <!-- Left Navigation Column -->
      <nav class="sidebar-nav">
        <ul class="nav-links">
          <li><a href="biography.html" class="nav-item">BIOGRAPHY</a></li>
          <li><a href="exhibitions.html" class="nav-item">EXHIBITIONS</a></li>
          <li class="nav-collections-parent">
            <a href="collections.html" class="nav-item">COLLECTIONS</a>
            <!-- Submenu rendered conditionally when in collections -->
          </li>
          <li><a href="contact.html" class="nav-item">CONTACT</a></li>
        </ul>
        <div class="social-links">
          <a href="https://instagram.com/ebtehaj.ghanadzadeh" target="_blank" rel="noopener" aria-label="Instagram">
            <svg class="instagram-icon" viewBox="0 0 24 24" width="20" height="20">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" stroke-width="1.8"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="none" stroke="currentColor" stroke-width="1.8"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" fill="none" stroke="currentColor" stroke-width="2"/>
            </svg>
          </a>
        </div>
      </nav>

      <!-- Dynamic Page Content Area -->
      <main class="content-viewport" id="main-content">
        <!-- Render specific page view here -->
      </main>
    </div>
  </div>
</body>
</html>
```

---

## ۴. استایل‌های هسته CSS (Global CSS Blueprint)

```css
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: #FFFFFF;
  color: #000000;
  font-family: 'Space Mono', 'JetBrains Mono', 'Courier New', monospace;
  -webkit-font-smoothing: antialiased;
  min-height: 100vh;
  padding: 40px 60px;
}

.site-container {
  max-width: 1400px;
  margin: 0 auto;
}

/* Header */
.site-header {
  margin-bottom: 60px;
}

.artist-name {
  font-size: 1.15rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 6px;
}

.artist-name a {
  color: inherit;
  text-decoration: none;
}

.badge-photography {
  display: inline-block;
  background-color: #000000;
  color: #FFFFFF;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  padding: 3px 6px;
  text-transform: uppercase;
}

/* Layout */
.main-layout {
  display: grid;
  grid-template-columns: 260px 1fr;
  column-gap: 60px;
}

/* Sidebar Nav */
.sidebar-nav {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.nav-links {
  list-style: none;
}

.nav-links li {
  margin-bottom: 12px;
}

.nav-item {
  color: #999999;
  text-decoration: none;
  font-size: 0.85rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: color 0.2s ease;
}

.nav-item:hover,
.nav-item.active {
  color: #000000;
}

.social-links {
  margin-top: 30px;
}

.social-links a {
  color: #000000;
  transition: opacity 0.2s;
}

.social-links a:hover {
  opacity: 0.6;
}

/* Responsive Rules */
@media (max-width: 768px) {
  body {
    padding: 24px 20px;
  }
  .main-layout {
    grid-template-columns: 1fr;
    row-gap: 40px;
  }
  .sidebar-nav {
    margin-bottom: 20px;
  }
}
```

---

## ۵. چک‌لیست اعتبارسنجی کیفی (Quality Checklist)
- [ ] عنوان سایت و نشان `[PHOTOGRAPHY]` بدون تغییر در همه صفحات ظاهر می‌شود.
- [ ] صفحه‌ای که کاربر در آن قرار دارد به صورت متمایز با رنگ مشکی و سایر صفحات با خاکستری کم‌رنگ مشخص است.
- [ ] سرعت بارگذاری بسیار بالا و بدون وابستگی به فریم‌ورک‌های سنگین خارجی تضمین شده است.
- [ ] فونت‌ها و فاصله‌گذاری‌ها در نمایشگرهای رتینا (High-DPI) کاملاً شارپ و تفکیک‌شده هستند.
