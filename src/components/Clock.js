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
      hour12: true
    }).format(time);
  };

  const formatCityName = () => {
    if (!timezone) return '';
    // Convert "America/New_York" to "New York"
    return timezone.split('/').pop().replace(/_/g, ' ');
  };

  return (
    <div className="clock">
      <div className="time">{formatTimeForTimezone()}</div>
      <div className="timezone">{formatCityName()}</div>
    </div>
  );
};

export default Clock;
