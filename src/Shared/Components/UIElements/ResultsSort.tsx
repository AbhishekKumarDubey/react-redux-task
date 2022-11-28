import { useState } from 'react';

import { useAppDispatch } from '../../../Shared/hooks/redux-hook';
import { setSelectedSorting, sortMovies } from '../../../Actions/moviesActions';

export default function ResultsSort() {
  const [sortVal, setSortVal] = useState('Release Date');

  const dispatch = useAppDispatch();

  const onSortClickHandler = () => {
    const updatedVal = sortVal === 'Rating' ? 'Release Date' : 'Rating';
    const updatedValField =
      sortVal === 'Rating' ? 'release_date' : 'vote_average';

    setSortVal(updatedVal);

    dispatch(setSelectedSorting(updatedValField));

    dispatch(sortMovies(updatedValField));
  };

  return (
    <div className='results-sort-by'>
      <span className='results-sort-by__text'>Sort By</span>

      <span
        className='results-sort-by__options'
        role='presentation'
        onClick={onSortClickHandler}
      >
        {sortVal}
      </span>
    </div>
  );
}
