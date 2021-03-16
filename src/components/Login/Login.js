import React, { useEffect, useState } from 'react';
import img from './../../images/Group 140.png'
import { useAuth } from './useAuth';

const Login = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const auth = useAuth()

    const { user, signUpWithPass, signInWIthPass } = auth

    document.title = "Login - Asrafuls Doctors Portal"

    const [loginOk, setLoginOk] = useState(true)

    const [forgotOk, setForgotOk] = useState(false)

    const handelSignUp = (e) => {
        signUpWithPass(name, email, password)
        e.preventDefault()
        e.target.reset()
    }

    const handelSignIn = (e) => {
        signInWIthPass(email, password)
        e.preventDefault()
        e.target.reset()
    }

    useEffect(() => {
        if (user) {
            window.location.pathname = "/"
        } else {
            console.log(user)
        }
    })

    return (
        <div className="loginPage">
            <div className="container">
                <div className="row">
                    {user ?
                        <div className="col-5">

                        </div> :
                        <div className="col-5 loginPageRight">
                            {
                                forgotOk ?
                                    <form className="loginForm signInForm">
                                        < br />
                                        <h5 className="text-center">Forget Your Password</h5>
                                        <br /><br /><br />
                                        <label htmlFor="signInEmail">Your Email</label><br />
                                        <input id="signInEmail" type="email" className="loginFormInput" required /><br />
                                        <input className="btn btn-info text-light loginFormSubmitBtn" type="submit" value="Send Link In My Email" />
                                    </form>
                                    :
                                    <>
                                        {
                                            loginOk ?
                                                <form onSubmit={handelSignIn} className="loginForm signInForm">
                                                    < br />
                                                    <h5 className="text-center">Login</h5>
                                                    <br /><br /><br />
                                                    <label htmlFor="signInEmail">Email</label><br />
                                                    <input onChange={(e) => setEmail(e.target.value)} id="signInEmail" type="email" className="loginFormInput" required /><br />
                                                    <label htmlFor="signInPassword">Password</label><br />
                                                    <input onChange={(e) => setPassword(e.target.value)} id="signInPassword" type="password" className="loginFormInput" /><br />
                                                    <span className="text-danger forgotBtn" onClick={() => setForgotOk(true)}>Forgot your password?</span><br /><br />
                                                    <input className="btn btn-info text-light loginFormSubmitBtn" type="submit" value="Sign In" />
                                    Don't have an account? <button onClick={() => setLoginOk(false)} className="btn text-center btn-sm">Create Account</button>
                                                </form>
                                                :
                                                <form onSubmit={handelSignUp} className="loginForm signUpForm">
                                                    <br />
                                                    <h5 className="text-center">Create Account</h5>
                                                    <br /><br /><br />
                                                    <label htmlFor="signUpName">Name</label><br />
                                                    <input onChange={(e) => setName(e.target.value)} id="signUpName" type="text" className="loginFormInput" required /><br />
                                                    <label htmlFor="signUpEmail">Email</label><br />
                                                    <input onChange={(e) => setEmail(e.target.value)} id="signUpEmail" type="email" className="loginFormInput" required /><br />
                                                    <label htmlFor="signUpPassword">Password</label><br />
                                                    <input onChange={(e) => setPassword(e.target.value)} id="signUpPassword" type="password" className="loginFormInput" /><br />
                                                    <input className="btn btn-info text-light loginFormSubmitBtn" type="submit" value="Sign Up" />
                                    Have an account? <button onClick={() => setLoginOk(true)} className="btn text-center btn-sm">Login</button>
                                                </form>

                                        }
                                    </>
                            }
                        </div>
                    }

                    <div className="col-7">
                        <img style={{ marginTop: "100px" }} src={img} alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Login;