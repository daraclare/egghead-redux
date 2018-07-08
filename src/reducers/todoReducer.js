import * as types from "../actions/actions.js";

export default function todoReducer(state = [], action) {
  switch (action.type) {
    case types.TODO:
      return [
        ...state,
        {
          id: action.payload.id,
          text: action.payload.text,
          completed: false
        }
      ];
    default:
      return state;
  }
}
