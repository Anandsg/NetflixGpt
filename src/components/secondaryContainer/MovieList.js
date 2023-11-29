import React from 'react';
import MovieCard from './MovieCard';
import './MovieList.css';

const MovieList = ({ title, movies }) => {
    // console.log(movies);
    return (
        <div className='py-1 p-4 bg-black' style={{ top: '600px', position: 'relative' }}>
            <h1 className='md:text-2xl font-semibold p-2 text-2xl text-white'>{title}</h1>
            <div className='flex p-2 flex-row overflow-x-scroll overflow-hidden scrollbar'>
                <div className='flex'>
                    {movies && movies.length > 0 ? (
                        movies.map((movie, index) => (
                            <MovieCard id={movie?.id} posterPath={movie?.backdrop_path} key={index} title={movie?.original_title} />
                        ))
                    ) : (
                        <p>No movies to display</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MovieList;
