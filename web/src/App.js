import React, {useState, useReducer, createContext, useContext} from 'react';
import Routes from './routes';
import AuthApi from './services/auth'
import { Route, BrowserRouter as Router} from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar'





const App = () => {


  return (

       <Routes/>
     
    
  );
}

export default App;
