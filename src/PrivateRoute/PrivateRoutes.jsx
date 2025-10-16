import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoutes = ({children}) => {

    const location = useLocation();
    console.log(location)


    const {user, loading} = use(AuthContext);

    if(loading){
        return (
            <div className='flex items-center justify-center'>
                <span className="loading loading-spinner text-accent"></span>
            </div>
        )
    } else if (user){
        return children
    }

    return <Navigate state={location?.pathname} to={'/login'}></Navigate>
};

export default PrivateRoutes;