import { useFavorites } from '../contexts/FavoritesContext.jsx'
import MovieCard from './MovieCard.jsx'

const FavoritesPage = () => {
  const { favorites } = useFavorites()

  return (
    <div className="favorites-page">
      <div className="favorites-container">
        <h1 className="page-title">Mes Favoris</h1>
        <p className="page-subtitle">
          {favorites.length === 0 
            ? "Vous n'avez pas encore de films favoris" 
            : `${favorites.length} film${favorites.length > 1 ? 's' : ''} dans vos favoris`
          }
        </p>
        
        {favorites.length === 0 ? (
          <div className="no-favorites">
            <div className="no-favorites-icon">❤️</div>
            <h3>Aucun favori pour le moment</h3>
            <p>Recherchez des films et ajoutez-les à vos favoris en cliquant sur le cœur !</p>
          </div>
        ) : (
          <div className="favorites-list">
            <div className="movie-grid">
              {favorites.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default FavoritesPage
