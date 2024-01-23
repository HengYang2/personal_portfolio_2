import { Button, MenuList, MenuItem, Typography, ClickAwayListener, Container, AppBar, Toolbar, IconButton, Stack } from '@mui/material/';
import IcecreamIcon from '@mui/icons-material/Icecream';
import { useSelector } from 'react-redux';

import styles from '../../../styles/styles';
import ProjectsMenuButton from './ProjectsMenuButton/ProjectsMenuButton'

//Import hooks:
import useViewState from '../../../hooks/useViewState';
import useSelectedQuestion from '../../../hooks/useSelectedQuestion';
import useIsTweenFinished from '../../../hooks/useIsTweenFinished';
import cameraTween from '../../../tween/cameraTween';
import { useTheme } from '@emotion/react';

export default function NavBar(props) {

    //Styles
    const theme = useTheme();
    const appBarStyles = styles().appBarStyles;
    const toolBarStyles = styles().toolBarStyles;
    const logoButtonStyles = styles().logoButtonStyles;
    const titleTypographyStyles = styles().titleTypographyStyles;
    const navStackStyles = styles().navStackStyles;
    const navButtonStyles = styles().navButtonStyles;
    const navBarEndCapStyles = styles().navBarEndCapStyles;

    //
    const viewStateReducer = useSelector(store => store.viewStateReducer)

    //Imported dispatch functions:
    const { setViewState } = useViewState();
    const { setSelectedQuestion } = useSelectedQuestion();
    const { setIsTweenFinished } = useIsTweenFinished();


    //Function for chaning the 'outlined' varriant in the NavBar Buttons based on the value of the viewStateReducer.
    const isOutlined = (buttonId) => {
        if (buttonId == viewStateReducer) {
            return 'outlined'
        } else {
            return 'contained'
        }
    }

    return (
        <AppBar postion='static' sx={appBarStyles}>
            <Toolbar sx={toolBarStyles}>
                <IconButton sx={logoButtonStyles}>
                    <IcecreamIcon />
                </IconButton>
                <Typography sx={titleTypographyStyles}>
                    Heng's Room
                </Typography>
                <div style={navStackStyles}>
                    <Button variant={isOutlined('aboutMeView')} color='secondary' sx={navButtonStyles} onClick={() => { setViewState('aboutMeView'); cameraTween(props.camera, props.target, 'me', setIsTweenFinished); setSelectedQuestion('AB4'); }}>About Me</Button>
                    <ProjectsMenuButton isOutlined={isOutlined()} camera={props.camera} target={props.target} />
                    <Button variant={isOutlined('contactView')} color='secondary' sx={navButtonStyles} onClick={() => { setViewState('contactView'); cameraTween(props.camera, props.target, 'laptop', setIsTweenFinished); setSelectedQuestion('GIT0'); }}>Get In Touch</Button>
                    <Button variant={isOutlined('musicView')} color='secondary' sx={navButtonStyles} onClick={() => { setViewState('musicView'); cameraTween(props.camera, props.target, 'speakers', setIsTweenFinished); setSelectedQuestion('M0'); }}>Music</Button>
                </div>
                <div style={navBarEndCapStyles}/>
            </Toolbar>
        </AppBar>
    )
}
