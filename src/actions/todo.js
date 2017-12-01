export const ADD_TO_LIST = 'ADD_TO_LIST'
export const REMOVE_FROM_LIST = 'REMOVE_FROM_LIST'
export const EDIT_TODO = 'EDIT_TODO'

export const addToList = (text) => {
  return {
      type: ADD_TO_LIST,
      payload: text
  };
};

export const removeFromList = (text) => {
  console.log(text);
  return {
      type: REMOVE_FROM_LIST,
      payload: text
  };
};

export const editTodo = (todo) => {
  return {
      type: EDIT_TODO,
      payload: todo
  };
};
