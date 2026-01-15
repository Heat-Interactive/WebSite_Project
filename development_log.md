# Development Log - Heat Interactive Web Project

## Proje Özeti
Heat Interactive, sanal gerçeklik (VR) ve artırılmış gerçeklik (AR) çözümleri sunan bir teknoloji şirketinin kurumsal web sitesidir. Modern, aydınlık ve kullanıcı dostu bir tasarıma sahiptir.

## Teknik Detaylar
- **Frontend:** HTML5, Vanilla JavaScript, Tailwind CSS (CDN üzerinden).
- **Veri Yönetimi:** Dinamik içerikler (projeler, iş ortakları) `js/projects-data.js` ve `js/company-data.js` dosyalarından yerel JSON verisi olarak çekilmektedir.
- **Tasarım Sistemi:** Light Theme, `#FA3624` (Heat Red) vurgu rengi, Outfit fontu.

## Dosya Yapısı
- `index.html`: Ana sayfa, hizmetler ve platformlar.
- `projects.html`: Projelerin listelendiği sayfa.
- `agriculture_collecting_simulation.html`: Örnek bir proje detay sayfası.
- `aboutus.html`: Hakkımızda sayfası.
- `contact.html`: İletişim formu ve ofis bilgileri.
- `js/`: Veri ve render mantığını içeren scriptler.
- `style.css`: Özel animasyonlar ve ek düzenlemeler.

## Son Güncellemeler (v2.4 - 23 Aralık 2025)
- "Archaeology Gamification Project" sayfası sinematik ve modern bir dille tamamen yenilendi.
- Kahraman (hero) bölümü yatay formattaki resme uygun, tam ekran (landscape) ve parallax efektli olarak tasarlandı.
- "Archaeology Gamification Project" sayfası "Ancient Routes: Immersing Users in History" olarak yeniden markalandı ve tüm metin içerikleri sağlanan yeni özete göre güncellendi.
- Sayfaya "Your Personal Museum Hub" (Performans Takibi) bölümü eklendi.
- "Ancient Routes" sayfasındaki YouTube videosu, özel poster görseli ve tıklandığında yüklenen interaktif bir yapıya dönüştürülerek optimize edildi.
- `projects-data.js` içindeki proje ismi ve etiketleri (AR, Education, Gamification) senkronize edildi.
- Sitenin tarayıcı sekmesinde görünecek olan ikon (favicon), `images/favicon.png` dosyası kullanılarak tüm sayfalara eklendi.
- Global footer sistemi merkezi yönetime çekildi ve tüm sayfalarda standartlaştırıldı.

## Son Güncellemeler (v2.6 - 15 Ocak 2026)
- İletişim sayfası (`contact.html`) Web3Forms altyapısı ile tamamen işlevsel hale getirildi.
- AJAX tabanlı form gönderimi entegre edilerek sayfa yenilenmeden e-posta gönderimi sağlandı.
- Form alanları (isim, e-posta, telefon, konu, mesaj) dinamikleştirildi ve başarı/hata geri bildirimleri eklendi.
- `vanguard_fpv.html` üzerindeki operasyonel video içeriği güncellendi.

## Mevcut Durum (15 Ocak 2026)
Proje sayısı 4'e yükseldi (Agriculture, Ancient Routes, Vanguard FPV, Nitrogen Delivery). Tüm temel sayfalar ve iletişim formu aktif durumda. Sitenin canlıya alınması için hazır bir yapı oluşturuldu.
