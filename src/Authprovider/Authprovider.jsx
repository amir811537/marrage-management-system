import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";


export const AuthContext = createContext(null);
const auth = getAuth(app);
const Authprovider = ({ children }) => {

const [user,Setuser]=useState(null);

const createUser =(email,password)=>{
   return createUserWithEmailAndPassword(auth,email,password);
}

const logout =()=>{
    return signOut(auth);
}

useEffect(()=>{
  const unSubcribe= onAuthStateChanged(auth,currentUser=>{
        console.log('User Auth is changing',currentUser)
        Setuser(currentUser);
        return()=>{
            unSubcribe();
        }
    })
},[])


  const googlesignin = () => {
    console.log("hello");
  };
const signin =(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
}
  const Authinfo = {
    user,createUser,logout,signin
  };

  return <AuthContext.Provider value={Authinfo}>
  {children}
  </AuthContext.Provider>;
};

export default Authprovider;
