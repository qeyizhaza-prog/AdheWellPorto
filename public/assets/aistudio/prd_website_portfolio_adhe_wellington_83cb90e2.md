# Product Requirements Document (PRD)
## Website Portfolio: Adhe Wellington (IT Specialist & Holistic Healer)

**Versi Dokumen:** 1.0  
**Tanggal:** 16 November 2026  
**Disusun Oleh:** UI/UX Designer & Web Developer Expert  
**Klien / Subjek:** Adhe Wellington  

---

## 1. Ringkasan Eksekutif (Executive Summary)
Website ini merupakan portofolio personal dan profesional milik **Adhe Wellington** yang memadukan dua dunia keahlian unik: **Information Technology (IT)** dan **Holistic Healing (Healer)**. 

Mengadopsi gaya desain *editorial minimalism* yang bersih, berani (*bold typography*), dan terstruktur seperti pada referensi visual, website ini dirancang ulang menggunakan skema warna **Luxury Emerald Green (Hijau Emerald Mewah)** dan **Crisp White (Putih Bersih)**. Perpaduan warna ini merepresentasikan pertumbuhan, keseimbangan energi, ketenangan (aspek Healer), sekaligus presisi, profesionalisme, dan inovasi modern (aspek IT).

---

## 2. Tujuan & Sasaran Produk (Goals & Objectives)
* **Personal Branding Dual-Niche:** Membangun identitas digital yang kuat dan harmonis bagi Adhe Wellington sebagai praktisi IT sekaligus Healer tanpa terlihat membingungkan bagi pengunjung.
* **Konversi Klien & Rekruter:** Mempermudah rekruter/klien korporat untuk meninjau CV IT, serta memfasilitasi klien individu untuk menjadwalkan sesi konsultasi *healing*.
* **Pengalaman Visual Premium:** Memberikan kesan pertama (*first impression*) yang elegan, menenangkan, namun tetap tegas dan modern melalui tata letak asimetris yang seimbang.

---

## 3. Sistem Desain & Panduan Visual (Design System & UI Guidelines)

### 3.1. Palet Warna (Luxury Emerald & White)
Menggantikan nuansa *peach/orange* dan hitam pada referensi menjadi nuansa hijau emerald mewah dan putih:
* **Primary Background:** `#FFFFFF` (Pure White) & `#F8FAF9` (Soft Alabaster White dengan efek *subtle paper grain* atau *soft radial glow*).
* **Ambient Glow Accent:** `rgba(4, 120, 87, 0.08)` (Efek pendaran cahaya lembut hijau emerald di sudut kiri bawah dan kanan bawah layar, menggantikan pendaran *peach* pada gambar referensi).
* **Primary Brand / Luxury Emerald:** `#064E3B` (Deep Luxury Emerald - untuk teks utama, tombol CTA, dan aksen).
* **Secondary / Highlight Emerald:** `#059669` atau `#10B981` (Vibrant Emerald - untuk sorotan kata kunci pada *headline* dan status *active/hover* pada menu sosial media).
* **Neutral Dark (Teks Pendukung):** `#111827` (Charcoal Dark untuk keterbacaan optimal pada paragraf deskripsi).

### 3.2. Tipografi (Typography)
* **Display / Hero Headline:** *Condensed Bold Sans-Serif* (Rekomendasi: **Anton**, **Bebas Neue**, atau **Oswald**). Menggunakan huruf kapital semua (*ALL CAPS*), *tight line-height* (`0.95`), dan ukuran masif untuk menciptakan dampak visual yang kuat di bagian bawah layar.
* **Body & UI Elements:** *Clean Geometric/Humanist Sans-Serif* (Rekomendasi: **Plus Jakarta Sans** atau **Inter**) untuk deskripsi singkat, navigasi, dan daftar CV agar mudah dibaca.

### 3.3. Panduan Aset Foto & Grafis (Asset Instructions)
> **INSTRUKSI KHUSUS ASET VISUAL:**
> 1. **Foto Utama (Hero Portrait):** **[LAMPIRKAN FOTO ADHE WELLINGTON DI SINI]** — Gunakan foto *portrait* setengah badan (torso ke atas) dengan pencahayaan lembut dan ekspresi tenang namun berwibawa. Foto wajib diproses dengan teknik *background removal* (transparan) dan diberi efek *bottom gradient fade-out* (memudar halus ke warna putih di bagian bawah) agar menyatu sempurna dengan tipografi *headline* di depannya.
> 2. **Aset Tambahan (QR Code / Simbol Geometris):** **[LAMPIRKAN GRAFIK QR CODE / GEOMETRI EMAS/EMERALD JIKA DIPERLUKAN]** — Dapat ditempatkan pada bagian kontak/kartu nama digital atau *footer* sebagai akses cepat menuju kontak WhatsApp/vCard.

---

## 4. Arsitektur Informasi & Struktur Halaman (Information Architecture)

### Section 1: Hero Section (Above the Fold - Sesuai Referensi Utama)
Tata letak menggunakan *3-Column Asymmetric Grid* pada layar desktop (`100vh`) dengan elemen kunci berikut:
1. **Kolom Kiri (Social & Quick Links Stack):**
   * Daftar vertikal ikon kotak dengan sudut membulat (`border-radius: 6px`) beserta label teks di sebelahnya.
   * Item pertama (atau saat di-*hover*) berwarna **Emerald Green** (`#059669`), sedangkan item lainnya berwarna **Deep Emerald/Charcoal** (`#064E3B`).
   * **Daftar Link:** `LINKEDIN` (IT Profile), `GITHUB / PORTFOLIO` (IT Projects), `INSTAGRAM` (Healer & Daily), `WHATSAPP` (Booking Session), `EMAIL`.
2. **Kolom Tengah (Centerpiece Portrait & Massive Headline):**
   * **Visual:** Foto portrait Adhe Wellington (dilampirkan) berada tepat di tengah secara vertikal dan horizontal, memudar lembut di bagian bawah.
   * **Headline Utama (Overlay di bagian bawah foto):** Teks kapital tebal 2 baris:
     * Baris 1: `<span style="color:#059669">I ENGINEER,</span> HEAL, AND` *(atau opsi: `BRIDGING LOGIC` dengan warna Emerald)*
     * Baris 2: `TRANSFORM LIVES.` *(atau opsi: `AND INNER PEACE.`)*
3. **Kolom Kanan (Value Proposition & Primary CTA):**
   * **Paragraf Singkat (3-4 baris):** *"From architecting resilient IT systems to guiding holistic energy healing, I bridge technical precision with mindful transformation."*
   * **Tombol CTA Utama:** Tombol berbentuk *pill/rounded rectangle* berwarna Deep Luxury Emerald (`#064E3B`) dengan teks putih `"Connect"` dan ikon amplop/kalender berwarna putih dengan aksen emerald di sisi kanan dalam tombol.

### Section 2: Dual-Persona Switcher / Interactive CV Section
Pengunjung dapat memilih fokus profil atau melihat keduanya secara berdampingan:
* **Tab / Split View 1: IT & Technology Profile**
  * Ringkasan keahlian teknis (Software Development, IT Infrastructure, System Analysis, UI/UX, dll. — *sesuai data CV IT Adhe Wellington*).
  * Pengalaman kerja & proyek unggulan (*Selected Case Studies*).
  * Sertifikasi teknis & *Tech Stack*.
* **Tab / Split View 2: Holistic Healer Profile**
  * Filosofi penyembuhan & metode terapi yang dikuasai (*Energy Healing, Mindfulness, Konseling Holistik, dll. — sesuai data CV Healer Adhe Wellington*).
  * Layanan sesi *healing* (1-on-1 Session, Corporate Wellness, Meditation Guidance).
  * Testimoni klien.

### Section 3: Selected Works & Healing Impact (Portfolio & Case Studies)
* Grid kartu bergaya minimalis dengan bingkai tipis berwarna emerald lembut (`1px solid #D1FAE5`).
* Filter kategori: `All`, `IT Projects`, `Healing & Wellness`.

### Section 4: Contact & Session Booking (Footer)
* Formulir kontak pintar dengan pilihan tujuan: *"IT Consultation / Hiring"* atau *"Book a Healing Session"*.
* Integrasi langsung ke kalender penjadwalan (Calendly/WhatsApp API) dan tombol unduh CV (PDF versi IT & versi Lengkap).

---

## 5. Spesifikasi Teknis & Performa (Technical Requirements)
* **Tech Stack Rekomendasi:** HTML5, Tailwind CSS (untuk *styling* presisi dan responsif), Vanilla JavaScript / React (Next.js) untuk interaktivitas *tab switcher* CV dan animasi halus.
* **Animasi & Mikro-interaksi:**
  * *Smooth fade-in* pada foto portrait saat halaman dimuat.
  * Efek *magnetic hover* pada tombol `"Connect"` dan daftar sosial media di sisi kiri.
  * *Smooth scroll* antar bagian.
* **Responsivitas (Mobile-First Adaptation):**
  * Pada layar *mobile* (`< 768px`), foto portrait berada di atas, diikuti *headline* besar, deskripsi singkat, tombol `"Connect"`, dan bar ikon sosial media secara horizontal.
* **Target Performa:** Google Lighthouse Score minimal **95+** untuk Performance, Accessibility, dan SEO.

---

## 6. Kriteria Penerimaan (Acceptance Criteria)
1. Palet warna 100% menggunakan kombinasi putih bersih dan gradasi hijau emerald mewah (tanpa warna oranye dari referensi asli).
2. Tata letak *Hero Section* mempertahankan proporsi visual referensi (sosial media vertikal di kiri, foto subjek di tengah dengan efek memudar di bawah, deskripsi + tombol CTA di kanan, dan *headline* raksasa di bagian bawah tengah).
3. Terdapat *placeholder* yang jelas untuk melampirkan foto Adhe Wellington dengan instruksi *blending* latar belakang.
4. Seluruh data CV IT dan Healer Adhe Wellington terakomodasi dengan struktur navigasi yang intuitif.