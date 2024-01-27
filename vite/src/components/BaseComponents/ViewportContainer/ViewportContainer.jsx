import React, { useEffect, useState } from 'react'
import NavBar from '../NavBar/NavBar';
import MainViewComponent from '../MainViewComponent/MainViewComponent';

import styles from '../../../styles/styles'

import isTweenFinishedReducer from '../../../redux/reducers/isTweenFinishedReducer';
import { useSelector } from 'react-redux';

export default function ViewportContainer(props) {

  const viewportStyles = styles().viewportStyles;
  const interactiveSpaceStyles = styles().interactiveSpaceStyles;
  const edgeBarStyles = styles().edgeBarStyles;

  const isTweenFinishedReducer = useSelector(store => store.isTweenFinishedReducer)
  const viewStateReducer = useSelector(store => store.viewStateReducer)

  //Only render the MainViewComponent when the tween animations are done:
  function renderMainView() {
    if (isTweenFinishedReducer == true) {
      return <MainViewComponent camera={props.camera} target={props.target} scene={props.scene} />
    } else {
      return <></>
    }
  }

  //If the viewState is equal to, for example, EmailView (which is an open modal), do not render MainView or NavBar components:
  function renderNavBar() {
    if (viewStateReducer != 'emailView' && viewStateReducer != 'trophyModalView') {
      return <NavBar camera={props.camera} target={props.target} scene={props.scene} />
    } else {
      return <></>
    }
  }

  return (
    <div style={viewportStyles}>
      <div style={edgeBarStyles}></div>
      <div style={interactiveSpaceStyles}>
        {renderNavBar()}
        {renderMainView()}
      </div>
      <div style={edgeBarStyles}></div>
    </div>
  )
}