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
           if(!response.data.sucess){
               localStorage.clear();
               window.location.reload();
               return false;
           }
           
           return true;
    }
   
    //tokenValidation(token);

    if(!token || !tokenValidation(token)) return <AuthRoutes/>
    
    else return <PrivateRoutes/>
    
  
};

export default Routes;