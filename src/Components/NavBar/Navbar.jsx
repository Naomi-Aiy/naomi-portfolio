import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/My Logo-White.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className='Nav'>
      <nav>
        <a href='#'><img src={logo} className='logo' alt="Logo: Letter N Beside Letter A With A Shooting Star In The Top Right Corner"/></a>
        <button className='menu-toggle' onClick={toggleMenu}>
          ☰
        </button>
        <ul className={menuOpen ? 'show' : ''}>
          <li><a href="#about-me" onClick={closeMenu}>About Me</a></li>
          <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
          <li><a href="#projects" onClick={closeMenu}>Project</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
