// src/reducers/dropdownReducer.js

import { SELECT_OPTION } from '../actions/dropdownActions.js';

const initialState = {
    selectedOption: null
};

const dropdownReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_OPTION:
            return {
                ...state,
                selectedOption: action.payload
            };
        default:
            return state;
    }
};

export default dropdownReducer;