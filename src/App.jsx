import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext.jsx'
import SearchPage from './components/SearchPage.jsx'
import MovieDetails from './components/MovieDetails.jsx'
import FavoritesPage from './components/FavoritesPage.jsx'
import Header from './components/Header.jsx'

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<SearchPage />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App
