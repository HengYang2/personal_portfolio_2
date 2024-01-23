import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useDispatch, useSelector } from "react-redux";

import cameraTween from '../../../../tween/cameraTween';

const DropdownMenu = (props) => {



  const dispatch = useDispatch();

  function setViewState(state) {
    console.log('clicked');
    dispatch({ type: 'SET_VIEW_STATE', payload: state });
    return;
  }

  //For dispatching which question the user selected to the selectedQuestionReducer
  function setSelectedQuestion(state) {
    dispatch({ type: 'SET_SELECTED_QUESTION', payload: state });
    return;
  }
  const viewStateReducer = useSelector(store => store.viewStateReducer)

  //Function for chaning the 'outlined' varriant in the NavBar Buttons based on the value of the viewStateReducer.
  const isOutlined = () => {
    if (viewStateReducer == 'techStackView' || viewStateReducer == 'projectView') {
      return 'outlined'
    } else {
      return 'contained'
    }
  }


  function setIsTweenFinished(bool) {
    dispatch({ type: 'SET_IS_TWEEN_FINISHED', payload: bool });
  }



  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleButtonClick = (action) => {
    // Handle button click actions
    console.log(`Button clicked: ${action}`);
    handleCloseMenu();
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleOpenMenu}
        variant={isOutlined()}
        color="secondary"
      >
        Projects
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={() => handleButtonClick('Button 1')}>
          <Button variant='contained' color='secondary' onClick={() => { setViewState('projectView'); cameraTween(props.camera, props.target, 'trophies', setIsTweenFinished); setSelectedQuestion('PJ0')}}>
            Projects
          </Button>
        </MenuItem>
        <MenuItem onClick={() => handleButtonClick('Button 2')}>
          <Button variant='contained' color='secondary' onClick={() => { setViewState('techStackView'); cameraTween(props.camera, props.target, 'books', setIsTweenFinished); setSelectedQuestion('TS0')}}>
            Tech Stack
          </Button>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default DropdownMenu;
