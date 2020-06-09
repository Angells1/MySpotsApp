import React, {useEffect, useContext} from 'react'
import NavBar from '../NavBar/NavBar'
import {useHistory, Link} from 'react-router-dom'
import api from '../../services/api'



 function Spots( {history} ) {


  

return (
    <>
 
    <NavBar/>
    <h1>Spots</h1>
 
    </>
);


}

export default Spots;