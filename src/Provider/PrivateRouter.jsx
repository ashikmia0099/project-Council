import React, { useContext } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import AuthProvider, { AuthContext } from './AuthProvider';
import Loading from '../components/Body/Loading';

const PrivateRouter = ({children}) => {


    const {user,loading} = useContext(AuthContext);
    

    const location = useLocation();
    console.log(location);

    


    if(loading){
        return<Loading></Loading>
    }

    if(user && user?.email){
        return children;
    }

    return <Navigate to={'/auth'} state={location.pathname}></Navigate>
       

};

export default PrivateRouter;