import React from 'react'
import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";

//MUI
import Container from '@mui/material/Container';
import { Box, Paper, Button, createTheme, ThemeProvider, TextField, Typography, Stack } from '@mui/material/';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';


//import responseModule for recieving text data:
import responseModule from '../../../data/responseModule';

//Import text components to be conditionally rendered based on if there is more text
//to be read, or if there is non text left, or if there is the option for you to ask a question:
import NextTextIndicator from '../../DialogComponents/NextTextIndicator/NextTextIndicator';
import EndTextIndicator from '../../DialogComponents/EndTextIndicator/EndTextIndicator';

//Import hooks:
import useViewState from '../../../hooks/useViewState';
import useSelectedQuestion from '../../../hooks/useSelectedQuestion';
import useIsTweenFinished from '../../../hooks/useIsTweenFinished';
import useTypingEffect from '../../../hooks/typingEffect';
import cameraTween from '../../../tween/cameraTween';
import useToolTip from '../../../hooks/useToolTip';

//Import project modal to popup with project information:
import ProjectModal from './ProjectModal/ProjectModal';

export default function ProjectView(props) {

  //Imported dispatch functions:
  const { setViewState } = useViewState();
  const { setSelectedQuestion } = useSelectedQuestion();
  const { setIsTweenFinished } = useIsTweenFinished();

  //Import tool tip helper, which handles mouseMoved event listeners to the window
  //and also creates a div at the location of your cursor:
  const { renderToolTip, setHoveredDiv } = useToolTip();


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
      return <EndTextIndicator />
    } else {
      return <></>
    }
  }

  //Styles for the invisible trophy div
  const divStyles1 = {
    position: 'absolute',
    marginBottom: '10%',
    height: '40%',
    width: '60%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    gap: '0%',
    opacity: '1',
    backgroundColor: '',
    padding: '0%',
    border: '0px solid darkblue',
    borderRadius: '8px',
    textAlign: 'center',
    fontSize: '16px',
  };


  const toolTipStyles = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    margin: '0%',
    height: '5em',
    aspectRatio: '1.5/1',
    opacity: '0.9',
    backgroundColor: 'white',
    padding: '1em',
    border: '1px solid darkblue',
    borderRadius: '8px',
    textAlign: 'center',
    fontSize: '16px',
    zIndex: '1000'
  };

  // <div style={divStyles2} onClick={() => { setQuestionsVisible(false); setSelectedQuestion('PROJECT2'); }} onMouseEnter={(e) => { trophyTween(project2); setHoveredDiv('Redux / Sagas'); }} onMouseLeave={(e) => { setHoveredDiv('') }}></div>
  // <div style={divStyles2} onClick={() => { setQuestionsVisible(false); setSelectedQuestion('PROJECT3'); }} onMouseEnter={(e) => { trophyTween(project3); setHoveredDiv('Javascript'); }} onMouseLeave={(e) => { setHoveredDiv('') }}></div>
  // <div style={divStyles2} onClick={() => { setQuestionsVisible(false); setSelectedQuestion('PROJECT4'); }} onMouseEnter={(e) => { trophyTween(project4); setHoveredDiv('Jquery'); }} onMouseLeave={(e) => { setHoveredDiv('') }}></div>
  // <div style={divStyles2} onClick={() => { setQuestionsVisible(false); setSelectedQuestion('PROJECT5'); }} onMouseEnter={(e) => { trophyTween(project5); setHoveredDiv('Jquery'); }} onMouseLeave={(e) => { setHoveredDiv('') }}></div>

  return (
    <>
      <Container maxWidth={false} sx={{ margin: '0%', padding: '0%', bgcolor: '', height: '100%', position: 'absolute', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '0%', pointerEvents: 'auto' }}>
        <div style={divStyles1}>
          {/* books passed into bookTween() are global variables that are attached to the 'window' object */}
          <ProjectModal selectedProject={project1} projectName={'PROJECT1'} setHoveredDiv={setHoveredDiv} />
          <ProjectModal selectedProject={project2} projectName={'PROJECT2'} setHoveredDiv={setHoveredDiv} />
          <ProjectModal selectedProject={project3} projectName={'PROJECT3'} setHoveredDiv={setHoveredDiv} />
          <ProjectModal selectedProject={project4} projectName={'PROJECT4'} setHoveredDiv={setHoveredDiv} />
          <ProjectModal selectedProject={project5} projectName={'PROJECT5'} setHoveredDiv={setHoveredDiv} />
        </div>
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
        <Button sx={{ height: '10%', aspectRatio: '1/1', bgcolor: 'lightBlue', marginLeft: '60%', marginBottom: '-12%' }} onClick={() => { setSelectedQuestion('TS0'); setViewState('techStackView'); cameraTween(props.camera, props.target, 'books', setIsTweenFinished) }}><ArrowDownwardIcon sx={{ color: 'black' }}></ArrowDownwardIcon></Button>
      </Container>
      {renderToolTip()}
    </>
  )
}
