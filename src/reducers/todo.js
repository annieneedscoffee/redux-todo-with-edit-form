import {
  ADD_TO_LIST,
  REMOVE_FROM_LIST,
  EDIT_TODO
} from '../actions/todo'

export default(state = [], action) => {
  switch (action.type) {
    case ADD_TO_LIST:
      return [
        ...state, {
          title: action.payload,
          completed: false,
          id: makeId()
        }
      ];
    case REMOVE_FROM_LIST:
      return state.filter(item => item !== action.payload);
    case EDIT_TODO:
      let otherTodos = state.filter(todo => todo.id != action.payload.id)
      let newTodo = {
        title: action.payload.title,
        id: action.payload.id
      }
      return [...otherTodos, newTodo];
    default:
      return state;
  }
};

var counter = 0;
function makeId() {
  return counter++;
}
