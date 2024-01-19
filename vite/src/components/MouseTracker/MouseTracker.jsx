// MouseTracker.js
import React, { useState } from 'react';

const MouseTracker = () => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null, hoveredObject: null });

  const handleMouseMove = (event) => {
    const { clientX, clientY, target } = event;
    const x = clientX;
    const y = clientY;
    const hoveredObject = target.tagName;

    setMousePosition({ x, y, hoveredObject });
  };

  // Inline styles to make the div take up the whole screen
  const divStyle = {
    width: '100%', // 100% of the viewport width
    height: '100%', // 100% of the viewport height
    margin: 0, // Remove default margin
    padding: 0, // Remove default padding
    backgroundColor: 'blue',
    position: 'absolute',
    zIndex: '5',

  };

  return (
    <div style={divStyle} onMouseMove={handleMouseMove}>
      <p>Hovered Object: {mousePosition.hoveredObject}</p>
    </div>
  );
};

export default MouseTracker;
