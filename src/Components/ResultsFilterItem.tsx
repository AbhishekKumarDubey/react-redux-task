import { useAppDispatch } from '../Shared/hooks/redux-hook';
import {
  getAllMoviesByGenre,
  setSelectedGenre
} from '../Actions/moviesActions';

type ResultsFilterProps = {
  id: number;
  text: string;
  active: boolean;
  onClick: (id: number) => void;
};

export default function ResultsFilterItem({
  id,
  text,
  active,
  onClick
}: ResultsFilterProps) {
  const dispatch = useAppDispatch();

  const getMoviesByCategoryHandler = () => {
    let searchBy = 'genres',
      filter = text;

    if (text === 'All') {
      searchBy = filter = '';
    }

    dispatch(getAllMoviesByGenre(searchBy, filter));

    onClick(id);

    dispatch(setSelectedGenre(filter));
  };

  return (
    <div
      className={`results-filter__option ${
        active && 'results-filter__option--selected'
      }`}
    >
      <button
        className='link results-filter__option-text'
        onClick={getMoviesByCategoryHandler}
      >
        {text}
      </button>
    </div>
  );
}
