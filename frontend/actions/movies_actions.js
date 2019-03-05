import * as MovieUtil from '../util/movie_api_util';

export const RECEIVE_MOVIE = "RECEIVE_MOVIE";
export const RECEIVE_MOVIES = "RECEIVE_MOVIES";

const receiveMovie = (movie) => ({
  type: RECEIVE_MOVIE,
  movie
});

const receiveMovies = (movies) => ({
  type: RECEIVE_MOVIES,
  movies
});

export const fetchMovie = (id) => dispatch => (
  MovieUtil.fetchMovie(id).then(movie => (
    dispatch(receiveMovie(movie))
  ))
);

export const fetchMovies = () => dispatch => (
  MovieUtil.fetchMovies().then(movies => (
    dispatch(receiveMovies(movies))
  ))
);




