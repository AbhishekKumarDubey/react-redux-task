import * as types from '../Constants/ActionTypes';

export default function moviesReducer(
  state = types.initialState,
  action: types.ACTIONTYPE
) {
  console.log('.....', action);
  switch (action.type) {
    case types.GET_MOVIES_LIST:
      return {
        ...state,
        movies: (Array.isArray(action.payload) && action.payload.slice(0)) || []
      };
    case types.MOVIES_LIST_FAIL:
      return {
        ...state,
        movies: []
      };
    case types.ADD_MOVIE_FAIL:
      return {
        ...state
      };
    case types.DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter(movie => movie.id !== action.payload)
      };
    case types.SET_MOVIE:
      return {
        ...state,
        selectedMovie:
          state.movies.find(movie => movie.id === action.payload) || null
      };
    case types.CLEAR_MOVIE:
      return {
        ...state,
        selectedMovie: null
      };
    case types.SET_GENRE:
      return {
        ...state,
        selectedGenre: action.payload
      };
    case types.SET_SORTING:
      return {
        ...state,
        selectedSorting: action.payload
      };
    default:
      return state;
  }
}
