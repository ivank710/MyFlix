import * as ListUtil from '../util/list_api_util';

export const RECEIVE_LIST_ITEM = 'RECEIVE_LIST_ITEM';
export const RECEIVE_LIST_ITEMS = 'RECEIVE_LIST_ITEMS';
export const REMOVE_LIST_ITEM = 'REMOVE_LIST_ITEM';

export const receiveListItems = (payload) => ({
  type: RECEIVE_LIST_ITEMS,
  payload
});

export const receiveListItem = (movie) => ({
  type: RECEIVE_LIST_ITEM,
  movie
});

export const removeListItem = list => ({
  type: REMOVE_LIST_ITEM,
  id: list.movie_id
});

export const fetchListItems = () => dispatch => {
  return ListUtil.fetchListItems()
  .then((payload) => dispatch(receiveListItems(payload)));
};

export const createListItem = (movieId) => (dispatch, getState) => {
  return ListUtil.createListItem(movieId)
  .then((item) => {
    const movie = getState().entities.movies[item.movie_id]
    return dispatch(receiveListItem(movie));
  })
};

export const deleteListItem = (id) => dispatch => {
  return ListUtil.deleteListItem(id)
    .then((list) => {
      return dispatch(removeListItem(list));
  });
};
