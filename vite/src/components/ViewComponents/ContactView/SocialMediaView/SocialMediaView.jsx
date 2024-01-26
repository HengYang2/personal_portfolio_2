import React from 'react'
import CloseIcon from '@mui/icons-material/Close';

import cameraTween from '../../../../tween/cameraTween';
import useIsTweenFinished from '../../../../hooks/useIsTweenFinished';
import useViewState from '../../../../hooks/useViewState';
import { Button, Paper, Typography } from '@mui/material';

export default function SocialMediaView(props) {

    const { setIsTweenFinished } = useIsTweenFinished();
    const { setViewState } = useViewState();

    //Function to change places of the Active and Unactive ZombieHand model:
    //Both Active and Unactive ZombieHand models have been added to the global window object.
    //So they can both be accessed as global variables.
    function switchZombieHandPlaces() {
        zombieHandUnactive.position.y = 2.28;
        zombieHandActive.position.y = 0;
    };

    return (
        <div style={{ backgroundColor: '', width: '100%', height: '100%', position: 'relative', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
            <Button sx={{ bgcolor: 'blue', marginBottom: '35%', position: 'absolute', marginLeft: '80%', color: 'black' }} onClick={() => { cameraTween(props.camera, props.target, 'desk', setIsTweenFinished); setViewState('contactView'); switchZombieHandPlaces() }} ><CloseIcon /></Button>
            <Paper sx={{ bgcolor: 'white', height: '80%', width: '30%', position: 'absolute', marginTop: '5%', marginRight: '30%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
                <Typography>LinkedIn</Typography>
                <Typography>GitHub</Typography>
            </Paper>
            <Paper sx={{ bgcolor: 'white', height: '80%', width: '30%', position: 'absolute', marginTop: '5%', marginLeft: '30%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
                <Typography>Resume</Typography>
            </Paper>
        </div>

    )
}
