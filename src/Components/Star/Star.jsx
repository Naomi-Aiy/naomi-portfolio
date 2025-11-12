import React from "react";
import './Star.css';

const Star = ({ count = 10 }) => {
  const stars = Array.from({ length: count }).map((_, i) => {
    const isFourPoint = Math.random() < 0.25; // 25% chance
    const size = isFourPoint 
      ? 6 + Math.random() * 4  // 6-10px for four-point stars
      : 4 + Math.random() * 4; // 4-8px for circle stars

    const style = {
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      width: `${size}px`,
      height: `${size}px`,
      animationDuration: `${1 + Math.random() * 3}s`, // random blink speed
      animationDelay: `${Math.random() * 5}s`,       // random start
    };

    return <div key={i} className={`star ${isFourPoint ? 'four-point' : ''}`} style={style} />;
  });

  return <>{stars}</>;
};

export default Star;
