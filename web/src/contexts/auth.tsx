import React, {createContext, useState} from 'react';
import api from '../services/api';
// const AuthContext = createContext({isAuthenticated:true});

// export default AuthContext;

interface AuthContextData {
    isAuthenticated: boolean;
    user: object | null;
    signIn(usersignin:object, toast:object): any;
    signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {

    const [user, setUser] = useState<Object | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [response, setResponse] = useState<Object | null>(null);

    async function signIn(usersignin:object, toast:any) {
     
       

            await api.post('/api/auth/signin', usersignin)
            .then((resp) => {
                console.log(resp)
                if(resp.data.sucess){
                 setUser(resp.data.usrinfo);
                 localStorage.setItem("token", resp.data.token);
                 localStorage.setItem('user_info', JSON.stringify(resp.data.usrinfo))
                 toast.success("Success Notification !", {
                    position: toast.POSITION.TOP_RIGHT
                  });
            
                 window.location.reload();
                
                return setResponse(resp)
                }else {
                   
                    toast.error("Email ou senha Inválidos !", {
                        position: toast.POSITION.TOP_RIGHT
                      });
                    
                }
     
             
            }, (err) => {
                console.log(err)
                toast.error("Email ou senha Inválidos !", {
                    position: toast.POSITION.TOP_RIGHT
                  });
                return setResponse(err)
            } ).catch((err) => {
                console.log(err)
                toast.error("Email ou senha Inválidos !", {
                    position: toast.POSITION.TOP_RIGHT
                  });
            })

        
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