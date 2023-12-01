import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
import { BG_URL } from '../../utils/constants';

const GptSearchPage = () => {
    return (
        <div>
            <div className="brightness-50 -z-10 w-screen fixed">
                <img className="h-screen object-cover md:w-screen" src={BG_URL}
                    alt="bg" />
            </div>
            <div>
                <GptSearchBar />
                <GptMovieSuggestion />
            </div>
        </div>
    )
}

export default GptSearchPage;