import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";


const VideoBackground = ({ movieId }) => {
    const trailerVideo = useSelector(store => store.movies?.trailerVideo)
    useMovieTrailer(movieId);
    return (
        <div className="w-screen">
            <iframe
                className="w-screen aspect-video absolute "
                // removed 1&mute=1 add it
                src={"https://www.youtube.com/embed/ftUpFjGKuY0?si=" + trailerVideo?.key + "?&autoplay="}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
            </iframe>
        </div>
    );
};

// https://www.youtube.com/embed/ftUpFjGKuY0?si=MAZuGdi32bk

export default VideoBackground;