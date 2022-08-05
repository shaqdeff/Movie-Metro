import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './moviesSlice/moviesSlice';

const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});

export default store;
