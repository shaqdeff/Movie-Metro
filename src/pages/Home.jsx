import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MovieList from '../components/movieList/MovieList';
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from '../redux/moviesSlice/moviesSlice';
import './home.scss';

/* eslint-disable arrow-body-style */
const Home = () => {
  const dispatch = useDispatch();
  const movieText = 'Now';
  const showText = 'Game';

  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(showText));
  }, []);

  return (
    <div className="movies">
      <MovieList />
    </div>
  );
};

export default Home;
