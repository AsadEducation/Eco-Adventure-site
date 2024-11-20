import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../FireBase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
        // console.log('recieved ', email, password);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logoutUser = () => {
        return signOut(auth);
    }

    const profileUpdate = (info) => {
        // console.log(info);
        return updateProfile(auth.currentUser, info);
    }

    const loginWithGoogle = () => {
        return signInWithPopup(auth,googleProvider);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (current) => {
            setUser(current);
            setLoading(false);
        })

        return () => {
            unsubscribe();
        }
    }, [])



    const authInfo = {
        user,
        setUser,
        createNewUser,
        logoutUser,
        loginUser,
        loading,
        setLoading,
        profileUpdate,
        loginWithGoogle,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;