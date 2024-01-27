import React, { useEffect, useState } from 'react';
import { Button, Modal, Box, Typography, Container } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import trophyTween from '../../../../tween/trophyTween'

import projectModalInfo from '../../../../data/projectModalInfo';

import useProjectHandler from '../../../../hooks/useProjectHandler';

//Import div styles:
import styles from '../../../../styles/styles'

import useViewState from '../../../../hooks/useViewState';

const ProjectModal = (props) => {


    const { setViewState } = useViewState();

    //Styles:
    const trophySubDiv1Styles = styles().trophyStyles.subDiv1;
    const trophySubDiv2Styles = styles().trophyStyles.subDiv2;
    const modalContainerStyles = styles().trophyStyles.modals.container;
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

    const projectHandler = useProjectHandler;

    //UseState for managing which project I'm on:
    const [modalInformation, setModalInformation] = useState(projectModalInfo(props.projectName))
    const [projectNumber, setProjectNumber] = useState(projectModalInfo(props.projectName).orderNumber)

    return (
        <div style={trophySubDiv1Styles}>
            <div style={trophySubDiv2Styles} onMouseEnter={(e) => { trophyTween(props.selectedProject); props.setHoveredDiv(modalInformation.name); }} onMouseLeave={(e) => { props.setHoveredDiv('') }} onClick={() => {  handleOpen();  setViewState('trophyModalView');}}></div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                BackdropProps={{
                    onClick: (e) => {
                        handleClose();
                        setViewState('projectView');
                    },
                }}
                sx={{ bgcolor: '', width: '100%', height: '100%', position: 'absolute', padding: '0%', display: 'block' }}
            >
                <div style={modalContainerStyles}>
                    <div style={imgFrameStyles}>
                        <img style={imgStyles} src={modalInformation.imgPATH} />
                    </div>
                    <div style={textFrameStyles}>
                        <Typography variant='h2'>{modalInformation.name}</Typography>
                        <Typography variant='h1' sx={{ marginTop: '1%' }}>{modalInformation.description}</Typography>
                        <Typography variant='h1' sx={{ marginTop: '3%' }} >{modalInformation.link}</Typography>
                        <Typography variant='h1' sx={{ marginTop: '30%' }} > {modalInformation.techStack}</Typography>
                    </div>
                    <Button sx={{ position: 'absolute', width: '2em', aspectRatio: '1/1', marginLeft: '92%', marginBottom: '40%', bgcolor: '#fa003f', color: 'black', border: 'px solid grey', borderRadius: '100px' }} onClick={() => {setViewState('projectView'); handleClose();}}><CloseIcon /></Button>
                    <Button sx={{ position: 'absolute', height: '5em', aspectRatio: '1/1', marginRight: '92%', marginBottom: '6%', bgcolor: 'lightBlue', color: 'black' }} onClick={() => { projectHandler('back', projectNumber, setProjectNumber, setModalInformation) }}><ArrowBackIosNewIcon /></Button>
                    <Button sx={{ position: 'absolute', height: '5em', aspectRatio: '1/1', marginLeft: '92%', marginBottom: '6%', bgcolor: 'lightBlue', color: 'black' }} onClick={() => { projectHandler('forward', projectNumber, setProjectNumber, setModalInformation) }}><ArrowForwardIosIcon /></Button>
                </div>
            </Modal>
        </div>
    );
};

export default ProjectModal