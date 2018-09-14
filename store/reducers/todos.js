import {
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODO,
} from '../constants';

const initialState = {
  todos: [],
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [
          ...state.todos,
          action.todo
        ],
      };
    case UPDATE_TODO:
      let todos = [...state.todos];
      let indexOfUpdate = todos.findIndex((todo) => {
        return todo.title == action.todo.title;
      });
      todos[indexOfUpdate] = action.todo;
      return {
        ...state,
        todos: todos,
      }
    case DELETE_TODO:
      return {
        todos: state.todos.filter((todo) => {
          return todo.title != action.todo.title;
        })
      }
    default:
      return state;
  }
}