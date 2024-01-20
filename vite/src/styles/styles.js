const styles = {
    bookDivStyles: { //For Book Divs
        containerDiv: {
            position: 'absolute',
            marginBottom: '8%',
            marginRight: '22%',
            height: '25%',
            width: '33%',
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
        childDiv: {
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
}

export default styles