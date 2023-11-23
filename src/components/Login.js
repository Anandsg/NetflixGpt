import React from "react";

const Login = () => {
    return (
        <div>
            <div className="brightness-50 absolute">
                <img className="" src="https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/67033404-2df8-42e0-a5a0-4c8288b4da2c/IN-en-20231120-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                    alt="bg" />
            </div>
            <form className="bg-black text-white w-3/12 h-3/5 absolute p-12 my-40 mx-auto right-0 left-0">
                <h1 className="text-xl font-semibold">Sign In</h1>
                <input
                    type="email"
                    placeholder="Email"
                    className=" p-3 my-4 w-full rounded-md bg-gray-700"
                />
                <input
                    type="password"
                    placeholder="Password"
                    className=" p-3 my-2 w-full rounded-md bg-gray-700"
                />
                <button
                    className="bg-red-700 p-2 my-6 w-full rounded-md">
                    Sign In
                </button>
            </form>
        </div>
    );
};

export default Login;