import React, { useState } from 'react';
import { timezoneOptions } from '../data/timezones';

const Settings = ({ isOpen, onClose, settings, onSave, cities }) => {
  const [localSettings, setLocalSettings] = useState({
    ...settings,
    alerts: settings.alerts || []  // Initialize alerts array if it doesn't exist
  });
  const [activeTab, setActiveTab] = useState('clocks');
  const [newAlert, setNewAlert] = useState({ time: '', message: '' });
  const [dragIndex, setDragIndex] = useState(null);
  const [dragOverIndex, setDragOverIndex] = useState(null);

  const reorderAlerts = (fromIndex, toIndex) => {
    const newAlerts = [...localSettings.alerts];
    const [moved] = newAlerts.splice(fromIndex, 1);
    newAlerts.splice(toIndex, 0, moved);
    setLocalSettings({ ...localSettings, alerts: newAlerts });
  };

  const handleDragStart = (index) => {
    setDragIndex(index);
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    setDragOverIndex(index);
  };

  const handleDrop = (e, index) => {
    e.preventDefault();
    if (dragIndex !== null && dragIndex !== index) {
      reorderAlerts(dragIndex, index);
    }
    setDragIndex(null);
    setDragOverIndex(null);
  };

  const handleDragEnd = () => {
    setDragIndex(null);
    setDragOverIndex(null);
  };

  const handleSave = () => {
    onSave(localSettings);
    onClose();
  };

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
                    type="text"
                    value={newAlert.time}
                    onChange={(e) => setNewAlert({ ...newAlert, time: e.target.value })}
                    placeholder="HH:MM (e.g. 09:30)"
                    pattern="[0-9]{1,2}:[0-9]{2}"
                    maxLength={5}
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
                    <div
                      key={index}
                      className={`alert-item${dragIndex === index ? ' dragging' : ''}${dragOverIndex === index ? ' drag-over' : ''}`}
                      draggable
                      onDragStart={() => handleDragStart(index)}
                      onDragOver={(e) => handleDragOver(e, index)}
                      onDrop={(e) => handleDrop(e, index)}
                      onDragEnd={handleDragEnd}
                    >
                      <div className="drag-handle" title="Drag to reorder">☰</div>
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
