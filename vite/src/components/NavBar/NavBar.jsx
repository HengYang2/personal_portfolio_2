import React from 'react'
import { Button, Typography } from '@mui/material/';
import { AppBar, Toolbar, IconButton, Stack } from '@mui/material'
import WaterDropSharpIcon from '@mui/icons-material/WaterDropSharp';


export default function NavBar() {
  return (
    <AppBar postion='static' sx={{ height: '6%', maxWidth: '70%', marginRight: '15%', }}>
    <Toolbar sx={{ height: '100%', width: '100%', bgcolor: 'primary', }}>
      <IconButton size='large' edge='start' color='white' aria-label='logo'>
        <WaterDropSharpIcon />
      </IconButton>
      <Typography variant='h6' component='div' sx={{ flexGrow: 1, color: 'black', }}>
        Heng's Room
      </Typography>
      <Stack direction='row' spacing={2}>
        <Button color='secondary' variant='outlined'>About Me</Button>
        <Button color='secondary' variant='contained'>Projects</Button>
        <Button color='secondary' variant='contained'>Get In Touch</Button>
        <Button color='secondary' variant='contained'>Music</Button>
      </Stack>
    </Toolbar>
  </AppBar>
  )
}
