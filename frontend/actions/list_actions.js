import * as ListUtil from '../util/list_api_util';

export const RECEIVE_LIST_ITEM = 'RECEIVE_LIST_ITEM';
export const RECEIVE_LIST_ITEMS = 'RECEIVE_LIST_ITEMS';
export const REMOVE_LIST_ITEM = 'REMOVE_LIST_ITEM';

export const receiveListItems = (payload) => ({
  type: RECEIVE_LIST_ITEMS,
  payload
});

export const receiveListItem = (list_item) => ({
  type: RECEIVE_LIST_ITEM,
  list_item
});

export const removeListItem = movie => ({
  type: REMOVE_LIST_ITEM,
  id: movie.id
});

export const fetchListItems = () => dispatch => {
  return ListUtil.fetchListItems()
  .then((payload) => dispatch(receiveListItems(payload)));
};

export const createListItem = (data) => dispatch => {
  return ListUtil.createListItem(data)
  .then((item) => dispatch(receiveListItem(item)));
};

export const deleteListItem = (id) => dispatch => {
  return ListUtil.deleteListItem(id)
  .then((id) => dispatch(removeListItem(id)));
};
