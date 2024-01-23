import { useTheme } from '@emotion/react';
import useViewportSizeChecker from '../hooks/useViewportSizeChecker'

export default function styles() {

    const theme = useTheme();
    // values: {
    //     xs: 0,
    //     sm: 600,
    //     md: 900,
    //     lg: 1200,
    //     xl: 1536,
    //   }

    const { isXs, isSm, isMd, isLg, isXl } = useViewportSizeChecker();

    return({
        viewportStyles: {
            backgroundColor: '',
            position:'absolute',
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        },
        interactiveSpaceStyles: {
            backgroundColor: '',
            position:'relative',
            height: '100%',
            width: 
                isXs ? '100%':
                isSm ? '100%':
                isMd ? '80%':
                isLg ? '75%':
                isXl ? '75%': '75%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'start',
            alignItems: 'center',
            gap:'0%',
        },
        edgeBarStyles: {
            backgroundColor: 'black',
            position:'relative',
            height: '100%',
            width: 
                isXs ? '0%':
                isSm ? '0%':
                isMd ? '10%':
                isLg ? '15%':
                isXl ? '15%': '15%',
        },
        appBarStyles: {
            backgroundColor: 'pink',
            position:'relative',
            height: 
                isXs ? '8%':
                isSm ? '8%':
                isMd ? '8%':
                isLg ? '8%':
                isXl ? '8%': '8%',
            width: '100%',
        },
        toolBarStyles: {
            backgroundColor: theme.palette.primary.main,
            position:'relative',
            height: '100%',
            width: '100%',
            padding: '1%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'start',
            alignItems: 'center',
            gap:'1%',
        },
        logoButtonStyles: {
            backgroundColor: theme.palette.secondary.main,
            position:'relative',
            height: '100%',
            aspectRatio: '1/1',
        },
        titleTypographyStyles: {
            backgroundColor: '',
            color: 'white',
            border: '1px solid white',
            position:'relative',
            height: '100%',
            width: 
                isXs ? '15%':
                isSm ? '25%':
                isMd ? '32%':
                isLg ? '35%':
                isXl ? '50%': '35%',
            padding: '0.1em',
            paddingLeft: '1em',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'start',
            alignItems: 'center',
        },
        navStackStyles: {
            backgroundColor: '',
            color: 'white',
            position:'relative',
            height: '100%',
            width: 
                isXs ? '60%':
                isSm ? '25%':
                isMd ? '32%':
                isLg ? '35%':
                isXl ? '40%': '35%',
            padding: '0%',
            margin: '0%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '2.5%',
        },
        navButtonStyles: {
            backgroundColor: '',
            color: 'black',
            border: '',
            position:'relative',
            height: '100%',
            flexGrow: 1,
            padding: '0%',
            margin: '0%',
        },
        menuItemStyles: {
            backgroundColor:'yellow',
            position:'relative',
            height: '100%',
            width:'100%',
            padding: '0%',
            marginLeft: '10%',
            margin: '0%',
            display:'flex',
        },
        menuButtonStyles: {
            position:'relative',
            height: '100%',
            flexGrow: 1,
            padding: '1%',
            margin: '3%',
        },
        navBarEndCapStyles: {
            backgroundColor: '',
            border: '1px solid white',
            position:'relative',
            height: '100%',
            flexGrow: 1,
        },

        mainViewStyles: {
            backgroundColor: '',
            position:'relative',
            flexGrow: 1,
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'start',
            gap: '0%',
        },
        interactiveWindowStyles: {
            backgroundColor: '',
            position:'relative',
            flexGrow: 1,
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'start',
            gap: '0%',
        },
        dialogWindowStyles: {
            backgroundColor: '',
            position:'relative',
            height: 
                isXs ? '30%':
                isSm ? '30%':
                isMd ? '30%':
                isLg ? '30%':
                isXl ? '30%': '30%',
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0%',
            padding: '1% 8% 1% 8%'
        },
        dialogContainerStyles: {
            backgroundColor: '#5CC8FF',
            position:'relative',
            height: '100%',
            width: '100%',
        },
        dialogStackStyles: {
            backgroundColor: 'red',
            position:'relative',
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'start',
            alignItems: 'center',
            gap: '0%',
            padding: '1%'
        },
        portraitStyles: {
            backgroundColor: 'blue',
            position:'relative',
            height: '50%',
            width: '25%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'start',
            gap: '0%',
        },
        bookDivStyles: { //For Book Divs
            containerDiv: {
                position: 'absolute',
                marginBottom: '8%',
                marginRight: '22%',
                height: '25%',
                width: '32%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '0%',
                opacity: '0.5',
                backgroundColor: '',
                padding: '0%',
                border: '0px solid darkblue',
                borderRadius: '8px',
                textAlign: 'center',
                fontSize: '16px',
            },
            childDiv: {
                position: 'relative',
                margin: '0%',
                height: '100%',
                flexGrow: '1',
                opacity: '0.5',
                backgroundColor: '',
                padding: '',
                border: '0px solid darkblue',
                borderRadius: '8px',
                textAlign: 'center',
                fontSize: '16px',
                zIndex: '1000'
            },
        },
        trophyDivStyles: { //For Trophy Divs
            containerDiv: {
                position: 'absolute',
                marginBottom: '10%',
                height: '40%',
                width: '60%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                gap: '0%',
                opacity: '1',
                backgroundColor: '',
                padding: '0%',
                border: '0px solid darkblue',
                borderRadius: '8px',
                textAlign: 'center',
                fontSize: '16px',
            },
            childDiv1: {
                position: 'relative',
                margin: '0%',
                padding: '0%',
                height: '100%',
                flexGrow: '1',
                opacity: '1',
                backgroundColor: '',
                borderRadius: '8px',
                textAlign: 'center',
                fontSize: '16px',
                zIndex: '1000'
            },
            childDiv2: {
                position: 'relative',
                margin: '0%',
                padding: '0%',
                height: '100%',
                width: '100%',
                opacity: '1',
                backgroundColor: '',
                borderRadius: '8px',
                zIndex: '1000'
            },
            img: {
                position: 'relative',
                margin: '0%',
                padding: '0%',
                height: '100%',
                width: '100%',
                opacity: '1',
                backgroundColor: '',
            },
        },
        toolTipStyles: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            height: '5em',
            aspectRatio: '1.5/1',
            opacity: '0.9',
            backgroundColor: 'white',
            border: '1px solid darkblue',
            borderRadius: '8px',
            textAlign: 'center',
            fontSize: '16px',
            zIndex: '1000',
        },
    })
}