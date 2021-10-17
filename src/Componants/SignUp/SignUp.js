import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import '../LogIn/Login.css'

import { useState } from 'react/cjs/react.development';
import useAuth from '../../hooks/useAuth';
import { getAuth, updateProfile } from '@firebase/auth';
const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const { emailAndPassword } = useAuth();
    const [exist, setExist] = useState('')
    const history = useHistory()
    const location = useLocation()
    const emailInput = e => {
        setEmail(e.target.value)

    }
    const passwordInput = e => {
        setPassword(e.target.value)

    }
    const nameInput = e => {
        setName(e.target.value)

    }
    const auth = getAuth()
    const emailLogIn = (email, password, name) => {
        emailAndPassword(email, password, name)
            .then(result => {
                history.push(location.state?.from || "/")
            })
            .catch(error => {
                if (error.message === "Firebase: Error (auth/invalid-email).") {

                    setExist("Please fill all the input")
                }
                if (error.message === "Firebase: Error (auth/internal-error).") {

                    setExist('Please Input Valid Email')
                }
                if (password === '') {
                    setExist('Please fill password')
                }
                if (error.message === "Firebase: Password should be at least 6 characters (auth/weak-password).") {

                    setExist('Password should be at least 6 characters')
                }
                if (error.message === "Firebase: Error (auth/email-already-in-use).") {

                    setExist('email-already-in-use')
                }
                else {

                }

            })
    }

    updateProfile(auth.currentUser, {
        displayName: name, photoURL: ""
    }).then(() => {
        // Profile updated!
        // ...
    }).catch((error) => {
        // An error occurred
        // ...
    });
    return (
        <div>

            <div className="container mx-auto p-5">
                <div className="border border-gray-200 p-9 italic sm:w-1/3 mx-auto mt-20 shadow-md">
                    <h4 className="text-2xl font-bold text-center mb-4">Create an account</h4>
                    <h6 className="text-danger-600 font-bold text-center mb-4">{exist}</h6>

                    <input onBlur={nameInput} className="border-b  w-full py-2 focus:outline-none placeholder-gray-600 border-gray-300" type="text" placeholder="Your Name" /> <br />

                    <input onBlur={emailInput} className="border-b  w-full my-2 py-2 focus:outline-none placeholder-gray-600 border-gray-300" type="email" required placeholder="Username or Email" /> <br />

                    <input onBlur={passwordInput} className="border-b my-2 w-full font-bol py-2 focus:outline-none placeholder-gray-600 border-gray-300" type="password" required placeholder="Password" />
                    <input onBlur={passwordInput} className="border-b w-full font-bol py-2 focus:outline-none placeholder-gray-600 border-gray-300" type="password" required placeholder="Confirm Password" />

                    <button onClick={() => emailLogIn(email, password, name
                    )} className="w-full bg-yellow-500 py-2 mt-5 font-medium">Create an account</button>
                    <div className="flex justify-center items-center  mt-4">
                        <span>Already have an account ? </span>
                        <Link to="/login" className="text-yellow-500 border-b border-yellow-300 ml-3">Login</Link>
                    </div>
                    {/* SIgn in method */}


                </div>


            </div>

        </div>
    );

};

export default SignUp;