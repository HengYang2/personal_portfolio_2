import React from 'react'
import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";

//MUI
import Container from '@mui/material/Container';
import { Box, Paper, Button, createTheme, ThemeProvider, TextField, Typography, Stack } from '@mui/material/';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

//Import hooks:
import useViewState from '../../../hooks/useViewState';
import useSelectedQuestion from '../../../hooks/useSelectedQuestion';
import useIsTweenFinished from '../../../hooks/useIsTweenFinished';
import cameraTween from '../../../tween/cameraTween';
import useToolTip from '../../../hooks/useToolTip';

//Import project modal to popup with project information:
import ProjectModal from './ProjectModal/ProjectModal'

import styles from '../../../styles/styles';

export default function ProjectView(props) {

  const trophyContainerStyles = styles().trophyStyles.container;
  const downArrowStyles = styles().downArrowStyles;

  //Imported dispatch functions:
  const { setViewState } = useViewState();
  const { setSelectedQuestion } = useSelectedQuestion();
  const { setIsTweenFinished } = useIsTweenFinished();

  //Import tool tip helper, which handles mouseMoved event listeners to the window
  //and also creates a div at the location of your cursor:
  const { renderToolTip, setHoveredDiv } = useToolTip();


  //Selected question reducer is activated by the button which changes the question to the techstack dialog.
  // const selectedQuestionReducer = useSelector(store => store.selectedQuestionReducer)

  return (
    <>
      <div style={trophyContainerStyles}>
        {/* books passed into bookTween() are global variables that are attached to the 'window' object */}
        <ProjectModal selectedProject={project1} projectName={'PROJECT0'} setHoveredDiv={setHoveredDiv} />
        <ProjectModal selectedProject={project2} projectName={'PROJECT1'} setHoveredDiv={setHoveredDiv} />
        <ProjectModal selectedProject={project3} projectName={'PROJECT2'} setHoveredDiv={setHoveredDiv} />
        <ProjectModal selectedProject={project4} projectName={'PROJECT3'} setHoveredDiv={setHoveredDiv} />
        <ProjectModal selectedProject={project5} projectName={'PROJECT4'} setHoveredDiv={setHoveredDiv} />
      </div>
      <Button sx={downArrowStyles} onClick={() => { setSelectedQuestion('TS0'); setViewState('techStackView'); cameraTween(props.camera, props.target, 'books', setIsTweenFinished) }}><ArrowDownwardIcon sx={{ color: 'black' }}></ArrowDownwardIcon></Button>
      {renderToolTip()}
    </>
  )
}
