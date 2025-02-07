import React, { useState, useEffect } from 'react';

const Clock = ({ city, timezone }) => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const options = {
          timeZone: timezone,
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
          hour12: false
        };
        
        const newTime = new Intl.DateTimeFormat('en-US', options).format(now);
        setTime(newTime);
      } catch (error) {
        console.error('Error updating time:', error);
        const fallbackTime = new Date().toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
          hour12: false
        });
        setTime(fallbackTime);
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [timezone]);

  return (
    <div className="clock-container">
      <h2>{city}</h2>
      <div className="time">{time}</div>
    </div>
  );
};

export default Clock;
