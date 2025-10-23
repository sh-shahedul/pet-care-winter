import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContex';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged,  sendPasswordResetEmail,  signInWithEmailAndPassword,  signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/firebase.init';

const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {
    const[user,setuser]=useState(null)
     const[loading,setLoading]=useState(true)

    //   email password 
     const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
     }
     const signinUser =(email,password)=>{
       setLoading(true)
     return signInWithEmailAndPassword(auth,email,password)
  }
     const googleUser = ()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
     }
     const forgotUser = (email)=>{
       setLoading(true)
       return  sendPasswordResetEmail(auth,email)
   }
     const updateProfileuser = (updateData)=>{
        setLoading(true)
    return updateProfile(auth.currentUser, updateData)
  }


     const signOutUser =()=>{
        return signOut(auth)
     }

      
  useEffect(()=>{
    const unSubscribe= onAuthStateChanged(auth, (currentuser)=>{
        console.log('current ',currentuser)
        setuser(currentuser)
        setLoading(false)
    })
    return()=>{
        unSubscribe()
    }



  },[])



     const userInfo ={
        updateProfileuser,
        forgotUser,
        signinUser,
        googleUser,
        createUser,
        signOutUser,
        setuser,
        user,
        loading,
     }

    return (
        <div>
           <AuthContext  value={userInfo}>
            {children}
            </AuthContext> 
        </div>
    );
};

export default AuthProvider;