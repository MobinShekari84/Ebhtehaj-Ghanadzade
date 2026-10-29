---
name: skill-page-4-collections
description: Technical implementation skill for Page 4 (Collections). Implements the dynamic sub-menu for the 5 key collections and an interactive 1:1 square photo carousel with left/right arrow controls, keyboard navigation, and touch support.
---

# Skill: Page 4 - Collections & 1:1 Square Carousel Architecture

## ۱. هدف و الزامات طراحی (بر اساس تصاویر ۲ و ۳)
صفحهٔ مجموعه‌ها (Collections) قلب نمایش آثار عکاسی آقای ابتهاج قنادزاده است:
1. **زیرمنوی مجموعه‌ها**: هنگام کلیک روی `COLLECTIONS` در منوی اصلی، ۵ مجموعهٔ زیر به شکل زیرمنوی دارای تورفتگی (Indented) باز می‌شوند:
   - `THE INCIDENT THAT NEVER NEVER HAPPENED`
   - `WHAT IF YOU PAUSE`
   - `EXPENTANCY`
   - `QUARTER PAST TWELVE`
   - `WE WON'T REACH TEHRAN`
2. **کادر مربعی ۱:۱ (Square Frame)**: کادر نمایش عکس دقیقاً دارای نسبت ابعاد `1:1` است (برگرفته از قطع ۱۲۰×۱۲۰ سانتی‌متر آثار در گالری‌ها).
3. **کنترل‌های ناوبری**: فلش‌های ظریف چپ (`<`) و راست (`>`) در دو طرف کادر عکس برای ورق زدن تصاویر هر مجموعه قرار گرفته‌اند.
4. **کلیدهای میانبر و سوایپ**: امکان استفاده از کلیدهای فلش چپ/راست کیبورد و سوایپ لمسی در صفحات لمسی.

---

## ۲. ساختار HTML و تعاملات جاوااسکریپت (Collections Component)

```html
<section class="collections-viewport">
  <div class="carousel-container">
    <!-- Left Navigation Arrow -->
    <button class="arrow-btn prev-btn" id="prev-btn" aria-label="Previous Photo">
      <svg viewBox="0 0 24 24" width="36" height="36" fill="currentColor">
        <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/>
      </svg>
    </button>

    <!-- 1:1 Square Photo Stage -->
    <div class="photo-box-1to1">
      <img id="collection-photo" class="active-photo" src="" alt="Exhibition Photo" />
      <div id="photo-counter" class="photo-counter"></div>
    </div>

    <!-- Right Navigation Arrow -->
    <button class="arrow-btn next-btn" id="next-btn" aria-label="Next Photo">
      <svg viewBox="0 0 24 24" width="36" height="36" fill="currentColor">
        <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
      </svg>
    </button>
  </div>
</section>

<script>
  // ساختار داده‌ای مجموعه‌ها
  const collectionsData = {
    "the-incident": [
      { url: "assets/images/collections/incident-01.jpg", title: "Frame 01" },
      { url: "assets/images/collections/incident-02.jpg", title: "Frame 02" }
    ],
    "what-if-you-pause": [
      { url: "assets/images/collections/pause-01.jpg", title: "Pause 01" },
      { url: "assets/images/collections/pause-02.jpg", title: "Pause 02" }
    ],
    "expectancy": [
      { url: "assets/images/collections/expectancy-01.jpg", title: "Expectancy 01" }
    ],
    "quarter-past-twelve": [
      { url: "assets/images/collections/quarter-01.jpg", title: "Quarter 01" }
    ],
    "we-wont-reach-tehran": [
      { url: "assets/images/collections/tehran-01.jpg", title: "Tehran 01" }
    ]
  };

  let currentCollectionKey = "what-if-you-pause";
  let photoIndex = 0;

  const photoImg = document.getElementById("collection-photo");
  const counterEl = document.getElementById("photo-counter");

  function renderPhoto() {
    const photos = collectionsData[currentCollectionKey];
    if (!photos || photos.length === 0) return;

    photoImg.style.opacity = "0";
    setTimeout(() => {
      photoImg.src = photos[photoIndex].url;
      photoImg.onload = () => {
        photoImg.style.opacity = "1";
      };
      counterEl.textContent = `${photoIndex + 1} / ${photos.length}`;
    }, 200);
  }

  document.getElementById("prev-btn").addEventListener("click", () => {
    const photos = collectionsData[currentCollectionKey];
    photoIndex = (photoIndex - 1 + photos.length) % photos.length;
    renderPhoto();
  });

  document.getElementById("next-btn").addEventListener("click", () => {
    const photos = collectionsData[currentCollectionKey];
    photoIndex = (photoIndex + 1) % photos.length;
    renderPhoto();
  });

  // پشتیبانی از کلیدهای کیبورد
  window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") document.getElementById("prev-btn").click();
    if (e.key === "ArrowRight") document.getElementById("next-btn").click();
  });
</script>
```

---

## ۳. استایل‌های CSS کادر ۱:۱ و فلش‌ها (1:1 Carousel CSS)

```css
.collections-viewport {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.carousel-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  max-width: 800px;
  width: 100%;
}

/* Square 1:1 Photo Box */
.photo-box-1to1 {
  position: relative;
  width: 100%;
  max-width: 480px;
  aspect-ratio: 1 / 1;
  background-color: #EEEEEE;
  overflow: hidden;
}

.photo-box-1to1 img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease;
}

.photo-counter {
  position: absolute;
  bottom: 12px;
  right: 14px;
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  color: #777777;
  background: rgba(255, 255, 255, 0.7);
  padding: 2px 6px;
}

/* Arrow Navigation Buttons */
.arrow-btn {
  background: none;
  border: none;
  cursor: pointer;
  color: #888888;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s, transform 0.15s;
}

.arrow-btn:hover {
  color: #000000;
  transform: scale(1.1);
}

.arrow-btn:active {
  transform: scale(0.95);
}

/* Indented Collections Submenu in Sidebar */
.collections-submenu {
  list-style: none;
  margin-top: 8px;
  margin-bottom: 14px;
  padding-left: 14px;
}

.collections-submenu li {
  margin-bottom: 8px;
}

.sub-item {
  color: #999999;
  text-decoration: none;
  font-size: 0.72rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  display: block;
  transition: color 0.2s;
}

.sub-item:hover,
.sub-item.active {
  color: #000000;
}
```

---

## ۴. سازگاری موبایل (Mobile Gestures)
در صفحات کوچک‌تر موبایل:
- فلش‌های ناوبری می‌توانند به صورت اورلی (Overlay) یا زیر کادر تصویر قرار گیرند.
- سوایپ لمسی (Touch Swipe) با محاسبه مقادیر `touchstart` و `touchend` فعال می‌گردد.
