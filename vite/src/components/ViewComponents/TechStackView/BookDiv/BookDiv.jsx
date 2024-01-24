import React, { useState } from 'react';

import bookTween from '../../../../tween/bookTween'

//Import div styles:
import styles from '../../../../styles/styles'

const BookDiv = (props) => {

    //Div Styles:
    const bookContainerStyles = styles().bookStyles.container;
    const bookChildStyles = styles().bookStyles.child;

    //Props:
    const setSelectedQuestion = props.setSelectedQuestion;
    const setHoveredDiv = props.setHoveredDiv;

    return (
        <div style={bookContainerStyles}>
            {/* books passed into bookTween() are global variables that are attached to the 'window' object */}
            <div style={bookChildStyles} onClick={() => { setSelectedQuestion('REACT'); }} onMouseEnter={(e) => { bookTween(blueBook); setHoveredDiv('React'); }} onMouseLeave={(e) => { setHoveredDiv('') }}></div>
            <div style={bookChildStyles} onClick={() => { setSelectedQuestion('REDUX / SAGAS'); }} onMouseEnter={(e) => { bookTween(greenBook); setHoveredDiv('Redux / Sagas'); }} onMouseLeave={(e) => { setHoveredDiv('') }}></div>
            <div style={bookChildStyles} onClick={() => { setSelectedQuestion('JAVASCRIPT'); }} onMouseEnter={(e) => { bookTween(redBook); setHoveredDiv('Javascript'); }} onMouseLeave={(e) => { setHoveredDiv('') }}></div>
            <div style={bookChildStyles} onClick={() => { setSelectedQuestion('JQUERY'); }} onMouseEnter={(e) => { bookTween(yellowBook); setHoveredDiv('Jquery'); }} onMouseLeave={(e) => { setHoveredDiv('') }}></div>
            <div style={bookChildStyles} onClick={() => { setSelectedQuestion('NODE.JS'); }} onMouseEnter={(e) => { bookTween(orangeBook); setHoveredDiv('Node.js'); }} onMouseLeave={(e) => { setHoveredDiv('') }}></div>
            <div style={bookChildStyles} onClick={() => { setSelectedQuestion('GIT / GITHUB'); }} onMouseEnter={(e) => { bookTween(purpleBook); setHoveredDiv('Git / Github'); }} onMouseLeave={(e) => { setHoveredDiv('') }}></div>
            <div style={bookChildStyles} onClick={() => { setSelectedQuestion('SQL'); }} onMouseEnter={(e) => { bookTween(brownBook); setHoveredDiv('SQL'); }} onMouseLeave={(e) => { setHoveredDiv('') }}></div>
            <div style={bookChildStyles} onClick={() => { setSelectedQuestion('POSTGRES'); }} onMouseEnter={(e) => { bookTween(blackBook); setHoveredDiv('Postgres'); }} onMouseLeave={(e) => { setHoveredDiv('') }}></div>
            <div style={bookChildStyles} onClick={() => { setSelectedQuestion('HOSTINGER'); }} onMouseEnter={(e) => { bookTween(limeGreenBook); setHoveredDiv('Hostinger'); }} onMouseLeave={(e) => { setHoveredDiv('') }}></div>
            <div style={bookChildStyles} onClick={() => { setSelectedQuestion('AWS'); }} onMouseEnter={(e) => { bookTween(magentaBook); setHoveredDiv('AWS'); }} onMouseLeave={(e) => { setHoveredDiv('') }}></div>
            <div style={bookChildStyles} onClick={() => { setSelectedQuestion('MATERIAL UI'); }} onMouseEnter={(e) => { bookTween(pinkBook); setHoveredDiv('Material UI'); }} onMouseLeave={(e) => { setHoveredDiv('') }}></div>
            <div style={bookChildStyles} onClick={() => { setSelectedQuestion('THREE.JS'); }} onMouseEnter={(e) => { bookTween(cyanBook); setHoveredDiv('Three.js'); }} onMouseLeave={(e) => { setHoveredDiv('') }}></div>
        </div>
    );
};

export default BookDiv