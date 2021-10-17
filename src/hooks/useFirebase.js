import initializeAuthentication from "../Firebase/firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, FacebookAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";



initializeAuthentication()

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [isLooding, setIsLooding] = useState(true)
    const auth = getAuth()

    const googleProvider = new GoogleAuthProvider()

    const googleSignIn = () => {
        setIsLooding(true)
        return signInWithPopup(auth, googleProvider)

    }
    const facebookProvider = new FacebookAuthProvider()

    const facebookSignIn = () => {
        return signInWithPopup(auth, facebookProvider)
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLooding(false)
        })
    }, [])

    const logOut = () => {
        setIsLooding(true)
        signOut(auth)
            .then(result => { })
            .finally(() => {
                setIsLooding(false)
            })
    }



    // emil and password
    const emailAndPassword = (email, password,) => {
        return createUserWithEmailAndPassword(auth, email, password)


    }

    const emailPassWordLogIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)

    }




    return {
        user,
        googleSignIn,
        logOut,
        isLooding,
        emailAndPassword,
        emailPassWordLogIn,
        facebookSignIn
    }


}

export default useFirebase;