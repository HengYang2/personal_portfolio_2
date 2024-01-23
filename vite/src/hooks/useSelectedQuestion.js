import { useDispatch } from 'react-redux';

function useSelectedQuestion() {
    const dispatch = useDispatch();

    function setSelectedQuestion(state) {
        dispatch({ type: 'SET_SELECTED_QUESTION', payload: state });
    }

    return { setSelectedQuestion };
}

export default useSelectedQuestion;
