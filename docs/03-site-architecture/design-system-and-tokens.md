# دیزاین سیستم و توکن‌های طراحی (Design System & Tokens)

این سند، متغیرها، پالت رنگ، تایپوگرافی، فواصل و کدهای استاندارد CSS را برای پیاده‌سازی تم مینیمال وب‌سایت آقای قنادزاده تعیین می‌کند.

---

## ۱. توکن‌های رنگی (Color Tokens)

| نام توکن | مقدار هگز (Hex) | کاربرد |
| :--- | :--- | :--- |
| `--color-bg` | `#FFFFFF` | رنگ زمینه اصلی صفحات (سفید گالری / کاغذ بدون پوشش) |
| `--color-text-primary` | `#000000` | رنگ متن اصلی، لوگو و منوی فعال (Active Menu) |
| `--color-text-muted` | `#999999` | رنگ منوهای غیرفعال، توضیحات فرعی و زیرتیترها |
| `--color-text-subtle` | `#707070` | متون کم‌رنگ‌تر و متادیتای سال‌ها |
| `--color-badge-bg` | `#000000` | پس‌زمینه مستطیلی بج [PHOTOGRAPHY] |
| `--color-badge-text` | `#FFFFFF` | رنگ فونت داخل بج [PHOTOGRAPHY] |
| `--color-border-light`| `#E5E5E5` | خطوط کادر پیام یا خطوط راهنمای ظریف در صورت نیاز |
| `--color-placeholder` | `#CCCCCC` | کادر خاکستری موقت پیش‌نمایش تصویر (Photo Placeholder Box) |

---

## ۲. تایپوگرافی (Typography)

### فونت لاتین (Latin Font Family):
تایپ‌فیس‌های بدون سریف با ماهیت ادیتوریال/مونو یا نئوگروتسک خنثی:
```css
font-family: 'Space Mono', 'JetBrains Mono', 'Courier New', monospace,
             -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
```

### مقیاس و اندازه‌ها (Type Scale):
* **لوگوتایپ (`EBTEHAJ GHANADZADEH`)**: `18px` یا `1.125rem`، وزن `600` تا `700`، `letter-spacing: 0.12em`، `text-transform: uppercase`.
* **بج عنوان (`PHOTOGRAPHY`)**: `10px` یا `0.65rem`، وزن `700`، پدینگ `3px 6px`، `letter-spacing: 0.15em`، `text-transform: uppercase`.
* **منوی اصلی (`BIOGRAPHY`, `EXHIBITIONS`, etc.)**: `13px` یا `0.8125rem`، وزن `500`، `letter-spacing: 0.08em`، `line-height: 2.2`.
* **زیرمنوی مجموعه‌ها (Collections Submenu)**: `11px` یا `0.7rem`، وزن `400`، `letter-spacing: 0.06em`، مارجین چپ `16px`.
* **متن بیوگرافی (Body Copy)**: `13px` تا `14px`، وزن `400`، `line-height: 1.7` تا `1.8`، حداکثر عرض خوانایی `680px`.
* **فهرست نمایشگاه‌ها**: `12px` تا `13px`، `line-height: 2.0`، فونت مونو یا نئوگروتسک خوانا.

---

## ۳. محاسبات و چیدمان فضایی (Layout & Grid)

* **ساختار دو ستونه (Desktop Grid)**:
  - ستون چپ (سایدبار ناوبری): عرض ثابت بین `240px` تا `280px`، موقعیت `fixed` یا `sticky` در ارتفاع صفحه.
  - ستون راست (محتوا / عکس): فضای منعطف باقی‌مانده (Fluid Space) با مارجین متناسب.
* **کادر تصویر مربعی مجموعه‌ها (Square Photo Box)**:
  ```css
  .photo-box-square {
    width: 100%;
    max-width: 520px;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    background-color: var(--color-placeholder);
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
  }
  ```
* **دکمه‌های فلش ناوبری (`<` و `>`)**:
  - ابعاد: آیکون‌های مثلثی مینیمال یا فلش‌های خاکستری به مشکی با عرض `24px` تا `32px`.
  - هاور استیت: افزایش اوپاسیتی به `1.0`.

---

## ۴. پارامترهای انیمیشن افکت Ken Burns در صفحه اصلی

```css
@keyframes kenBurnsZoom {
  0% {
    transform: scale(1.0);
    opacity: 0.9;
  }
  50% {
    transform: scale(1.03);
    opacity: 1;
  }
  100% {
    transform: scale(1.06);
    opacity: 0.9;
  }
}

.home-hero-image {
  width: 100%;
  max-width: 640px;
  aspect-ratio: 4 / 3; /* یا قطع ارائه‌شده */
  object-fit: cover;
  animation: kenBurnsZoom 6s ease-in-out infinite alternate;
  transition: opacity 0.8s ease-in-out;
}
```
