import { useState, useEffect } from 'react'
import MovieCard from './MovieCard.jsx'
import LoadingSpinner from './LoadingSpinner.jsx'

const PopularMovies = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        setLoading(true)
        const { searchMovies } = await import('../services/omdbApi.js')
        
        // Recherche de films populaires
        const popularQueries = ['batman', 'spider-man', 'avengers', 'star wars', 'marvel']
        const allMovies = []
        
        for (const query of popularQueries) {
          try {
            const data = await searchMovies(query, 1)
            if (data.Search) {
              // Prendre seulement 2 films par requête pour avoir de la variété
              allMovies.push(...data.Search.slice(0, 2))
            }
          } catch (error) {
            console.log(`Erreur pour ${query}:`, error.message)
          }
        }
        
        // Mélanger et prendre 10 films
        const shuffled = allMovies.sort(() => 0.5 - Math.random())
        setMovies(shuffled.slice(0, 10))
      } catch (error) {
        console.error('Erreur lors du chargement des films populaires:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPopularMovies()
  }, [])

  if (loading) {
    return <LoadingSpinner />
  }

  if (movies.length === 0) {
    return null
  }

  return (
    <div className="popular-movies">
      <h2 className="popular-title">Popular Movies</h2>
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default PopularMovies
