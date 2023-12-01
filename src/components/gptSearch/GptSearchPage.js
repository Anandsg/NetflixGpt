import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
import { BG_URL } from '../../utils/constants';

const GptSearchPage = () => {
    return (
        <div>
            <div className="brightness-50 -z-10 w-screen fixed">
                <img className="w-full h-full" src={BG_URL}
                    alt="bg" />
            </div>
            <GptSearchBar />
            <GptMovieSuggestion />
        </div>
    )
}

export default GptSearchPage;