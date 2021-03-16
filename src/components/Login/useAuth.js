import React, { createContext, useContext, useEffect, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './../../firebase.config';
import { Redirect, Route } from 'react-router';

firebase.initializeApp(firebaseConfig);

// Context create, use and export 
const AuthContext = createContext()
export const AuthContextProvider = (props) => {
    const auth = Auth()
    return <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)


// Privet route create and export
export const PrivateRouteForLogin = ({ children, ...rest }) => {
    let auth = useAuth();
    return (
        <Route
            {...rest}
            render={({ location }) =>
                auth.user ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/signin",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}

const Auth = () => {

    const [user, setUser] = useState(null)

    const [error, setError] = useState(false)

    const [errMsg, setErrMsg] = useState(null)

    // Filter Users Data
    const getUser = user => {
        const { displayName, email, photoURL } = user;
        return { name: displayName, email, photo: photoURL }
    }


    // Create Account With password
    const signUpWithPass = (name, email, pass) => {
        firebase.auth().createUserWithEmailAndPassword(email, pass)
            .then(res => {
                firebase.auth().currentUser.updateProfile({
                    displayName: name
                }).then(result => {
                    setUser(getUser(res.user))
                    setError(false)
                    setErrMsg(null)
                })
            })
            .catch(err => {
                setUser(null)
                setError(true)
                setErrMsg(err.message)
            });
    }

    // SignIn WIth password
    const signInWIthPass = (email, pass) => {
        firebase.auth().signInWithEmailAndPassword(email, pass)
            .then(res => {
                setUser(getUser(res.user))
                setError(false)
                setErrMsg(null)
            })
            .catch(err => {
                setUser(null)
                setError(true)
                setErrMsg(err.message)
            });
    }

    // LogOut
    const logOut = () => {
        firebase.auth().signOut()
            .then(res => {
                setUser(null)
                setError(false)
                setErrMsg(null)
            })
            .catch(err => {
                setError(true)
                setErrMsg(err.message)
            });
    }

    // Menage Users Account Data
    useEffect(() => {
        firebase.auth().onAuthStateChanged(function (usr) {
            if (usr) {
                const currentUser = getUser(usr)
                setUser(currentUser)
            } else {

            }
        });
    }, [])

    return {
        user,
        error,
        errMsg,
        signUpWithPass,
        signInWIthPass,
        logOut
    }
}