import React, { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext();

import app from '../firebase/firebase.config';
import {  createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useNavigate } from 'react-router-dom';


const auth = getAuth(app);


const AuthProvider = ({children}) => {



    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    

    console.log(loading, user)


    // create provider

    const provider = new GoogleAuthProvider();


    // create new user

    const createnewUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);

    }

    // sign in user

    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);

    };


    // log out
    const Logout = () =>{
        setLoading(true);
        return signOut(auth);

    }

    // sign in with google

    const SignInwithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth, provider);

    }

    // update user profile

    const updateUserProfile = (updatedData) =>{
        
        return updateProfile(auth.currentUser, updatedData);

    }





    const authInfo = {
        user,
        createnewUser,
        userLogin,
        Logout,
        SignInwithGoogle,
        loading,
        setUser,
        updateUserProfile,
        
        
    }


    useEffect(() => {

        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log(currentUser)
            setLoading(false);
        })

        return () =>{
            unSubscribe();
        }
    },[]);



    return (
       <AuthContext.Provider value={authInfo} >{children}</AuthContext.Provider>
    );
};

export default AuthProvider;