import { createContext } from 'react';

import { IMovieState, initialState } from './types';

const moviesContext = createContext<IMovieState>(initialState);

export default moviesContext;
