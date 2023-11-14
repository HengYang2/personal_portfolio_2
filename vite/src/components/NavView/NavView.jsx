import React from 'react'

//MUI
import Container from '@mui/material/Container';
import { Box, Paper, Button, createTheme, ThemeProvider, TextField } from '@mui/material/';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MusicOffIcon from '@mui/icons-material/MusicOff';

import { useDispatch } from "react-redux";

//Import Selection UI: a UI overlay that user can hover over to toggle between different views.
import MenuUi from './MenuUi/MenuUi';

export default function NavView() {

  const dispatch = useDispatch();
  const setViewState = () => {
    dispatch({ type: 'SET_VIEW_STATE', payload: 'landingView' });
    return;
  }


  return (
    <>
      <Container maxWidth={false} sx={{ padding: '0%', bgcolor: 'grey', height: '100%', position: 'absolute', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Container sx={{ bgcolor: "", width: '100%', height: { mobile: '8%', tablet: '8%', laptop: '10%', desktop: '12%' }, paddingLeft: { mobile: '3%', tablet: '3%', laptop: '12%', desktop: '12%' }, paddingRight: { mobile: '5%', tablet: '5%', laptop: '12%', desktop: '12%' }, marginTop: { mobile: '5%', tablet: '5%', laptop: '3%', desktop: '2%' } }}>
          <Container sx={{ bgcolor: "", height: "100%", padding: '0%', display: 'flex', position: 'relative', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Button variant="contained" sx={{ height: "100%", aspectRatio: "1", padding: "3%" }} onClick={() => { setViewState() }}> <ArrowBackIcon /></Button>
            <Button variant="outlined" color="secondary" sx={{ height: "100%", aspectRatio: "1", padding: "3%" }}><MusicNoteIcon sx={{ color: "black" }} /></Button>
          </Container>
        </Container>
        <Container sx={{ bgcolor: "", height: "25%", width: '100%', paddingLeft: { mobile: '3%', tablet: '3%', laptop: '12%', desktop: '12%' }, paddingRight: { mobile: '5%', tablet: '5%', laptop: '12%', desktop: '12%' }, marginBottom: { mobile: '5%', tablet: '5%', laptop: '3%', desktop: '2%' } }}>
          <Paper sx={{ height: '100%', margin: '0%', padding: '3%' }}>THIS IS NAV VIEW</Paper>
        </Container>
      </Container>
      <MenuUi></MenuUi>
    </>
  )
}
