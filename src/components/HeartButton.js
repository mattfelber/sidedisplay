import React, { useEffect } from 'react';

const HeartButton = ({ message, showOverlay, onToggleOverlay }) => {
  useEffect(() => {
    let timeout;
    if (showOverlay) {
      timeout = setTimeout(() => {
        onToggleOverlay(false);
      }, 3000);
    }
    return () => clearTimeout(timeout);
  }, [showOverlay, onToggleOverlay]);

  return (
    <>
      <button 
        className="heart-button"
        onClick={() => onToggleOverlay(true)}
      >
        ❤️
      </button>
      
      <div className={`heart-overlay ${showOverlay ? 'show' : ''}`}>
        <div className="heart">
          <span>{message}</span>
        </div>
      </div>
    </>
  );
};

export default HeartButton;
