import React, { useState, useEffect } from 'react';
import _ from 'lodash';

import styles from '../styles/styles';

const useTooltip = () => {
  const [hoveredDiv, setHoveredDiv] = useState('');

  //Styles for the toolTipDiv:
  const toolTipStyles = styles.toolTipStyles;


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
        console.log('xy coords:', x, y);

        //Spawn the 'cursor div' at the location of the cursor
        cursor.style.position = 'absolute';
        cursor.style.left = x + 5 + "px";
        cursor.style.top = y + 7 + "px";
      }
    },0.12); //For debouncing purposes

    console.log('event listener added');
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      // Cleanup event listener on component unmount
      console.log('event listener removed');
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // Empty dependency array ensures the effect runs only once (on mount)

  return { renderToolTip, setHoveredDiv };
};

export default useTooltip;
