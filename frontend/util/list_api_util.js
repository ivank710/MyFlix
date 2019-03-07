export const createListItem = (list) => (
  $.ajax({
    method: `post`,
    url: `/api/lists`,
    data: {list}
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


