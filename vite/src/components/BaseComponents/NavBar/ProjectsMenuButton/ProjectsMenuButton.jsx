import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useDispatch, useSelector } from "react-redux";

import cameraTween from '../../../../tween/cameraTween';

//Import hooks:
import useViewState from '../../../../hooks/useViewState';
import useSelectedQuestion from '../../../../hooks/useSelectedQuestion';
import useIsTweenFinished from '../../../../hooks/useIsTweenFinished';

//Import styles:
import styles from '../../../../styles/styles';

const DropdownMenu = (props) => {

    //Styles
    const navButtonStyles = styles().navButtonStyles;
    const menuStyles = styles().menuStyles;
    const menuItemStyles = styles().menuItemStyles;
    const menuButtonStyles = styles().menuButtonStyles;


    //Imported dispatch functions:
    const { setViewState } = useViewState();
    const { setSelectedQuestion } = useSelectedQuestion();
    const { setIsTweenFinished } = useIsTweenFinished();

    //
    const viewStateReducer = useSelector(store => store.viewStateReducer)

    //Function for chaning the 'outlined' varriant in the NavBar Buttons based on the value of the viewStateReducer.
    const isOutlined = () => {
        if (viewStateReducer == 'techStackView' || viewStateReducer == 'projectView') {
            return 'outlined'
        } else {
            return 'contained'
        }
    }

    //Menu handler logic
    const [anchorEl, setAnchorEl] = useState(null);

    const handleOpenMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    const handleButtonClick = (action) => {
        handleCloseMenu();
    };

    return (
        <>
            <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleOpenMenu}
                variant={isOutlined()}
                color='secondary'
                sx={navButtonStyles}
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
                    <Button sx={menuButtonStyles} variant='contained' color='secondary' onClick={() => { setViewState('projectView'); cameraTween(props.camera, props.target, 'trophies', setIsTweenFinished); setSelectedQuestion('PJ0') }}>
                        Projects
                    </Button>
                </MenuItem>
                <MenuItem onClick={() => handleButtonClick('Button 2')}>
                    <Button sx={menuButtonStyles} variant='contained' color='secondary' onClick={() => { setViewState('techStackView'); cameraTween(props.camera, props.target, 'books', setIsTweenFinished); setSelectedQuestion('TS0') }}>
                        Tech Stack
                    </Button>
                </MenuItem>
            </Menu>
        </>
    );
};

export default DropdownMenu;
