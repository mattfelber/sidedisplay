import React, { useState, useEffect } from 'react';

const Clock = ({ timezone }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getTimezoneId = () => {
    if (!timezone) return 'America/New_York';
    return timezone.split('|')[0];
  };

  const formatTimeForTimezone = () => {
    return new Intl.DateTimeFormat('en-US', {
      timeZone: getTimezoneId(),
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    }).format(time);
  };

  const formatCityName = () => {
    if (!timezone) return '';
    if (timezone.includes('|')) {
      return timezone.split('|')[1];
    }
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
