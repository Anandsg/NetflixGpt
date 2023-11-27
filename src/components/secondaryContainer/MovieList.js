import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
    console.log(movies);
    return (
        <div className='p-6 text-white bg-black' style={{ top: '780px', position: 'relative', right: '0px', left: '0px' }}>
            <h1 className='md:text-3xl font-semibold p-5 text-2xl text-white'>{title}</h1>
            <div className='flex p-5 flex-row overflow-x-scroll no-scrollbar'>
                <div className='flex flex-row'>
                    {movies && movies.length > 0 ? (
                        movies.map((movie, index) => (
                            <MovieCard id={movie?.id} posterPath={movie?.poster_path} key={index} />
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
