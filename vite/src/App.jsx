
import { createTheme, ThemeProvider } from '@mui/material/';

import ViewportContainer from './components/ViewportContainer/ViewportContainer';

function App(props) {

  const breakpoints = {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
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
        main: '#AB7E4C',
        light: '#01fe21',
        dark: '#01fe21',
        contrastText: '#01fe21',
      },
      secondary: {
        main: '#FFFFFF',
        light: '#5CC8FF',
        dark: '#5CC8FF',
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
  
  
  return (
    <ThemeProvider theme={theme}>
      <ViewportContainer target={props.target} camera={props.camera} scene={props.scene}/>
    </ThemeProvider>
  )
}

export default App