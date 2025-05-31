import React, { useContext } from 'react';
import { AuthContext } from '../Utilities/AuthProvider/AuthContext';
import Loading from '../Pages/Loading';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {user,loading} = useContext(AuthContext);
    if(loading) {
        return <Loading></Loading>
    }
  if(user) {
    return children
  }
  else{
    <Navigate to={'/login'} state={location.pathname} replace></Navigate>
  }
 
};

export default PrivateRoute;