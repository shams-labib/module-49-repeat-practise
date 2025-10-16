 import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/_firebase.init';
 
 const AuthProvider = ({children}) => {


    const createUser = (email, password)=>{
       return createUserWithEmailAndPassword(auth, email, password )
    }

    const signIn = (email, password)=>{
          return signInWithEmailAndPassword(auth, email, password)
    }


    const appInfo = {
        createUser,
        signIn,

    }

    return (
       <AuthContext.Provider value={appInfo}>
           {
            children
           }
       </AuthContext.Provider>
    );
 };
 
 export default AuthProvider;