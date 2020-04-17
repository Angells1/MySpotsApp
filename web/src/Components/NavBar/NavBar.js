import React, {useContext, useState, useEffect} from 'react';
import '../NavBar/styles.css'
import {Link, useHistory, Redirect} from 'react-router-dom'
import { FiPower } from 'react-icons/fi';
import api from '../../services/api'


function NavBar({history}){

    const [showMenu, setShowmenu] = useState(false)
    const [avatarImg, setAvatarImg] = useState();


    async function avatarLoad() {

        const id = localStorage.getItem('id')
        console.log(id)
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



    function handleLogout() {

        if(localStorage.getItem('token')){
            localStorage.clear()
        }
    
        history.push('/signin')

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
        <div className="nav-usrinfo">
        <div onClick={handleShowMenu} className="nav-usrimg" style={
         { backgroundImage: `url(${avatarImg})`}
        }>
        </div>
        {   
            showMenu ? 
            (<div className="open-menu">
            <section className="menu-header">
            <div className="nav-usrimg entermenu-img" style={
         { backgroundImage: `url(${avatarImg})`}}>
            </div>    
            <span className="nav-usrname">{localStorage.getItem('firstname') + ' ' + localStorage.getItem('lastname')}</span>
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

export default NavBar;