import React, { useState, useEffect } from 'react';

const Clock = ({ timezone }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTimeForTimezone = () => {
    return new Intl.DateTimeFormat('en-US', {
      timeZone: timezone,
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true
    }).format(time);
  };

  return (
    <div className="clock">
      <div className="clock-face">
        <div className="clock-center"></div>
        <div className="hand hour-hand" style={{
          transform: `rotate(${(time.getHours() % 12) * 30 + time.getMinutes() / 2}deg)`
        }}></div>
        <div className="hand minute-hand" style={{
          transform: `rotate(${time.getMinutes() * 6}deg)`
        }}></div>
        <div className="hand second-hand" style={{
          transform: `rotate(${time.getSeconds() * 6}deg)`
        }}></div>
      </div>
      <div className="clock-text">
        <div className="time">{formatTimeForTimezone()}</div>
        <div className="timezone">{timezone.replace('_', ' ')}</div>
      </div>
    </div>
  );
};

export default Clock;
