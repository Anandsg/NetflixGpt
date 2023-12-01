import React, { useRef, useState } from "react";
import { checkValidateData } from "../../utils/validation";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile
} from "firebase/auth";
import { auth } from "../../utils/firebase";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { adduser } from "../store/userSlice";
import { BG_URL } from "../../utils/constants";

const Login = () => {
    const [isSigninForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const dispatch = useDispatch();

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    // Form validation
    const handleValidationBtn = () => {
        // console.log(email.current.value);
        // console.log(password.current.value);
        // const nameValue = name.current ? name.current.value : null
        const message = checkValidateData(email.current.value, password.current.value);
        setErrorMessage(message);
        if (message) return;

        if (!isSigninForm) {
            // Sign up logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value

                    }).then(() => {
                        // Profile updated!
                        const { uid, email, displayName } = auth.currentUser;
                        dispatch(adduser({ uid: uid, email: email, displayName: displayName }))
                    }).catch((error) => {
                        setErrorMessage(error.message);
                    });
                    // console.log(user);
                })
                .catch((error) => {
                    // const errorCode = error.code;
                    // const errorMessage = error.message;
                    // setErrorMessage(errorCode + "-" + errorMessage);
                    setErrorMessage("Something went wrong.")
                });
        } else {
            // Sign in logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // console.log(user);
                })
                .catch((error) => {
                    // const errorCode = error.code;
                    // const errorMessage = error.message;
                    // setErrorMessage(errorCode + " - " + errorMessage);
                    setErrorMessage("Please Sign up.")
                });
        }
    };

    const toggleSigninForm = () => {
        setIsSignInForm(!isSigninForm)
    }
    return (
        <div>
            <Header />
            <div className="brightness-50 fixed">
                <img className="h-screen object-cover md:w-screen md:h-screen" src={BG_URL}
                    alt="bg" />
            </div>
            <form onSubmit={(e) => e.preventDefault()}
                className="bg-black bg-opacity-70 text-white w-full md:w-3/12 absolute p-8 md:p-12 my-40 md:mx-auto right-0 left-0">
                <h1 className="text-xl font-semibold">{isSigninForm ? "Sign In" : "Sign Up"}</h1>
                {!isSigninForm &&
                    <input
                        ref={name}
                        type="name"
                        placeholder="Name"
                        className=" p-3 my-2 w-full rounded-md bg-gray-700"
                    />}
                <input
                    ref={email}
                    type="email"
                    placeholder="Email"
                    className=" p-3 my-2 w-full rounded-md bg-gray-700"
                />
                <input
                    ref={password}
                    type="password"
                    placeholder="Password"
                    className=" p-3 my-2 w-full rounded-md bg-gray-700"
                    autoComplete="current-password"
                />
                <p className="text-red-500 text-sm">{errorMessage}</p>
                <button
                    className="bg-red-700 p-2 my-7 w-full rounded-md"
                    onClick={handleValidationBtn}>
                    {isSigninForm ? "Sign In" : "Sign up"}
                </button>
                <div className="flex">
                    <p className="text-gray-400 text-sm">{isSigninForm && "New to Nextflix?"}</p>
                    {(isSigninForm ? <p onClick={toggleSigninForm} className=" text-gray-200 text-sm cursor-pointer px-2 hover:underline">
                        Sign up now.
                    </p> :
                        <div className="flex">
                            <p className="text-gray-400 text-sm"> Already have an account? </p>
                            <p className="text-gray-200 text-sm cursor-pointer px-2 hover:underline"
                                onClick={toggleSigninForm}>
                                Sign In now.
                            </p>
                        </div>)}
                </div>
            </form>
        </div>
    );
};

export default Login;