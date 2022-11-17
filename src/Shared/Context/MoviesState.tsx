import React, { useReducer } from 'react';

import MoviesContext from './moviesContext';
import MoviesReducer from './moviesReducer';
import { SET_MOVIE, CLEAR_MOVIE, DELETE_MOVIE, initialState } from './types';

export default function MoviesState(props: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(MoviesReducer, initialState);

  const setMovie = (id: number) => dispatch({ type: SET_MOVIE, payload: id });

  const clearMovie = () => dispatch({ type: CLEAR_MOVIE, payload: null });

  const deleteMovie = (id: number) =>
    dispatch({ type: DELETE_MOVIE, payload: id });

  return (
    <MoviesContext.Provider
      value={{
        movies: state.movies,
        selectedMovie: state.selectedMovie,
        loading: state.loading,
        setMovie,
        clearMovie,
        deleteMovie
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
}
