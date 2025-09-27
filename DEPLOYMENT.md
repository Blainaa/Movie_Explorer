#  Deployment Guide

## Quick Start

### 1. Get Your OMDB API Key
1. Visit [omdbapi.com](http://www.omdbapi.com/apikey.aspx)
2. Sign up for a free account
3. Get your API key (it's free!)

### 2. Set Up Environment Variables
1. Copy `env.example` to `.env`:
   ```bash
   cp env.example .env
   ```
2. Edit `.env` and add your API key:
   ```env
   VITE_OMDB_API_KEY=your_actual_api_key_here
   ```

### 3. Test Locally
```bash
npm run dev
```
Open http://localhost:3000 in your browser.

## Vercel Deployment

### Option 1: Deploy from GitHub
1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/Movie_Explorer.git
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Add environment variable: `VITE_OMDB_API_KEY` = your API key
   - Click "Deploy"

### Option 2: Deploy with Vercel CLI
1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```
   - Follow the prompts
   - Add your environment variable when asked

## Other Deployment Options

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Add environment variable: `VITE_OMDB_API_KEY`

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Deploy: `npm run deploy`

## Environment Variables

Make sure to set these environment variables in your deployment platform:

- `VITE_OMDB_API_KEY` - Your OMDB API key

## Troubleshooting

### Common Issues:
1. **API Key Not Working**: Make sure it's set correctly in environment variables
2. **Build Fails**: Check that all dependencies are installed with `npm install`
3. **Routing Issues**: Make sure your hosting platform supports SPA routing

### Testing Your Deployment:
1. Search for a movie (e.g., "batman")
2. Click on a movie to view details
3. Try adding/removing favorites
4. Test the theme toggle
5. Check mobile responsiveness

## Production Checklist

- [ ] API key is set in environment variables
- [ ] `.env` file is not committed to git
- [ ] Application builds without errors
- [ ] All features work in production
- [ ] Mobile responsive design works
- [ ] Theme toggle works
- [ ] Favorites persist correctly


