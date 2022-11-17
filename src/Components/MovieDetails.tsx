import { useContext } from 'react';

import MoviesContext from '../Shared/Context/moviesContext';

export default function MovieDetails() {
  const { selectedMovie, clearMovie } = useContext(MoviesContext);

  const clearMovieHandler = () => clearMovie();

  if (!selectedMovie) return null;

  return (
    <header className='movie-details__header'>
      <div>
        <div className='header__logo-box'>
          <h2 className='header__logo'>
            <span className='header__logo--sub'>netflixroulette</span>
          </h2>

          <div
            className='search-icon'
            role='presentation'
            onClick={clearMovieHandler}
          >
            <div className='search-icon__circle'></div>
            <div className='search-icon__rectangle'></div>
          </div>
        </div>
      </div>
      <div className='movie-details'>
        <div className='movie-details__left'>
          <img
            src={selectedMovie.poster_path}
            className='movie-card__image'
            alt={selectedMovie.title}
          />
        </div>
        <div className='movie-details__right'>
          <h1 className='heading-primary'>
            <div className='heading-primary--main'>{selectedMovie.title}</div>
            <div className='heading-primary--rating'>
              <span>{selectedMovie.vote_average}</span>
            </div>
          </h1>
          <p className='movie-details__genre'>{selectedMovie.genres}</p>
          <div className='movie-details__released-time'>
            <span className='movie-details__released-year'>
              {selectedMovie.release_date}
            </span>
            <span className='movie-details__runtime'>
              {selectedMovie.runtime}
            </span>
          </div>
          <div className='movie-details__overview'>
            <p className='movie-details__overview--desc'>
              {selectedMovie.overview}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
