import React, {createContext, useState} from 'react';
import api from '../services/api';

// const AuthContext = createContext({isAuthenticated:true});

// export default AuthContext;

interface AuthContextData {
    isAuthenticated: boolean;
    user: object | null;
    signIn(usersignin:object): Promise<any>;
    signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {

    const [user, setUser] = useState<Object | null>(null);
    
    async function signIn(usersignin:object) {
     
        
       await api.post('/api/auth/signin', usersignin)
       .then((resp) => {
           console.log(resp)
           if(resp.data.sucess){
            setUser(resp.data.usrinfo);
            localStorage.setItem("token", resp.data.token);
            localStorage.setItem('user_info', JSON.stringify(resp.data.usrinfo))
            
            window.location.reload();
           }else {
               
           }

        
       }, (err) => {
           return err;
       } ).catch((err) => {
           console.log(err)
       })
       
      
        // .then(response =>{
   
        //     // localStorage.setItem('firstname', response.data.usrinfo.firstname)
        //     // localStorage.setItem('lastname', response.data.usrinfo.lastname)
        //     // localStorage.setItem("id", response.data.usrinfo.id)
        //     // localStorage.setItem("token", response.data.usrinfo.token)
        //     setUser(response.data.usrinfo);
        //     console.log(response)
        //   }, (err) => {
        //     console.log(err.data.status)
        //   })

    }


    async function signOut() {
        setUser(null);
        if(localStorage.getItem('token')){
            localStorage.clear();
        }
     return window.location.reload();
        
    }

    function getUser(): any {
        if(!localStorage.getItem('user_info')){
            return null;
        }

        let user: any | null;
        user = JSON.parse(localStorage.getItem('user_info') || '{}')
        return user;
    }
    
    return (
    <AuthContext.Provider value={{isAuthenticated: !!localStorage.getItem('user_info'), user: getUser(), signIn, signOut}}>
        {children}
    </AuthContext.Provider>
)

    }

export default AuthContext;