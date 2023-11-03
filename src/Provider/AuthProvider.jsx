import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';
import axios from 'axios';

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

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          const userEmail = currentUser?.email || user?.email;
          const loggedUser = { email: userEmail };
          setUser(currentUser);
          console.log("current user", currentUser);
          setLoading(false);
          // if user exists issue a token
          if (currentUser) {
            axios
              .post("http://localhost:5000/jwt", loggedUser, {
                withCredentials: true,
              })
              .then((res) => {
                console.log("token response", res.data);
              });
          } else {
            axios
              .post("http://localhost:5000/logout", loggedUser, {
                withCredentials: true,
              })
              .then((res) => {
                console.log(res.data);
              });
          }
        });
        return () => {
          return unsubscribe();
        };
      }, [user?.email]);

    const authInfo = {
        user,
        createUser,
        signIn,
        loading,
        logOut
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