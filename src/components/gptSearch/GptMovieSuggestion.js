import React from 'react'
import { useSelector } from 'react-redux';
import GptMovieSuggestionList from './GptMovieSuggestionList';

const GptMovieSuggestion = () => {
    const gpt = useSelector(store => store.gpt)
    const { movieNames, movieResults } = gpt;
    if (!movieNames) return null;

    return (
        <div>
            <div>
                <h2 className='text-xl md:text-2xl text-white px-8 font-semibold md:font-bold'>Results</h2>
                {movieNames.map((movieNames, index) =>
                    <GptMovieSuggestionList
                        key={movieNames[0]}
                        // title={movieNames[0]}
                        movies={movieResults[index]} />
                )}
            </div>
        </div>
    );
};

export default GptMovieSuggestion