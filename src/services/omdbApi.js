const API_KEY = import.meta.env.VITE_OMDB_API_KEY || 'd6ac5f32'
const BASE_URL = 'https://www.omdbapi.com/'

export const searchMovies = async (query, page = 1) => {
  try {
    const response = await fetch(
      `${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}&page=${page}`
    )
    
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    
    const data = await response.json()
    
    if (data.Response === 'False') {
      throw new Error(data.Error || 'No movies found')
    }
    
    return data
  } catch (error) {
    throw new Error(`Search failed: ${error.message}`)
  }
}

export const getMovieDetails = async (imdbId) => {
  try {
    const response = await fetch(
      `${BASE_URL}?apikey=${API_KEY}&i=${imdbId}&plot=full`
    )
    
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    
    const data = await response.json()
    
    if (data.Response === 'False') {
      throw new Error(data.Error || 'Movie not found')
    }
    
    return data
  } catch (error) {
    throw new Error(`Failed to fetch movie details: ${error.message}`)
  }
}
