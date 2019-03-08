import {RECEIVE_LIST_ITEMS, RECEIVE_LIST_ITEM, REMOVE_LIST_ITEM} from '../actions/list_actions';

const listsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LIST_ITEMS:
      return action.payload.movies;
    case RECEIVE_LIST_ITEM:
      return Object.assign({}, state, {[action.movie.id]: action.movie});
    case REMOVE_LIST_ITEM:
      let newState = Object.assign({}, state, {});
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

export default listsReducer;