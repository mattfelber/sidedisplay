import React from 'react';

const ThemeToggle = ({ onToggle }) => {
  const currentTheme = document.body.className.replace('theme-', '') || 'default';
  
  return (
    <button 
      className="theme-toggle"
      onClick={onToggle}
      title={`Current theme: ${currentTheme}. Click to switch to next theme.`}
    >
      💡
    </button>
  );
};

export default ThemeToggle;
