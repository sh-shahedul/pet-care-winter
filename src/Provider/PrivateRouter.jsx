import React, { use } from 'react';
import { AuthContext } from './AuthContex';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Components/Loading/Loading';

const PrivateRouter = ({children}) => {
  const {user,loading}=use(AuthContext)

  const location = useLocation()
  console.log(location)


  if(loading){
    return  <Loading></Loading>
  }
   
  if(user){
     return children
  }
  return  <Navigate state={location.pathname} to='/login'></Navigate>;
};

export default PrivateRouter;