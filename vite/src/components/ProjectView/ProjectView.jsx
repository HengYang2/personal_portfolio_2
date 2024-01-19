import React from 'react'

//MUI
import Container from '@mui/material/Container';
import { Box, Paper, Button, createTheme, ThemeProvider, TextField, Typography, Stack } from '@mui/material/';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MusicOffIcon from '@mui/icons-material/MusicOff';


import { useDispatch } from "react-redux";

export default function ProjectView() {

  const dispatch = useDispatch();
  const setViewState = () => {
    dispatch({ type: 'SET_VIEW_STATE', payload: 'navView' });
    return;
  }


  return (
    <Container maxWidth={false} sx={{ margin: '0%', padding: '0%', bgcolor: '', height: '100%', position: 'absolute', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '0%', pointerEvents: 'auto' }}>
      <Paper variant='outlined' sx={{ bgcolor: 'grey', height: '25%', width: '65%', position: 'absolute', marginTop: '34%' }}>
        <Stack direction='row' spacing={2} sx={{ bgcolor: '', padding: '0.5%', height: '100%', width: '100%', position: 'absolute', display: 'flex', flexDirection: 'row', justifyContent: 'start' }}>
          <Paper variant='outlined' sx={{ bgcolor: '', height: '100%', aspectRatio: '1/1', display: 'flex', flexDirection: 'column', justifyContent: 'end', alignItems: 'center' }}>
            <img src='../../../public/hengPicture.jpg' />
            <Paper sx={{ position: 'absolute', marginBottom: '1%', padding: '0.25%' }}>
              <Typography variant='h1'>
                Heng Yang
              </Typography>
            </Paper>
          </Paper>
          <Paper variant='outlined' sx={{ bgcolor: 'white', height: '100%', flex: '1', }}>
          </Paper>
        </Stack>
      </Paper>
    </Container>
  )
}
