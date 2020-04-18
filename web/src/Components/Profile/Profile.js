import React from 'react'
import NavBar from '../NavBar/NavBar'
import './styles.css'
import { Link } from 'react-router-dom'


function Profile({history}) {


    return (
        <>
        <NavBar/>
        <div className="profile-page">
            
        <div className="profile-container">
        <aside className="profile-side">
        <div className="profile-usr-img">

        </div>
        <h2 className="profile-usr-name">Nome maneiro</h2>
        <div className="profile-side-list">
            <ul className="option-list">
                <li className="option-list-item"><Link className="list-link">Intem1</Link></li>
                <li className="option-list-item"><Link className="list-link">Intem1</Link></li>
                <li className="option-list-item"><Link className="list-link">Intem1</Link></li>
                <li className="option-list-item"><Link className="list-link">Intem1</Link></li>
                <li className="option-list-item"><Link className="list-link">Intem1</Link></li>
                <li className="option-list-item"><Link className="list-link">Intem1</Link></li>
              
            </ul>
        </div>



        </aside>
        <div className="profile-content">
            <h1>meio</h1>
        </div>
            
              
                     
        </div>
        <h1>footer</h1>
        </div>
        </>
    )

}

export default Profile;