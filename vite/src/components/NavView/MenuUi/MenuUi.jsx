import React from 'react'

//MUI
import Container from '@mui/material/Container';
import { Box, Paper, Button, createTheme, ThemeProvider, TextField } from '@mui/material/';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MusicOffIcon from '@mui/icons-material/MusicOff';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';

export default function MenuUi() {
  return (
    <Container sx={{ position: 'absolute', bgcolor: 'red', width: '100%', height: { mobile: '8%', tablet: '8%', laptop: '10%', desktop: '50%' }, marginTop: { mobile: '8%', tablet: '8%', laptop: '10%', desktop: '12%' }, display: 'flex', justifyContent: 'space-evenly', alignItems: '', padding: '0%' }}>
      <Card sx={{width: '23%'}}>
        <CardActionArea>
          <CardContent>
            <Typography>
              TACo
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{width: '23%'}}>
        <CardActionArea>
          <CardContent>
            <Typography>
              TACo
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{width: '23%'}}>
        <CardActionArea>
          <CardContent>
            <Typography>
              TACo
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{width: '23%'}}>
        <CardActionArea>
          <CardContent>
            <Typography>
              TACo
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  )
}
