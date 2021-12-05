const API_KEY = '24a3492e03a8502512e1dfec305cb657'

export const fetchGenres = () =>  `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
export const fetchGenreMovies = (id) => `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${id}`
export const searchMovies = (query) => `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
export const getMovieDetail = (movieId) => `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
export const getMovieCredits = (movieId) => `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`
export const getMovieVideos = (movieId) => `https://api.themoviedb.org/3/movie/506558/videos?api_key=${API_KEY}`
export const getSimilarMovies = (movieId) => `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${API_KEY}`
export const getKeywords = (movieId) => `https://api.themoviedb.org/3/movie/${movieId}/keywords?api_key=${API_KEY}`