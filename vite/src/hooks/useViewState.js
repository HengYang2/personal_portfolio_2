import { useDispatch } from 'react-redux';

function useViewState() {
    const dispatch = useDispatch();

    function setViewState(state) {
        dispatch({ type: 'SET_VIEW_STATE', payload: state });
    }

    return { setViewState };
}

export default useViewState;