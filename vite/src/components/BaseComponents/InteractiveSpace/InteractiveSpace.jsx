import useViewportSizeChecker from '../../../hooks/useViewportSizeChecker'

export default function InteractiveSpace() {
    const { isXs, isSm, isMd, isLg, isXl } = useViewportSizeChecker();

    return (
        <div style={{
            backgroundColor: 'red',
            position: 'relative',
            height: '100%',
            width:
                isXs ? '5%' :
                isSm ? '15%' :
                isMd ? '70%' :
                isLg ? '100%' :
                isXl ? '100%' : '100%'
            ,
            
        }}>

        </div>
    )
}
