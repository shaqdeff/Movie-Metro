import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MovieList from '../components/movieList/MovieList';
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from '../redux/moviesSlice/moviesSlice';

/* eslint-disable arrow-body-style */
const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncShows());
  }, []);

  return (
    <div className="movie-section">
      <MovieList />
    </div>
  );
};

export default Home;
