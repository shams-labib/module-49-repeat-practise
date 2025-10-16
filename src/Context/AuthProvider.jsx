 import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../Firebase/_firebase.init';
 
 const AuthProvider = ({children}) => {

    const googleProvider = new GoogleAuthProvider();

    const [user, setUser] = useState(null)


    const createUser = (email, password)=>{
       return createUserWithEmailAndPassword(auth, email, password )
    }

    const signIn = (email, password)=>{
          return signInWithEmailAndPassword(auth, email, password)
    }

    const googlePopup = ()=>{
        return  signInWithPopup(auth, googleProvider)
    }

    const signOutUser = ()=>{
        signOut(auth)
    }

    useEffect(()=>{
        const unsubscriber = onAuthStateChanged(auth, (CuurentUser)=>{
            console.log("Current user", CuurentUser)
             setUser(CuurentUser);
        });
        return ()=> unsubscriber()
    },[])


    const appInfo = {
        user,
        signOutUser,
        createUser,
        signIn,
        googlePopup

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