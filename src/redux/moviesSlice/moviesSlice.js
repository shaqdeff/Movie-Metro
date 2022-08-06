import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import movieApi from '../../api/movieApi';
import APIKey from '../../api/movieApiKey';

export const fetchAsyncMovies = createAsyncThunk(
  'movies/fetchAsyncMovies',
  async (term) => {
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${term}&type=movie`
    );
    return response.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  'movies/fetchAsyncShows',
  async (term) => {
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${term}&type=series`
    );
    return response.data;
  }
);

export const fetchAsyncMoviesOrShowsDetails = createAsyncThunk(
  'movies/fetchAsyncMoviesOrShowsDetails',
  async (id) => {
    const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`);
    return response.data;
  }
);

const initialState = {
  status: 'idle',
  movies: {},
  shows: {},
  selectedMovieOrShow: {},
};

/* eslint-disable no-param-reassign */
/* eslint-disable arrow-body-style */
const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      return { ...state, movies: payload };
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      return { ...state, shows: payload };
    },
    [fetchAsyncMoviesOrShowsDetails.fulfilled]: (state, { payload }) => {
      return { ...state, selectedMovieOrShow: payload };
    },
    [fetchAsyncMovies.rejected]: (state) => {
      state.status = 'failed';
    },
  },
});

/* eslint-disable implicit-arrow-linebreak */
export const { addMovies } = moviesSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) =>
  state.movies.selectedMovieOrShow;
export default moviesSlice.reducer;
