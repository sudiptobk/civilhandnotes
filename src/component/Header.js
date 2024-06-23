import React, { useState } from 'react';
import './Header.css';
// import logo from '../assets/logo.png';
import logo from '../assets/logo.gif'
import headerImage from '../assets/headerImage.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-header">
          <img className='logo-img' src={logo} alt="Logo" />
          </div>
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li style={{ cursor: 'pointer' }}><a href="/" onClick={closeMenu}>Home</a></li>
            <li style={{ cursor: 'pointer' }}><Link to="about-us" spy={true} smooth={true} duration={500} onClick={closeMenu}>About Us</Link></li>
            <li style={{ cursor: 'pointer' }}><Link to="contact-us" spy={true} smooth={true} duration={500} onClick={closeMenu}>Contact Us</Link></li>
            <li style={{ cursor: 'pointer' }}><a href="/privacy" onClick={closeMenu}>Privacy Policy</a></li>
          </ul>
        </nav>
        <a href="#" className="download-btn">Download App</a>
        {menuOpen ? (
          <FaTimes className="hamburger-icon" onClick={toggleMenu} />
        ) : (
          <FaBars className="hamburger-icon" onClick={toggleMenu} />
        )}
      </div>
      <div className="promo-section">
        <div className="promo-text">
          <h1>CIVIL ENGINEERING HANDWRITTEN NOTES – GATE</h1>
          <p>Authentic Handwritten Notes for Future GATE Engineers</p>
          <a href="#" className="app-arriving"><Link to="body" spy={true} smooth={true} duration={500} onClick={closeMenu}>Get Started</Link></a>
        </div>
        <div className="promo-image">
          <img src={headerImage} alt="Handwritten Notes" />
        </div>
      </div>
    </header>
  );
};

export default Header;
