import React, { useState } from 'react'
import { Box, Popper, Fade, Paper, Typography, Stack, Container } from '@mui/material/';

//Import supporting DialogComponents:
import QuestionPopper from '../QuestionPopper/QuestionPopper'
import NextTextIndicator from '../NextTextIndicator/NextTextIndicator'
import EndTextIndicator from '../EndTextIndicator/EndTextIndicator'

import useTextGeneration from '../../../hooks/useTextGeneration';

import styles from '../../../styles/styles';


export default function DialogBox() {

    //Styles
    const dialogContainerStyles = styles().dialogContainerStyles

    const { text, continueIndicatorVisible, questionsVisible, setQuestionsVisible, endTextIndicatorVisible, setEndTextIndicatorVisible, nextText } = useTextGeneration();

    //Conditionally render the NextTextIndicator, QuestionPopper, or the EndTextIndicator component base on if more text needs to be generated, questions need to asked
    //or there isn't anymore text to be generated.
    function RenderIndicatorOrPopper() {
        if (continueIndicatorVisible == true) {
            return <NextTextIndicator nextText={nextText} />
        } else {
            if (questionsVisible == true) {

                return <QuestionPopper setQuestionsVisible={setQuestionsVisible} />

            } else if (endTextIndicatorVisible == true) {

                return <EndTextIndicator />

            } else {
                return <></>
            }
        }
    }

    return (
        <Paper variant='outlined' sx={dialogContainerStyles}>
            <Stack direction='row' spacing={1} sx={{ bgcolor: '', padding: '0.5%', height: '100%', width: '100%', position: 'absolute', display: 'flex', flexDirection: 'row', justifyContent: 'start' }}>
                <Paper variant='outlined' sx={{ border:'1px solid #5CC8FF', bgcolor: '', height: '100%', aspectRatio: '1/1', display: 'flex', flexDirection: 'column', justifyContent: 'end', alignItems: 'center' }}>
                    <img style={{borderRadius:'3px'}} src='/hengPicture.jpg' />
                    <Paper sx={{ position: 'absolute', marginBottom: '1%', padding: '0.25%' }}>
                        <Typography variant='h1' sx={{bgcolor:'#FEEFE5'}}>
                            Heng Yang
                        </Typography>
                    </Paper>
                </Paper>
                <Paper variant='outlined' sx={{ bgcolor: 'white', height: '100%', flex: '1', margin: '0%', padding: '0%', position: 'relative' }}>
                    <Container onClick={() => { nextText() }} sx={{ bgcolor: '', width: '100%', height: '100%', padding: '1em', position: 'absolute' }} type="button">
                        <Typography sx={{ fontSize: '1.5em' }}>{text}</Typography>
                    </Container>
                    <RenderIndicatorOrPopper></RenderIndicatorOrPopper>
                </Paper>
            </Stack>
        </Paper>
    )
}
