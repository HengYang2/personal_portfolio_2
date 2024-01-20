import React from 'react'
import Button from '@mui/material/Button';

export default function EndTextIndicator(props) {
    return (
        <>
            <Button variant="outlined" color="secondary" onClick={()=>{props.nextText()}} sx={{ paddingTop:'17%', paddingLeft:'86%', color: 'black', width: '100%', height: '100%', bgcolor: '', zIndex: '1000', position: 'absolute'}}>
                End of Text
            </Button>
        </>
    )
}
