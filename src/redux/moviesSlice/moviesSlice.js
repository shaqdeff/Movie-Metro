import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: {},
};

/* eslint-disable no-param-reassign */
const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
  },
});

export const { addMovies } = moviesSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export default moviesSlice.reducer;
