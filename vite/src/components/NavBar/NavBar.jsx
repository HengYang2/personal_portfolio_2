import React from 'react'
import { Button, Typography } from '@mui/material/';
import { AppBar, Toolbar, IconButton, Stack } from '@mui/material'
import WaterDropSharpIcon from '@mui/icons-material/WaterDropSharp';
import { useDispatch, useSelector } from "react-redux";


export default function NavBar() {

    const dispatch = useDispatch();

    function setViewState(state) {
        console.log('clicked');
        dispatch({ type: 'SET_VIEW_STATE', payload: state });
        return;
    }

    return (
        <AppBar postion='static' sx={{ height: '6%', maxWidth: '70%', marginRight: '15%', pointerEvents: 'auto'}}>
            <Toolbar sx={{ height: '100%', width: '100%', bgcolor: 'primary', }}>
                <IconButton size='large' edge='start' color='white' aria-label='logo'>
                    <WaterDropSharpIcon />
                </IconButton>
                <Typography variant='h6' component='div' sx={{ flexGrow: 1, color: 'black', }}>
                    Heng's Room
                </Typography>
                <Stack direction='row' spacing={2}>
                    <Button color='secondary' variant='outlined' sx={{pointerEvents: 'none'}} onClick={() => {setViewState('AboutMe')}}>About Me</Button>
                    <Button color='secondary' variant='contained' onClick={() => {setViewState('Projects')}}>Projects</Button>
                    <Button color='secondary' variant='contained' onClick={() => {setViewState('GetInTouch')}}>Get In Touch</Button>
                    <Button color='secondary' variant='contained' onClick={() => {setViewState('Music')}}>Music</Button>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}
