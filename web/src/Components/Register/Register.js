import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import './styles.css';


import api from '../../services/api'

import ReactNotification from 'react-notifications-component'
import { store } from 'react-notifications-component';
import * as Notifications from '../Notifications/notifications'

import { Input, Form, Scope } from "@rocketseat/unform";


import SideColor from '../SideColor/SideColor'

import * as Yup from 'yup';





function Register() {

      
       
       
   



    const history = useHistory();
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [passConfirmation, setPassconfirmation] = useState('');
    const [username, setUsername] = useState('');
    const [usrstatus, setUsrstatus] = useState('');
    const [emailStatus, setEmailstatus] = useState('');
    const [passStatus, setPassstatus] = useState('')


 
    const schema = Yup.object().shape({
      firstname: Yup.string()
        .min(3, "Too short")
        .required("First name is required."),
      lastname: Yup.string()
        .min(3, "Too short")
        .required("Last name is required."),
      email: Yup.string().email("Is this an email?"),
      password: Yup.string().min(6).required(),
      username: Yup.string()
        .min(4, "Too short")
        .required("Username is required."),
      confirmPassword: Yup
      .string()
      .required()
      .label('Confirm password')
      .test('passwords-match', 'Passwords doesnt match', function(value) {
        return this.parent.password === value;
      }),
      
    });




    



    async function createUser() {

      setEmailstatus('')
      setUsrstatus('')

      console.log('pinto')
        // e.preventDefault();
      
         await api.post('/api/validation', {username, email}).catch( (err) =>  {
             if(err.response.status !== 200) {
            
                 console.log(err.response.data.message)
                // return setUsrstatus(err.response.data.message)
      
             }

            

         })

            const user = {
                firstname,
                lastname,
                email, 
                pass,
                passConfirmation,
                username
            }
    
             await api.post('/api/sessions', user).then(response => {

                console.log(response)
                store.addNotification(Notifications.sucessCad);
                
                setTimeout(() => { 
                    history.push('/')
                 }, 1500);
        
            }, err => {
                
                
               
                console.log(err) 


            })
       
       
            


    }


    return (
        <>


        <ReactNotification />

        <div className="cad-form">

        <SideColor/>
    
        <section className="cad-side">

        
        <h1>Cadastre-se</h1>


      
       

        <Form onSubmit={createUser} schema={schema}>
            
          
            
            <div className="name-inputs">
            <Input 
            type="text" 
            className="input-global"
            id="firstname"
            name="firstname"
            placeholder="Nome"
            style={{marginRight: '4px'}}
            value={firstname}
            onChange={e => setFirstname(e.target.value)}
            required
            />
            <Input 
            type="text" 
            className="input-global"
            id="lastname"
            name="lastname"
            style={{marginLeft: '4px'}}
            placeholder="Sobrenome"
            value={lastname}
            onChange={e => setLastname(e.target.value)}
            required
            />
            </div>
            
          
            
            <Input 
            type="email" 
            className="input-global"
            id="emailcad"
            name="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            />
            <label className="emailLbl">{emailStatus}</label>
            <Input 
            type="password" 
            className="input-global"
            id="passcad"
            name="password"
            placeholder="Password"
            value={pass}
            onChange={e => setPass(e.target.value)}
            required
            />
            <Input 
            type="password" 
            className="input-global"
            id="passconfimation"
            name="confirmPassword"
            placeholder="Password confirmation"
            value={passConfirmation}
            onChange={e => setPassconfirmation(e.target.value)}
            required
            />
            <label className="passlbl">{passStatus}</label>
            <Input 
            type="text" 
            className="input-global"
            id="username"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value) }
            required
            />
            <label className="usernameLbl">{usrstatus}</label>
            <input type="submit" className="btn-global" value="Cadastrar"/>
            {/* <Link to="/">Login</Link> */}
        </Form>
        
        </section>
      </div>
        </>
    ); 
}

export default Register;