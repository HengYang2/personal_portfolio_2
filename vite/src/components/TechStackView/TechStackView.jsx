import React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

//MUI
import Container from '@mui/material/Container';
import { Box, Paper, Button, createTheme, ThemeProvider, TextField, Typography, Stack } from '@mui/material/';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MusicOffIcon from '@mui/icons-material/MusicOff';

import cameraTween from '../../tween/cameraTween';

//import responseModule
import responseModule from '../../response/responseModule';
//Import useTypingEffect
import useTypingEffect from '../../hooks/typingEffect';
import TextPopper from '../AboutMeView/TextPopper/TextPopper';
import NextTextIndicator from '../AboutMeView/NextTextIndicator/NextTextIndicator';

export default function TechStackView(props) {

  const dispatch = useDispatch();
  const setViewState = (state) => {
    dispatch({ type: 'SET_VIEW_STATE', payload: state });
    return;
  }


  function setIsTweenFinished(bool) {
    dispatch({ type: 'SET_IS_TWEEN_FINISHED', payload: bool });
  }


  const selectedQuestionReducer = useSelector(store => store.selectedQuestionReducer)

  //UseState for toggling talking options:
  const [questionsVisible, setQuestionsVisible] = useState(false)
  const [textCollection, setTextCollection] = useState(responseModule(selectedQuestionReducer));
  const [collectionIndex, setCollectionIndex] = useState(0);

  //Continue text indicator and click blocker useStates:
  const [indicatorVisible, setIndicatorVisible] = useState(false);
  const [clickBlockerDiv, setClickBlockerDiv] = useState(false);

  //Text parameters:
  const defaultTextSpeedValue = 25
  const spedUpTextSpeedValue = 0.0005
  const [textSpeed, setTextSpeed] = useState(defaultTextSpeedValue);

  const text = useTypingEffect(textCollection, collectionIndex, textSpeed, setIndicatorVisible, setQuestionsVisible, setClickBlockerDiv)

  //Whenever there is a change in the selectedQuestionReducer, the setTextCollection will get the new list of text to be generated based on the selectedQuestionReducer
  useEffect(() => {
    if (questionsVisible == false) {
      setTextCollection(responseModule(selectedQuestionReducer))
      setCollectionIndex(0)
      setTextSpeed(defaultTextSpeedValue)
    } else {
      return
    }
  }, [selectedQuestionReducer, questionsVisible])


  
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


  //Conditionally render the 'click to continue' button or the TextPopper component base on if more text needs to be generated or if the questions list needs to pop up.
  function RenderIndicatorOrPopper() {
    if (indicatorVisible == true) {
      return <NextTextIndicator nextText={nextText} />
    } else if (questionsVisible == true) {
      return <TextPopper setQuestionsVisible={setQuestionsVisible}/>
    } else {
      return <></>
    }
  }

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
      <Button sx={{ height: '10%', aspectRatio: '1/1', bgcolor: 'lightBlue', marginLeft: '60%', marginBottom: '33%' }} onClick={() => { setViewState('projectView'); cameraTween(props.camera, props.target, 'trophies', setIsTweenFinished) }}><ArrowUpwardIcon sx={{ color: 'black' }}></ArrowUpwardIcon></Button>
    </Container>
  )
}