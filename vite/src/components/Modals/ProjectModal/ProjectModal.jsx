import React, { useState } from 'react';
import { Button, Modal, Box, Typography, Container} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import trophyTween from '../../../tween/trophyTween'

import projectModalInfo from '../projectModalInfo/projectModalInfo';

//Import div styles:
import styles from '../../../styles/styles'

const ProjectModal = (props) => {

    //Div Styles:
    const containerStyles = styles.trophyDivStyles.containerDiv;
    const secondaryStyles = styles.trophyDivStyles.childDiv;
    const imgStyles = styles.trophyDivStyles.img;

    //Expecting an object with the project name, desc, URLlink, techstack, and imgPath
    const modalInformation = projectModalInfo(props.projectName)

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div style={containerStyles}>
            <div style={secondaryStyles} onMouseEnter={(e) => { trophyTween(props.selectedProject); props.setHoveredDiv(modalInformation.name); }} onMouseLeave={(e) => { props.setHoveredDiv('') }} onClick={() => { handleOpen(); }}></div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'start', gap: '0%', position: 'relative', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '70%', height: '60%', bgcolor: 'black', }}>
                    <Container sx={{ height: '100%', width: '30%', bgcolor: 'white', margin: '0%', padding: '0%' }}>
                        <img style={imgStyles} src={modalInformation.imgPATH} />
                    </Container>
                    <Container sx={{ height: '100%', width: '70%', bgcolor: 'white', display: 'flex', flexDirection: 'column', gap: '1em', padding: '1em', margin: '0%' }}>
                        <Button sx={{ position: 'absolute', width: '2em', aspectRatio: '1/1', marginLeft: '61%', marginBottom: '50%', bgcolor: 'grey', color: 'black' }} onClick={handleClose}><CloseIcon></CloseIcon></Button>
                        <Typography variant='h2'>{modalInformation.name}</Typography>
                        <Typography variant='h1'>{modalInformation.description}</Typography>
                        <Typography variant='h1' sx={{ marginTop: '2em' }} >{modalInformation.link}</Typography>
                        <Typography variant='h1' sx={{ marginTop: '7em' }} > {modalInformation.techStack}</Typography>
                    </Container>
                </Box>
            </Modal>
        </div>
    );
};

export default ProjectModal