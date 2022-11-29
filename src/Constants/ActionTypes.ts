export const DELETE_MOVIE = 'DELETE_MOVIE';
export const SET_MOVIE = 'SET_MOVIE';
export const CLEAR_MOVIE = 'CLEAR_MOVIE';
export const ADD_MOVIE_FAIL = 'ADD_MOVIE_FAIL';
export const UPDATE_MOVIE = 'UPDATE_MOVIE';
export const UPDATE_MOVIE_FAIL = 'UPDATE_MOVIE_FAIL';
export const GET_MOVIES_LIST = 'GET_MOVIES';
export const MOVIES_LIST_FAIL = 'GET_MOVIES_LIST_FAILED';
export const SORT_MOVIES = 'SORT_MOVIES';
export const SET_GENRE = 'SET_GENRE';
export const SET_SORTING = 'SET_SORTING';
export const SEARCH_MOVIES = 'SEARCH_MOVIES';

interface IMovie {
  id: number;
  title: string;
  tagline: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
  poster_path: string;
  overview: string;
  budget: number;
  revenue: number;
  genres: string[];
  runtime: number;
}

export interface IMovieState {
  movies: Array<IMovie>;
  selectedMovie: IMovie | null;
  loading: boolean;
  selectedGenre: string;
  selectedSorting: string;
}

export const initialState: IMovieState = {
  movies: [],
  selectedMovie: null,
  loading: false,
  selectedGenre: '',
  selectedSorting: 'release_date'
};

export interface ACTIONTYPE {
  type: string;
  payload: number | string | Array<IMovie>; // To-do more appropriate - https://stackoverflow.com/questions/72396293/argument-of-type-dispatch-dispatchshopdispatchtypes-promisevoid-is-n
}
