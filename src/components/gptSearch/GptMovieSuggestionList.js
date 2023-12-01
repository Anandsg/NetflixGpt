import React from 'react';
import MovieCard from '../secondaryContainer/MovieCard';
import '../secondaryContainer/MovieList.css';

const GptMovieSuggestionList = ({ title, movies }) => {
    return (
        <div className='py-1 p-4 bg-black bg-opacity-60'>
            <h1 className='md:text-2xl font-semibold p-2 text-2xl text-white'>{title}</h1>
            <div className='flex p-2 flex-row overflow-x-scroll overflow-hidden scrollbar'>
                <div className='flex'>
                    {movies && movies.length > 0 ? (
                        movies.map((movie, index) => (
                            <MovieCard id={movie?.id} posterPath={movie?.backdrop_path} key={index} title={movie?.original_title} />
                        ))
                    ) : (
                        <p className='text-white text-lg'>No movies to display</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default GptMovieSuggestionList;
