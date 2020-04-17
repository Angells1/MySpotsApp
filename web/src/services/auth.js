import React, {useState, useContext, createContext} from 'react';


const AuthApi = createContext();

export default AuthApi;

/*export default function Auth() {
    const [authenticated, setAuthenticated] = useState(false);
    
    

    function login() {

        setAuthenticated(true)
ss
    } 

    function logout() {
        setAuthenticated(false)
    }

    function isAuthenticated() {
        
    }

}*/