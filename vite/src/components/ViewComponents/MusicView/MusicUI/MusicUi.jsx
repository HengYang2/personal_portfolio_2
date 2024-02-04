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

const MusicUI = (props) => {


  const { setViewState } = useViewState();

  //Styles:
  // const trophySubDiv1Styles = styles().trophyStyles.subDiv1;
  // const trophySubDiv2Styles = styles().trophyStyles.subDiv2;
  // const modalContainerStyles = styles().trophyStyles.modals.container;
  // const imgFrameStyles = styles().trophyStyles.modals.imgFrame;
  // const imgStyles = styles().trophyStyles.modals.img;
  // const textFrameStyles = styles().trophyStyles.modals.textFrame;

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // const projectHandler = useProjectHandler;

  //UseState for managing which project I'm on:
  // const [modalInformation, setModalInformation] = useState(projectModalInfo(props.projectName))
  // const [projectNumber, setProjectNumber] = useState(projectModalInfo(props.projectName).orderNumber)

  return (
    <div style={trophySubDiv1Styles}>
      <div style={trophySubDiv2Styles} onMouseEnter={(e) => { trophyTween(props.selectedProject); props.setHoveredDiv(modalInformation.name); }} onMouseLeave={(e) => { props.setHoveredDiv('') }} onClick={() => { handleOpen(); setViewState('trophyModalView'); }}></div>
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
        </div>
      </Modal>
    </div>
  );
};

export default ProjectModal