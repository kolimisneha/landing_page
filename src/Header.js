import './App.css';
import React from 'react';
const Header = () => (
  <header className="header">
    <nav className="nav">
      <ul className="nav-links">
      <li><a href="#about">About</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#cta">Get Started</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
