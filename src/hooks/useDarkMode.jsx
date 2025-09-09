// src/hooks/useDarkMode.js
import { useState, useEffect } from 'react';

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Apply dark mode changes when the state changes
    document.body.classList.toggle('light-mode', !darkMode);
    
    document.querySelectorAll("p, h2").forEach(el => {
      el.classList.toggle('light-mode', !darkMode);
    });
    
    const toggleBtn = document.getElementById('toggleBtn');
    if (toggleBtn) {
      toggleBtn.innerText = darkMode ? 'Light Mode' : 'Dark Mode';
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  return [darkMode, toggleDarkMode];
};