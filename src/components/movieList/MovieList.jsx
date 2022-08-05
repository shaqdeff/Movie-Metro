import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies } from '../../redux/moviesSlice/moviesSlice';
import MovieCard from '../movieCard/MovieCard';
import './movieList.scss';

/* eslint-disable operator-linebreak */
const MovieList = () => {
  const movies = useSelector(getAllMovies);
  let renderMovies = '';

  renderMovies =
    movies.Response === 'True' ? (
      movies.Search.map((movie) => (
        <MovieCard key={movie.imdbID} data={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">{renderMovies}</div>
      </div>
    </div>
  );
};

export default MovieList;
