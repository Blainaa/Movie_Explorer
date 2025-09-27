// Simple test to verify OMDB API integration
// Run with: node test-api.js

const API_KEY = process.env.VITE_OMDB_API_KEY || 'demo';

async function testOMDBAPI() {
  console.log('🧪 Testing OMDB API Integration...\n');
  
  try {
    // Test search functionality
    console.log('1. Testing movie search...');
    const searchResponse = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=batman&page=1`
    );
    const searchData = await searchResponse.json();
    
    if (searchData.Response === 'True') {
      console.log('✅ Search API working!');
      console.log(`   Found ${searchData.Search.length} movies`);
      console.log(`   First result: ${searchData.Search[0].Title} (${searchData.Search[0].Year})`);
    } else {
      console.log('❌ Search API failed:', searchData.Error);
    }
    
    // Test movie details functionality
    console.log('\n2. Testing movie details...');
    const detailsResponse = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&i=tt0372784&plot=full`
    );
    const detailsData = await detailsResponse.json();
    
    if (detailsData.Response === 'True') {
      console.log('✅ Details API working!');
      console.log(`   Movie: ${detailsData.Title}`);
      console.log(`   Year: ${detailsData.Year}`);
      console.log(`   Plot: ${detailsData.Plot.substring(0, 100)}...`);
    } else {
      console.log('❌ Details API failed:', detailsData.Error);
    }
    
    console.log('\n🎉 API test completed!');
    console.log('\n📝 Next steps:');
    console.log('1. Get your API key from: http://www.omdbapi.com/apikey.aspx');
    console.log('2. Create a .env file with: VITE_OMDB_API_KEY=your_key_here');
    console.log('3. Run: npm run dev');
    console.log('4. Open: http://localhost:3000');
    
  } catch (error) {
    console.log('❌ API test failed:', error.message);
    console.log('\n💡 Make sure you have an internet connection and a valid API key.');
  }
}

testOMDBAPI();
