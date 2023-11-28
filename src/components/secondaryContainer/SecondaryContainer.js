import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies);

    return (
        <div className="w-screen">
            <div className="">
                <MovieList title={"Top Rated Movies"} movies={movies?.TopRatedMovies} />
                <MovieList title={"Now playing Movies"} movies={movies?.nowPlayingMovies} />
                <MovieList title={"Trending Movies"} movies={movies?.TrendingMovies} />
                <MovieList title={"Upcoming Movies"} movies={movies?.UpcomingMovies} />
            </div>
        </div>
    );
};

export default SecondaryContainer;
