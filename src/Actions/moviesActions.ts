/* eslint-disable @typescript-eslint/indent */
import axios from 'axios';
import { Dispatch } from 'redux';

import * as types from '../Constants/ActionTypes';

export const setMovie = (id: number) => ({
  type: types.SET_MOVIE,
  payload: id
});

export const clearMovie = () => ({ type: types.CLEAR_MOVIE, payload: null });

export const deleteMovie = (id: number) => ({
  type: types.DELETE_MOVIE,
  payload: id
});

export const getAllMovies = () => async (dispatch: Dispatch) => {
  try {
    const { data } = await axios.get(
      'http://localhost:4000/movies?sortBy=release_date&sortOrder=asc'
    );

    dispatch({
      type: types.GET_MOVIES_LIST,
      payload: data.data
    });
  } catch (error) {
    console.error(error);
    dispatch({
      type: types.MOVIES_LIST_FAIL,
      payload: 'Something went wrong!' // To-do get custom error message from backend
    });
  }
};

export const getAllMoviesByGenre =
  (searchBy: string, filter: string) =>
  async (dispatch: Dispatch, getState: () => types.IMovieState) => {
    const { selectedSorting } = getState();
    try {
      const baseUrl = `http://localhost:4000/movies?sortBy=${selectedSorting}&sortOrder=asc&searchBy=${searchBy}&filter=${filter}`;

      console.log(baseUrl);
      const { data } = await axios.get(baseUrl);

      dispatch({
        type: types.GET_MOVIES_LIST,
        payload: data.data
      });
    } catch (error) {
      console.error(error);
      dispatch({
        type: types.MOVIES_LIST_FAIL,
        payload: 'Something went wrong!' // To-do get custom error message from backend
      });
    }
  };

export const setSelectedGenre = (genre: string) => ({
  type: types.SET_GENRE,
  payload: genre
});

export const setSelectedSorting = (sortType: string) => ({
  type: types.SET_SORTING,
  payload: sortType
});

export const sortMovies =
  (sortBy: string) =>
  async (dispatch: Dispatch, getState: () => types.IMovieState) => {
    try {
      const { selectedGenre } = getState();

      const baseUrl = `http://localhost:4000/movies?sortBy=${sortBy}&sortOrder=asc&searchBy=genre&filter=${selectedGenre}`;

      console.log(baseUrl);
      const { data } = await axios.get(baseUrl);

      dispatch({
        type: types.GET_MOVIES_LIST,
        payload: data.data
      });
    } catch (error) {
      console.error(error);
      dispatch({
        type: types.MOVIES_LIST_FAIL,
        payload: 'Something went wrong!' // To-do get custom error message from backend
      });
    }
  };

export const addMovie =
  (addFormData: {
    title: string;
    release_date: string;
    poster_path: string;
    rating: string;
    genres: string[];
    runtime: string;
    overview: string;
  }) =>
  async (dispatch: Dispatch, getState: () => types.IMovieState) => {
    try {
      const { selectedGenre, selectedSorting } = getState();

      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };

      const response = await axios.post(
        'http://localhost:4000/movies',
        {
          title: addFormData.title,
          release_date: addFormData.release_date,
          poster_path: addFormData.poster_path,
          vote_average: +addFormData.rating,
          genres: addFormData.genres,
          runtime: +addFormData.runtime,
          overview: addFormData.overview
        },
        config
      );

      console.log(response);

      const { data } = await axios.get(
        `http://localhost:4000/movies?sortBy=${selectedSorting}&sortOrder=asc&searchBy=genre&filter=${selectedGenre}`
      );

      dispatch({
        type: types.GET_MOVIES_LIST,
        payload: data.data
      });
    } catch (error) {
      console.error(error);
      dispatch({
        type: types.ADD_MOVIE_FAIL,
        payload: 'Something went wrong!' // To-do get custom error message from backend
      });
    }
  };

export const searchMovies =
  (searchText: string) =>
  async (dispatch: Dispatch, getState: () => types.IMovieState) => {
    try {
      const { selectedSorting } = getState();
      const { data } = await axios.get(
        `http://localhost:4000/movies?sortBy=${selectedSorting}&sortOrder=asc&searchBy=title&search=${searchText}`
      );

      dispatch({
        type: types.GET_MOVIES_LIST,
        payload: data.data
      });
    } catch (error) {
      console.error(error);
      dispatch({
        type: types.MOVIES_LIST_FAIL,
        payload: 'Something went wrong!' // To-do get custom error message from backend
      });
    }
  };
