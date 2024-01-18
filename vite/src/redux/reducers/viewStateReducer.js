const viewStateReducer = (state = 'aboutMeView', action) => {
    switch (action.type) {
        case 'SET_VIEW_STATE':
            return action.payload;
        default:
            return state;
    }
};

export default viewStateReducer;