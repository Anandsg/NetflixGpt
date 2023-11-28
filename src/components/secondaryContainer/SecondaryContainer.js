import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies)

    return (
        <div className="w-screen">
            <div className="">
                <MovieList title={"Now playing Movies"} movies={movies?.nowPlayingMovies} />
                <MovieList title={"Trending movies"} movies={movies?.nowPlayingMovies} />
                <MovieList title={"Horror Movies"} movies={movies?.nowPlayingMovies} />
                <MovieList title={"Upcoming movies"} movies={movies?.nowPlayingMovies} />
            </div>

        </div>
    );
};

export default SecondaryContainer;