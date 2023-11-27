import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../../utils/constants";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

    // fetching the trailer video and updating the store with trailerVideo data
    const getMovieVideo = async () => {

        const data = await fetch("https://api.themoviedb.org/3/movie/670292/videos?language=en-US",
            API_OPTIONS)
        const json = await data.json();
        // console.log(json);

        const filterData = json.results.filter((video) => video.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
        // console.log(trailer);
        dispatch(addTrailerVideo(trailer));
    };

    useEffect(() => {
        getMovieVideo();
    }, [])
}

export default useMovieTrailer;