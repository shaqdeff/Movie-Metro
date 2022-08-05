import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies, getAllShows } from '../../redux/moviesSlice/moviesSlice';
import MovieCard from '../movieCard/MovieCard';
import './movieList.scss';

/* eslint-disable operator-linebreak */
const MovieList = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  let renderMovies = '';
  let renderShows = '';

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

  renderShows =
    shows.Response === 'True' ? (
      shows.Search.map((movie) => <MovieCard key={movie.imdbID} data={movie} />)
    ) : (
      <div className="shows-error">
        <h3>{shows.Error}</h3>
      </div>
    );

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">{renderMovies}</div>
      </div>
      <div className="shows-list">
        <h2>Shows</h2>
        <div className="movie-container">{renderShows}</div>
      </div>
    </div>
  );
};

export default MovieList;
