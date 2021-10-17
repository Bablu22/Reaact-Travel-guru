import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './Login.css'
import facebook from '../../images/fb.png'
import google from '../../images/google.png'
import useAuth from '../../hooks/useAuth';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
const LogIn = () => {

    const { googleSignIn, emailPassWordLogIn, facebookSignIn } = useAuth();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const history = useHistory()
    const location = useLocation()

    const googleLogIn = () => {
        googleSignIn()
            .then(result => {
                history.push(location.state?.from || "/")
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const facebookLogIn = () => {
        facebookSignIn()
            .then(result => {
                history.push(location.state?.from || "/")
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const emailLogin = (email, password) => {
        emailPassWordLogIn(email, password)
            .then(result => {
                history.push(location.state?.from || "/")
            })
            .catch(error => {
                setError('Invalid email/password')
            })
    }

    const resetPassword = () => {
        const auth = getAuth();
        sendPasswordResetEmail(auth, email)
            .then(() => {
                // Password reset email sent!
                // ..
            })
            .catch((error) => {

            });
    }

    const emailInput = e => {
        setEmail(e.target.value)

    }
    const passwordInput = e => {
        setPassword(e.target.value)

    }




    return (
        <div>
            <div className="container mx-auto p-5">
                <div className="border border-gray-200 p-9 italic sm:w-1/3 mx-auto mt-8 shadow-md">
                    <h4 className="text-2xl font-bold text-center mb-4">Login</h4>
                    <h6 className="text-red-600 font-bold text-center mb-4">{error}</h6>

                    <input onBlur={emailInput} className="border-b  w-full my-3 py-2 focus:outline-none placeholder-gray-600 border-gray-300" type="email" required placeholder="Username or Email" /> <br />

                    <input onBlur={passwordInput} className="border-b w-full font-bol py-2 focus:outline-none placeholder-gray-600 border-gray-300" type="password" required placeholder="Password" />
                    <div className="flex justify-between mt-4 items-center		">
                        <div>
                            <input className="font-bold" type="checkbox" name="" id="" /> Remember Me
                        </div>
                        <div>
                            <Link onClick={resetPassword} to="/login" className="text-yellow-500 border-b border-yellow-300		">Forgot Password</Link>
                        </div>
                    </div>
                    <button onClick={() => { emailLogin(email, password) }} className="w-full bg-yellow-500 py-2 mt-5 font-medium">Login</button>
                    <div className="flex justify-center items-center justify-evenly	 mt-4">
                        <span>Did't have an account ? </span>
                        <Link to="/signup" className="text-yellow-500 border-b border-yellow-300		">Create an account</Link>
                    </div>
                    {/* SIgn in method */}

                    <p className="text-center mt-4 line">Or</p>
                    <div>
                        <div className="flex my-3 items-center justify-evenly border border-gray-300 rounded-2xl p-2 ">
                            <button onClick={facebookLogIn}><img src={facebook} alt="" /></button>
                            <h6 className="">Continue with Facebook</h6>
                        </div>
                        <div className="flex justify-evenly items-center border border-gray-300 rounded-2xl p-2">
                            <button onClick={googleLogIn} ><img src={google} alt="" /></button>
                            <h6 className="">Continue with Google</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;