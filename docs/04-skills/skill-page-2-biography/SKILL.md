---
name: skill-page-2-biography
description: Technical implementation skill for Page 2 (Biography). Implements a clean, editorial layout presenting Ebtehaj Ghanadzadeh's artist statement and career trajectory with sophisticated typography and negative space.
---

# Skill: Page 2 - Editorial Biography & Statement Architecture

## ۱. هدف و استانداردهای طراحی
صفحه بیوگرافی (Biography) بیانگر هویت فلسفی و هنری ابتهاج قنادزاده است. بر اساس مستندات و تصویر ۱:
* این صفحه به صورت یک مونوگراف مکتوب با چیدمان ادیتوریال ستونی پیاده می‌شود.
* فونت مونو یا نئوگروتسک خوانا با فاصله‌گذاری خطوط استاندارد (`line-height: 1.75`) استفاده می‌شود تا تجربهٔ مطالعه مانند خواندن بروشور یک دوسالانهٔ هنری بین‌المللی باشد.
* منوی `BIOGRAPHY` در سایدبار سمت چپ فعال (مشکی) و بقیه منوها غیرفعال (خاکستری) هستند.

---

## ۲. ساختار محتوایی و معنایی (Semantic HTML)

```html
<article class="biography-article">
  <header class="bio-header">
    <h2 class="bio-roles">Artist / Filmmaker / Narrative Photographer</h2>
  </header>

  <div class="bio-body">
    <p>
      I am Ebtehaj Ghanadzadeh, a filmmaker and visual artist known for my One-Second Films — a body of work that has gradually come to be recognized as part of what is now called "staged photography" or "narrative photography."
    </p>
    <p>
      At its core, this approach seeks to tell a story through still images — to let photography speak in the language of cinema.
    </p>
    <p>
      My journey began around 2000, during my student years at the University of Art, Tehran, when such an approach had little place in the art scene and was rarely seen outside the realm of commercial imagery. After several years of experimentation, in 2006 I began my first professional series intended for public exhibition. That project, completed in 2008, was titled "An Event That Never Happened," and was first shown at Aaran Gallery, Tehran. It was later exhibited at Cream Gallery, Milan, and at the Dubai Art Fair.
    </p>
    <p>
      My next series, "All You Have to Do Is to Stand Still," was created in collaboration with fellow artists and filmmakers. It explored the idea of a migration without return, and was exhibited in 2011 at Aaran Gallery. The project was later shown at Art Basel Miami, featuring large-format analog prints — my first experience with medium-format film photography.
    </p>
    <p>
      After a few years away from long-term projects, I turned toward creating individual photographs rather than cohesive series — works produced during the fragile and uncertain atmosphere of the pandemic years, shared only informally and online.
    </p>
    <p>
      In 2018, I produced "Twelve and Fifteen Minutes," a visual interpretation of a short story I had written. It was conceived as a formal experiment, composed of nine separate frames forming one panoramic image. A printed copy of the short story was also available to viewers during the exhibition.
    </p>
    <p>
      My following series, "We'll Never Reach Tehran," began in 2022 and was presented a year later as a solo exhibition at Aaran Gallery, accompanied by a printed album that brought together both images and texts.
    </p>
    <p>
      I am currently working on several new projects that continue to explore the boundaries between cinema, photography, and storytelling — works that will gradually unfold through various platforms and forms of presentation.
    </p>
  </div>
</article>
```

---

## ۳. استایل‌های CSS صفحه بیوگرافی (Biography Typography CSS)

```css
.biography-article {
  max-width: 660px;
  margin-top: 4px;
}

.bio-roles {
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 0.06em;
  color: #000000;
  margin-bottom: 28px;
}

.bio-body p {
  font-size: 0.82rem;
  line-height: 1.8;
  color: #111111;
  margin-bottom: 22px;
  letter-spacing: 0.02em;
  text-align: justify;
  text-justify: inter-word;
}

@media (max-width: 768px) {
  .biography-article {
    max-width: 100%;
  }
  .bio-body p {
    font-size: 0.8rem;
    line-height: 1.7;
    margin-bottom: 18px;
  }
}
```

---

## ۴. قابلیت‌های مکمل (اختیاری برای نسخه‌های دو زبانه)
* تعبیه سوییچ کوچک زبان (EN / FA) با حفظ استایل مینیمال، جهت نمایش متن فارسی بیانیه و استیتمنت‌های گالری آران بدون برهم زدن سادگی فضا.
