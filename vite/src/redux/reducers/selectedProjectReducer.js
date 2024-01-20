import React from 'react'

const selectedProjectReducer = (state = 'PROJECT1', action) => {
    switch (action.type) {
        case 'SET_SELECTED_PROJECT':
            return action.payload;
        default:
            return state;
    }
};

export default selectedProjectReducer;
