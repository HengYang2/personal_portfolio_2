import { Container } from '@mui/material'
import React from 'react'
// import EdgeBar from '../BaseComponents/EdgeBar/EdgeBar'
// import InteractiveSpace from '../BaseComponents/InteractiveSpace/InteractiveSpace'

import styles from '../../styles/styles'

export default function ViewportContainer(props) {

  const viewportStyles = styles().viewportStyles;
  const interactiveSpaceStyles = styles().interactiveSpaceStyles;
  const edgeBarStyles = styles().edgeBarStyles;


  // <Container sx={{ bgcolor: 'lightBlue', height: '100%', minWidth: '100%', padding: '0%', margin: '0%', position: 'absolute', }}>
  return (
    <div style={viewportStyles}>
      <div style={edgeBarStyles}></div>
      <div style={interactiveSpaceStyles}></div>
      <div style={edgeBarStyles}></div>
    </div>
  )
}
