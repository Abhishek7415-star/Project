import React, { useEffect, useState } from 'react';
import './App.css';

function FetchDataComponent() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data.slice(0, 5))) // limit to 5 for simplicity
      .catch(err => console.error("Error fetching countries:", err));
  }, []);

  return (
    <div>
      <h2>🌍 Fetched Countries</h2>
      <ul>
        {countries.map((country, index) => (
          <li key={index}>{country.name.common}</li>
        ))}
      </ul>
    </div>
  );
}

function MouseTrackerComponent() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
      console.log(`Mouse moved to X: ${event.clientX}, Y: ${event.clientY}`);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      <h2>Mouse Position</h2>
      <p>X: {mousePosition.x}, Y: {mousePosition.y}</p>
    </div>
  );
}

function DocumentTitleUpdater() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <h2>Document Title Updater</h2>
      <button onClick={() => setCount(count + 1)}>Click Me ({count})</button>
    </div>
  );
}

function App() {
  return (
    <div className="App" style={{ padding: 20 }}>
      <h1>useEffect Hook Demo</h1>
      <FetchDataComponent />
      <hr />
      <MouseTrackerComponent />
      <hr />
      <DocumentTitleUpdater />
    </div>
  );
}

export default App;
