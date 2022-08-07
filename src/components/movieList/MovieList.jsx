import React, { useState } from 'react';
import Slider from 'react-slick';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllMovies,
  getAllShows,
  fetchAsyncMovies,
  fetchAsyncShows,
} from '../../redux/moviesSlice/moviesSlice';
import MovieCard from '../movieCard/MovieCard';
import Settings from '../../settings';
import './movieList.scss';

/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-props-no-spreading */
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

  const [term, setTerm] = useState('');
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    setTerm('');
  };

  return (
    <div>
      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={term}
            placeholder="search movie/show"
            onChange={(e) => setTerm(e.target.value)}
          />
          <button type="submit">
            <i className="fa fa-search" />
          </button>
        </form>
      </div>
      <div className="movie-wrapper">
        <div className="movie-list">
          <h2>Movies</h2>
          <div className="movie-container">
            <Slider {...Settings}>{renderMovies}</Slider>
          </div>
        </div>
        <div className="shows-list">
          <h2>Shows</h2>
          <div className="movie-container">
            <Slider {...Settings}>{renderShows}</Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
