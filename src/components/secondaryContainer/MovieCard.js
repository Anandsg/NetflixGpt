import React from 'react'
import { IMG_CDN_URL } from '../../utils/constants';

const MovieCard = ({ posterPath }) => {
    console.log(posterPath)
    return (
        <div className='w-40 pr-5 md:w-40 md:pr-6 movie-card'>
            <img alt='movie card'
                src={IMG_CDN_URL + posterPath} />
        </div>
    );
};

export default MovieCard;