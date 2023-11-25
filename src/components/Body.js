import React, { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { adduser, removeUser } from "../utils/userSlice";

const Body = () => {
    const dispatch = useDispatch();

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "browse",
            element: <Browse />
        }
    ])

    // using fire base API to store all the values into store
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName } = user;
                dispatch(adduser({ uid: uid, email: email, displayName: displayName }))
            } else {
                // User is signed out
                dispatch(removeUser());
            }
        });
    }, [])
    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    );
};

export default Body;