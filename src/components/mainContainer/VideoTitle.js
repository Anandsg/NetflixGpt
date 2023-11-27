import React from "react";
import { FiAlertCircle } from "react-icons/fi";
import { AiFillCaretRight } from "react-icons/ai";

const VideoTitlt = ({ title, overview }) => {
    return (
        <div className="pt-[30%] px-20 w-screen aspect-video absolute bg-gradient-to-br from-black text-white">
            <h1 className="font-bold text-3xl">{title}</h1>
            <p className="py-6 text-md w-1/3 text-sm">{overview}</p>
            <div className="flex">
                <button className="flex items-center bg-gray-100 px-10 py-2 text-lg bg-opacity-90 hover:bg-opacity-70 rounded-md text-black"
                > <AiFillCaretRight /> Play</button>
                <button className="flex items-center bg-gray-500 px-4 py-2 mx-2 text-lg bg-opacity-60 rounded-md">
                    <FiAlertCircle className="mr-2" /> More Info
                </button>

            </div>
        </div>
    );
};

export default VideoTitlt;