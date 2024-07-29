import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3"
const api_key = '17f801ac53308e9096de820b48dbfb73'

//?https://api.themoviedb.org/3/movie/popular?api_key=17f801ac53308e9096de820b48dbfb73

const getPopularMovies = axios.get(movieBaseUrl+'/movie/popular?api_key='+api_key)

const getMovieByGenreId = (id) => axios.get(movieBaseUrl+'/discover/movie?api_key='+api_key+'&with_genres='+id)

export default {getPopularMovies, getMovieByGenreId}