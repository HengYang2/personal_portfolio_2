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

const ProjectModal = (props) => {

    //Div Styles:
    const primaryStyles = styles.trophyDivStyles.childDiv1;
    const secondaryStyles = styles.trophyDivStyles.childDiv2;
    const imgStyles = styles.trophyDivStyles.img;

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
        <div style={primaryStyles}>
            <div style={secondaryStyles} onMouseEnter={(e) => { trophyTween(props.selectedProject); props.setHoveredDiv(modalInformation.name); }} onMouseLeave={(e) => { props.setHoveredDiv('') }} onClick={() => { handleOpen(); }}></div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center', gap: '0%', position: 'relative', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '70%', height: '60%', bgcolor: 'black', }}>
                    <Container sx={{ height: '100%', width: '30%', bgcolor: 'white', margin: '0%', padding: '0%' }}>
                        <img style={imgStyles} src={modalInformation.imgPATH} />
                    </Container>
                    <Container sx={{ height: '100%', width: '70%', bgcolor: 'white', display: 'flex', flexDirection: 'column', gap: '1em', padding: '1em', margin: '0%' }}>
                        <Typography variant='h2'>{modalInformation.name}</Typography>
                        <Typography variant='h1'>{modalInformation.description}</Typography>
                        <Typography variant='h1' sx={{ marginTop: '2em' }} >{modalInformation.link}</Typography>
                        <Typography variant='h1' sx={{ marginTop: '7em' }} > {modalInformation.techStack}</Typography>
                    </Container>
                    <Button sx={{ position: 'absolute', width: '2em', aspectRatio: '1/1', marginLeft: '93.5%', marginBottom: '36%', bgcolor: 'pink', color: 'black', border:'1px solid grey', borderRadius:'100px' }} onClick={handleClose}><CloseIcon /></Button>
                    <Button sx={{ position: 'absolute', width: '5em', aspectRatio: '1/1', marginRight: '92%', marginBottom: '5%', bgcolor: 'lightBlue', color: 'black' }} onClick={() => { projectHandler('back', projectNumber, setProjectNumber, setModalInformation) }}><ArrowBackIosNewIcon /></Button>
                    <Button sx={{ position: 'absolute', width: '3em', aspectRatio: '1/1', marginLeft: '92%', marginBottom: '5%', bgcolor: 'lightBlue', color: 'black' }} onClick={() => { projectHandler('forward', projectNumber, setProjectNumber, setModalInformation) }}><ArrowForwardIosIcon /></Button>
                </Box>
            </Modal>
        </div>
    );
};

export default ProjectModal