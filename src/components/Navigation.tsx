import React from 'react';

export const Navigation: React.FC = () => {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="logo">Steve Jobs</div>
        <div className="nav-links">
          <a href="#inicio">Inicio</a>
          <a href="#timeline">Timeline</a>
          <a href="#legacy">Legado</a>
        </div>
      </div>
    </nav>
  );
};