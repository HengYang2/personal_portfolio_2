import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

//MUI
import Container from '@mui/material/Container';
import { Box, Paper, Button, createTheme, ThemeProvider, TextField, Typography, Stack } from '@mui/material/';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MusicOffIcon from '@mui/icons-material/MusicOff';

// import '@fontsource/roboto/300.css';

//Camera Tween
import cameraTween from '../../tween/cameraTween';


export default function LandingView(props) {

  const isTweenFinishedReducer = useSelector(store => store.isTweenFinishedReducer);

  const dispatch = useDispatch();
  const setViewState = () => {
    dispatch({ type: 'SET_VIEW_STATE', payload: 'navView' });
    return;
  }
  const setIsTweenFinished = (bool) => {
    dispatch({ type: 'SET_IS_TWEEN_FINISHED', payload: bool });
    return;
  }

  //Toggle button variant for "Toggle 360 rotation" MUI button component:
  const [toggle360, setToggle360] = useState(true);
  const toggle360ButtonVariant = () => {
    if (toggle360) {
      return <Button variant="contained" sx={{ height: '100%', padding: "0%", fontSize: '8px', wordWrap: 'break-word', overflowWrap: 'break-word', wordBreak: 'break-word' }} onClick={() => { setToggle360(false) }}>Toggle 360<br /> rotation</Button>
    } else {
      return <Button variant="outlined" sx={{ height: '100%', padding: "0%", fontSize: '8px', wordWrap: 'break-word', overflowWrap: 'break-word', wordBreak: 'break-word' }} onClick={() => { setToggle360(true) }}>Toggle 360<br /> rotation</Button>
    }
  }

  //Toggle button variant for *Music Note* MUI button component:
  const [toggleMusic, setToggleMusic] = useState(true);
  const toggleMusicButtonVariant = () => {
    if (toggleMusic) {
      return <Button variant="outlined" color="secondary" onClick={() => { setToggleMusic(false) }} sx={{ height: "100%", aspectRatio: "1", padding: "0%" }}><MusicNoteIcon sx={{ color: "black", fontSize: 'small' }} /></Button>
    } else {
      return <Button variant="outlined" color="secondary" onClick={() => { setToggleMusic(true) }} sx={{ height: "100%", aspectRatio: "1", padding: "0%" }}><MusicOffIcon sx={{ color: "black", fontSize: 'small' }} /></Button>
    }
  }


  // mobile: 0,
  // tablet: 640,
  // laptop: 1024,
  // desktop: 1200,

  //For reference
  // <Container sx={{ height: '25%', bgcolor: '', position: 'relative', pointerEvents: 'auto', padding: '0%', margin: '0%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '4%', paddingTop: '0%' }}>
  //       {/* <Container sx={{ height: '100%', zIndex: '0', width: '100%', bgcolor: '', position: 'absolute', opacity: '20%' }}></Container> */}
  //       <Paper sx={{ width: { mobile: '75%', desktop: '70%' }, height: { desktop: '100%' }, zIndex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: { mobile: '3%', laptop: '1%', desktop: '1%' }, marginTop: { mobile: '15%', laptop: '6%', desktop: '7%' } }}>
  //         <Typography variant='h6' component="h1">
  //           Welcome to Heng's Room
  //         </Typography>
  //       </Paper>
  //       <Paper sx={{ width: '50%', zIndex: '1', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: { mobile: '1%', laptop: '1%', desktop: '1%' } }}>
  //         <Typography variant='subtitle1' component="h2">
  //           Try rotating model!
  //         </Typography>
  //       </Paper>
  //     </Container>
  //     <Container sx={{ height: '50%', bgcolor: '', display: 'flex', flexDirection: 'column', justifyContent: 'end', pointerEvents: 'none' }}>
  //       <Container sx={{ pointerEvents: 'auto', width: '75%', height: '15%', bgcolor: '', position: 'relative', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', padding: '0%' }}>
  //         {toggle360ButtonVariant()}
  //         <Button variant="contained" color="secondary" sx={{ height: "100%", aspectRatio: "1", padding: "0%", fontSize: '8px', color: 'white' }}>Reset Camera</Button>
  //         {toggleMusicButtonVariant()}
  //       </Container>
  //     </Container>
  //     <Container sx={{ height: '25%', position: 'relative', bgcolor: '', pointerEvents: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
  //       {/* <Container sx={{ height: '100%', zIndex: '0', width: '100%', bgcolor: '', position: 'absolute', opacity: '20%' }}></Container> */}
  //       <Button onClick={() => { setViewState(); cameraTween(props.camera, props.target, '', setIsTweenFinished); }} sx={{ padding: { mobile: '2%', desktop: '2%' }, color: 'black', zIndex: '1', bgcolor: 'white', height: '50%', width: '50%', border: '', }}>
  //         <Typography variant="body1" component="">
  //           Explore / Learn More About Me!
  //         </Typography>
  //       </Button>
  //     </Container>

  return (
    <Container maxWidth={false} sx={{ margin: '0%', padding: '0%', bgcolor: '', height: '100%', position: 'absolute', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '0%', pointerEvents: 'auto' }}>
      <Paper variant='outlined' sx={{ bgcolor: 'grey', height: '25%', width: '65%', position: 'absolute', marginTop: '34%' }}>
        <Stack direction='row' spacing={2} sx={{ bgcolor: '', padding: '0.5%', height: '100%', width: '100%', position: 'absolute', display: 'flex', flexDirection: 'row', justifyContent: 'start'}}>
          <Paper variant='outlined' sx={{ bgcolor: '', height: '100%', aspectRatio: '1/1', display: 'flex', flexDirection: 'column', justifyContent: 'end', alignItems: 'center'}}>
            <img src='../../../public/hengPicture.jpg'/>
            <Paper sx={{position: 'absolute', marginBottom: '1%', padding: '0.25%'}}>
              <Typography variant='h1'>
                Heng Yang
              </Typography>
            </Paper>
          </Paper>
          <Paper  variant='outlined' sx={{ bgcolor: 'white', height: '100%', flex: '1', }}>

          </Paper>
        </Stack>
      </Paper>
    </Container>
  )
}
