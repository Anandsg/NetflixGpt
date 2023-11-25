import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { adduser, removeUser } from "../utils/userSlice";

const Header = () => {

    const dispatch = useDispatch();

    const user = useSelector((store) => store.user);
    const navigate = useNavigate();
    const handleSignOut = () => {
        signOut(auth).then(() => {
        }).catch((error) => {
            // An error happened.
            navigate("/error")
        });
    }
    // using fire base API to store all the values into store
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName } = user;
                dispatch(adduser({ uid: uid, email: email, displayName: displayName }))
                navigate("/browse");
            } else {
                // User is signed out
                dispatch(removeUser());
                navigate("/");
            }
        });
    }, [])

    return (
        <div className="absolute top-1 left-6 z-10 flex justify-between w-full px-8 mx-auto">
            <img
                className="w-52"
                src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                alt="logo"
            />
            {user && <div className="flex p-4 m-2">
                <img
                    className="w-8 h-9 "
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ3SFVmXoYNHl2D22fjIEAwMuEqrbDYiUUwsWi6-K0AEnh9QZzAhgaOayZ6hFG4Eh_1m4&usqp=CAU"
                    alt="usericon"
                />
                <button className="bg-violet-500 font-bold text-white text-sm rounded-lg px-4 m-2 my-0"
                    onClick={handleSignOut}>
                    Sign out
                </button>
            </div>}
        </div>
    );
};

export default Header;
