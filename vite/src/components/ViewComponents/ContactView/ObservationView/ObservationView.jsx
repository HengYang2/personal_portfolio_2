import React from 'react'
import CloseIcon from '@mui/icons-material/Close';

import cameraTween from '../../../../tween/cameraTween';
import useIsTweenFinished from '../../../../hooks/useIsTweenFinished';
import useViewState from '../../../../hooks/useViewState';
import { Button } from '@mui/material';

export default function ObservationView(props) {

    const { setIsTweenFinished } = useIsTweenFinished();
    const { setViewState } = useViewState();

    return (
        <div style={{ backgroundColor: '', width: '100%', height: '100%', position: 'relative', display: 'flex', flexDirection: 'row', justifyContent:'end', alignItems: 'start', }}>
            <Button sx={{ bgcolor: 'pink', marginTop:'5%', marginRight:'7%', color:'black' }} onClick={() => {cameraTween(props.camera, props.target, 'desk', setIsTweenFinished); setViewState('contactView') }} ><CloseIcon /></Button>
        </div>

    )
}
