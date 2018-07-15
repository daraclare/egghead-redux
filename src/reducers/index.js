import { combineReducers } from "redux";
import counter from "./counterReducer";
import apiData from "./apiReducer";
import todos from "./todoReducer";
import visibilityFilterReducer from "./visibilityFilterReducer";

const rootReducer = combineReducers({
  counter,
  apiData,
  todos,
  visibilityFilterReducer
});

export default rootReducer;
