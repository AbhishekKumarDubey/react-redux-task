import { SET_MOVIE, CLEAR_MOVIE, DELETE_MOVIE, IMovieState } from './types';

interface ACTIONTYPE {
  type: string;
  payload: number | null;
}

export default function moviesReducer(
  state: IMovieState,
  action: ACTIONTYPE
): IMovieState {
  const { type, payload } = action;
  console.log('Clicked ', type, payload);
  switch (type) {
    case DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter(movie => movie.id !== payload)
      };
    case SET_MOVIE:
      return {
        ...state,
        selectedMovie: state.movies.find(movie => movie.id === payload) || null
      };
    case CLEAR_MOVIE:
      return {
        ...state,
        selectedMovie: null
      };
    default:
      return state;
  }
}
