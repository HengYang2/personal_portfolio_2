import React from 'react'

//MUI
import Container from '@mui/material/Container';
import { Box, Paper, Button, createTheme, ThemeProvider, TextField } from '@mui/material/';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MusicOffIcon from '@mui/icons-material/MusicOff';

import { useDispatch } from "react-redux";

export default function LandingView() {

  const dispatch = useDispatch();
  const setViewState = () => {
    dispatch({ type: 'SET_VIEW_STATE', payload: 'navView' });
    return;
  }


  return (
    <Container maxWidth={false} sx={{ margin: '0%', padding: '0%', bgcolor: '', height: '100%', position: 'absolute', display: 'flex', flexDirection: 'column', justifyContent: 'start', gap: '0%', pointerEvents: '' }}>
      <Container sx={{ height: '25%', bgcolor: '', position: 'relative', pointerEvents: 'auto', padding: '0%', margin: '0%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '4%', paddingTop: '0%' }}>
        {/* <Container sx={{ height: '100%', zIndex: '0', width: '100%', bgcolor: '', position: 'absolute', opacity: '20%' }}></Container> */}
        <Paper sx={{ width: '75%', zIndex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: '4%', paddingBottom: '4%', marginTop: '15%' }}>Welcome to Heng's Room</Paper>
        <Paper sx={{ width: '50%', zIndex: '1', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '2%' }}>Try rotating model!</Paper>
      </Container>
      <Container sx={{ height: '50%', bgcolor: '', display: 'flex', flexDirection: 'column', justifyContent: 'end', pointerEvents: 'none' }}>
        <Container sx={{ pointerEvents:'auto', width: '75%', height: '15%', bgcolor: '', position: 'relative', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', padding: '0%' }}>
          <Button variant="contained" sx={{ height: '100%', padding: "0%", fontSize:'8px', wordWrap:'break-word', overflowWrap:'break-word', wordBreak:'break-word' }} onClick={() => { setViewState() }}>Toggle 360<br/> rotation</Button>
          <Button variant="outlined" color="secondary" sx={{ height: "100%", aspectRatio: "1", padding: "0%", fontSize:'8px', color:'white' }}>Reset Camera</Button>
          <Button variant="outlined" color="secondary" sx={{ height: "100%", aspectRatio: "1", padding: "0%" }}><MusicNoteIcon sx={{ color: "black", fontSize: 'small' }} /></Button>
        </Container>
      </Container>
      <Container sx={{ height: '25%', position: 'relative', bgcolor: '', pointerEvents: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        {/* <Container sx={{ height: '100%', zIndex: '0', width: '100%', bgcolor: '', position: 'absolute', opacity: '20%' }}></Container> */}
        <Button onClick={() => { setViewState() }} sx={{ color: 'black', zIndex: '1', bgcolor: 'white', height: '50%', width: '50%', border: '', }}>Explore / Learn More About Me</Button>
      </Container>
    </Container>
  )
}
