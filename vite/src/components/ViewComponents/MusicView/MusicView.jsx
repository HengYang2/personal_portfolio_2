import React, { useEffect } from 'react'
import { useState } from 'react';
import { useSelector } from "react-redux";

//MUI
import Container from '@mui/material/Container';
import { Box, Popper, Fade, Paper, Button, createTheme, ThemeProvider, TextField, Typography, Stack } from '@mui/material/';

//import responseModule for recieving text data:
import responseModule from '../../../data/responseModule';

//Import text components to be conditionally rendered based on if there is more text
//to be read, or if there is non text left, or if there is the option for you to ask a question:
import TextPopper from '../../DialogComponents/QuestionPopper/QuestionPopper';
import NextTextIndicator from '../../DialogComponents/NextTextIndicator/NextTextIndicator';
import EndTextIndicator from '../../DialogComponents/EndTextIndicator/EndTextIndicator'

//Import hooks:
import useTypingEffect from '../../../hooks/typingEffect';


export default function MusicView() {

  return (
    <Container maxWidth={false} sx={{ margin: '0%', padding: '0%', bgcolor: '', height: '100%', position: 'absolute', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '0%', pointerEvents: 'auto' }}>
      <Paper variant='outlined' sx={{ bgcolor: 'grey', height: '25%', width: '65%', position: 'absolute', marginTop: '34%' }}>
        <Stack direction='row' spacing={2} sx={{ bgcolor: '', padding: '0.5%', height: '100%', width: '100%', position: 'absolute', display: 'flex', flexDirection: 'row', justifyContent: 'start' }}>
          <Paper variant='outlined' sx={{ bgcolor: '', height: '100%', aspectRatio: '1/1', display: 'flex', flexDirection: 'column', justifyContent: 'end', alignItems: 'center' }}>
            <img src='/hengPicture.jpg' />
            <Paper sx={{ position: 'absolute', marginBottom: '1%', padding: '0.25%' }}>
              <Typography variant='h1'>
                Heng Yang
              </Typography>
            </Paper>
          </Paper>
          <Paper variant='outlined' sx={{ bgcolor: 'white', height: '100%', flex: '1', margin: '0%', padding: '0%', position: 'relative' }}>
            <Container onClick={() => { nextText() }} sx={{ bgcolor: '', width: '100%', height: '100%', padding: '1em', position: 'absolute' }} type="button" className='relative bg-white left-0 w-4/5 top-1.5 h-40 p-2 border border-black rounded-md box-shadow z-20'>
              <Typography sx={{ fontSize: '1.5em' }}>{text}</Typography>
            </Container>
            <RenderIndicatorOrPopper></RenderIndicatorOrPopper>
          </Paper>
        </Stack>
      </Paper>
    </Container>
  )
}
