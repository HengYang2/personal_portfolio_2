import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Popper from '@mui/material/Popper';
import Paper from '@mui/material/Paper';

export default function TextPopper(props) {
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
            <Button aria-describedby={open ? 'simple-popper' : undefined} variant="contained" color="secondary" onClick={handleClick} sx={{ width: '100%', height: '100%', bgcolor: '' }}>
                Open Popper
            </Button>
            <Popper id="simple-popper" open={open} anchorEl={anchorEl} placement="top-end" sx={{ bgcolor: '', width: '10%', height: '40%', zIndex: '1000', marginBottom: '7%' }}>
                <Paper sx={{ bgcolor: '', padding: '0.5em', width: '100%', height: '80%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', gap:'0.5em', position: 'absolute' }} onClick={() => { console.log('clicked on popper'); }}>
                    <Button sx={{ flexGrow: 1, fontSize: buttonFontSize, bgcolor: 'lightBlue' }} onClick={() => { handleClose(); }}>
                        What do you like doing for fun?
                    </Button>
                    <Button sx={{ flexGrow: 1, fontSize: buttonFontSize, bgcolor: 'lightBlue' }} onClick={() => { handleClose(); }}>
                        Where are we?
                    </Button>
                    <Button sx={{ flexGrow: 1, fontSize: buttonFontSize, bgcolor: 'lightBlue' }} onClick={() => { handleClose(); }}>
                        So who are you and what are we doing in your room?
                    </Button>
                </Paper>
            </Popper>
        </>
    );
}
