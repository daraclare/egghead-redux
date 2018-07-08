import * as types from "../actions/actions.js";

export default function counterReducer(state = 0, action) {
  switch (action.type) {
    case types.INCREMENT:
      return state + action.counter;

    case types.DECREMENT:
      return state - action.counter;

    default:
      return state;
  }
}
