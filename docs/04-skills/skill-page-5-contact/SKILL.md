---
name: skill-page-5-contact
description: Technical implementation skill for Page 5 (Contact). Implements a refined, minimal inquiry interface with direct mail, an integrated message box, and social channel links.
---

# Skill: Page 5 - Minimalist Contact & Inquiry Architecture

## ۱. هدف و فلسفه طراحی (مطابق تصویر ۵)
صفحه تماس (Contact) باید سریع‌ترین و بی‌واسطه‌ترین مسیر ارتباطی را میان مجموعه‌داران، مدیران گالری‌ها، کیوریتورها و مخاطبان با آقای ابتهاج قنادزاده فراهم کند:
1. **آدرس ایمیل مستقیم**: `info@ebtehajphotography.com` به صورت لینک قابل کلیک `mailto:`.
2. **کادر پیام مستقیم (Messages Box)**: یک فرم تک‌فیلدی یا کادر پیام مینیمال که کاربر بتواند بدون فرم‌های دست‌وپاگیر متن خود را بنویسد و ارسال کند.
3. **لینک اینستاگرام**: دسترسی به پیج رسمی اینستاگرام هنرمند.

---

## ۲. ساختار HTML فرم تماس (HTML Component)

```html
<section class="contact-viewport">
  <div class="contact-card">
    <div class="contact-email-line">
      <a href="mailto:info@ebtehajphotography.com" class="email-link">info@ebtehajphotography.com</a>
    </div>

    <form class="contact-form" id="contact-form" action="#" method="POST">
      <label for="message-input" class="message-label">messages:</label>
      <div class="textarea-wrapper">
        <textarea 
          id="message-input" 
          name="message" 
          rows="10" 
          placeholder="Write your message here..."
          required
        ></textarea>
      </div>
      
      <div class="form-footer">
        <input 
          type="email" 
          name="sender_email" 
          class="sender-email-input" 
          placeholder="Your email address" 
          required 
        />
        <button type="submit" class="submit-btn">SEND</button>
      </div>
      <div id="form-status" class="form-status"></div>
    </form>
  </div>
</section>

<script>
  const form = document.getElementById('contact-form');
  const statusEl = document.getElementById('form-status');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    statusEl.textContent = 'Sending message...';
    
    // شبیه‌سازی ارسال یا اتصال به سرویس‌هایی نظیر Formspree / EmailJS / سرور اختصاصی
    setTimeout(() => {
      statusEl.textContent = 'Message sent successfully.';
      form.reset();
      setTimeout(() => { statusEl.textContent = ''; }, 4000);
    }, 800);
  });
</script>
```

---

## ۳. استایل‌های CSS فرم تماس (Contact CSS)

```css
.contact-viewport {
  max-width: 580px;
  margin-top: 4px;
}

.contact-email-line {
  margin-bottom: 24px;
}

.email-link {
  color: #000000;
  text-decoration: none;
  font-size: 0.85rem;
  letter-spacing: 0.04em;
  transition: opacity 0.2s;
}

.email-link:hover {
  opacity: 0.6;
}

.message-label {
  display: block;
  font-size: 0.82rem;
  color: #999999;
  letter-spacing: 0.05em;
  margin-bottom: 8px;
}

.textarea-wrapper {
  margin-bottom: 16px;
}

.textarea-wrapper textarea {
  width: 100%;
  border: 1px solid #CCCCCC;
  background-color: #FAFAFA;
  font-family: inherit;
  font-size: 0.82rem;
  line-height: 1.6;
  padding: 14px;
  color: #000000;
  resize: vertical;
  min-height: 180px;
  outline: none;
  transition: border-color 0.2s;
}

.textarea-wrapper textarea:focus {
  border-color: #000000;
  background-color: #FFFFFF;
}

.form-footer {
  display: flex;
  gap: 12px;
  align-items: center;
}

.sender-email-input {
  flex: 1;
  border: 1px solid #CCCCCC;
  background-color: #FAFAFA;
  font-family: inherit;
  font-size: 0.8rem;
  padding: 10px 14px;
  outline: none;
  transition: border-color 0.2s;
}

.sender-email-input:focus {
  border-color: #000000;
  background-color: #FFFFFF;
}

.submit-btn {
  background-color: #000000;
  color: #FFFFFF;
  border: none;
  font-family: inherit;
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  padding: 11px 24px;
  cursor: pointer;
  transition: opacity 0.2s;
}

.submit-btn:hover {
  opacity: 0.8;
}

.form-status {
  margin-top: 12px;
  font-size: 0.75rem;
  letter-spacing: 0.05em;
  color: #666666;
}
```
