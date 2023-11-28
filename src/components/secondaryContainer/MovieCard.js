import React from 'react'
import { IMG_CDN_URL } from '../../utils/constants';

const MovieCard = ({ posterPath, title }) => {
    console.log(title)
    return (
        <div className='w-40 py-0 md:w-40 md:pr-6 movie-card'>
            <img alt='movie card'
                className='rounded-md hover:cursor-pointer'
                src={IMG_CDN_URL + posterPath} />
            <p className='text-gray-300 text-sm'>{title}</p>
        </div>
    );
};

export default MovieCard;