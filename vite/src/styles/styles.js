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

    return ({
        //BASIC COMPONENTS
        viewportStyles: {
            backgroundColor: '',
            position: 'absolute',
            margin: '0%',
            padding: '0%',
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        },
        interactiveSpaceStyles: {
            backgroundColor: '',
            position: 'relative',
            height: '100%',
            width:
                isXs ? '100%' :
                    isSm ? '100%' :
                        isMd ? '80%' :
                            isLg ? '75%' :
                                isXl ? '70%' : '70%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'start',
            alignItems: 'center',
            gap: '0%',
        },
        edgeBarStyles: {
            backgroundColor: 'black',
            position: 'relative',
            height: '100%',
            width:
                isXs ? '0%' :
                    isSm ? '0%' :
                        isMd ? '10%' :
                            isLg ? '15%' :
                                isXl ? '15%' : '15%',
        },

        //NAVBAR COMPONENTS
        appBarStyles: {
            backgroundColor: 'pink',
            position: 'relative',
            height:
                isXs ? '8%' :
                    isSm ? '8%' :
                        isMd ? '8%' :
                            isLg ? '8%' :
                                isXl ? '8%' : '8%',
            width: '100%',
        },
        toolBarStyles: {
            backgroundColor: theme.palette.primary.main,
            position: 'relative',
            height: '100%',
            width: '100%',
            padding: '1%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'start',
            alignItems: 'center',
            gap: '1%',
        },
        logoButtonStyles: {
            backgroundColor: theme.palette.secondary.main,
            position: 'relative',
            height: '100%',
            aspectRatio: '1/1',
        },
        titleTypographyStyles: {
            backgroundColor: '',
            color: 'white',
            border: '1px solid white',
            position: 'relative',
            height: '100%',
            width:
                isXs ? '15%' :
                    isSm ? '25%' :
                        isMd ? '32%' :
                            isLg ? '35%' :
                                isXl ? '50%' : '35%',
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
            position: 'relative',
            height: '100%',
            width:
                isXs ? '60%' :
                    isSm ? '25%' :
                        isMd ? '32%' :
                            isLg ? '35%' :
                                isXl ? '40%' : '35%',
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
            position: 'relative',
            height: '100%',
            flexGrow: 1,
            padding: '0%',
            margin: '0%',
        },
        menuItemStyles: {
            backgroundColor: 'yellow',
            position: 'relative',
            height: '100%',
            width: '100%',
            padding: '0%',
            marginLeft: '10%',
            margin: '0%',
            display: 'flex',
        },
        menuButtonStyles: {
            position: 'relative',
            height: '100%',
            flexGrow: 1,
            padding: '1%',
            margin: '3%',
        },
        navBarEndCapStyles: {
            backgroundColor: '',
            border: '1px solid white',
            position: 'relative',
            height: '100%',
            flexGrow: 1,
        },

        //MAIN VIEW COMPONENTS FOR LIKE DIALOG AND INTERACTIVE DIVS FOR BOOKS AND TROPHIES
        mainContainerViewStyles: {
            backgroundColor: '',
            position: 'relative',
            flexGrow: 1,
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'start',
            gap: '0%',
        },

        //DIALOG COMPONENTS
        dialogWindowStyles: {
            backgroundColor: '',
            position: 'relative',
            height:
                isXs ? '30%' :
                    isSm ? '30%' :
                        isMd ? '30%' :
                            isLg ? '30%' :
                                isXl ? '30%' : '30%',
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
            position: 'relative',
            height: '100%',
            width: '100%',
        },
        dialogStackStyles: {
            backgroundColor: 'red',
            position: 'relative',
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
            position: 'relative',
            height: '50%',
            width: '25%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'start',
            gap: '0%',
        },

        //INTERACTIVE COMPONENT CONTAINER
        interactiveWindowStyles: {
            backgroundColor: '',
            position: 'relative',
            flexGrow: 1,
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0%',
            // opacity: '90%',
        },

        //BOOK STYLES
        bookStyles: {
            container: {
                position: 'absolute',
                marginTop: '3%',
                marginRight: '30%',
                height: '35%',
                width: '44%',
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
            child: {
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
        //UP ARROW BUTTON
        upArrowStyles: {
            position: 'absolute',
            marginLeft: '77%',
            marginBottom: '35%',
            height: '14%',
            aspectRatio: '1/1',
            backgroundColor: '#5CC8FF',
            padding: '0%',
            border: '0px solid darkblue',
            borderRadius: '8px',
            textAlign: 'center',
            fontSize: '16px',
            zIndex: '1000'
        },

        //TROPHY STYLES
        trophyStyles: { //For Trophy Divs
            container: {
                position: 'absolute',
                marginBottom: '2%',
                height: '65%',
                width: '85%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'cetner',
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
            subDiv1: {
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
            },
            subDiv2: {
                position: 'relative',
                height: '100%',
                width: '100%',
                opacity: '1',
                backgroundColor: '',
                borderRadius: '8px',
            },

            //TROPHY MODALS
            modals: {
                container: {
                    backgroundColor: 'black',
                    position: 'relative',
                    height: '65%',
                    width: '70%',
                    padding: '0%',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                },
                imgFrame: {
                    backgroundColor: 'green',
                    margin: '0%',
                    position: 'relative',
                    height: '100%',
                    width: '25%',
                    padding: '0%',
                    display: 'inline-block',
                    top: '0',
                    left: '0',
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
                textFrame: {
                    backgroundColor: 'white',
                    position: 'relative',
                    height: '100%',
                    width: '75%',
                    padding: '1%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'start',
                    alignItems: 'start',
                    top: '0',
                    left: '0',
                },
            },
        },
        //UP DOWN BUTTON
        downArrowStyles: {
            position: 'absolute',
            marginLeft: '77%',
            marginTop: '35%',
            height: '14%',
            aspectRatio: '1/1',
            backgroundColor: '#5CC8FF',
            padding: '0%',
            border: '0px solid darkblue',
            borderRadius: '8px',
            textAlign: 'center',
            fontSize: '16px',
            zIndex: '1000'
        },


        //TOOL TIP STYLES
        toolTipStyles: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            height: '5em',
            aspectRatio: '1.5/1',
            backgroundColor: '#FEEFE5',
            border: '0px solid darkblue',
            borderRadius: '8px',
            textAlign: 'center',
            fontSize: '16px',
            zIndex: '1000',
        },
    })
}