import { createStore, applyMiddleware, AnyAction } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';

import { initialState } from './Constants/ActionTypes';
import moviesReducer from './Reducers/moviesReducer';

const middleware = [thunk];

const store = createStore(
  moviesReducer,
  initialState,
  //composeWithDevToolsDevelopmentOnly(applyMiddleware(...middleware))
  composeWithDevTools(applyMiddleware(...middleware))
);

// export type RootState = ReturnType<typeof rootReducer> incase if we have combineReducers
export type AppDispatch = ThunkDispatch<RootState, any, AnyAction>;
//export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
