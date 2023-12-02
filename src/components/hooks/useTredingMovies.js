import { useDispatch, useSelector } from "react-redux";
import { TrendingMovies } from "../store/movieSlice";
import { API_OPTIONS } from "../../utils/constants";
import { useEffect } from "react";

const useTredingMovies = () => {

    // Memoization to avoid unnecessary API calls
    const tredingMovies = useSelector(store => store.movies.TrendingMovies);
    const dispatch = useDispatch();
    const getTrendingMovies = async () => {
        const data = await
            fetch('https://api.themoviedb.org/3/movie/popular?page=1',
                API_OPTIONS
            );
        const json = await data.json();
        dispatch(TrendingMovies(json.results));
    };
    useEffect(() => {
        if (!tredingMovies) getTrendingMovies();
    }, [])
};

export default useTredingMovies;