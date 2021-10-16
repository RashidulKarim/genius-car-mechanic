import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from 'react';
import firebaseInit from '../Pages/Login/Firebase/Firebase.init';

firebaseInit()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const logOut = () => {
        signOut(auth)
    }

    useEffect(()=>{
        setIsLoading(true)
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
              setIsLoading(false)
            } else {
              setUser({})
              setIsLoading(false)
            }
          });
    },[])

    return {
        user,
        googleSignIn,
        logOut,
        isLoading
    }
};

export default useFirebase;