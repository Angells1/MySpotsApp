import React, {useState, useReducer, createContext, useContext} from 'react';
import { Route, BrowserRouter as Router} from 'react-router-dom';

import Routes from './routes/switch';

import NavBar from './Components/NavBar/NavBar'

import AuthApi from './services/auth'
import {AuthProvider} from './contexts/auth'


import {Provider} from 'react-redux'
import store from './store'


const App = () => {


  return (
    <Provider store={store}>

         <AuthProvider>

            <Routes/>

         </AuthProvider>


    </Provider>
  );
}

export default App;
