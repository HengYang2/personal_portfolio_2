import React, { useEffect, useState } from 'react';
import { Button, Modal, Box, Typography, Container } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import useIsTweenFinished from '../../../../hooks/useIsTweenFinished';
import useViewState from '../../../../hooks/useViewState';
import cameraTween from '../../../../tween/cameraTween';

//Import div styles:
import styles from '../../../../styles/styles';

const EmailView = (props) => {

    const { setIsTweenFinished } = useIsTweenFinished();
    const {setViewState } = useViewState();


    //Styles:
    const emailSubDiv1Styles = styles().emailModalStyles.subDiv1;
    const emailSubDiv2Styles = styles().emailModalStyles.subDiv2;
    const emailModalContainerStyles = styles().emailModalStyles.container;
    const imgFrameStyles = styles().trophyStyles.modals.imgFrame;
    const imgStyles = styles().trophyStyles.modals.img;
    const textFrameStyles = styles().trophyStyles.modals.textFrame;

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    //UseState for managing which project I'm on:
    // const [modalInformation, setModalInformation] = useState(projectModalInfo(props.projectName))
    // const [projectNumber, setProjectNumber] = useState(projectModalInfo(props.projectName).orderNumber)

    useEffect(() => {
        handleOpen()
    }, [])

    return (
        <div>
            <div onClick={() => { handleOpen(); }}></div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                BackdropProps={{
                    onClick: (e) => {
                        handleOpen();
                    },
                }}
                sx={{ bgcolor: '', opacity: '1', width: '100%', height: '100%', position: 'absolute', padding: '0%', display: 'block' }}
            >
                <div style={emailModalContainerStyles}>
                    <Button sx={{ bgcolor: 'green', }} onClick={() => { handleClose(); cameraTween(props.camera, props.target, 'desk', setIsTweenFinished); setViewState('contactView') }} ><CloseIcon /></Button>

                </div>
            </Modal>
        </div>
    );
};

export default EmailView