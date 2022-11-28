import { useState } from 'react';
import ResultsFilterItem from '../Components/ResultsFilterItem';

export default function ResultsFilter() {
  const [filterOptions, setFilterOptions] = useState([
    {
      id: 1,
      text: 'All',
      active: true
    },
    { id: 2, text: 'Documentary', active: false },
    { id: 3, text: 'Comedy', active: false },
    { id: 4, text: 'Horror', active: false },
    { id: 5, text: 'Crime', active: false }
  ]);

  const clickCategoryHandler = (id: number) => {
    setFilterOptions(prev => {
      const index = prev.findIndex(category => category.id === id);
      const stateCopy = [...prev];
      prev.forEach(category => (category.active = false));

      stateCopy[index] = {
        ...stateCopy[index],
        active: true
      };

      return stateCopy;
    });
  };

  return (
    <div className='results-filter'>
      {filterOptions.map(option => (
        <ResultsFilterItem
          key={option.id}
          id={option.id}
          text={option.text}
          active={option.active}
          onClick={clickCategoryHandler}
        />
      ))}
    </div>
  );
}
