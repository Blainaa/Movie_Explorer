import { useState } from 'react'

const SearchForm = ({ onSearch }) => {
  const [query, setQuery] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(query)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e)
    }
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-input-container">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter movie title..."
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </div>
    </form>
  )
}

export default SearchForm
