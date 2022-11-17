import { useContext } from 'react';

import MoviesContext from '../Shared/Context/moviesContext';
import MoviesList from '../Components/MoviesList';

export default function Movies() {
  const { movies } = useContext(MoviesContext);

  return (
    <section className='movies'>
      <MoviesList
        movies={movies.sort(
          (a, b) =>
            new Date(a.release_date).getTime() -
            new Date(b.release_date).getTime()
        )}
      />
    </section>
  );
}
