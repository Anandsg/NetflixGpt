import React, { useRef, useState } from 'react';
import language from '../../utils/languageConstants';
import { useDispatch, useSelector } from 'react-redux';
import openai from '../../utils/openai';
import { API_OPTIONS } from '../../utils/constants';
import { addGptMovieResult } from '../store/gptSlice';

const GptSearchBar = () => {
    const langKey = useSelector((store) => store.config.lang)
    const searchText = useRef()
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const searchMovieTMDB = async (movie) => {
        const data = await fetch(
            "https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false&language=en-US&page=1",
            API_OPTIONS
        );
        const json = await data.json();

        return json.results;
    };
    const handleGptSearchClick = async () => {
        setLoading(true);

        // Make an API call to GPT ai to fetch movie results
        const gptQuery =
            "Act as a movie recommendation system and suggest some movies for the query : " +
            searchText.current.value +
            ". only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

        const gptResults = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
        });

        if (!gptResults.choices || !gptResults.choices[0]?.message?.current) {
        }

        const gptMovies = gptResults.choices[0]?.message?.content.split(",");

        // for each movie search TMDB API
        const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
        // we will get promises 

        const tmdbResults = await Promise.all(promiseArray);
        setLoading(false);
        dispatch(addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults }));
    };

    return (
        <div>
            <div className="pt-[15%] md:pt-[12%] flex justify-center">
                <h2 className="text-lg md:text-2xl font-semibold text-gray-100  flex my-11 md:my-14">
                    Let AI be your Movie Guru!
                </h2>
            </div>
            <form
                className=" w-full ml-4 p-3 md:w-1/2 grid grid-cols-12 gap-4 md:ml-[30%]"
                onSubmit={(e) => e.preventDefault()}
            >
                <input
                    ref={searchText}
                    className="col-span-8 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    type="text"
                    placeholder={language[langKey].gptSearchPlaceholider}
                />
                <button
                    className="col-span-3 md:col-span-2 p-3 text-white bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring focus:border-blue-300"
                    onClick={handleGptSearchClick}
                >
                    {loading && (
                        <div className="fixed top-1/2 md:top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <div className="flex items-center space-x-2">
                                <div className="w-16 h-16 relative">
                                    <div className="w-full h-full border-t-4 border-r-4 border-b-4 border-red-500 rounded-full animate-spin absolute top-0 left-0"></div>
                                    <div className="w-full h-full border-t-4 border-r-4 border-b-4 border-transparent rounded-full animate-spin absolute top-0 left-0 animate-reverse"></div>
                                </div>
                                <div className="text-red-500 text-xl font-semibold">Loading...</div>
                            </div>
                        </div>
                    )}
                    {!loading && language[langKey].search}
                </button>
            </form>
        </div>
    );

};

export default GptSearchBar;