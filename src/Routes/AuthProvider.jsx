/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";


export const AuthContext =createContext({})
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
  
    const signIn = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
    };
  
    const createUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
    };
    useEffect(()=>{
      const unSubscribe=   onAuthStateChanged(auth,currentUser=>{
             console.log('user in the auth state change',currentUser);
             setUser(currentUser)
             setLoading(false)
         })
         return ()=> unSubscribe()
     },[])
     const googleProvider =new GoogleAuthProvider()
     const googleLog=async()=>{
     return  signInWithPopup(auth,googleProvider)
         .catch(error=>console.log(error))
     }
     const logOut =()=>{
      setLoading(true)
    return  signOut(auth)
  }



   const authInfo={
    user,
    loading,
    signIn,
    createUser,
    googleLog,
    logOut,
    setLoading
   }
    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;