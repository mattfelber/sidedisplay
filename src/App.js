import React, { useState, useEffect } from 'react';
import './App.css';
import ThemeToggle from './components/ThemeToggle';
import Settings from './components/Settings';
import Clock from './components/Clock';
import { inspirationalContent } from './data/inspirational';
import { timezoneOptions } from './data/timezones';

const themes = [
  'default',
  'nasa',
  'apple',
  'rolex',
  'psychedelic',
  'cyberpunk',
  'matrix',
  'sunset',
  'neon',
  'underwater'
];

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('clockTheme');
    return savedTheme || themes[0];
  });
  
  const [showSettings, setShowSettings] = useState(false);
  const [showHeartOverlay, setShowHeartOverlay] = useState(false);
  const [inspiration, setInspiration] = useState('');
  const [alerts, setAlerts] = useState([]);
  const [activeAlert, setActiveAlert] = useState(null);
  const [dismissedAlerts, setDismissedAlerts] = useState(new Set());
  const alertSound = new Audio('/alert.mp3');
  const [settings, setSettings] = useState(() => {
    const savedSettings = localStorage.getItem('clockSettings');
    return savedSettings ? JSON.parse(savedSettings) : {
      timezone1: 'America/Sao_Paulo',
      timezone2: 'America/New_York',
      timezone3: 'Europe/London',
      timezone4: 'Asia/Tokyo',
      heartMessage: 'DANI',
      alerts: []
    };
  });

  // Save theme to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('clockTheme', theme);
    document.body.className = `theme-${theme}`;
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('clockSettings', JSON.stringify(settings));
  }, [settings]);

  useEffect(() => {
    // Initial inspiration
    updateInspiration();

    // Update inspiration every 30 seconds
    const inspirationTimer = setInterval(updateInspiration, 30000);

    return () => clearInterval(inspirationTimer);
  }, []);

  useEffect(() => {
    const checkAlerts = () => {
      const now = new Date();
      const currentTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
      
      const matchingAlert = settings.alerts.find(alert => 
        alert.enabled && 
        alert.time === currentTime && 
        !dismissedAlerts.has(`${alert.time}-${alert.message}`)
      );

      if (matchingAlert) {
        setActiveAlert(matchingAlert);
        alertSound.play().catch(error => {
          console.error('Failed to play alert sound:', error);
        });
      }
    };

    const interval = setInterval(checkAlerts, 1000);
    return () => clearInterval(interval);
  }, [settings.alerts, alertSound, dismissedAlerts]);

  useEffect(() => {
    const resetDismissedAlerts = () => {
      const now = new Date();
      if (now.getSeconds() === 0) {
        setDismissedAlerts(new Set());
      }
    };

    const interval = setInterval(resetDismissedAlerts, 1000);
    return () => clearInterval(interval);
  }, []);

  const updateInspiration = () => {
    const categories = ['positiveWords', 'stoicQuotes',/*'scienceFacts'*/, 'philosophyQuotes'];
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    const content = inspirationalContent[randomCategory];
    const randomIndex = Math.floor(Math.random() * content.length);
    setInspiration(content[randomIndex]);
  };

  const toggleTheme = () => {
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    const nextTheme = themes[nextIndex];
    setTheme(nextTheme);
    console.log('Switching to theme:', nextTheme); // Debug log
  };

  const dismissAlert = () => {
    if (activeAlert) {
      setDismissedAlerts(prev => 
        new Set(prev).add(`${activeAlert.time}-${activeAlert.message}`)
      );
      setActiveAlert(null);
    }
  };

  return (
    <div className={`App theme-${theme}`}>
      <div className="top-buttons">
        <ThemeToggle onToggle={toggleTheme} />
        {/* Heart button commented out
        <button className="heart-button" onClick={() => setShowHeartOverlay(true)}>
          ❤️
        </button>
        */}
        <button className="settings-toggle" onClick={() => setShowSettings(true)}>
          ⚙️
        </button>
      </div>

      <Settings 
        isOpen={showSettings}
        onClose={() => setShowSettings(false)}
        settings={settings}
        onSave={setSettings}
        timezoneOptions={timezoneOptions}
      />

      <div className="clocks-container">
        <Clock timezone={settings.timezone1} />
        <Clock timezone={settings.timezone2} />
        <Clock timezone={settings.timezone3} />
        <Clock timezone={settings.timezone4} />
        <div className="inspirational-box clock">
          <div className="message">{inspiration}</div>
        </div>
      </div>
      
      {/* Heart overlay commented out
      {showHeartOverlay && (
        <div className="heart-overlay" onClick={() => setShowHeartOverlay(false)}>
          <div className="heart" onClick={(e) => e.stopPropagation()}>
            <span>{settings.heartMessage}</span>
          </div>
        </div>
      )}
      */}

      {activeAlert && (
        <div className="alert-overlay">
          <div className="alert-content">
            <div className="alert-icon">⚠️</div>
            <div className="alert-message">{activeAlert.message}</div>
            <button className="alert-dismiss" onClick={dismissAlert}>
              Dismiss
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
