import React from "react";
import { FiAlertCircle } from "react-icons/fi";
import { AiFillCaretRight } from "react-icons/ai";

const VideoTitle = ({ title, overview }) => {
    return (
        <div className="pt-[30%] md:pt-[19%] absolute px-6 md:px-20 w-screen aspect-video bg-gradient-to-br from-black text-white">
            <h1 className="font-bold text-2xl md:text-3xl">{title}</h1>
            <p className="hidden md:inline-block py-6 text-md w-1/3 text-sm">{overview}</p>
            <div className="flex py-2">
                <button className="flex items-center bg-gray-100 px-4 md:px-10 py-1 md:py-2 text-sm md:text-lg bg-opacity-90 hover:bg-opacity-70 rounded-md text-black"
                > <AiFillCaretRight /> Play</button>
                <button className="flex items-center bg-gray-500 px-2 md:px-4 md:py-2 mx-2 text-sm md:text-lg bg-opacity-60 rounded-md">
                    <FiAlertCircle className="mr-2" /> More Info
                </button>

            </div>
        </div>
    );
};

export default VideoTitle;