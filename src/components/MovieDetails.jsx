import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useFavorites } from '../contexts/FavoritesContext.jsx'
import LoadingSpinner from './LoadingSpinner.jsx'
import ErrorMessage from './ErrorMessage.jsx'

const MovieDetails = () => {
  const { id } = useParams()
  const { isFavorite, toggleFavorite } = useFavorites()
  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setLoading(true)
        setError('')
        
        const { getMovieDetails } = await import('../services/omdbApi.js')
        const data = await getMovieDetails(id)
        setMovie(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      fetchMovieDetails()
    }
  }, [id])

  const handleFavoriteClick = () => {
    if (movie) {
      toggleFavorite(movie)
    }
  }

  if (loading) {
    return <LoadingSpinner />
  }

  if (error) {
    return <ErrorMessage message={error} />
  }

  if (!movie) {
    return <ErrorMessage message="Movie not found" />
  }

  return (
    <div className="movie-details">
      <div className="movie-details-container">
        <Link to="/" className="back-button">
          ← Back to Search
        </Link>

        <div className="movie-details-content">
          <div className="movie-details-poster">
            {movie.Poster && movie.Poster !== 'N/A' ? (
              <img src={movie.Poster} alt={movie.Title} />
            ) : (
              <div className="no-poster-large">
                <span>No Image Available</span>
              </div>
            )}
          </div>

          <div className="movie-details-info">
            <div className="movie-details-header">
              <h1 className="movie-details-title">{movie.Title}</h1>
              <button
                className={`favorite-button-large ${isFavorite(movie.imdbID) ? 'favorited' : ''}`}
                onClick={handleFavoriteClick}
                aria-label={isFavorite(movie.imdbID) ? 'Remove from favorites' : 'Add to favorites'}
              >
                {isFavorite(movie.imdbID) ? '❤️ Remove from Favorites' : '🤍 Add to Favorites'}
              </button>
            </div>

            <div className="movie-meta">
              <div className="meta-item">
                <strong>Year:</strong> {movie.Year}
              </div>
              <div className="meta-item">
                <strong>Rated:</strong> {movie.Rated}
              </div>
              <div className="meta-item">
                <strong>Runtime:</strong> {movie.Runtime}
              </div>
              <div className="meta-item">
                <strong>Genre:</strong> {movie.Genre}
              </div>
              <div className="meta-item">
                <strong>Director:</strong> {movie.Director}
              </div>
              <div className="meta-item">
                <strong>Actors:</strong> {movie.Actors}
              </div>
            </div>

            <div className="movie-ratings">
              <h3>Ratings</h3>
              <div className="ratings-list">
                {movie.Ratings && movie.Ratings.map((rating, index) => (
                  <div key={index} className="rating-item">
                    <span className="rating-source">{rating.Source}:</span>
                    <span className="rating-value">{rating.Value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="movie-plot">
              <h3>Plot</h3>
              <p>{movie.Plot}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails
