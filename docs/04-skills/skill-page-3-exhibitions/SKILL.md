---
name: skill-page-3-exhibitions
description: Technical implementation skill for Page 3 (Exhibitions). Formats the chronological exhibitions archive (2009–2025) with elegant monospaced tabular alignment, gallery names, and locations.
---

# Skill: Page 3 - Chronological Exhibition Archive Architecture

## ۱. هدف و فلسفه طراحی
صفحهٔ نمایشگاه‌ها (Exhibitions) سوابق حرفه‌ای هنرمند از سال ۲۰۰۹ تا ۲۰۲۵ را به شیوه‌ای تمیز، خطی و عاری از خطوط سنگین جدول نمایش می‌دهد. این صفحه بازتاب‌دهندهٔ حضور بین‌المللی در میلان، آرت بازل میامی، آرت دبی، رم و نمایشگاه‌های پروژه‌های آران و سایر گالری‌های سرشناس تهران است.

---

## ۲. ساختار محتوایی (HTML Component)

```html
<section class="exhibitions-container">
  <ul class="exhibitions-list">
    <li class="exhibition-entry">
      <span class="exhibition-year">2009</span>
      <span class="exhibition-separator">-</span>
      <span class="exhibition-details">"The incident that never happened" Aaran Art Gallery, Tehran, Iran</span>
    </li>
    <li class="exhibition-entry">
      <span class="exhibition-year">2010</span>
      <span class="exhibition-separator">-</span>
      <span class="exhibition-details">"The incident that never happened" cream Art Gallery, Milan, Italy</span>
    </li>
    <li class="exhibition-entry">
      <span class="exhibition-year">2010</span>
      <span class="exhibition-separator">-</span>
      <span class="exhibition-details">"The incident that never happened" Roma art fair, Italy</span>
    </li>
    <li class="exhibition-entry">
      <span class="exhibition-year">2010</span>
      <span class="exhibition-separator">-</span>
      <span class="exhibition-details">"The incident that never happened" art Dubai, Uae</span>
    </li>
    <li class="exhibition-entry">
      <span class="exhibition-year">2011</span>
      <span class="exhibition-separator">-</span>
      <span class="exhibition-details">"Color Of Love" group exhibition, Asar Art Gallery, Tehran, Iran</span>
    </li>
    <li class="exhibition-entry">
      <span class="exhibition-year">2012</span>
      <span class="exhibition-separator">-</span>
      <span class="exhibition-details">"What if you pause" Aaran Art Gallery, Tehran, Iran</span>
    </li>
    <li class="exhibition-entry">
      <span class="exhibition-year">2021</span>
      <span class="exhibition-separator">-</span>
      <span class="exhibition-details">"Expectancy" Liam Art Gallery, Tehran, Iran</span>
    </li>
    <li class="exhibition-entry">
      <span class="exhibition-year">2022</span>
      <span class="exhibition-separator">-</span>
      <span class="exhibition-details">"Quarter past twelve" Aaran Art Gallery, Tehran, Iran</span>
    </li>
    <li class="exhibition-entry">
      <span class="exhibition-year">2022</span>
      <span class="exhibition-separator">-</span>
      <span class="exhibition-details">"The art of representation" group exhibition, time pieces gallery, Miami Art Basel, Usa</span>
    </li>
    <li class="exhibition-entry">
      <span class="exhibition-year">2023</span>
      <span class="exhibition-separator">-</span>
      <span class="exhibition-details">"We won't reach Tehran" Aaran Art Gallery, Tehran, Iran</span>
    </li>
    <li class="exhibition-entry">
      <span class="exhibition-year">2025</span>
      <span class="exhibition-separator">-</span>
      <span class="exhibition-details">"The In-Between" group exhibition Maad Art Gallery", Tehran, Iran</span>
    </li>
  </ul>
</section>
```

---

## ۳. استایل‌های CSS (Exhibitions CSS)

```css
.exhibitions-container {
  max-width: 820px;
  margin-top: 4px;
}

.exhibitions-list {
  list-style: none;
}

.exhibition-entry {
  display: flex;
  align-items: baseline;
  font-size: 0.82rem;
  line-height: 2.2;
  letter-spacing: 0.03em;
  color: #111111;
}

.exhibition-year {
  font-weight: 500;
  width: 48px;
  flex-shrink: 0;
}

.exhibition-separator {
  margin: 0 10px;
  color: #999999;
  flex-shrink: 0;
}

.exhibition-details {
  font-weight: 400;
}

@media (max-width: 768px) {
  .exhibition-entry {
    flex-wrap: wrap;
    margin-bottom: 14px;
    line-height: 1.6;
  }
  .exhibition-separator {
    display: none;
  }
  .exhibition-year {
    width: 100%;
    color: #666666;
    margin-bottom: 2px;
  }
}
```
