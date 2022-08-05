import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import movieApi from '../../api/movieApi';
import APIKey from '../../api/movieApiKey';

export const fetchAsyncMovies = createAsyncThunk(
  'movies/fetchAsyncMovies',
  async () => {
    const movieText = 'Lord';
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${movieText}&type=movie`
    );
    return response.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  'movies/fetchAsyncShows',
  async () => {
    const seriesText = 'Friends';
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${seriesText}&type=series`
    );
    return response.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
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
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log('pending');
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log('fetched successfully');
      return { ...state, movies: payload };
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log('fetched successfully');
      return { ...state, shows: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log('fetched successfully');
    },
  },
});

export const { addMovies } = moviesSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export default moviesSlice.reducer;
