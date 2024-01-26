// src/components/Dropdown.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectOption } from '../actions/dropdownActions.js';

const Dropdown = () => {
    const dispatch = useDispatch();
    const selectedOption = useSelector(state => state.dropdown.selectedOption);

    const handleChange = (e) => {
        dispatch(selectOption(e.target.value));
    };

    return ( <
        div >
        <
        h3 > Dropdown Menu < /h3> <
        select value = { selectedOption }
        onChange = { handleChange } >
        <
        option value = "" > Select an option < /option> <
        option value = "option1" > Option 1 < /option> <
        option value = "option2" > Option 2 < /option> <
        option value = "option3" > Option 3 < /option> <
        /select> <
        p > Selected option: { selectedOption } < /p> <
        /div>
    );
};

export default Dropdown;