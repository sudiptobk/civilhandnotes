import React from 'react';
import './Footer.css'; // Import your CSS for Footer if needed
// import Logo from '../assets/logo.png';
import Logo from '../assets/logo.gif'
import { FaHome, FaInfoCircle, FaEnvelope, FaShieldAlt } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = ({ currentPath }) => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="left">
          <div className="logo"><img className='logo-img' src={Logo} alt="Logo" /></div>
        </div>
        <div className="right">
          <ul className="footer-links">
            <li><a href="/"><FaHome /> Home</a></li>
            {currentPath !== 'privacy' ? (
              <>
                <li className='footer-menu-list'><FaInfoCircle className='footer-menu-icon'/> <Link to="about-us" spy={true} smooth={true} duration={500}>About Us</Link></li>
                <li className='footer-menu-list'><FaEnvelope className='footer-menu-icon'/> <Link to="contact-us" spy={true} smooth={true} duration={500}>Contact Us</Link></li>
              </>
            ) : (
              <>
                <li className='footer-menu-list'><a href="/"><FaInfoCircle className='footer-menu-icon'/> About Us</a></li>
                <li className='footer-menu-list'><a href="/"><FaEnvelope className='footer-menu-icon'/> Contact Us</a></li>
              </>
            )}
            <li><a href="/privacy"><FaShieldAlt /> Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-contact-us-text desktop-only">
          <h1>Contact Us</h1>
          <p><FaEnvelope /> civilhandnotes@gmail.com</p>
          <p><FaEnvelope /> Phone: +918609522792</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 civilhandnotes.in All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
