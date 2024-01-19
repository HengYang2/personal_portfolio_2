import React from 'react'

const selectedQuestionReducer = (state = '0', action) => {
    switch (action.type) {
        case 'SET_SELECTED_QUESTION':
            return action.payload;
        default:
            return state;
    }
};

export default selectedQuestionReducer;
