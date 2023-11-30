import React, { useRef } from 'react';
import language from '../../utils/languageConstants';
import { useSelector } from 'react-redux';
import openai from '../../utils/openai';

const GptSearchBar = () => {
    const langKey = useSelector((store) => store.config.lang)
    const searchText = useRef()
    const handleGptSearchClick = async () => {
        console.log(searchText.current.value);

        // Make an API call to GPT ai to fetch movie results
        const gptQuery =
            "Act as a movie recommendation system and suggest some movies for the query : " +
            searchText.current.value +
            ". only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

        const gptResults = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
        });
        console.log(gptResults.choices);
    };

    return (
        <div className="py-[15%] flex justify-center right-10">
            <form className="w-1/2 grid grid-cols-12 gap-4"
                onSubmit={(e) => e.preventDefault()}>
                <input
                    ref={searchText}
                    className="col-span-8 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    type="text"
                    placeholder={language[langKey].gptSearchPlaceholider}
                />
                <button className="col-span-2 p-3 text-white bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring focus:border-blue-300"
                    onClick={handleGptSearchClick}>
                    {language[langKey].search}
                </button>
            </form>
        </div>
    );
};

export default GptSearchBar;