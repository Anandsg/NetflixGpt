import React, { useRef, useState } from "react";
import { checkValidateData } from "../utils/validation";

const Login = () => {
    const [isSigninForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    // Form validation
    const handleValidationBtn = () => {
        // console.log(email.current.value);
        // console.log(password.current.value);

        const message = checkValidateData(name.current.value, email.current.value, password.current.value);
        setErrorMessage(message);
    }
    const toggleSigninForm = () => {
        setIsSignInForm(!isSigninForm)
    }
    return (
        <div>
            <div className="brightness-50 absolute">
                <img className="" src="https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/67033404-2df8-42e0-a5a0-4c8288b4da2c/IN-en-20231120-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                    alt="bg" />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="bg-black bg-opacity-70 text-white w-3/12 absolute p-12 my-40 mx-auto right-0 left-0">
                <h1 className="text-xl font-semibold">{isSigninForm ? "Sign In" : "Sign Up"}</h1>
                {!isSigninForm &&
                    <input
                        ref={name}
                        type="text"
                        placeholder="name"
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
                            <p className="text-gray-400 text-sm"> Already registered? </p>
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