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
            backgroundColor: 'red',
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
            backgroundColor: 'blue',
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
}

export default styles