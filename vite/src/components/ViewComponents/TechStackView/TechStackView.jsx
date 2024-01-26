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

import styles from '../../../styles/styles';

export default function TechStackView(props) {

  //Styles
  const upArrowStyles = styles().upArrowStyles;
  const techStackContainerStyles = styles().techStackContainerStyles;

  //Imported dispatch functions:
  const { setViewState } = useViewState();
  const { setSelectedQuestion } = useSelectedQuestion();
  const { setIsTweenFinished } = useIsTweenFinished();

  //Import tool tip helper, which handles mouseMoved event listeners to the window
  //and also creates a div at the location of your cursor:
  const { renderToolTip, setHoveredDiv } = useToolTip();

  return (
    <>
      <div style={techStackContainerStyles}>
        {renderToolTip()}
        <BookDiv setSelectedQuestion={setSelectedQuestion} setHoveredDiv={setHoveredDiv} />
        <Button sx={upArrowStyles} onClick={() => { setSelectedQuestion('PJ0'); setViewState('projectView'); cameraTween(props.camera, props.target, 'trophies', setIsTweenFinished) }}><ArrowUpwardIcon sx={{ color: 'black' }}></ArrowUpwardIcon></Button>
      </div>
    </>
  )
}
