import React, {useContext, useState} from 'react';
import AuthApi from '../../services/auth'
import { Link, useHistory, Redirect } from 'react-router-dom'
import api from '../../services/api'
import './styles.css'
import SideColor from '../SideColor/SideColor'
import { store } from 'react-notifications-component';
import ReactNotification from 'react-notifications-component'
import * as Notifications from '../Notifications/notifications'



import AuthContext from '../../contexts/auth'



 const Login = ( {history} ) => {

 

  const {isAuthenticated, signIn} = useContext(AuthContext); 

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    
    console.log(isAuthenticated)




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
            store.addNotification(Notifications.Emptynotif);

        }else {
   
            const user = {

              email,
              pass
            }


            signIn(user)
       
          //  const response = await api.post('/sessions', user);
    
            // await api.post('/api/auth/signin', user).then(response =>{
   
            //   localStorage.setItem('firstname', response.data.usrinfo.firstname)
            //   localStorage.setItem('lastname', response.data.usrinfo.lastname)
            //   localStorage.setItem("id", response.data.usrinfo.id)
            //   localStorage.setItem("token", response.data.usrinfo.token)
              
            //   history.push('/spots')
               
            // }, (err) => {
            //     console.log(err)
            //     store.addNotification(Notifications.Passnotif);
            // });



        }


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