import React, { useRef } from 'react';
import language from '../../utils/languageConstants';
import { useDispatch, useSelector } from 'react-redux';
import openai from '../../utils/openai';
import { API_OPTIONS } from '../../utils/constants';
import { addGptMovieResult } from '../../utils/gptSlice';

const GptSearchBar = () => {
    const langKey = useSelector((store) => store.config.lang)
    const searchText = useRef()
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

        if (!gptResults.choices || !gptResults.choices[0]?.message?.current) {
            console.log("Movie not present"); // Handle the error
        }
        console.log(gptResults.choices[0]?.message?.content);

        const gptMovies = gptResults.choices[0]?.message?.content.split(",");

        // for each movie search TMDB API

        const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
        // we will get promises 

        const tmdbResults = await Promise.all(promiseArray);
        console.log(tmdbResults);
        dispatch(addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults }));
    };

    return (
        <div className="pt-[17%] flex justify-center ">

            <form className="w-1/2 grid grid-cols-12 gap-4 ml-28"
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