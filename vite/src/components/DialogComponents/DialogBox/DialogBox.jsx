import React from 'react'
import { Box, Popper, Fade, Paper, Typography, Stack, Container } from '@mui/material/';

//Import supporting DialogComponents:
import QuestionPopper from '../QuestionPopper/QuestionPopper'
import NextTextIndicator from '../NextTextIndicator/NextTextIndicator'

import useTextGeneration from '../../../hooks/useTextGeneration';


export default function DialogBox() {

    const { text, indicatorVisible, questionsVisible, setQuestionsVisible, nextText } = useTextGeneration();

    //Conditionally render the 'click to continue' button or the TextPopper component base on if more text needs to be generated or if the questions list needs to pop up.
    function RenderIndicatorOrPopper() {
        if (indicatorVisible == true) {
            return <NextTextIndicator nextText={nextText} />
        } else if (questionsVisible == true) {
            return <QuestionPopper setQuestionsVisible={setQuestionsVisible} />
        } else {
            return <></>
        }
    }

    return (
        <Paper variant='outlined' sx={{ bgcolor: 'lightBlue', height: '25%', width: '65%', position: 'absolute', marginTop: '34%' }}>
            <Stack direction='row' spacing={2} sx={{ bgcolor: '', padding: '0.5%', height: '100%', width: '100%', position: 'absolute', display: 'flex', flexDirection: 'row', justifyContent: 'start' }}>
                <Paper variant='outlined' sx={{ bgcolor: '', height: '100%', aspectRatio: '1/1', display: 'flex', flexDirection: 'column', justifyContent: 'end', alignItems: 'center' }}>
                    <img src='/hengPicture.jpg' />
                    <Paper sx={{ position: 'absolute', marginBottom: '1%', padding: '0.25%' }}>
                        <Typography variant='h1'>
                            Heng Yang
                        </Typography>
                    </Paper>
                </Paper>
                <Paper variant='outlined' sx={{ bgcolor: 'white', height: '100%', flex: '1', margin: '0%', padding: '0%', position: 'relative' }}>
                    <Container onClick={() => { nextText() }} sx={{ bgcolor: '', width: '100%', height: '100%', padding: '1em', position: 'absolute' }} type="button" className='relative bg-white left-0 w-4/5 top-1.5 h-40 p-2 border border-black rounded-md box-shadow z-20'>
                        <Typography sx={{ fontSize: '1.5em' }}>{text}</Typography>
                    </Container>
                    <RenderIndicatorOrPopper></RenderIndicatorOrPopper>
                </Paper>
            </Stack>
        </Paper>
    )
}
