import { Link } from 'react-router-dom'
import { useFavorites } from '../contexts/FavoritesContext.jsx'

const MovieCard = ({ movie }) => {
  const { isFavorite, toggleFavorite } = useFavorites()

  const handleFavoriteClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    toggleFavorite(movie)
  }

  return (
    <Link to={`/movie/${movie.imdbID}`} className="movie-card">
      <div className="movie-poster">
        {movie.Poster && movie.Poster !== 'N/A' ? (
          <img src={movie.Poster} alt={movie.Title} />
        ) : (
          <div className="no-poster">
            <span>No Image</span>
          </div>
        )}
        <button
          className={`favorite-button ${isFavorite(movie.imdbID) ? 'favorited' : ''}`}
          onClick={handleFavoriteClick}
          aria-label={isFavorite(movie.imdbID) ? 'Remove from favorites' : 'Add to favorites'}
        >
          {isFavorite(movie.imdbID) ? '❤️' : '🤍'}
        </button>
      </div>
      <div className="movie-info">
        <h3 className="movie-title">{movie.Title}</h3>
        <p className="movie-year">{movie.Year}</p>
        <p className="movie-type">{movie.Type}</p>
      </div>
    </Link>
  )
}

export default MovieCard
