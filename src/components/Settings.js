import React, { useState } from 'react';

const Settings = ({ isOpen, onClose, settings, onSave, cities }) => {
  const [localSettings, setLocalSettings] = useState(settings);
  const [activeTab, setActiveTab] = useState('general');
  const [newAlert, setNewAlert] = useState({ time: '', message: '' });

  const handleSave = () => {
    onSave(localSettings);
    onClose();
  };

  const timezoneOptions = [
    { value: 'America/Sao_Paulo', label: 'Sao Paulo' },
    { value: 'America/New_York', label: 'New York' },
    { value: 'Europe/London', label: 'London' },
    { value: 'Europe/Lisbon', label: 'Lisbon' },
    { value: 'Asia/Tokyo', label: 'Tokyo' }
  ];

  const addAlert = () => {
    if (newAlert.time && newAlert.message) {
      setLocalSettings({
        ...localSettings,
        alerts: [...localSettings.alerts, { ...newAlert, enabled: true }]
      });
      setNewAlert({ time: '', message: '' });
    }
  };

  const removeAlert = (index) => {
    const newAlerts = [...localSettings.alerts];
    newAlerts.splice(index, 1);
    setLocalSettings({
      ...localSettings,
      alerts: newAlerts
    });
  };

  const toggleAlert = (index) => {
    const newAlerts = [...localSettings.alerts];
    newAlerts[index] = {
      ...newAlerts[index],
      enabled: !newAlerts[index].enabled
    };
    setLocalSettings({
      ...localSettings,
      alerts: newAlerts
    });
  };

  return (
    <div className={`settings-modal ${isOpen ? 'show' : ''}`}>
      <div className="settings-content">
        <div className="settings-tabs">
          <button 
            className={`tab-button ${activeTab === 'general' ? 'active' : ''}`}
            onClick={() => setActiveTab('general')}
          >
            General
          </button>
          <button 
            className={`tab-button ${activeTab === 'alerts' ? 'active' : ''}`}
            onClick={() => setActiveTab('alerts')}
          >
            Alerts
          </button>
        </div>

        <div className={`tab-content ${activeTab === 'general' ? 'active' : ''}`}>
          <div className="settings-section">
            <h2>Clock Settings</h2>
            <div className="clock-settings">
              <div className="timezone-setting">
                <label htmlFor="timezone1">Clock 1:</label>
                <select 
                  id="timezone1"
                  value={localSettings.timezone1}
                  onChange={(e) => setLocalSettings({
                    ...localSettings,
                    timezone1: e.target.value
                  })}
                >
                  {timezoneOptions.map(({ value, label }) => (
                    <option key={value} value={value}>{label}</option>
                  ))}
                </select>
              </div>
              <div className="timezone-setting">
                <label htmlFor="timezone2">Clock 2:</label>
                <select 
                  id="timezone2"
                  value={localSettings.timezone2}
                  onChange={(e) => setLocalSettings({
                    ...localSettings,
                    timezone2: e.target.value
                  })}
                >
                  {timezoneOptions.map(({ value, label }) => (
                    <option key={value} value={value}>{label}</option>
                  ))}
                </select>
              </div>
              <div className="timezone-setting">
                <label htmlFor="timezone3">Clock 3:</label>
                <select 
                  id="timezone3"
                  value={localSettings.timezone3}
                  onChange={(e) => setLocalSettings({
                    ...localSettings,
                    timezone3: e.target.value
                  })}
                >
                  {timezoneOptions.map(({ value, label }) => (
                    <option key={value} value={value}>{label}</option>
                  ))}
                </select>
              </div>
              <div className="timezone-setting">
                <label htmlFor="timezone4">Clock 4:</label>
                <select 
                  id="timezone4"
                  value={localSettings.timezone4}
                  onChange={(e) => setLocalSettings({
                    ...localSettings,
                    timezone4: e.target.value
                  })}
                >
                  {timezoneOptions.map(({ value, label }) => (
                    <option key={value} value={value}>{label}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="settings-section">
            <h3>Heart Message</h3>
            <div className="heart-settings">
              <input 
                type="text"
                value={localSettings.heartMessage}
                onChange={(e) => setLocalSettings({
                  ...localSettings,
                  heartMessage: e.target.value
                })}
                maxLength={12}
                placeholder="Enter message (max 12 chars)"
              />
            </div>
          </div>
        </div>

        <div className={`tab-content ${activeTab === 'alerts' ? 'active' : ''}`}>
          <div className="settings-section">
            <h2>Alert Settings</h2>
            <div className="alerts-container">
              <div className="new-alert">
                <input
                  type="time"
                  value={newAlert.time}
                  onChange={(e) => setNewAlert({ ...newAlert, time: e.target.value })}
                  placeholder="Time"
                />
                <input
                  type="text"
                  value={newAlert.message}
                  onChange={(e) => setNewAlert({ ...newAlert, message: e.target.value })}
                  placeholder="Alert message"
                />
                <button onClick={addAlert} className="add-alert-btn">Add Alert</button>
              </div>
              <div className="alerts-list">
                {localSettings.alerts && localSettings.alerts.map((alert, index) => (
                  <div key={index} className="alert-item">
                    <div className="alert-toggle">
                      <input
                        type="checkbox"
                        checked={alert.enabled}
                        onChange={() => toggleAlert(index)}
                      />
                    </div>
                    <div className="alert-time">{alert.time}</div>
                    <div className="alert-message">{alert.message}</div>
                    <button 
                      onClick={() => removeAlert(index)}
                      className="remove-alert-btn"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="settings-buttons">
          <button onClick={handleSave} className="save-settings">Save</button>
          <button onClick={onClose} className="close-settings">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
