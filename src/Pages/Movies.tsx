import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../Shared/hooks/redux-hook';
import { RootState } from '../store';
import { getAllMovies } from '../Actions/moviesActions';
import MoviesList from '../Components/MoviesList';

export default function Movies() {
  const dispatch = useAppDispatch();
  const movies = useAppSelector((state: RootState) => state.movies);

  useEffect(() => {
    dispatch(getAllMovies());
  }, [dispatch]);

  return (
    <section className='movies'>
      {movies.length ? (
        <MoviesList movies={movies} />
      ) : (
        <h2>There is some issue while loading data.</h2>
      )}
    </section>
  );
}
