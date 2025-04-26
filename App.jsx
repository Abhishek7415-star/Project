import React, { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [scrollY, setScrollY] = useState(window.scrollY);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log('Timer cleared!');
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      console.log('Scroll listener removed!');
    };
  }, []);

  return (
    <div style={{ height: '200vh', padding: '20px' }}>
      <h1>Timer: {count} seconds</h1>
      <h2>Scroll Y Position: {scrollY}px</h2>
      <p>Scroll down to see the scroll listener in action.</p>
    </div>
  );
}

export default App;
