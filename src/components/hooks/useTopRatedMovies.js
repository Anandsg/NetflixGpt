import { useDispatch, useSelector } from "react-redux";
import { TopRatedMovies } from "../store/movieSlice";
import { API_OPTIONS } from "../../utils/constants";
import { useEffect } from "react";

const useTopRatedMovies = () => {

    // Memoization to avoid unnecessary API calls
    const topRatedMovies = useSelector(store => store.movies.TopRatedMovies);
    const dispatch = useDispatch();
    const getTopRatedMovies = async () => {
        const data = await
            fetch('https://api.themoviedb.org/3/movie/top_rated?page=1',
                API_OPTIONS
            );
        const json = await data.json();
        dispatch(TopRatedMovies(json.results));
    };
    useEffect(() => {
        if (!topRatedMovies) getTopRatedMovies();
    }, [])
};

export default useTopRatedMovies;