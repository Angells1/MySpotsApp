import React, {useContext, useState} from 'react';
import AuthApi from '../../services/auth'
import { Link, useHistory, Redirect } from 'react-router-dom'
import api from '../../services/api'
import './styles.css'
import SideColor from '../SideColor/SideColor'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import AuthContext from '../../contexts/auth'



 const Login = ( { history } ) => {



  const {isAuthenticated, signIn} = useContext(AuthContext); 

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    async function handleLogin(e) {
        e.preventDefault();

        if(!email && !pass){
          toast.error("Prencha todos os campos corretamente !", {
            position: toast.POSITION.TOP_RIGHT
          });

        }else {
   
            const user = {

              email,
              pass
            }

            
            signIn(user, toast)
            console.log(isAuthenticated);
            // if(!isAuthenticated){
              
            //   return store.addNotification(Notifications.Passnotif);
            // }

            
         
             
            
            
        
        }


    }

    return(
        <>

   

        <ToastContainer />
      
        <div className="login-form">

        <SideColor/>
            

        <form onSubmit={handleLogin}>

  
            <input 
            type="email" 
            id="email"
            className="input-global"
            value={email}
            placeholder="Email"
            onChange={ e => setEmail(e.target.value) }
            />
        
            <input 
            type="password" 
            id="password"
            className="input-global"
            placeholder="Password"
            value={pass}
            onChange={ e => setPass(e.target.value) }
            
            />
            <input className="btn-global" type="submit" value="Entrar"/>
            <span>Não possui cadastro ? <Link className="login-cadlink" to="/register">Faça sua conta</Link></span>
        </form>
      
       </div>
       
        </>
    )

}

export default Login;