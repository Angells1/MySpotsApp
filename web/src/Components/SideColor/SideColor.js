import React from 'react'
import './styles.css'
import enterImg from '../../assets/undraw_Login_v483.svg'


function SideColor() {

    return(

        <aside className="sidecolor">
        
               <img src={enterImg} width="350px" alt=""/>
               <h1 className="title-login">Crie seus Anúncios com facilidade em uma
               plataforma amigável.</h1>
        </aside>

    )

}

export default SideColor;