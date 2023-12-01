import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        TrendingMovies: null,
        TopRatedMovies: null,
        trailerVideo: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        TrendingMovies: (state, action) => {
            state.TrendingMovies = action.payload;
        },
        TopRatedMovies: (state, action) => {
            state.TopRatedMovies = action.payload;
        },
        UpcomingMovies: (state, action) => {
            state.UpcomingMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        }
    },
});

export const { addNowPlayingMovies, addTrailerVideo, TrendingMovies, TopRatedMovies, UpcomingMovies } = movieSlice.actions;
export default movieSlice.reducer;