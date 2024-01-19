import { useEffect, useState } from 'react'
import Container from '@mui/material/Container';
import { Grid, Stack, Typography } from '@mui/material/';
// import BoxSx from './components/BoxSx';
import { Box, Paper, Button, createTheme, ThemeProvider, TextField } from '@mui/material/';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MusicOffIcon from '@mui/icons-material/MusicOff';

//Import NavBar component:
import NavBar from './components/NavBar/NavBar';

//Import BlackSideBars component (conditionally rendered based on screen size)
import BlackSideBars from './components/BlackSideBars/BlackSideBars';

//Redux
import { useDispatch, useSelector, } from "react-redux";

//Import Mouse Tracker
// import MouseTracker from './components/MouseTracker/MouseTracker';

//Import all diiferenet componet views:
import ContactView from './components/ContactView/ContactView';
import ProjectView from './components/ProjectView/ProjectView';
import TechStackView from './components/ProjectView/TechStackView/TechStackView'
import AboutMeView from './components/AboutMeView/AboutMeView';
import MusicView from './components/MusicView/MusicView';

const breakpoints = {
  values: {
    mobile: 0,
    tablet: 640,
    laptop: 1024,
    desktop: 1200,
  }
};

const theme = createTheme({
  breakpoints,
  typography: {
    h1: {
      fontSize: "1.5rem",
      [`@media screen and (max-width: ${breakpoints.values.mobile}px)`]: {
        fontSize: "0.2rem"
      }
    }
  },
  // palette: {
  //   background:{
  //     paper: '#000000'
  //   }
  // }
  palette: {
    primary: {
      main: '#ab7e4c',
      light: '#01fe21',
      dark: '#01fe21',
      contrastText: '#01fe21',
    },
    secondary: {
      main: '#ffffff',
      light: '#01fe21',
      dark: '#01fe21',
      contrastText: '#000000',
    },
    error: {
      main: '#00ffff',
      light: '#01fe21',
      dark: '#01fe21',
      contrastText: '#01fe21',
    },
    warning: {
      main: '#01fe21',
      light: '#01fe21',
      dark: '#01fe21',
      contrastText: '#01fe21',
    },
    success: {
      main: '#01fe21',
      light: '#01fe21',
      dark: '#01fe21',
      contrastText: '#01fe21',
    },
  }
})

function App(props) {

  const viewStateReducer = useSelector(store => store.viewStateReducer);
  const isTweenFinishedReducer = useSelector(store => store.isTweenFinishedReducer);

  const renderCurrentView = () => {

    //If tween is still playing, exit function:
    if (isTweenFinishedReducer === false) {
      return;
    }


    //Switch views based on viewStateReducer:
    switch (viewStateReducer) {
      case 'aboutMeView':
        return (
          <>
            <NavBar target={props.target} camera={props.camera}></NavBar>
            <AboutMeView target={props.target} camera={props.camera} scene={props.scene}></AboutMeView>
          </>
        )
        break;
      case 'contactView':
        return (
          <>
            <NavBar target={props.target} camera={props.camera}></NavBar>
            <ContactView target={props.target} camera={props.camera} scene={props.scene}></ContactView>
          </>
        )
        break;
      case 'projectView':
        return (
          <>
            <NavBar target={props.target} camera={props.camera}></NavBar>
            <ProjectView target={props.target} camera={props.camera} scene={props.scene}></ProjectView>
          </>
        )
        break;
      case 'techStackView':
        return (
          <>
            <NavBar target={props.target} camera={props.camera}></NavBar>
            <TechStackView target={props.target} camera={props.camera} scene={props.scene}></TechStackView>
          </>
        )
        break;
      case 'musicView':
        return (
          <>
            <NavBar target={props.target} camera={props.camera}></NavBar>
            <MusicView target={props.target} camera={props.camera} scene={props.scene}></MusicView>
          </>
        )
        break;
      default:
        return <h1>Something went wrong {":("}</h1>
        break;
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <BlackSideBars></BlackSideBars>
      {renderCurrentView()}
    </ThemeProvider>
  )
}

export default App