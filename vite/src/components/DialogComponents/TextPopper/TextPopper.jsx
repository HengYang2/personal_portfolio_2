import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Popper from '@mui/material/Popper';
import Paper from '@mui/material/Paper';
import { useDispatch } from 'react-redux';


export default function TextPopper(props) {

    //For dispatching which question the user selected to the selectedQuestionReducer
    const dispatch = useDispatch();

    function setSelectedQuestion(state) {
        dispatch({ type: 'SET_SELECTED_QUESTION', payload: state });
        return;
    }


    //Popper stuff
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);

    const buttonFontSize = '0.8em'

    return (
        <>
            <Button aria-describedby={open ? 'simple-popper' : undefined} variant="outlined" color="secondary" onClick={handleClick} sx={{ paddingTop:'17%', paddingLeft:'76%', color: 'black',width: '100%', height: '100%', bgcolor: '', zIndex: '1000', position: 'absolute' }}>
                Click to ask a Question
            </Button>
            <Popper id="simple-popper" open={open} anchorEl={anchorEl} placement="top-end" sx={{ bgcolor: '', width: '10%', height: '40%', zIndex: '1000', marginBottom: '7%', position: 'absolute' }}>
                <Paper sx={{ bgcolor: 'lightBlue', padding: '0.5em', width: '100%', height: '80%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', gap: '0.5em', position: 'absolute' }}>
                    <Button sx={{ flexGrow: 1, fontSize: buttonFontSize, bgcolor: 'white' }} onClick={() => { handleClose(); setSelectedQuestion('AB1'); props.setQuestionsVisible(false) }}>
                        Who are you?
                    </Button>
                    <Button sx={{ flexGrow: 1, fontSize: buttonFontSize, bgcolor: 'white' }} onClick={() => { handleClose(); setSelectedQuestion('AB2'); props.setQuestionsVisible(false) }}>
                        Where am I?
                    </Button>
                    <Button sx={{ flexGrow: 1, fontSize: buttonFontSize, bgcolor: 'white' }} onClick={() => { handleClose(); setSelectedQuestion('AB3'); props.setQuestionsVisible(false) }}>
                        What do you do for fun?
                    </Button>
                </Paper>
            </Popper>
        </>
    );
}
