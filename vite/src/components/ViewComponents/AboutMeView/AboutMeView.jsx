import React, { useEffect } from 'react'

//MUI
import Container from '@mui/material/Container';

//Import DialogComponents:
import DialogBox from '../../DialogComponents/DialogBox/DialogBox';

export default function AboutMeView(props) {
  return (
    <Container maxWidth={false} sx={{ margin: '0%', padding: '0%', bgcolor: '', height: '100%', position: 'absolute', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '0%', pointerEvents: 'auto' }}>
      <DialogBox />
    </Container>
  )
}