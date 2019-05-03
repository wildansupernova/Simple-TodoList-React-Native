export const UPDATE_DATA_TODOS = 'TODOS_CHANGE';

export const updateTodos = data => ({
  type: UPDATE_DATA_TODOS,
  payload: data,
});
