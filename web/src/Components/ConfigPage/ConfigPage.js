import React, {useContext} from 'react'
import NavBar from '../NavBar/NavBar'
import './styles.css'
import { Link, Route, BrowserRouter, Switch, } from 'react-router-dom'
import ConfigInformation from '../ConfigPage/Components/ConfigInformation/ConfigInformation'

import AuthContext from '../../contexts/auth'
import ConfigConta from './Components/Conta/Conta'

function Profile({history}) {

    const {user} = useContext(AuthContext); 

    return (
        <>
        {/* <NavBar/> */}
        <div className="config-page">
            
        <div className="config-container">
        <aside className="config-side">
        <Link to="/config">
        <div  className="config-usr-img">
            
        </div>
        </Link>
        <h2 className="config-usr-name">{`${user.firstname} ${user.lastname}`}</h2>
        
        <div className="config-side-list">
            <ul className="option-list">
                <li className="option-list-item"><Link to="/config/information" className="list-link">Informações</Link></li>
                <li className="option-list-item"><Link to="/config/Account" className="list-link">Conta</Link></li>
                <li className="option-list-item"><Link className="list-link">Intem1</Link></li>
                <li className="option-list-item"><Link className="list-link">Intem1</Link></li>
                <li className="option-list-item"><Link className="list-link">Intem1</Link></li>
                <li className="option-list-item"><Link className="list-link">Intem1</Link></li>
              
            </ul>
        </div>



        </aside>
        <div className="config-content">
        
            <Switch>

                
            <Route path="/config/information" component={ConfigInformation}/> 
            <Route path="/config/Account" component={ConfigConta}/>
            
            </Switch>

         
      
        </div>
            
              
                     
        </div>
   
        </div>
        </>
    )

}

export default Profile;