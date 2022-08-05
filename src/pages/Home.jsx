import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MovieList from '../components/movieList/MovieList';
import movieApi from '../api/movieApi';
import APIKey from '../api/movieApiKey';
import { addMovies } from '../redux/moviesSlice/moviesSlice';

/* eslint-disable arrow-body-style */
const Home = () => {
  const movieText = 'Harry';
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
        .catch((error) => console.log('Error: ', error));
      dispatch(addMovies(response.data));
    };

    fetchMovies();
  }, []);

  return (
    <div className="container">
      <MovieList />
    </div>
  );
};

export default Home;
