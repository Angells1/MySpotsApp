import React, {createContext, useState} from 'react';
import api from '../services/api';

// const AuthContext = createContext({isAuthenticated:true});

// export default AuthContext;

interface AuthContextData {
    isAuthenticated: boolean;
    user: object | null;
    signIn(usersignin:object): Promise<void>;
    signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {

    const [user, setUser] = useState<Object | null>(null);
    
    async function signIn(usersignin:object) {
       
       const response = await api.post('/api/auth/signin', usersignin)
        console.log(response.data)
        setUser(response.data.usrinfo);
        localStorage.setItem("token", response.data.usrinfo.token)
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
    }
    
    return (
    <AuthContext.Provider value={{isAuthenticated: !!user, user, signIn, signOut}}>
        {children}
    </AuthContext.Provider>
)

    }

export default AuthContext;