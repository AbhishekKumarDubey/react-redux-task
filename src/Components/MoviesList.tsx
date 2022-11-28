import MovieCard from './MovieCard';

interface MoviesCollection {
  id: number;
  title: string;
  tagline: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
  poster_path: string;
  overview: string;
  budget: number;
  revenue: number;
  genres: string[];
  runtime: number;
}

type MoviesCollectionProps = {
  movies?: Array<MoviesCollection>;
};

export default function MoviesList({ movies = [] }: MoviesCollectionProps) {
  return (
    <>
      {movies.map(movie => {
        return (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            genres={movie.genres}
            releaseDate={movie.release_date}
            movieUrl={movie.poster_path}
            overview={movie.overview}
            rating={movie?.vote_average?.toString() || '0'}
            runtime={movie?.runtime?.toString() || '150'}
          />
        );
      })}
    </>
  );
}
