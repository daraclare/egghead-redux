import { FETCH_API } from "../actions/actions.js";

export default function apiData(state = [], action) {
  switch (action.type) {
    case FETCH_API:
      return action.apiData;

    default:
      return state;
  }
}
