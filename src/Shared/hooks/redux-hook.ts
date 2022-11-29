import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
//import { AnyAction } from 'redux';
//import { ThunkDispatch } from 'redux-thunk';

import type { RootState, AppDispatch } from '../../store';
//import type { RootState } from '../../store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
//type TypedDispatch<T> = ThunkDispatch<T, any, AnyAction>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
//export const useAppDispatch = () => useDispatch<TypedDispatch<RootState>>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
