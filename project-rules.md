# Heat Interactive Web Project - Proje Kuralları ve Detaylı Özet

## 📋 Proje Genel Bakış

**Proje Adı:** Heat Interactive Website  
**Proje Türü:** Kurumsal VR/AR Şirketi Web Sitesi  
**Diller:** İngilizce (Varsayılan), Türkçe  
**Teknoloji Stack:** HTML, CSS, JavaScript, Tailwind CSS, Supabase  
**Lokasyon:** `d:\Antigravity-Projects\HeatInteractive-Web`

## 🎯 Proje Amacı

Heat Interactive, sanal gerçeklik (VR) ve artırılmış gerçeklik (AR) çözümleri sunan bir teknoloji şirketinin kurumsal web sitesidir. Site, şirketin hizmetlerini, projelerini ve iş ortaklarını modern ve etkileyici bir tasarımla sunmaktadır. Artık çoklu dil desteği ile global bir kitleye hitap etmektedir.

---

## 📁 Dosya Yapısı

```
HeatInteractive-Web/
├── index.html          # Ana sayfa (TR/EN uyumlu)
├── projects.html       # Projeler sayfası (TR/EN uyumlu)
├── hallhunter_strawberry_project.html # Ağır Sanayi İSG Proje Detayı (TR/EN uyumlu)
├── aboutus.html        # Hakkımızda sayfası (TR/EN uyumlu)
├── contact.html        # İletişim sayfası (TR/EN uyumlu)
├── style.css           # Birleştirilmiş CSS dosyası ve özel efektler
└── js/
    ├── companies.js    # Supabase şirketler entegrasyonu
    ├── projects.js     # Supabase projeler entegrasyonu
    ├── navbar.js       # Dinamik navbar ve dil değiştirici
    ├── language.js     # Dil yönetimi ve localStorage mantığı
    └── translations.js # Çeviri sözlüğü (TR/EN)
```

---

## 🎨 Tasarım Sistemi

### Renk Paleti

```css
/* Marka Renkleri */
--brand-bg: #020410         /* Derin Uzay Siyahı - Ana arkaplan */
--brand-card: rgba(255, 255, 255, 0.03)  /* Ultra hafif cam efekti */
--brand-border: rgba(255, 255, 255, 0.08) /* Hafif kenarlık */
--brand-primary: #6366f1    /* Indigo - Birincil vurgu */
--brand-secondary: #ec4899  /* Pink - İkincil vurgu */

/* Metin Renkleri */
--text-white: #ffffff
--text-gray: #e2e8f0
--text-gray-dark: #94a3b8
```

### Tipografi

**Font Ailesi:** Outfit (Google Fonts)  
**Ağırlıklar:** 300, 400, 500, 700, 800

---

## 🌍 Çoklu Dil Sistemi (YENİ)

### Mimari
Site, URL yönlendirmesi yerine **istemci taraflı (client-side)** bir çeviri sistemi kullanır.

1.  **Veri Kaynağı:** `js/translations.js` dosyası TR ve EN çevirilerini içeren büyük bir JSON objesidir.
2.  **Mantık:** `js/language.js` dosyası:
    *   `localStorage`'dan dil tercihini okur ('tr' veya 'en').
    *   Sayfa yüklendiğinde `data-i18n` özniteliğine sahip tüm elementleri bulur.
    *   Seçili dile göre içeriği günceller.
3.  **Kullanıcı Arayüzü:** `js/navbar.js` içindeki dil değiştirici (TR | EN) butonları.

### Kullanım

**HTML:**
```html
<h1 data-i18n="home.hero.title">Sınırların Ötesini Keşfedin</h1>
```

**JavaScript (Dinamik İçerik İçin):**
```javascript
// js/projects.js gibi dosyalarda
element.textContent = getTranslation('projects.loading'); 
```

**Kalıcılık:**
Dil tercihi `localStorage.setItem('heat_lang', 'en')` ile tarayıcıda saklanır.

---

## 🔧 Teknik Detaylar

### CSS Mimarisi
**Dosya:** `style.css`
Tüm inline stiller temizlendi. Tailwind CSS, CDN üzerinden geliştirme ortamında kullanılıyor. Prodüksiyon için build işlemi önerilir.

### JavaScript Modülleri

1.  **js/navbar.js**:
    *   Tüm sayfalara navbar'ı dinamik olarak enjekte eder.
    *   Dil değiştirme butonlarını içerir.
    *   Mobil menü mantığını yönetir.

2.  **js/projects.js**:
    *   Supabase'den projeleri çeker.
    *   Çoklu dil desteği için `getTranslation()` fonksiyonunu kullanır.

3.  **js/companies.js**:
    *   Supabase'den iş ortağı logolarını çeker.

### Supabase Entegrasyonu

**Bağlantı Bilgileri:**
*   `SUPABASE_URL`: `https://zbifnmzafevagllhzibk.supabase.co`
*   `SUPABASE_ANON_KEY`: (Public Key - `js/projects.js` ve `js/companies.js` içinde tanımlı)

**Tablolar:**
*   `Companies`: İsim, Logo URL
*   `Projects`: Proje Adı, Açıklama, Görsel URL

---

## 📄 Sayfa Detayları

### 1. index.html (Ana Sayfa)
*   Hero Section (Supabase görseli ile)
*   Logo Cloud (Dinamik)
*   Hizmetler (Bento Grid)
*   Çeviri desteği eklendi.

### 2. projects.html (Projeler)
*   Supabase'den dinamik veri çekimi.
*   Yükleme ekranı metinleri çevrildi.
*   Kart yapısı ve "İncele" butonu çevrildi.

### 3. contact.html (İletişim)
*   Form alanı placeholder'ları ve etiketleri çevrildi.
*   Ofis adres bilgileri.

### 4. aboutus.html (Hakkımızda)
*   Misyon/Vizyon metinleri çevrildi.
*   Ekip üyeleri ve şirketin hikayesi.

### 5. hallhunter_strawberry_project.html (Detay)
*   Özel proje detay sayfası.
*   Tüm metinler (Zorluk, Çözüm, İstatistikler) çevrildi.

---

## 🔍 Debug ve Sorun Giderme

### Yaygın Sorunlar ve Çözümler

1.  **Dil Değişmiyor:**
    *   `localStorage` temizlemeyi deneyin.
    *   Console'da `translations[currentLang]` objesinin dolu olup olmadığına bakın.

2.  **Projeler/Şirketler Yüklenmiyor:**
    *   Supabase bağlantısını kontrol edin.
    *   Supabase projesinin "Paused" modunda olmadığından emin olun.
    *   Tarayıcı konsolundaki (F12) hataları inceleyin.

3.  **Sayfa Boş/HTML Hatalı:**
    *   Script etiketlerinin `<body>` kapanmadan hemen önce olduğundan emin olun.
    *   `js/navbar.js`'in yüklendiğinden emin olun.

---

## 📅 Versiyon Geçmişi

**v1.2** - Çoklu Dil Desteği (Current)
*   TR/EN dil seçeneği eklendi.
*   `translations.js` ve `language.js` oluşturuldu.
*   `navbar.js` güncellendi (Dil değiştirici).
*   Tüm HTML sayfaları `data-i18n` ile işaretlendi.

**v1.1** - Dinamik İçerik
*   `projects.html` dinamik hale getirildi (Supabase).
*   `hallhunter_strawberry_project.html` eklendi.

**v1.0** - İlk Sürüm
*   Temel sayfa yapıları.
*   CSS konsolidasyonu.

---

## 📞 İletişim

**E-posta:** hello@heatinteractive.com
**Adres:** Maslak Mah. Büyükdere Cad. Spine Tower No: 243 Sarıyer / İstanbul

**Son Güncelleme:** 2025-12-05
**Durum:** Kararlı / Çoklu Dil Aktif
