import React from 'react'
import {Switch, BrowserRouter, Route, Redirect} from 'react-router-dom';
import Login from '../Components/Login/Login'
import Register from '../Components/Register/Register';


function AuthRoutes () {

    return (
        <BrowserRouter>
            <Switch>
           
                <Redirect from="/" to="/signin" exact/>  

                <Route path="/signin" component={Login}/>
                <Route path="/register" component={Register}/>
                <Redirect from="*" to="/signin" exact/>  
            </Switch>
        </BrowserRouter>
    )


}


export default AuthRoutes;