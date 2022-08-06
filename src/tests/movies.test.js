import React from 'react';
import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/store';
import MovieList from '../components/movieList/MovieList';

it('renders correctly', () => {
  const tree = TestRenderer.create(
    <Provider store={store}>
      <MovieList />
    </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
