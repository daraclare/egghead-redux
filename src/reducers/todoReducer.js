import * as types from "../actions/actions.js";

export default function todos(state = [], action) {
  switch (action.type) {
    case types.ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case types.TOGGLE_TODO:
      return state.map(todo => {
        return todo.id === action.id
          ? { ...todo, completed: !todo.completed }
          : todo;
      });

    case types.DELETE_TODO:
      return state.filter(todo => {
        return todo.id !== action.id;
      });
    default:
      return state;
  }
}
