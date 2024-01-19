import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

//MUI
import Container from '@mui/material/Container';
import { Box, Popper, Fade, Paper, Button, createTheme, ThemeProvider, TextField, Typography, Stack } from '@mui/material/';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MusicOffIcon from '@mui/icons-material/MusicOff';

// import '@fontsource/roboto/300.css';


//Camera Tween
import cameraTween from '../../tween/cameraTween';

//import responseModule
import responseModule from '../../response/responseModule';
//Import useTypingEffect
import useTypingEffect from '../../hooks/typingEffect';

//Import TextPopper
import TextPopper from './TextPopper/TextPopper';

export default function AboutMeView(props) {

  //UseState for toggling talking options:
  const [questionsVisable, setQuestionsVisable] = useState(false)
  const [textCollection, setTextCollection] = useState(responseModule(''));
  const [collectionIndex, setCollectionIndex] = useState(0);

  //Continue text indicator and click blocker useStates:
  const [indicatorVisible, setIndicatorVisible] = useState(false);
  const [clickBlockerDiv, setClickBlockerDiv] = useState(false);

  //Text parameters:
  const defaultTextSpeedValue = 10
  const spedUpTextSpeedValue = 0.0005
  const [textSpeed, setTextSpeed] = useState(defaultTextSpeedValue);

  const text = useTypingEffect(textCollection, collectionIndex, textSpeed, setIndicatorVisible, setQuestionsVisable, setClickBlockerDiv)

  //IDk
  const [selectedQuestion, setSelectedQuestion] = useState('')


  //This function is used to continue the text to the next set of lines to be generated after the user has finished reading.
  //If the user clicks the div while the text is still being generated, when the indicator isn't showing, it will increase the speed at which the text will be generated.
  function nextText() {
    if (indicatorVisible == true) {
      console.log("Speed set to 25");
      if (collectionIndex != textCollection.length - 1) {
        setCollectionIndex(collectionIndex + 1)
      }
      setIndicatorVisible(false)
      setTextSpeed(defaultTextSpeedValue)
    } else {
      console.log("Speed set to 0.0005");
      setTextSpeed(spedUpTextSpeedValue)
    }
  }

  //Conditionally render indicator to click the div (this appears after text finishes typing out):
  function conditionalIndicator() {
    return indicatorVisible ? <h2 className='bg-yellow-300 border border-black rounded-md w-16 h-8 text-xs absolute z-30 text-center ml-101 mt-102 animate-upDown1' onClick={() => { nextText(); }}>{'Click To Continue'}</h2> : <></>;
  }

  //Conditionally render questions based on the questionsVisable useState:
  function toggleQuestionsVisable() {
    return questionsVisable ?
      <div className='w-40 h-36 ml-90 mt-40 absolute flex flex-col justify-center gap-1 items-center'>
        <div className='bg-blue-400 absolute w-full h-full border border-black rounded-md box-shadow animate-subtlePulse -z-1 opacity-70'></div>
        <button className='text-option' id='option1' onClick={e => { setQuestionsVisable(false); setSelectedQuestion('option1'); setTextCollection(responseModule('option1')); setCollectionIndex(0); setTextSpeed(defaultTextSpeedValue); setClickBlockerDiv(false) }}>Who are you?</button>
        <button className='text-option' id='option2' onClick={e => { setQuestionsVisable(false); setSelectedQuestion('option2'); setTextCollection(responseModule('option2')); setCollectionIndex(0); setTextSpeed(defaultTextSpeedValue); setClickBlockerDiv(false) }}>Where am I?</button>
        <button className='text-option' id='option3' onClick={e => { setQuestionsVisable(false); setSelectedQuestion('option3'); setTextCollection(responseModule('option3')); setCollectionIndex(0); setTextSpeed(defaultTextSpeedValue); setClickBlockerDiv(false) }}>What do you do for fun?</button>
      </div> :
      <></>;
  }

  //Conditionally render clickBlockerDiv:
  function clickBlocker() {
    return clickBlockerDiv ? <div className='absolute ml-0 mt-0 bg-blue-600 w-full h-full z-50 opacity-0'></div> : <></>;
  }

  // {conditionalIndicator()}
  // {toggleQuestionsVisable()}
  // {clickBlocker()}

  // <Container sx={{ bgcolor: 'red', width: '100%', height: '100%', padding: '1em', }} type="button" onClick={() => { nextText(); }} className='relative bg-white left-0 w-4/5 top-1.5 h-40 p-2 border border-black rounded-md box-shadow z-20'>
  //   <Typography sx={{ fontSize: '1.5em' }}>{text}</Typography>
  //   {/* {conditionalIndicator()} */}
  // </Container>

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
          <Paper variant='outlined' sx={{ bgcolor: 'white', height: '100%', flex: '1', margin: '0%', padding:'0%'}}>
            <TextPopper></TextPopper>
          </Paper>
        </Stack>
      </Paper>
    </Container>
  )
}
