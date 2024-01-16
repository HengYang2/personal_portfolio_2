import { Container } from '@mui/material'
import React from 'react'

export default function BlackSideBars() {
    return (
        <Container sx={{bgcolor: '', height: '100%', width: '100%', position: 'absolute', margin: '0%', padding: '0%' }}>
            <Container sx={{ bgcolor: 'black', height: '100%', width: '15%', position: 'absolute', }}>
            </Container>
            <Container sx={{ bgcolor: 'black', height: '100%', width: '15%', position: 'absolute', marginLeft: '85%' }}>
            </Container>
        </Container>
    )
}
