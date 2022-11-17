import SearchResults from './Pages/SearchResults';
import MainHeader from './Shared/Components/Navigation/MainHeader';
import MovieDetails from './Components/MovieDetails';
import Footer from './Shared/Components/Navigation/Footer';

import MoviesState from './Shared/Context/MoviesState';
import ErrorBoundary from './Shared/Components/Generics/ErrorBoundary';

const App = () => {
  return (
    <MoviesState>
      <ErrorBoundary>
        <MainHeader />
        <MovieDetails />
      </ErrorBoundary>
      <div className='custom-gap'></div>
      <SearchResults />
      <Footer />
    </MoviesState>
  );
};

export default App;
