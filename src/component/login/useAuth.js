import React, { useContext, useEffect } from 'react'
import * as firebase from "firebase/app";
import "firebase/auth"
import firebaseConfig from '../firebase.config';
import { useState, createContext } from "react";

firebase.initializeApp(firebaseConfig);
const AuthContext = createContext(); 


 export const useAuth = () => useContext(AuthContext);

 export const AuthContextProvider = (props) => {
    const auth = Auth();
    const something = <AuthContext.Provider value = {auth}>{props.children}</AuthContext.Provider>;
    return something;
}
 const getUser = user =>{
 
    const { displayName, email,photoURL} = user ;
    return{ name: displayName, email, photo: photoURL};
 }


const Auth = () =>{
    const[ user, setUser] = useState(null);
    // console.log(user, setUser);
    
    const signInWithGoogle = () =>{

        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(res=>{
            console.log(res);
            const signInUser = getUser(res.user);
            setUser(signInUser);
            return res.user;
        })
        .catch(err=>{
            console.log(err);
            setUser(null);
            return err.message;
        })
    }
    const signOut = () => {
        firebase.auth().signOut().then(function() {
            setUser(null)
          })
          .catch(function(error) {
            
          });
    }
    useEffect( ()=>{
        firebase.auth().onAuthStateChanged(function(usr) {
            if (usr) {
                const currentUser = getUser(usr);
                setUser(currentUser);
              console.log(user);
            } else {
              // No user is signed in.
            }
          },[]);
    })

    return {
        user,
        signInWithGoogle, 
        signOut
    }

}

export default Auth; 