---
name: skill-page-1-home
description: Technical implementation skill for Page 1 (Home Showcase). Implements a minimalist hero frame displaying a randomized exhibition photo with a subtle 6-second Ken Burns zoom-in animation.
---

# Skill: Page 1 - Home Showcase & Ken Burns Cinema Engine

## ۱. هدف و فلسفه طراحی
صفحه نخست وب‌سایت آقای ابتهاج قنادزاده، مدخل ورود مخاطب به جهان بصری هنرمند است. در این صفحه:
* هیچ دکمه یا متن تبلیغاتی اضافه‌ای وجود ندارد.
* یک کادر تمیز در مرکز-راست صفحه تعبیه شده که به صورت **تصادفی (Randomized)** یکی از عکس‌های فاخر نمایشگاه‌های او را فراخوانی می‌کند.
* **حرکت سینمایی Ken Burns**: عکس با زوم آرام ۶ ثانیه‌ای (Slow Zoom In) حرکت می‌کند تا حس یک فریم فیلم سینمایی زنده («فیلم یک‌ثانیه‌ای») را القا کند.

---

## ۲. مشخصات وایرفریم (مطابق تصویر ۴ ارسالی هنرمند)
* **سایدبار چپ**: منوهای عادی (بیوگرافی، نمایشگاه‌ها، مجموعه‌ها، تماس) با رنگ خاکستری.
* **کادر مرکزی**:
  - ابعاد: کادر با تناسب افقی یا مربعی متناسب با عکس (معمولاً `max-width: 680px`).
  - افکت حرکت: مقیاس از `scale(1.0)` تا `scale(1.06)` در طول ۶ ثانیه به صورت پیوسته.
  - تعویض خودکار فریم: امکان فید نرم به عکس بعدی هر ۶ یا ۷ ثانیه.

---

## ۳. ساختار HTML و جاوااسکریپت (Component Blueprint)

```html
<section class="home-hero-container">
  <div class="photo-stage-frame">
    <img id="kenburns-photo" class="kenburns-image" src="" alt="Ebtehaj Ghanadzadeh Exhibition Work" />
  </div>
</section>

<script>
  // فهرست آرشیو تصاویر نمایشگاه‌ها
  const exhibitionArchive = [
    "assets/images/exhibitions/incident-01.jpg",
    "assets/images/exhibitions/pause-01.jpg",
    "assets/images/exhibitions/tehran-01.jpg",
    "assets/images/exhibitions/expectancy-01.jpg",
    "assets/images/exhibitions/quarter-past-twelve-01.jpg"
  ];

  const imgEl = document.getElementById('kenburns-photo');
  let currentIndex = Math.floor(Math.random() * exhibitionArchive.length);

  function displayRandomPhoto() {
    imgEl.style.opacity = '0';
    setTimeout(() => {
      currentIndex = Math.floor(Math.random() * exhibitionArchive.length);
      imgEl.src = exhibitionArchive[currentIndex];
      imgEl.onload = () => {
        imgEl.style.opacity = '1';
      };
    }, 600);
  }

  // شروع با لود اولیه
  displayRandomPhoto();

  // تعویض اتوماتیک هر ۶.۵ ثانیه با حفظ ریتم زوم
  setInterval(displayRandomPhoto, 6500);
</script>
```

---

## ۴. استایل‌های CSS انیمیشن زوم ۶ ثانیه‌ای (Ken Burns CSS)

```css
.home-hero-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
}

.photo-stage-frame {
  position: relative;
  width: 100%;
  max-width: 680px;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  background-color: #FAFAFA;
}

.kenburns-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transform: scale(1.0);
  animation: slowZoomIn 6s ease-in-out infinite alternate;
  transition: opacity 0.8s ease-in-out;
}

@keyframes slowZoomIn {
  0% {
    transform: scale(1.0);
  }
  100% {
    transform: scale(1.06);
  }
}
```

---

## ۵. تست و بهینه‌سازی عملکرد (Optimization Tips)
1. **GPU Acceleration**: استفاده از `transform: scale()` به جای تغییر `width`/`height` تا انیمیشن با نرخ ۶۰ فریم بر ثانیه و شتاب‌دهنده گرافیکی کارت تصویر اجرا شود و مصرف باتری به حداقل برسد.
2. **عدم پرش تصویر (No Layout Shift)**: مشخص کردن قطعی `aspect-ratio` روی کادر برای جلوگیری از تکان خوردن صفحه حین لود عکس تصادفی.
