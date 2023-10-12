import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";


export const AuthContext = createContext(null);
const auth = getAuth(app);
const Authprovider = ({ children }) => {

const googleProvider= new GoogleAuthProvider();


  const googleSignin=(value)=>{
   return signInWithPopup(auth,googleProvider);
  }

const signuprg =(email,password)=>{
  return createUserWithEmailAndPassword(auth,email,password);
}

const [user,Setuser]=useState(null);
const [loading ,setLoading]=useState(true);

const createUser =(email,password)=>{
    setLoading(true);
   return createUserWithEmailAndPassword(auth,email,password);
}
const signin =(email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password)
}
const logout =()=>{
    setLoading(true);
    return signOut(auth);
}

useEffect(()=>{
  const unSubcribe= onAuthStateChanged(auth,currentUser=>{
        console.log('User Auth is changing',currentUser)
        
        Setuser(currentUser);
        setLoading(false)

        return()=>{
            unSubcribe();
        }
    })
},[])




  const Authinfo = {
    loading, user,createUser,logout,signin,googleSignin,signuprg
  };

  return <AuthContext.Provider value={Authinfo}>
  {children}
  </AuthContext.Provider>;
};

export default Authprovider;
