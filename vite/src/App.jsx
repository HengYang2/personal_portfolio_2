import { useState } from 'react'
import Container from '@mui/material/Container';
import { Grid, Stack, Typography } from '@mui/material/';
// import BoxSx from './components/BoxSx';
import { Box, Paper, Button, createTheme, ThemeProvider, TextField } from '@mui/material/';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MusicOffIcon from '@mui/icons-material/MusicOff';


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

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth={false} sx={{ padding:'0%', bgcolor: 'grey', height:'100%', position: 'absolute', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <Container sx={{ bgcolor: "", width:'100%', height: {mobile: '8%', tablet: '8%', laptop:'10%', desktop: '12%'}, paddingLeft: {mobile: '3%', tablet: '3%', laptop:'12%', desktop: '12%'}, paddingRight: {mobile: '5%', tablet: '5%', laptop:'12%', desktop: '12%'}, marginTop: {mobile: '5%', tablet: '5%', laptop:'3%', desktop: '2%'}}}>
          <Container sx={{ bgcolor: "", height: "100%", padding:'0%', display: 'flex', position: 'relative', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Button variant="contained" sx={{ height: "100%", aspectRatio: "1", padding: "3%" }}> <ArrowBackIcon/></Button>
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

{/* <Container maxWidth={false} sx={{ bgcolor:"red", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "60%", padding: "5px", minWidth:"100%"}}> 
<Button variant="contained" sx={{height:"50px", width: "50px", padding: "1px"}}> <ArrowBackIcon/></Button>
<Button variant="outlined" color="secondary" sx={{height:"50px", width: "50px"}}><MusicNoteIcon sx={{color: "black"}}/></Button>
</Container>
<Container maxWidth={false} sx={{bgcolor:"", height: "175px", width: "100%", padding: "10px"}}> 
<Paper sx={{ height: "100%", width: "100%", padding: "10px",}}>Click to Learn More</Paper>
</Container> */}