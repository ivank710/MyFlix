export const createListItem = (list_item) => (
  $.ajax({
    method: `post`,
    url: `/api/lists`,
    list_item
  })
);

export const fetchListItems = () => (
  $.ajax({
    method: `get`,
    url: `/api/lists`,
  })
);

export const deleteListItem = (id) => (
  $.ajax({
    method: `destroy`,
    url: `/api/lists/${id}`
  })
);



