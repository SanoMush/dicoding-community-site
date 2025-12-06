# 👾 Dicoding Community Network (DCN) - Garut Chapter

Website Landing Page resmi untuk komunitas Dicoding Community Network (DCN) Garut Chapter. Website ini berfungsi sebagai pusat informasi, papan peringkat (leaderboard) anggota, dan portal untuk melaporkan progres belajar.

Dibuat dengan **React** dan menggunakan tema **High-Bit Retro Arcade/Pixel Art** yang interaktif.

## 🌟 Fitur Utama

* **Informasi Komunitas**: Penjelasan mengenai apa itu DCN dan peran Contributor.
* **Info Kelas/Prodi**: Daftar materi atau program studi wajib yang perlu diselesaikan anggota.
* **Leaderboard Manual**: Papan peringkat berbasis poin yang dihitung dari aktivitas anggota.
* **Submit Progress**: Tautan langsung ke Google Form untuk pengumpulan bukti kelulusan kelas.
* **Tema Interaktif**: Desain Pixel Art dengan animasi, efek suara visual (glitch/glow), dan responsif.

## 🚀 Cara Menjalankan Project

Pastikan Anda sudah menginstal [Node.js](https://nodejs.org/) di komputer Anda.

1.  **Clone atau Download** repository ini.
2.  Buka terminal/command prompt di folder project.
3.  Instal dependensi yang dibutuhkan:
    ```bash
    npm install
    ```
    *(Jika terjadi error dependensi, coba gunakan `npm install --legacy-peer-deps`)*
4.  Jalankan aplikasi dalam mode development:
    ```bash
    npm start
    ```
5.  Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

## 🛠️ Panduan Admin (Update Data)

Anda tidak perlu database khusus untuk mengubah konten utama. Semua data tersimpan di dalam file `src/App.js`. Ikuti langkah ini untuk mengupdate informasi:

### 1. Mengupdate Leaderboard
Buka file `src/App.js` dan cari variabel `leaderboardData`. Tambahkan atau ubah data di dalam kurung siku `[]`.

```javascript
// Contoh Format Data
const leaderboardData = [
  { 
    rank: 1, 
    name: "Nama Member", 
    points: 1500, 
    prodi: "Teknik Informatika" // atau "Kelas yang diselesaikan"
  },
  // ... tambahkan member lain di sini
]
```
2. Mengupdate Daftar Kelas/Prodi
Buka file src/App.js dan cari variabel requiredClasses.

```javascript
//
const requiredClasses = [
  "Memulai Pemrograman dengan Kotlin",
  "Belajar Membuat Aplikasi Android untuk Pemula",
  // ... tambahkan kelas lain di sini
];
```
3. Mengganti Link Google Form
Untuk mengubah tujuan tombol "Upload Bukti Progress", cari variabel googleFormLink di src/App.js.

```javascript
const googleFormLink = "[https://forms.google.com/link-form-baru-anda](https://forms.google.com/link-form-baru-anda)";
```
🎨 Kustomisasi Tema
Gaya tampilan (CSS) sepenuhnya diatur di dalam file src/App.css.

Warna: Ubah variabel :root di bagian atas file untuk mengganti palet warna (misal: --pixel-green atau --bg-color).

Font: Project ini menggunakan font Google Press Start 2P (judul) dan VT323 (teks isi).

📦 Build untuk Production
Jika ingin mengunggah website ke hosting (seperti Vercel, Netlify, atau GitHub Pages), jalankan perintah:

```Bash
npm run build
```
Perintah ini akan membuat folder build berisi file statis yang siap di-deploy.

Dicoding Community Network - Garut Chapter Let's Code and Grow Together! 🚀
