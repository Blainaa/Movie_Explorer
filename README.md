#  Movie Explorer

Movie Explorer is a small web app I built with **React** and **Vite**.  
The goal was to practice API integration, routing, and state management by creating something fun: a movie search engine.

You can search for movies by title, browse results with posters and release years, and click on a movie to see more details. I also added a favorites system (saved locally) and a light/dark theme toggle.


##  Features
- Search movies by title (OMDb API)
- Display a list with poster + title + year
- Details page (plot, ratings, cast, etc.)
- Add/remove favorites (saved in `localStorage`)
- Light/Dark theme
- Responsive layout (works on mobile)


##  Tech Stack
- [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/) for navigation
- OMDb API for movie data



## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- An OMDb API key (free from [omdbapi.com](http://www.omdbapi.com/apikey.aspx))

### Installation
```bash
# Clone the repo
git clone https://github.com/Blainaa/Movie_Explorer.git
cd Movie_Explorer

# Install dependencies
npm install

# I Copy the example env file and i add your API key
cp env.example .env
# edit .env and add:
# VITE_OMDB_API_KEY=your_key_here

# Start development server
npm run dev

