import React, {useContext, useState} from 'react';
import AuthApi from '../../services/auth'
import { Link, useHistory, Redirect } from 'react-router-dom'
import api from '../../services/api'
import './styles.css'
import SideColor from '../SideColor/SideColor'

import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component';




 const Login = ( {history} ) => {

 
   

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    


 
    const Passnotif = {
        title: "Error!",
            message: "Email ou Senha Inválidos !",
            type: "danger",
            insert: "top",
            container: "top-right",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
              duration: 3000,
              onScreen: true
            }
      };
  
      const Emptynotif = {
        title: "Error!",
        message: "Prencha os Campos corretamente !",
        type: "warning",
        insert: "top",
        container: "top-right",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: {
          duration: 3000,
          onScreen: true
        }
      };

      /*const sucessLogin = {
        title: "Sucess!",
        message: "Login realizado com sucesso!",
        type: "sucess",
        insert: "bottom",
        container: "bottom-left",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: {
          duration: 100,
          onScreen: true
        }
      };*/


    async function handleLogin(e) {
        e.preventDefault();

        if(!email && !pass){
            store.addNotification(Emptynotif);

        }else {
   
            const user = {

              email,
              pass
            }
       
           // const response = await api.post('/sessions', user);
    
            await api.post('/api/auth/signin', user).then(response =>{
   
              localStorage.setItem('firstname', response.data.usrinfo.firstname)
              localStorage.setItem('lastname', response.data.usrinfo.lastname)
              localStorage.setItem("id", response.data.usrinfo.id)
              localStorage.setItem("token", response.data.usrinfo.token)
              
              history.push('/spots')
               
            }, (err) => {
                console.log(err)
                store.addNotification(Passnotif);
            });
           
            /*if(response.data.token){
                localStorage.setItem('authToken', response.data.token)
               
        
                   history.push('/spots')
          
            } */
  
        
          
        }



        //console.log(response.data.token)
       // localStorage.setItem('token', response.data.token)
    }

    return(
        <>

   

        <ReactNotification />
      
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