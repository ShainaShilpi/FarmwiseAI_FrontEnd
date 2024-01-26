// src/App.js

import React from 'react';
import { Provider } from 'react-redux';
import store from './store/configureStore.js';
import Dropdown from './components/Dropdown.js';

const App = () => {
    return ( <
        Provider store = { store } >
        <
        div className = "App" >
        <
        h1 > React Redux Dropdown Menu < /h1> <
        Dropdown / >
        <
        /div> <
        /Provider>
    );
};

export default App;