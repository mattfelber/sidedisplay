import React, { useState } from 'react';

const Settings = ({ isOpen, onClose, settings, onSave, cities }) => {
  const [localSettings, setLocalSettings] = useState({
    ...settings,
    alerts: settings.alerts || []  // Initialize alerts array if it doesn't exist
  });
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
      const updatedAlerts = [...(localSettings.alerts || []), { ...newAlert, enabled: true }];
      setLocalSettings({
        ...localSettings,
        alerts: updatedAlerts
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
        <div className="settings-header">
          <div className="settings-tabs">
            <button 
              className={`settings-tab ${activeTab === 'general' ? 'active' : ''}`}
              onClick={() => setActiveTab('general')}
            >
              General
            </button>
            <button 
              className={`settings-tab ${activeTab === 'clocks' ? 'active' : ''}`}
              onClick={() => setActiveTab('clocks')}
            >
              Clocks
            </button>
            <button 
              className={`settings-tab ${activeTab === 'alerts' ? 'active' : ''}`}
              onClick={() => setActiveTab('alerts')}
            >
              Alerts
            </button>
          </div>
        </div>

        <div className={`tab-content ${activeTab === 'general' ? 'active' : ''}`}>
          <div className="settings-body">
            <div className="settings-section">
              <h3>⚙️ General</h3>
              <div className="settings-input-group">
                <label className="settings-input-label">Heart Message</label>
                <input
                  type="text"
                  className="settings-input"
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
        </div>

        <div className={`tab-content ${activeTab === 'clocks' ? 'active' : ''}`}>
          <div className="settings-body">
            <div className="settings-section">
              <h3>🌍 Timezones</h3>
              <div className="clock-settings">
                <div className="timezone-setting">
                  <label className="settings-input-label">Clock 1:</label>
                  <select 
                    className="settings-input"
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
                  <label className="settings-input-label">Clock 2:</label>
                  <select 
                    className="settings-input"
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
                  <label className="settings-input-label">Clock 3:</label>
                  <select 
                    className="settings-input"
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
                  <label className="settings-input-label">Clock 4:</label>
                  <select 
                    className="settings-input"
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
          </div>
        </div>

        <div className={`tab-content ${activeTab === 'alerts' ? 'active' : ''}`}>
          <div className="settings-body">
            <div className="settings-section">
              <h3>🔔 Alerts</h3>
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
                          className="settings-checkbox"
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
        </div>

        <div className="settings-buttons">
          <button className="settings-button-primary" onClick={handleSave}>Save</button>
          <button className="settings-button-secondary" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
