import React, { useState } from 'react';
import Clock from './components/Clock';
import InspirationBox from './components/InspirationBox';
import { cities } from './data/content';
import './App.css';

function App() {
  const [theme, setTheme] = useState(1);

  return (
    <div className={`App theme-${theme}`}>
      <button className="theme-toggle" onClick={() => setTheme(t => t % 5 + 1)}>
        💡
      </button>

      <div className="dashboard">
        {Object.entries(cities).map(([city, data]) => (
          <Clock key={city} city={data.name} timezone={data.timezone} />
        ))}
        <InspirationBox />
      </div>
    </div>
  );
}

export default App;
