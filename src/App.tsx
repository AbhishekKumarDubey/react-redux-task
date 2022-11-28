import SearchResults from './Pages/SearchResults';
import MainHeader from './Shared/Components/Navigation/MainHeader';
import MovieDetails from './Components/MovieDetails';
import Footer from './Shared/Components/Navigation/Footer';

import ErrorBoundary from './Shared/Components/Generics/ErrorBoundary';

const App = () => {
  return (
    <>
      <MainHeader />
      <MovieDetails />

      <div className='custom-gap'></div>
      <ErrorBoundary>
        <SearchResults />
      </ErrorBoundary>

      <Footer />
    </>
  );
};

export default App;
