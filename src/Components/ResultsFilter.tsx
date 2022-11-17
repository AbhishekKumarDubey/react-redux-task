import ResultsFilterItem from '../Components/ResultsFilterItem';

const filterOptions = [
  {
    id: 1,
    text: 'All',
    active: true
  },
  { id: 2, text: 'Documentary', active: false },
  { id: 3, text: 'Comedy', active: false },
  { id: 4, text: 'Horror', active: false },
  { id: 5, text: 'Crime', active: false }
];

export default function ResultsFilter() {
  return (
    <div className='results-filter'>
      {filterOptions.map(option => (
        <ResultsFilterItem
          key={option.id}
          text={option.text}
          active={option.active}
        />
      ))}
    </div>
  );
}
