import useViewportSizeChecker from '../../../hooks/useViewportSizeChecker'
import {Box} from '@mui/material'

export default function EdgeBar() {
    const { isXs, isSm, isMd, isLg, isXl } = useViewportSizeChecker();

    return (
        <Box sx={{
            bgcolor: 'black',
            position: 'absolute',
            height: '100%',
            width:
                isXs ? 0 :
                isSm ? 0 :
                isMd ? '10%' :
                isLg ? '15%' :
                isXl ? '20%' : '20%',
                marginLeft:
                isXs ? 0 :
                isSm ? 0 :
                isMd ? '10%' :
                isLg ? '15%' :
                isXl ? '20%' : '20%',

        }}/>
    )
}
