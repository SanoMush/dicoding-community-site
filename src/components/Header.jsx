import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content container">
        <h1>Dicoding Community</h1>
        <nav className="nav-links">
          <a href="#events">Acara</a>
          <a href="#leaderboard">Leaderboard</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;