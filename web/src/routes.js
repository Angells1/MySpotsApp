import React, {useState, useContext, useReducer, createContext} from 'react';

import { Redirect, Route, BrowserRouter, Switch, Link} from 'react-router-dom';

import Login from './Components/Login/Login'
import Spots from './Components/Spots/Spots'
import Register from './Components/Register/Register';

import Profile from './Components/Profile/Profile'
import ConfigPage from './Components/ConfigPage/ConfigPage'
import ConfigInformation from './Components/ConfigPage/Components/ConfigInformation/ConfigInformation'





 const Routes = ( ) => {




     function PrivateRoute ({ component:Component, ...rest}) {
       
        return (
             <Route
          
             {...rest}
              render = {(props) => 
                localStorage.getItem('token')
                 ? (
                 <Component {...props}/>
              ) : (
                 <Redirect to="/signin"/>
              ) 
             
             }
            
             />



        )
    }


    const PrivateSessions = ({ redirect, component:Component,...rest}) => {
  
        return (
            <Route {...rest}
            render = { (props) => 
                !localStorage.getItem('token') ?
                (<Component {...props} />) :
               (<Redirect to={redirect}/>)
           
            }
           
            />
        )
    }






    return(


       
         <BrowserRouter>
           <Switch>
  
                <Redirect from="/" to="/signin" exact/>  
 
            
               
                <PrivateSessions path="/signin" redirect="/spots" component={Login} />
                <PrivateRoute path="/spots" component={Spots}/>
                <PrivateRoute path="/profile" component={Profile}/>
                <PrivateRoute path="/config" component={ConfigPage}/> 
                <PrivateRoute path="/config/information" component={ConfigInformation}/> 
                  

                <PrivateSessions path="/register" redirect="/spots" component={Register}/>

                </Switch>
         </BrowserRouter>
       

    )
  




}

export default Routes;
