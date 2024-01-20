import React, { useState, useEffect } from 'react';
import _ from 'lodash';

const useTooltip = () => {
  const [hoveredDiv, setHoveredDiv] = useState('');

  const toolTipStyles = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    margin: '0%',
    height: '5em',
    aspectRatio: '1.5/1',
    opacity: '0.9',
    backgroundColor: 'white',
    padding: '1em',
    border: '1px solid darkblue',
    borderRadius: '8px',
    textAlign: 'center',
    fontSize: '16px',
    zIndex: '1000'
  };

  const renderToolTip = () => {
    if (hoveredDiv === '') {
      return <div id="cursor"></div>;
    } else {
      return <div id="cursor" style={toolTipStyles}>{hoveredDiv}</div>;
    }
  };

  useEffect(() => {
    const handleMouseMove = _.debounce((event) => {
      const cursor = document.getElementById("cursor");
      if (cursor) {
        //Cursor location
        const x = event.clientX;
        const y = event.clientY;

        //Spawn the 'cursor div' at the location of the cursor
        cursor.style.left = x + 10 + "px";
        cursor.style.top = y + "px";
      }
    }, 9305); //For debouncing purposes

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      // Cleanup event listener on component unmount
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // Empty dependency array ensures the effect runs only once (on mount)

  return { renderToolTip, setHoveredDiv };
};

export default useTooltip;
