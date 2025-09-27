import MovieCard from './MovieCard.jsx'

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      <h2 className="results-title">Search Results ({movies.length})</h2>
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default MovieList
