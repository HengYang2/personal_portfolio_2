  // mobile: 0,
  // tablet: 640,
  // laptop: 1024,
  // desktop: 1200,

  //For reference
  // <Container sx={{ height: '25%', bgcolor: '', position: 'relative', pointerEvents: 'auto', padding: '0%', margin: '0%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '4%', paddingTop: '0%' }}>
  //       {/* <Container sx={{ height: '100%', zIndex: '0', width: '100%', bgcolor: '', position: 'absolute', opacity: '20%' }}></Container> */}
  //       <Paper sx={{ width: { mobile: '75%', desktop: '70%' }, height: { desktop: '100%' }, zIndex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: { mobile: '3%', laptop: '1%', desktop: '1%' }, marginTop: { mobile: '15%', laptop: '6%', desktop: '7%' } }}>
  //         <Typography variant='h6' component="h1">
  //           Welcome to Heng's Room
  //         </Typography>
  //       </Paper>
  //       <Paper sx={{ width: '50%', zIndex: '1', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: { mobile: '1%', laptop: '1%', desktop: '1%' } }}>
  //         <Typography variant='subtitle1' component="h2">
  //           Try rotating model!
  //         </Typography>
  //       </Paper>
  //     </Container>
  //     <Container sx={{ height: '50%', bgcolor: '', display: 'flex', flexDirection: 'column', justifyContent: 'end', pointerEvents: 'none' }}>
  //       <Container sx={{ pointerEvents: 'auto', width: '75%', height: '15%', bgcolor: '', position: 'relative', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', padding: '0%' }}>
  //         {toggle360ButtonVariant()}
  //         <Button variant="contained" color="secondary" sx={{ height: "100%", aspectRatio: "1", padding: "0%", fontSize: '8px', color: 'white' }}>Reset Camera</Button>
  //         {toggleMusicButtonVariant()}
  //       </Container>
  //     </Container>
  //     <Container sx={{ height: '25%', position: 'relative', bgcolor: '', pointerEvents: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
  //       {/* <Container sx={{ height: '100%', zIndex: '0', width: '100%', bgcolor: '', position: 'absolute', opacity: '20%' }}></Container> */}
  //       <Button onClick={() => { setViewState(); cameraTween(props.camera, props.target, '', setIsTweenFinished); }} sx={{ padding: { mobile: '2%', desktop: '2%' }, color: 'black', zIndex: '1', bgcolor: 'white', height: '50%', width: '50%', border: '', }}>
  //         <Typography variant="body1" component="">
  //           Explore / Learn More About Me!
  //         </Typography>
  //       </Button>
  //     </Container>





  ///UI STUFF!
//   import React from 'react';
// import { useTheme } from '@mui/material/styles';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import Box from '@mui/material/Box';

// const ResponsiveDiv = () => {
//   const theme = useTheme();
//   const isXs = useMediaQuery(theme.breakpoints.only('xs'));
//   const isSm = useMediaQuery(theme.breakpoints.only('sm'));
//   const isMd = useMediaQuery(theme.breakpoints.only('md'));
//   const isLg = useMediaQuery(theme.breakpoints.only('lg'));
//   const isXl = useMediaQuery(theme.breakpoints.only('xl'));

//   return (
//     <Box
//       sx={{
//         height: isXs ? 50 : // Height for xs screens
//                isSm ? 100 : // Height for sm screens
//                isMd ? 150 : // Height for md screens
//                isLg ? 200 : // Height for lg screens
//                isXl ? 250 : 300, // Height for xl screens
//         width: isXs ? 100 : // Width for xs screens
//                isSm ? 150 : // Width for sm screens
//                isMd ? 200 : // Width for md screens
//                isLg ? 250 : // Width for lg screens
//                isXl ? 300 : 350, // Width for xl screens
//         backgroundColor: 'lightgray', // Add a background color for visibility
//       }}
//     >
//       Responsive Div
//     </Box>
//   );
// };

// export default ResponsiveDiv;
