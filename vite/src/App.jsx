import { useState } from 'react'
import Container from '@mui/material/Container';
import {  Typography } from '@mui/material/';
// import BoxSx from './components/BoxSx';
import {Box, Paper, Button, createTheme,ThemeProvider } from '@mui/material/';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MusicOffIcon from '@mui/icons-material/MusicOff';


const theme = createTheme ({
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

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth={false} sx={{ bgcolor: "grey", color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'start', gap: "63%", height: '100%', padding: '5px', paddingTop: '15px'}}>
        <Container maxWidth={false} sx={{bgcolor:"", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "60%", padding: "5px"}}> 
          <Button variant="contained" sx={{height:"50px", width: "50px", padding: "1px"}}> <ArrowBackIcon/></Button>
          <Button variant="outlined" color="secondary" sx={{height:"50px", width: "50px"}}><MusicNoteIcon sx={{color: "black"}}/></Button>

        </Container>
        <Container maxWidth={false} sx={{bgcolor:"", height: "175px", width: "100%", padding: "10px"}}> 
          <Paper sx={{ height: "100%", width: "100%", padding: "10px",}}>Click to Learn More</Paper>
        </Container>
      </Container>
    </ThemeProvider>
  )
}

export default App
