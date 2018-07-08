import { combineReducers } from "redux";
import counter from "./counterReducer";
import apiData from "./apiReducer";
import todoReducer from "./todoReducer";

const rootReducer = combineReducers({
  counter,
  apiData,
  todoReducer
});

export default rootReducer;
