/*eslint-disable no-console */
import axios from "axios";

// constants for action types
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const FETCH_API = "FETCH_API";
export const API_ERROR = "API_ERROR";
export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

//define action for todo list
let nextTodoId = 0;

export const addToDo = text => {
  return {
    type: ADD_TODO,
    text,
    id: nextTodoId++
  };
};

export const toggleToDo = id => {
  return {
    type: TOGGLE_TODO,
    id
  };
};

export const visibilityFilter = () => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter: "SHOW_COMPLETED"
  };
};

// define action for increment
export const increment = (counter = 1) => {
  return {
    type: INCREMENT,
    counter
  };
};

// define action for decrement
export const decrement = (counter = 1) => {
  return {
    type: DECREMENT,
    counter
  };
};

export const fetchApiData = url => {
  return dispatch => {
    axios
      .get(url)
      .then(response => response.data)
      .then(apiData => {
        dispatch({
          type: FETCH_API,
          apiData
        });
      })
      .catch(error => {
        dispatch({
          type: API_ERROR,
          error
        });
      });
  };
};
