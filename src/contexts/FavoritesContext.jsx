import React, { createContext, useContext, useState, useEffect } from 'react'

const FavoritesContext = createContext()

export const useFavorites = () => {
  const context = useContext(FavoritesContext)
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider')
  }
  return context
}

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([])

  // Load favorites from localStorage on mount
  useEffect(() => {
    const savedFavorites = localStorage.getItem('movieFavorites')
    if (savedFavorites) {
      try {
        setFavorites(JSON.parse(savedFavorites))
      } catch (error) {
        console.error('Error loading favorites from localStorage:', error)
      }
    }
  }, [])

  // Save favorites to localStorage whenever favorites change
  useEffect(() => {
    localStorage.setItem('movieFavorites', JSON.stringify(favorites))
  }, [favorites])

  const addToFavorites = (movie) => {
    setFavorites(prev => {
      if (prev.find(fav => fav.imdbID === movie.imdbID)) {
        return prev // Movie already in favorites
      }
      return [...prev, movie]
    })
  }

  const removeFromFavorites = (imdbId) => {
    setFavorites(prev => prev.filter(movie => movie.imdbID !== imdbId))
  }

  const isFavorite = (imdbId) => {
    return favorites.some(movie => movie.imdbID === imdbId)
  }

  const toggleFavorite = (movie) => {
    if (isFavorite(movie.imdbID)) {
      removeFromFavorites(movie.imdbID)
    } else {
      addToFavorites(movie)
    }
  }

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
    toggleFavorite
  }

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  )
}
