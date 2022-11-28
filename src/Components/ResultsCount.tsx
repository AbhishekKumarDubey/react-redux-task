import { useAppSelector } from '../Shared/hooks/redux-hook';
import { RootState } from '../store';

export default function ResultsCount() {
  const movies = useAppSelector((state: RootState) => state.movies);

  return (
    <div className='results-count'>
      <p className='results-count__text'>{`${movies.length} movies found`} </p>
    </div>
  );
}
