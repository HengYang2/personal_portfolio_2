import React, { useEffect } from 'react'
import { useState } from 'react';

//MUI
import Container from '@mui/material/Container';
import { Box, Popper, Fade, Paper, Button, createTheme, ThemeProvider, TextField, Typography, Stack } from '@mui/material/';

// import EmailModal from './EmailModal/EmailModal'

import useIsTweenFinished from '../../../hooks/useIsTweenFinished';
import cameraTween from '../../../tween/cameraTween';
import useViewState from '../../../hooks/useViewState';
import useSelectedQuestion from '../../../hooks/useSelectedQuestion';

import styles from '../../../styles/styles';

export default function ContactView(props) {


  //Imported dispatch functions:
  const { setIsTweenFinished } = useIsTweenFinished();
  const { setViewState } = useViewState();
  const { setSelectedQuestion } = useSelectedQuestion();

  const contactViewContainerStyles = styles().contactViewContainerStyles;

  return (
    <div style={{ paddingLeft: '8%', paddingTop: '8%', opacity: '0.25', width: '100%', height: '100%', backgroundColor: '', display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'center', gap: '2%' }}>
      <Button sx={{ backgroundColor: '', '&:hover': { backgroundColor: 'lightBlue' }, border: '1px solid white', width: '45%', height: '30%' }} onClick={() => { cameraTween(props.camera, props.target, 'shotgun', setIsTweenFinished); setViewState('observationView'), setSelectedQuestion('SG') }}></Button>
      <Button sx={{ backgroundColor: '', '&:hover': { backgroundColor: 'lightBlue' }, border: '1px solid white', width: '45%', height: '30%' }} onClick={() => { cameraTween(props.camera, props.target, 'mrFrogPhoto', setIsTweenFinished); setViewState('observationView'), setSelectedQuestion('MFP') }}></Button>
      <div style={{ backgroundColor: '', order: '1px solid white', width: '45%', height: '30%', display: 'flex', flexDirection: 'row', justifyContent: 'start', alignItems: 'center', gap: '0%' }}>
        <Button sx={{ backgroundColor: '', '&:hover': { backgroundColor: 'lightBlue' }, border: '1px solid white', width: '65%', height: '100%' }} onClick={() => { cameraTween(props.camera, props.target, 'laptop', setIsTweenFinished); setViewState('emailView') }} />
        <Button sx={{ backgroundColor: '', '&:hover': { backgroundColor: 'lightBlue' }, border: '1px solid white', width: '35%', height: '100%' }} onClick={() => { cameraTween(props.camera, props.target, 'zombieHand', setIsTweenFinished); setViewState('observationView'), setSelectedQuestion('ZH') }} />
      </div>
    </div>
  )
}
