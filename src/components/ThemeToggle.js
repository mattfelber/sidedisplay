import React from 'react';

const ThemeToggle = ({ onToggle }) => {
  return (
    <button className="theme-toggle" onClick={onToggle}>
      💡
    </button>
  );
};

export default ThemeToggle;
