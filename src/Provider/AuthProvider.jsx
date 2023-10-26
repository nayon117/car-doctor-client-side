import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
     
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(() => {
      const unSubscribe =  onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser)
          setLoading(false)
      })
        return () => {
            return unSubscribe()
        }
    },[])

    const authInfo = {
        user,
        createUser,
        signIn,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children:PropTypes.node
};

export default AuthProvider;