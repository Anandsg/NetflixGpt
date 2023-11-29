import React from 'react';
import language from '../../utils/languageConstants';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {
    const langKey = useSelector((store) => store.config.lang)

    return (
        <div className="py-[15%] flex justify-center right-10">
            <form className="w-1/2 grid grid-cols-12 gap-4">
                <input
                    className="col-span-8 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    type="text"
                    placeholder={language[langKey].gptSearchPlaceholider}
                />
                <button className="col-span-2 p-3 text-white bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring focus:border-blue-300">
                    {language[langKey].search}
                </button>
            </form>
        </div>
    );
};

export default GptSearchBar;
