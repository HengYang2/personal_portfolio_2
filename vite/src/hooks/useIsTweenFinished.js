import { useDispatch } from 'react-redux';

function useIsTweenFinished() {
  const dispatch = useDispatch();

  function setIsTweenFinished(bool) {
    dispatch({ type: 'SET_IS_TWEEN_FINISHED', payload: bool });
  }

  return { setIsTweenFinished };
}

export default useIsTweenFinished;
