// src/actions/dropdownActions.js

export const SELECT_OPTION = 'SELECT_OPTION';

export const selectOption = (option) => {
    return {
        type: SELECT_OPTION,
        payload: option
    };
};