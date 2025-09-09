import React, { useState, useEffect } from 'react';
// Add this import (usually in App.jsx or index.jsx)
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from './components/Header.jsx';
import Banner from './components/Banner.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Education from './components/Education.jsx';
import Projects from './components/Projects.jsx'; 
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import { ToastContainer } from 'react-toastify';
import { useScrollEffects } from './hooks/useScrollEffects';
import { useDarkMode } from './hooks/useDarkMode';
import MobileNav from './hooks/MobileNav.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import CSS files
import './styles/main.css';          // Your main styles
import 'react-toastify/dist/ReactToastify.css'; // Toastify styles
import './App.css';                  // Your custom App styles

function App() {
  const [darkMode, toggleDarkMode] = useDarkMode();
  const [mobileNavActive, setMobileNavActive] = useState(false);

  // Initialize all effects
  useScrollEffects();
  // MobileNav();
  
  useEffect(() => {
    // Initialize AOS directly
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
    
    // Refresh AOS after a short delay to ensure elements are rendered
    const timer = setTimeout(() => {
      AOS.refresh();
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <Header 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode} 
        mobileNavActive={mobileNavActive}
        setMobileNavActive={setMobileNavActive} />
      <Banner />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Contact />
      <Footer />
      <ToastContainer position="bottom-right" />
      
      {/* Scroll to top button */}
      <a href="#" className="scroll-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </div>
  );
}

export default App;