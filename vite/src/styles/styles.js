import useViewportSizeChecker from '../hooks/useViewportSizeChecker'

export default function styles() {

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