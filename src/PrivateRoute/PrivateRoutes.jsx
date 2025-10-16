import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';

const PrivateRoutes = ({children}) => {


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

    return (
        <div>
            
        </div>
    );
};

export default PrivateRoutes;