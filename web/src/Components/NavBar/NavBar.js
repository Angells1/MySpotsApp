import React, {useContext, useState, useEffect} from 'react';
import '../NavBar/styles.css'
import {Link, useHistory, Redirect, withRouter} from 'react-router-dom'
import { FiPower } from 'react-icons/fi';
import api from '../../services/api'

import AuthContext from '../../contexts/auth'

function NavBar({history, props}){

    const [showMenu, setShowmenu] = useState(false)
    const [avatarImg, setAvatarImg] = useState();
    const spotsClass = history.location.pathname === '/spots' ? 'active' : ''
    const profileClass = history.location.pathname === '/profile' ? 'active' : ''
    const configClass = history.location.pathname === '/config' ? 'active' : ''
    const {user} = useContext(AuthContext); 
    console.log(history.location.pathname)
    
    async function avatarLoad() {
    if(!localStorage.getItem('user_info')) return
    const user = localStorage.getItem('user_info')
    const {id} = JSON.parse(user);
       
        console.log(id);
    

        const token = localStorage.getItem('token')
       const response = await api.post('/api/blob/avatar', {id}, {
      
        headers: {
            'Authorization': token
        }

       })

       setAvatarImg(response.data.avatarurl)
        
    }


    useEffect(
         () => {
          
            avatarLoad();
        },
        [],
      );



    function handleLogout(e) {
        e.preventDefault()
        if(localStorage.getItem('token')){
            localStorage.clear()
        }
    
       return window.location.reload();

    }

    async function handleShowMenu() {
        showMenu ? setShowmenu(false) : 
        setShowmenu(true)
    
    }

    return(
        <>
   
        <nav className="nav-bar"> 
        <img alt="logo"/>
        

        <div className="right-nav">
        <div className="nav-menu">
            <ul>
                <li><Link to="/spots" className={'menu-link '+spotsClass}>Spots</Link></li>
                <li><Link to="/profile" className={'menu-link '+ profileClass}>Perfil</Link></li>
                <li><Link to="config" className={'menu-link '+ configClass}>Configurações</Link></li>
            </ul>
        </div> 
        <div className="nav-usrinfo">
        <div onClick={handleShowMenu} className="nav-usrimg" style={
         { backgroundImage: `url(${avatarImg})`}
        }>
        </div>
        <span className="nav-user-name">
           {user.firstname}
        </span>
        {   
            showMenu ? 
            (<div className="open-menu">
            <section className="menu-header">
            <div className="nav-usrimg entermenu-img" style={
         { backgroundImage: `url(${avatarImg})`}}>
            </div>    
            <span className="nav-usrname-modal">{` ${user.firstname} ${user.lastname}`}</span>
            </section>
           
                <ul>
                    
                    <li><Link to="/profile" className="menu-item">Perfil</Link></li>
                    <li><Link to="config"  className="menu-item">Configurações</Link></li>
                    <li><Link to="#" className="menu-item">Item</Link></li>
                    <li><Link to="#" className="menu-item">Item</Link></li>
                    <li><Link to="#" className="menu-item">Item</Link></li>

                </ul>
               
                <div onClick={handleLogout} className="exit">
                   
                    <FiPower size={22}/>
                   
                    <span>Sair</span></div>
           
                </div>) : <></>
            
        }

        </div>
           </div>
         
        
       
        </nav>
        
        </>
    )

}

export default withRouter(NavBar);