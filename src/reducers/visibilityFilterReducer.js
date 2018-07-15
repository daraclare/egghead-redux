import * as types from "../actions/actions.js";

export default function visibilityFilter(state = "SHOW_ALL", action) {
  switch (action.type) {
    case types.SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}
