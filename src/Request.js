const API_KEY = "b7fbc7ed6141ed359e747d3d4c3d70d5";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language-en=US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,

}

export default requests;

// each reuqest with be added to the baseURL DEFINED IN AXIOS.JS usiong our api_key saved info
// example
// https://api.themoviedb.org/3/discover/movie?api_key=b7fbc7ed6141ed359e747d3d4c3d70d5&with_genres=99

// or 

// https://api.themoviedb.org/3/discover/tv?api_key=b7fbc7ed6141ed359e747d3d4c3d70d5&with_networks=213