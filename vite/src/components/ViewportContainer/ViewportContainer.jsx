import React from 'react'
import NavBar from '../BaseComponents/NavBar/NavBar';

import styles from '../../styles/styles'

export default function ViewportContainer(props) {

  const viewportStyles = styles().viewportStyles;
  const interactiveSpaceStyles = styles().interactiveSpaceStyles;
  const edgeBarStyles = styles().edgeBarStyles;
  
  const mainViewStyles = styles().mainViewStyles;


  // <Container sx={{ bgcolor: 'lightBlue', height: '100%', minWidth: '100%', padding: '0%', margin: '0%', position: 'absolute', }}>
  return (
    <div style={viewportStyles}>
      <div style={edgeBarStyles}></div>
      <div style={interactiveSpaceStyles}>
        <NavBar camera={props.camera} target={props.target} scene={props.scene}/>
        <div style={mainViewStyles}></div>
      </div>
      <div style={edgeBarStyles}></div>
    </div>
  )
}
