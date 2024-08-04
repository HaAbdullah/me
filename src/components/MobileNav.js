import React, { useState } from 'react';
import './MobileNav.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="mobile-icon" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes className="close-icon" onClick={closeMenu} /> : <FaBars />}
        <span className="logo">Abdullah Hasanjee</span>
      </div>
      <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <FaTimes className="close-icon" onClick={closeMenu} />
        <a href="#hero" className="menu-item" onClick={closeMenu}>
          Home
        </a>
        <a href="#projects" className="menu-item" onClick={closeMenu}>
          Projects
        </a>
        <a href="#timeline" className="menu-item" onClick={closeMenu}>
          Experiences
        </a>
        <a href="#contact" className="menu-item" onClick={closeMenu}>
          Contact
        </a>
      </div>
    </nav>
  );
};

export default MobileNav;
