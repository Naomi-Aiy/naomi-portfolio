import React, { useEffect, useState } from 'react';
import './Cursor.css';

const Cursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [clicking, setClicking] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleClick = () => {
      setClicking(true);
      setTimeout(() => setClicking(false), 150); // short glow
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleClick);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleClick);
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${clicking ? 'click' : ''}`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  );
};

export default Cursor;
