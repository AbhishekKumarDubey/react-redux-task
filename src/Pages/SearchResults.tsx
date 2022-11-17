import Movies from './Movies';

import ResultsFilter from '../Components/ResultsFilter';
import ResultsCount from '../Components/ResultsCount';
import ResultsSort from '../Shared/Components/UIElements/ResultsSort';

export default function SearchResults() {
  return (
    <main className='search-results__wrapper'>
      <section className='search-results'>
        <ResultsFilter />
        <ResultsSort />
        <ResultsCount />
        <Movies />
      </section>
    </main>
  );
}
