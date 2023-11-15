const isTweenFinishedReducer = (state = true, action) => {
    switch (action.type) {
        case 'SET_IS_TWEEN_FINISHED':
            return action.payload;
        default:
            return state;
    }
};

export default isTweenFinishedReducer;