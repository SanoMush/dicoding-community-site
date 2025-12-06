import React from 'react';
import './App.css';

function App() {
  // --- AREA ADMIN: UPDATE DATA DI SINI ---
  
  // 1. Data Leaderboard (Edit ini untuk update skor member)
  const leaderboardData = [
    { rank: 1, name: "Budi Santoso", points: 1500, prodi: "Teknik Informatika" },
    { rank: 2, name: "Siti Aminah", points: 1200, prodi: "Sistem Informasi" },
    { rank: 3, name: "Rudi Hermawan", points: 950, prodi: "Ilmu Komputer" },
    { rank: 4, name: "Andi Pratama", points: 800, prodi: "Teknik Komputer" },
    { rank: 5, name: "Dewi Lestari", points: 750, prodi: "Teknologi Informasi" },
  ];

  // 2. Data Kelas Wajib
  const requiredClasses = [
    "Memulai Pemrograman dengan Kotlin",
    "Belajar Membuat Aplikasi Android untuk Pemula"
  ];

  // 3. Link Google Form Anda (Ganti dengan link form asli Anda)
  const googleFormLink = "https://forms.google.com/your-form-id"; 

  // --- BATAS AREA ADMIN ---

  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <div className="container">
          <div className="logo-container">
            <div className="logo-icon">&lt;/&gt;</div>
            <h1 className="logo-text">👾 DCN Garut</h1>
          </div>
          <ul className="nav-links">
            <li><a href="#about">Tentang</a></li>
            <li><a href="#classes">Kelas</a></li>
            <li><a href="#leaderboard">Leaderboard</a></li>
            <li><a href="#join" className="btn-cta">Submit Progress</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="container">
          <h2>
            <span className="pixel-icon jump">🦖</span> Selamat Datang di <br/> Dicoding Community Network <span className="pixel-icon spin">🤖</span>
          </h2>
          <p>Wadah kolaborasi, belajar, dan bertumbuh bagi developer masa depan Indonesia.</p>
          <a href="#about" className="btn-outline">Pelajari Lebih Lanjut</a>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <div className="grid-2">
            <div className="card">
              <h3>Apa itu DCN?</h3>
              <p>
                Dicoding Community Network (DCN) adalah inisiatif komunitas yang bertujuan untuk 
                menjembatani developer lokal dengan standar industri global. Di sini kita belajar bersama, 
                berbagi resource, dan membangun networking.
              </p>
            </div>
            <div className="card">
              <h3>Apa itu Contributor?</h3>
              <p>
                Contributor adalah member aktif yang tidak hanya belajar, tapi juga berkontribusi 
                kembali ke komunitas. Bentuknya bisa berupa mentoring, berbagi kode, menjadi speaker, 
                atau membantu member lain menyelesaikan error koding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section id="classes" className="section bg-light">
        <div className="container text-center">
          <h2>🎯 Learning Path Wajib</h2>
          <p>Selesaikan kelas berikut untuk masuk ke Leaderboard</p>
          <div className="class-grid">
            {requiredClasses.map((item, index) => (
              <div key={index} className="class-card">
                <span className="number">{index + 1}</span>
                <h4>{item}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leaderboard Section */}
      <section id="leaderboard" className="section">
        <div className="container">
          <h2 className="text-center">🏆 High Scores</h2>
          <p className="text-center">Update Terakhir: {new Date().toLocaleDateString()}</p>
          
          <div className="table-container">
            <table className="leaderboard-table">
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Nama Contributor</th>
                  <th>Prodi</th> {/* Kolom diubah menjadi Prodi */}
                  <th>Total Poin</th>
                </tr>
              </thead>
              <tbody>
                {leaderboardData.map((user) => (
                  <tr key={user.rank} className={user.rank <= 3 ? "top-rank" : ""}>
                    <td className="rank-cell">
                      {user.rank === 1 ? "🥇" : user.rank === 2 ? "🥈" : user.rank === 3 ? "🥉" : user.rank}
                    </td>
                    <td>{user.name}</td>
                    <td>{user.prodi}</td> {/* Data diambil dari user.prodi */}
                    <td className="points">{user.points} XP</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Submit Section */}
      <section id="join" className="section cta-section">
        <div className="container text-center">
          <h2>Sudah Menyelesaikan Kelas?</h2>
          <p>
            Laporkan progress Anda agar poin Anda tercatat di Leaderboard. 
            Wajib menyertakan screenshot sertifikat kelulusan.
          </p>
          <a href={googleFormLink} target="_blank" rel="noopener noreferrer" className="btn-white">
            Upload Bukti Progress
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Dicoding Community Network - Garut Chapter.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;