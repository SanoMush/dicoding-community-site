# 👾 Dicoding Community Network (DCN) — Garut Chapter

Website landing page resmi untuk komunitas **Dicoding Community Network (DCN) Garut Chapter**.  
Website ini berfungsi sebagai pusat informasi komunitas, leaderboard anggota, serta portal pelaporan progres belajar.

Dibangun menggunakan **React** dengan konsep desain **High-Bit Retro Arcade / Pixel Art** yang interaktif dan responsif.

---

## 🌟 Fitur Utama

- **Informasi Komunitas**  
  Penjelasan mengenai apa itu DCN dan peran Contributor di DCN Garut Chapter.

- **Info Kelas / Prodi Wajib**  
  Daftar kelas Dicoding atau program studi yang perlu diselesaikan oleh anggota.

- **Leaderboard Manual**  
  Papan peringkat berbasis poin yang dihitung dari aktivitas dan progres anggota.

- **Submit Progress**  
  Tautan langsung ke Google Form untuk pengumpulan bukti kelulusan kelas.

- **Tema Interaktif**  
  Desain Pixel Art dengan animasi, efek glow/glitch visual, dan tampilan responsif.

---

## 🚀 Cara Menjalankan Project

Pastikan Anda telah menginstal **Node.js** di komputer Anda.

### 1. Clone atau Download Repository
```bash
git clone https://github.com/username/dcn-garut-landing-page.git
atau unduh ZIP lalu ekstrak ke komputer Anda.

2. Masuk ke Folder Project
bash
Copy code
cd dcn-garut-landing-page
3. Instal Dependencies
bash
Copy code
npm install
Jika terjadi error dependensi, gunakan:

bash
Copy code
npm install --legacy-peer-deps
4. Jalankan Mode Development
bash
Copy code
npm start
5. Buka di Browser
Akses aplikasi di:

arduino
Copy code
http://localhost:3000
🛠️ Panduan Admin (Update Data)
Website ini tidak menggunakan database.
Semua data utama dapat diperbarui langsung melalui file:

css
Copy code
src/App.js
1. Update Leaderboard
Cari variabel leaderboardData lalu ubah atau tambahkan data anggota.

javascript
Copy code
// Contoh format data leaderboard
const leaderboardData = [
  {
    rank: 1,
    name: "Nama Member",
    points: 1500,
    prodi: "Teknik Informatika" // atau "Kelas yang diselesaikan"
  },
  {
    rank: 2,
    name: "Nama Member Lain",
    points: 1200,
    prodi: "Sistem Informasi"
  }
];
2. Update Daftar Kelas / Prodi Wajib
Cari variabel requiredClasses lalu sesuaikan daftar kelas.

javascript
Copy code
const requiredClasses = [
  "Memulai Pemrograman dengan Kotlin",
  "Belajar Membuat Aplikasi Android untuk Pemula",
  "Belajar Dasar Pemrograman Web"
];
3. Ganti Link Google Form
Untuk mengubah tujuan tombol Upload Bukti Progress, ubah nilai variabel googleFormLink.

javascript
Copy code
const googleFormLink = "https://forms.google.com/link-form-baru-anda";
🎨 Kustomisasi Tema
Seluruh style diatur melalui file:

css
Copy code
src/App.css
Elemen yang Bisa Dikustomisasi
Warna Tema
Ubah nilai variabel pada :root

css
Copy code
:root {
  --pixel-green: #00ff9c;
  --bg-color: #0d0d0d;
}
Font

Judul: Press Start 2P

Teks: VT323

Efek Visual
Glow, glitch, pixel border, dan hover animation dapat diatur langsung dari file CSS.

📦 Build untuk Production
Untuk membuat versi siap deploy (Vercel, Netlify, GitHub Pages, dll), jalankan:

bash
Copy code
npm run build
Folder build/ akan berisi file statis siap diunggah ke layanan hosting.

🤝 Kontribusi
Kontribusi terbuka untuk seluruh anggota DCN Garut Chapter.

Ide fitur baru

Pengembangan UI/UX

Penyempurnaan dokumentasi

Optimalisasi performa

Silakan buat Pull Request atau Issue bila memiliki masukan.

📣 Dicoding Community Network — Garut Chapter
Let’s Code and Grow Together! 🚀
