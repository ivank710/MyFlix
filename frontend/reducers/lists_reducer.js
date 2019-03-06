import {RECEIVE_MOVIE} from '../actions/movies_actions';
import {RECEIVE_CURRENT_USER} from '../actions/session_actions';

const listsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_MOVIE:
      return Object.assign({}, state, { [action.movie.id]: action.movie });
    default:
      return state;
  }
};

export default listsReducer;