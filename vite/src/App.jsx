import { useState } from 'react'
import Container from '@mui/material/Container';
import { Typography } from '@mui/material/';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Container maxWidth="fixed" >
        <Typography>Heng's Room</Typography>
      </Container>
    </>
  )
}

export default App
