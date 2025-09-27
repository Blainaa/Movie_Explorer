# 🎬 Movie Explorer

A modern, responsive movie search application built with React and Vite. Search for movies, view detailed information, and manage your favorites with a beautiful dark/light theme toggle.

## ✨ Features

- **Movie Search**: Search for movies by title using the OMDB API
- **Movie Details**: View comprehensive movie information including plot, ratings, cast, and more
- **Favorites Management**: Add/remove movies from favorites with persistent storage
- **Dark/Light Theme**: Toggle between light and dark themes with system preference detection
- **Responsive Design**: Fully responsive design that works on all devices
- **Modern UI**: Beautiful, modern interface with smooth animations and transitions
- **Error Handling**: Comprehensive error handling with user-friendly messages
- **Loading States**: Smooth loading indicators for better user experience

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn
- OMDB API key (free at [omdbapi.com](http://www.omdbapi.com/apikey.aspx))

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Movie_Explorer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Copy the example environment file
   cp env.example .env
   
   # Edit .env and add your OMDB API key
   VITE_OMDB_API_KEY=your_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000` to view the application.

## 🛠️ Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── Header.jsx      # Navigation header
│   ├── SearchPage.jsx  # Main search page
│   ├── SearchForm.jsx  # Search input form
│   ├── MovieList.jsx   # Movie results list
│   ├── MovieCard.jsx   # Individual movie card
│   ├── MovieDetails.jsx # Movie details page
│   ├── LoadingSpinner.jsx # Loading indicator
│   └── ErrorMessage.jsx # Error display component
├── contexts/           # React Context providers
│   ├── FavoritesContext.jsx # Favorites state management
│   └── ThemeContext.jsx     # Theme state management
├── services/           # API services
│   └── omdbApi.js      # OMDB API integration
├── styles/             # CSS styles
│   └── index.css       # Main stylesheet
├── App.jsx             # Main application component
└── main.jsx            # Application entry point
```

## 🎨 Features in Detail

### Search Functionality
- Real-time movie search using OMDB API
- Enter key support for quick searching
- Search results with movie posters, titles, and years
- "No results found" handling

### Movie Details
- Comprehensive movie information display
- Movie poster with fallback for missing images
- Ratings from multiple sources (IMDb, Rotten Tomatoes, etc.)
- Plot summary, cast, director, and genre information
- Add/remove from favorites functionality

### Favorites System
- Persistent storage using localStorage
- Add/remove movies from favorites
- Visual indicators for favorite status
- Favorites count in header

### Theme System
- Light and dark theme support
- System preference detection
- Smooth theme transitions
- Persistent theme selection

### Responsive Design
- Mobile-first responsive design
- Optimized for all screen sizes
- Touch-friendly interface
- Adaptive grid layouts

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_OMDB_API_KEY=your_omdb_api_key_here
```

### API Configuration

The application uses the OMDB API. To get an API key:

1. Visit [omdbapi.com](http://www.omdbapi.com/apikey.aspx)
2. Sign up for a free account
3. Get your API key
4. Add it to your `.env` file

## 🚀 Deployment

### Vercel Deployment

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add your environment variable: `VITE_OMDB_API_KEY`
   - Deploy!

### Other Platforms

The application can be deployed to any platform that supports static sites:
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting

## 🎯 API Usage

The application makes the following API calls:

- **Search Movies**: `GET https://www.omdbapi.com/?apikey=KEY&s=QUERY&page=PAGE`
- **Movie Details**: `GET https://www.omdbapi.com/?apikey=KEY&i=IMDB_ID&plot=full`

## 🛡️ Error Handling

The application includes comprehensive error handling for:
- Network connectivity issues
- API rate limiting
- Invalid search queries
- Missing movie data
- Server errors

## 🎨 Customization

### Styling
- Modify `src/styles/index.css` for custom styling
- CSS variables are used for easy theme customization
- Responsive breakpoints can be adjusted

### Components
- All components are modular and reusable
- Easy to extend with additional features
- Well-documented with clear prop interfaces

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [OMDB API](http://www.omdbapi.com/) for providing the movie data
- [React](https://reactjs.org/) for the amazing framework
- [Vite](https://vitejs.dev/) for the fast build tool
- [React Router](https://reactrouter.com/) for client-side routing

## 📞 Support

If you have any questions or run into issues, please:

1. Check the [Issues](https://github.com/yourusername/Movie_Explorer/issues) page
2. Create a new issue with detailed information
3. Include your environment details and error messages

---

Made with ❤️ using React and Vite
