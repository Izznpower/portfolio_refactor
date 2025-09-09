// components/Header.js
import React, { useState } from 'react';
import MobileNav from '../hooks/MobileNav';
import logo from '../assets/img/rabbit-head-logo-simple-minimalist-design-modern-rabbit-logo-abstract-animal-logo-vector.png';

const Header = ({ darkMode, toggleDarkMode }) => {
  const [mobileNavActive, setMobileNavActive] = useState(false);

  const handleNavClick = () => {
    // Close mobile nav when any link is clicked
    if (mobileNavActive) {
      setMobileNavActive(false);
      document.body.classList.remove('mobile-nav-active');
    }
  };

  const handleDropdownClick = (e) => {
    // Prevent default link behavior for dropdown toggles
    if (e.target.classList.contains('toggle-dropdown')) {
      e.preventDefault();
      const parent = e.target.closest('.dropdown');
      parent.classList.toggle('active');
      parent.querySelector('ul').classList.toggle('dropdown-active');
    }
  };

  return (
    <header id="header" className="header d-flex align-items-center sticky-top">
      <div className="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <a href="#banner" className="logo d-flex align-items-center me-auto me-xl-0">
          <img src={logo} alt="logo" />
          <h1 className="sitename">The Script Bunny!</h1>
        </a>

        <nav 
          id="navmenu" 
          className={`navmenu ${mobileNavActive ? 'navmenu-active' : ''}`}
          onClick={handleDropdownClick}
        >
          <ul>
            <li><a href="#banner" className="active" onClick={handleNavClick}>Home</a></li>
            <li className="dropdown">
              <a href="#about"><span>About</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
              <ul>
                <li><a href="#skills" onClick={handleNavClick}>Skills</a></li>
                <li><a href="#education" onClick={handleNavClick}>Educations and certification</a></li>
                <li><a href="#about" onClick={handleNavClick}>Interest/hobbies</a></li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#portfolio"><span>Projects</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
              <ul>
                <li><a href="#portfolio" onClick={handleNavClick}>Project 1</a></li>
                <li><a href="#portfolio" onClick={handleNavClick}>Project 2</a></li>
                <li><a href="#portfolio" onClick={handleNavClick}>Project 3</a></li>
                <li><a href="#portfolio" onClick={handleNavClick}>Project 4</a></li>
              </ul>
            </li>
            <li><a href="https://www.linkedin.com/in/yingchania18/" onClick={handleNavClick}>Linkedin</a></li>
            <li><a href="#contact" onClick={handleNavClick}>Contact</a></li>
          </ul>
        </nav>

        <div className="header-social-links">
          <a href="#" className="twitter"><i className="bi bi-twitter-x"></i></a>
          <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
          <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
          <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
        </div>

        <div>
          <button id="toggleBtn" onClick={toggleDarkMode}>
            {darkMode ? 'Dark Mode' : 'Light Mode'}
          </button>
        </div>

        {/* Add MobileNav component */}
        <MobileNav 
          isActive={mobileNavActive}
          setIsActive={setMobileNavActive}
        />
      </div>
    </header>
  );
};

export default Header;