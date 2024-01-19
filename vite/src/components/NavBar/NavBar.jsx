import React from 'react'
import { useState } from 'react';
import { Button, Typography } from '@mui/material/';
import { AppBar, Toolbar, IconButton, Stack } from '@mui/material'
import WaterDropSharpIcon from '@mui/icons-material/WaterDropSharp';
import { useDispatch, useSelector } from "react-redux";

import cameraTween from '../../tween/cameraTween';

export default function NavBar(props) {

    const dispatch = useDispatch();

    function setViewState(state) {
        console.log('clicked');
        dispatch({ type: 'SET_VIEW_STATE', payload: state });
        return;
    }

    const viewStateReducer = useSelector(store => store.viewStateReducer)
    // const [isButtonPressedDown, setIsButtonPressedDown] = useState('')

    //Function for chaning the 'outlined' varriant in the NavBar Buttons based on the value of the viewStateReducer.
    const isOutlined = (buttonId) => {
        if (buttonId == viewStateReducer) {
            return 'outlined'
        } else {
            return 'contained'
        }
    }

    function setIsTweenFinished(bool) {
        dispatch({ type: 'SET_IS_TWEEN_FINISHED', payload: bool });
    }


    return (
        <AppBar postion='static' sx={{ height: '6%', maxWidth: '70%', marginRight: '15%', pointerEvents: 'auto' }}>
            <Toolbar sx={{ height: '100%', width: '100%', bgcolor: 'primary', }}>
                <IconButton size='large' edge='start' color='white' aria-label='logo'>
                    <WaterDropSharpIcon />
                </IconButton>
                <Typography variant='h6' component='div' sx={{ flexGrow: 1, color: 'black', }}>
                    Heng's Room
                </Typography>
                <Stack direction='row' spacing={2}>
                    <Button variant={isOutlined('aboutMeView')} color='secondary' sx={{}} onClick={() => { setViewState('aboutMeView'); cameraTween(props.camera, props.target, 'me', setIsTweenFinished); }}>About Me</Button>
                    <Button variant={isOutlined('projectView')} color='secondary' onClick={() => { setViewState('projectView'); cameraTween(props.camera, props.target, 'trophies', setIsTweenFinished); }}>Projects</Button>
                    <Button variant={isOutlined('contactView')} color='secondary' onClick={() => { setViewState('contactView'); cameraTween(props.camera, props.target, 'laptop', setIsTweenFinished); }}>Get In Touch</Button>
                    <Button variant={isOutlined('musicView')} color='secondary' onClick={() => { setViewState('musicView'); cameraTween(props.camera, props.target, 'speakers', setIsTweenFinished); }}>Music</Button>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}
