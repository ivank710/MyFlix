import {RECEIVE_MOVIE, RECEIVE_MOVIES} from '../actions/movies_actions';

const moviesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_MOVIES:
      return action.movies;
    case RECEIVE_MOVIE:
      return Object.assign({}, state, { [action.movie.id]: action.movie });
    default:
      return state;
  }
};

export default moviesReducer;