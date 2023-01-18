const API_KEY = "dcc4b69b437758405b3e09b0c7182428";

const requests = {
  fetchPopularMovies: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
  fetchTopRatedMovies: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`,
  fetchUpcomingMovies: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`,
  fetchNowPlayingMovies: `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`,
  fetchMovie: `https://api.themoviedb.org/3/movie/{movie_id}?api_key=${API_KEY}`,
  search: `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`,
};
export default requests;
