import { useDispatch } from "react-redux";
import { TrendingMovies } from "../../utils/movieSlice";
import { API_OPTIONS } from "../../utils/constants";
import { useEffect } from "react";

const useTredingMovies = () => {
    const dispatch = useDispatch();
    const getTrendingMovies = async () => {
        const data = await
            fetch('https://api.themoviedb.org/3/movie/popular?page=1',
                API_OPTIONS
            );
        const json = await data.json();
        console.log(json);
        dispatch(TrendingMovies(json.results));
    };
    useEffect(() => {
        getTrendingMovies();
    }, [])
};

export default useTredingMovies;