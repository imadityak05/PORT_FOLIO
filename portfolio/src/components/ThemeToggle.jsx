import React, { useEffect, useState } from 'react';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Check for saved theme preference or use system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  // Toggle between light and dark mode
  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
    setDarkMode(!darkMode);
  };

  return (
    <button 
      className="theme-toggle" 
      onClick={toggleTheme}
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <span className="theme-icon">
        {darkMode ? '☀️' : '🌙'}
      </span>
    </button>
  );
};

export default ThemeToggle;
