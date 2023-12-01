import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'Gpt',
    initialState: {
        showGptSearch: false,
        movieResults: null,
        movieNames: null
    },
    reducers: {
        toggleGptSearchview: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieResult: (state, action) => {
            const { movieNames, movieResults } = action.payload
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        }
    },
});

export const { toggleGptSearchview, addGptMovieResult } = gptSlice.actions;
export default gptSlice.reducer;