import React from 'react'
import _ from 'lodash';

//MUI
import Container from '@mui/material/Container';
import { Box, Paper, Button, createTheme, ThemeProvider, TextField, Typography, Stack } from '@mui/material/';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

//Import hooks:
import useViewState from '../../../hooks/useViewState';
import useSelectedQuestion from '../../../hooks/useSelectedQuestion';
import useIsTweenFinished from '../../../hooks/useIsTweenFinished';
import cameraTween from '../../../tween/cameraTween';
import useToolTip from '../../../hooks/useToolTip';

//Import BookDiv, to overlay ontop of the books so that they can be animated
import BookDiv from './BookDiv/BookDiv';

//Import DialogBox:
import DialogBox from '../../DialogComponents/DialogBox/DialogBox';

export default function TechStackView(props) {

  //Imported dispatch functions:
  const { setViewState } = useViewState();
  const { setSelectedQuestion } = useSelectedQuestion();
  const { setIsTweenFinished } = useIsTweenFinished();

  //Import tool tip helper, which handles mouseMoved event listeners to the window
  //and also creates a div at the location of your cursor:
  const { renderToolTip, setHoveredDiv } = useToolTip();

  return (
    <>
      <Container maxWidth={false} sx={{ margin: '0%', padding: '0%', bgcolor: '', height: '100%', position: 'absolute', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '0%', pointerEvents: 'auto' }}>
        {renderToolTip()}
        <BookDiv setSelectedQuestion={setSelectedQuestion} setHoveredDiv={setHoveredDiv} />
        <DialogBox />
        <Button sx={{ height: '10%', aspectRatio: '1/1', bgcolor: 'lightBlue', marginLeft: '60%', marginBottom: '33%' }} onClick={() => { setSelectedQuestion('PJ0'); setViewState('projectView'); cameraTween(props.camera, props.target, 'trophies', setIsTweenFinished) }}><ArrowUpwardIcon sx={{ color: 'black' }}></ArrowUpwardIcon></Button>
      </Container>
    </>
  )
}
