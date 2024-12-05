import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthProvider, { AuthContext } from './AuthProvider';
import Loading from '../components/Body/Loading';

const PrivateRouter = ({children}) => {


    const {user,loading} = useContext(AuthContext);

    if(loading){
        return<Loading></Loading>
    }

    if(user && user?.email){
        return children;
    }

    return <Navigate to={'/auth'}></Navigate>
       

};

export default PrivateRouter;