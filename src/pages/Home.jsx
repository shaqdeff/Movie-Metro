import React, { useEffect } from 'react';
import MovieList from '../components/movieList/MovieList';
import movieApi from '../api/movieApi';
import APIKey from '../api/movieApiKey';

/* eslint-disable arrow-body-style */
const Home = () => {
  const movieText = 'Harry';

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
        .catch((error) => console.log('Error: ', error));
      console.log('Response: ', response);
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
