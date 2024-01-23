import React from 'react'
import NavBar from '../BaseComponents/NavBar/NavBar';
import MainViewComponent from '../BaseComponents/MainViewComponent/MainViewComponent';

import styles from '../../styles/styles'

export default function ViewportContainer(props) {

  const viewportStyles = styles().viewportStyles;
  const interactiveSpaceStyles = styles().interactiveSpaceStyles;
  const edgeBarStyles = styles().edgeBarStyles;

  return (
    <div style={viewportStyles}>
      <div style={edgeBarStyles}></div>
      <div style={interactiveSpaceStyles}>
        <NavBar camera={props.camera} target={props.target} scene={props.scene}/>
        <MainViewComponent camera={props.camera} target={props.target} scene={props.scene}/>
      </div>
      <div style={edgeBarStyles}></div>
    </div>
  )
}