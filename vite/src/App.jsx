import { useState } from 'react'
import Container from '@mui/material/Container';
import { Grid, Stack, Typography } from '@mui/material/';
// import BoxSx from './components/BoxSx';
import { Box, Paper, Button, createTheme, ThemeProvider, TextField } from '@mui/material/';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MusicOffIcon from '@mui/icons-material/MusicOff';

//Redux
import { useDispatch,useSelector, } from "react-redux";


//Import all diiferenet componet views:
import LandingView from './components/LandingView/LandingView';
import NavView from './components/NavView/NavView';
import ContactView from './components/ContactView/ContactView';
import ProjectView from './components/ProjectView/ProjectView';
import AboutMeView from './components/AboutMeView/AboutMeView';
import MusicView from './components/MusicView/MusicView';


const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
    },
  },
  // palette: {
  //   background:{
  //     paper: '#000000'
  //   }
  // }
  // palette: {
  //   primary: {
  //     main: '#01fe21',
  //     light: '#01fe21',
  //     dark: '#01fe21',
  //     contrastText: '#01fe21',
  //   },
  //   secondary: {
  //     main: '#01fe21',
  //     light: '#01fe21',
  //     dark: '#01fe21',
  //     contrastText: '#01fe21',
  //   },
  //   error: {
  //     main: '#01fe21',
  //     light: '#01fe21',
  //     dark: '#01fe21',
  //     contrastText: '#01fe21',
  //   },
  //   warning: {
  //     main: '#01fe21',
  //     light: '#01fe21',
  //     dark: '#01fe21',
  //     contrastText: '#01fe21',
  //   },
  //   success: {
  //     main: '#01fe21',
  //     light: '#01fe21',
  //     dark: '#01fe21',
  //     contrastText: '#01fe21',
  //   },
  // }
})

function App() {
  const [count, setCount] = useState(0)

  
  const dispatch = useDispatch();
  const setTest = () => {
    dispatch({ type: 'SET_TEST', payload: 'Test is testing boiiiiii........' });
    return;
  }

  const currentView = useSelector(store => store.testReducer);

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth={false} sx={{ padding:'0%', bgcolor: 'grey', height:'100%', position: 'absolute', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <Container sx={{ bgcolor: "", width:'100%', height: {mobile: '8%', tablet: '8%', laptop:'10%', desktop: '12%'}, paddingLeft: {mobile: '3%', tablet: '3%', laptop:'12%', desktop: '12%'}, paddingRight: {mobile: '5%', tablet: '5%', laptop:'12%', desktop: '12%'}, marginTop: {mobile: '5%', tablet: '5%', laptop:'3%', desktop: '2%'}}}>
          <Container sx={{ bgcolor: "", height: "100%", padding:'0%', display: 'flex', position: 'relative', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Button variant="contained" sx={{ height: "100%", aspectRatio: "1", padding: "3%" }} onClick={() => {console.log("button presed!", currentView); setTest()}}> <ArrowBackIcon/></Button>
            <Button variant="outlined" color="secondary" sx={{ height: "100%", aspectRatio: "1", padding: "3%" }}><MusicNoteIcon sx={{ color: "black" }} /></Button>
          </Container>
        </Container>
        <Container sx={{ bgcolor: "", height: "25%", width: '100%', paddingLeft: {mobile: '3%', tablet: '3%', laptop:'12%', desktop: '12%'}, paddingRight: {mobile: '5%', tablet: '5%', laptop:'12%', desktop: '12%'}, marginBottom: {mobile: '5%', tablet: '5%', laptop:'3%', desktop: '2%'}}}>
          <Paper sx={{ height: '100%', margin: '0%', padding: '3%' }}>Hello nice to meet you</Paper>
        </Container>
      </Container>
    </ThemeProvider>
  )
}

export default App