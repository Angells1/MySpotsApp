import React, {useContext} from 'react';

import AuthContext from '../contexts/auth'

import AuthRoutes from './AuthRoutes';
import PrivateRoutes from './PrivateRoutes'
import api from '../services/api'

const Routes: React.FC = () => {


    const token = localStorage.getItem('token');


    async function tokenValidation(token:String | null){
     
        const response = await api.get('/api/auth/token', {

            headers: {
                'Authorization': 'Bearer ' + token
            }
    
           })

           console.log(response.data.sucess)
          return response.data.sucess
    }
   
    //tokenValidation(token);

    if(!token) return <AuthRoutes/>

    return tokenValidation(token) ? <PrivateRoutes/> : <AuthRoutes/>

};

export default Routes;