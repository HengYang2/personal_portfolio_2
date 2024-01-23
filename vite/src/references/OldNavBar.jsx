// import React from 'react'
// import { useState } from 'react';
// import { Button, MenuList, MenuItem, Typography, ClickAwayListener, Container } from '@mui/material/';
// import { AppBar, Toolbar, IconButton, Stack } from '@mui/material'
// import WaterDropSharpIcon from '@mui/icons-material/WaterDropSharp';
// import IcecreamIcon from '@mui/icons-material/Icecream';
// import AnchorIcon from '@mui/icons-material/Anchor';
// import { useDispatch, useSelector } from "react-redux";

// import ProjectsMenu from '../components/BaseComponents/NavBar/ProjectsMenu/ProjectsMenu'

// import cameraTween from '../tween/cameraTween';

// export default function NavBar(props) {

//     const dispatch = useDispatch();

//     function setViewState(state) {
//         console.log('clicked');
//         dispatch({ type: 'SET_VIEW_STATE', payload: state });
//         return;
//     }

//     //For dispatching which question the user selected to the selectedQuestionReducer
//     function setSelectedQuestion(state) {
//         dispatch({ type: 'SET_SELECTED_QUESTION', payload: state });
//         return;
//     }


//     const viewStateReducer = useSelector(store => store.viewStateReducer)
//     // const [isButtonPressedDown, setIsButtonPressedDown] = useState('')

//     //Function for chaning the 'outlined' varriant in the NavBar Buttons based on the value of the viewStateReducer.
//     const isOutlined = (buttonId) => {
//         if (buttonId == viewStateReducer) {
//             return 'outlined'
//         } else {
//             return 'contained'
//         }
//     }

//     function setIsTweenFinished(bool) {
//         dispatch({ type: 'SET_IS_TWEEN_FINISHED', payload: bool });
//     }


//     return (
//         <AppBar postion='static' sx={{ height: '6%', maxWidth: '70%', marginRight: '15%', pointerEvents: 'auto', }}>
//             <Toolbar sx={{ height: '100%', width: '100%', bgcolor: 'primary', display: 'flex', flexDirection:'row', justifyContent: 'start', gap:'1%'  }}>
//                 <IconButton sx={{ bgcolor: 'white', marginLeft:'2.2%'}} size='large' edge='start' color='white' aria-label='logo'>
//                     <IcecreamIcon />
//                 </IconButton>
//                 <Typography variant='h6' component='div' sx={{ width:'51%', color: 'white', bgcolor:'', border:'1px solid white', padding: '0.1em', paddingLeft:'0.3em' }}>
//                     Heng's Room
//                 </Typography>
//                 <Stack direction='row' sx={{marginLeft:'0%'}} spacing={2}>
//                     <Button variant={isOutlined('aboutMeView')} color='secondary' sx={{color:'black', bgcolor:'',}} onClick={() => { setViewState('aboutMeView'); cameraTween(props.camera, props.target, 'me', setIsTweenFinished); setSelectedQuestion('AB4'); }}>About Me</Button>
//                     <ProjectsMenu camera={props.camera} target={props.target} sx={{color:'black',bgcolor:'',}} isOutlined={isOutlined()} />
//                     <Button variant={isOutlined('contactView')} color='secondary' sx={{color:'black', bgcolor:'',}} onClick={() => { setViewState('contactView'); cameraTween(props.camera, props.target, 'laptop', setIsTweenFinished); setSelectedQuestion('GIT0'); }}>Get In Touch</Button>
//                     <Button variant={isOutlined('musicView')} color='secondary' sx={{color:'black'}} onClick={() => { setViewState('musicView'); cameraTween(props.camera, props.target, 'speakers', setIsTweenFinished); setSelectedQuestion('M0'); }}>Music</Button>
//                 </Stack>
//                 <Typography sx={{width:'1.2%', height:'64%', color: 'white', bgcolor:'', border:'1px solid white'}}></Typography>
//             </Toolbar>
//         </AppBar>
//     )A
// }