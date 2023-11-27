import React from "react";
import VideoBackground from "./VideoBackground";
import VideoTitlt from "./VideoTitle";
import { useSelector } from "react-redux";
const MainContainer = () => {

    const movies = useSelector((store) => store.movies?.nowPlayingMovies)
    if (movies === null) return;

    const mainMovie = movies[0];
    // console.log(mainMovie);
    const { original_title, overview, id } = mainMovie;
    // console.log(id);

    return (
        <div>
            <VideoBackground />
            <VideoTitlt title={original_title} overview={overview} movieId={id} />
        </div>
    );
};

export default MainContainer;