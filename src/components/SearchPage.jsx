import { useState } from 'react'
import SearchForm from './SearchForm.jsx'
import MovieList from './MovieList.jsx'
import PopularMovies from './PopularMovies.jsx'
import LoadingSpinner from './LoadingSpinner.jsx'
import ErrorMessage from './ErrorMessage.jsx'

const SearchPage = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [hasSearched, setHasSearched] = useState(false)

  const handleSearch = async (query) => {
    if (!query.trim()) return

    setLoading(true)
    setError('')
    setHasSearched(true)

    try {
      const { searchMovies } = await import('../services/omdbApi.js')
      const data = await searchMovies(query)
      setMovies(data.Search || [])
    } catch (err) {
      setError(err.message)
      setMovies([])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="search-page">
      <div className="search-container">
        <h1 className="page-title">Discover Amazing Movies</h1>
        <p className="page-subtitle">
          {hasSearched ? 'Search for more movies...' : 'Search for a movie to get started'}
        </p>
        
        <SearchForm onSearch={handleSearch} />
        
        {loading && <LoadingSpinner />}
        
        {error && <ErrorMessage message={error} />}
        
        {!loading && !error && hasSearched && movies.length === 0 && (
          <div className="no-results">
            <h3>No movies found</h3>
            <p>Try searching with different keywords</p>
          </div>
        )}
        
        {!loading && !error && movies.length > 0 && (
          <MovieList movies={movies} />
        )}
        
        {!loading && !error && !hasSearched && (
          <PopularMovies />
        )}
      </div>
    </div>
  )
}

export default SearchPage
