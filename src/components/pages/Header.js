import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { adduser, removeUser } from "../store/userSlice";
import { LOGO_URL, SUPPORTED_LANGUAGES, USER_ICON } from "../../utils/constants";
import { toggleGptSearchview } from "../store/gptSlice";
import { changeLanguage } from "../store/configSlice";

const Header = () => {
    const dispatch = useDispatch();
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);

    const user = useSelector((store) => store.user);
    const userName = user?.displayName;
    const navigate = useNavigate();
    const showGptSearch = useSelector((store) => store.gpt.showGptSearch)
    const handleSignOut = () => {
        signOut(auth).then(() => {
        }).catch((error) => {
            // An error happened.
            navigate("/error")
        });
    }

    const toggleDropDown = () => {
        setIsDropDownOpen(!isDropDownOpen);
    }
    // using fire base API to store all the values into store
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
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

        // Unsubscribe when component unmount
        return () => unsubscribe();
    }, [])

    const handleGptSearchClick = () => {
        // toggel gpt search
        dispatch(toggleGptSearchview());
    }

    const handleLanguageChange = (e) => {
        // console.log(e.target.value)
        dispatch(changeLanguage(e.target.value));
    }
    return (
        <div className="absolute top-1 left-6 z-10 flex justify-between w-full px-10 mx-auto">
            <img
                className="w-52"
                src={LOGO_URL}
                alt="logo"
            />
            {user &&
                <div className="flex p-2 m-2">
                    {showGptSearch && <select className="p-2 m-2 mx-0 h-9 my-0 bg-gray-700 text-white rounded-lg hover:bg-slate-500 cursor-pointer"
                        onChange={handleLanguageChange}>
                        {SUPPORTED_LANGUAGES.map(lang =>
                            <option key={lang.identifier} value={lang.identifier}>
                                {lang.name}
                            </option>)
                        }
                    </select>}

                    <button className="bg-purple-600 px-4 mx-3 my-0 h-9 text-white text-sm font-semibold rounded-lg"
                        onClick={handleGptSearchClick}
                    >{showGptSearch ? "Home" : "GPT Search"}</button>
                    <img
                        className="w-8 h-9 cursor-pointer"
                        src={USER_ICON}
                        alt="usericon"
                        onClick={toggleDropDown}
                    />
                    {isDropDownOpen && (
                        <div className="absolute bg-gray-800 text-gray-300 mt-12 w-60 right-10 p-2 rounded-lg shadow-lg ">
                            <ul className="list-none p-0">
                                <li className="text-sm py-2 px-3 border-b border-gray-600">Hello {userName}</li>
                                <li className="text-sm py-2 px-3 border-b border-gray-600">
                                    <button
                                        className="text-red-500 hover:text-red-700 focus:outline-none"
                                        onClick={handleSignOut}
                                    >
                                        Sign Out
                                    </button>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>}
        </div>
    );
};

export default Header;
