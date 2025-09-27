import { Link } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext.jsx'
import { useFavorites } from '../contexts/FavoritesContext.jsx'

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme()
  const { favorites } = useFavorites()

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          🎬 Movie Explorer
        </Link>
        
        <div className="header-actions">
          <Link to="/" className="nav-link">
            Search
          </Link>
          
          <Link to="/favorites" className="favorites-count">
            ❤️ Favoris ({favorites.length})
          </Link>
          
          <button 
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
