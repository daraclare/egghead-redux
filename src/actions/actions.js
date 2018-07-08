/*eslint-disable no-console */
import axios from "axios";

// constants for action types
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const FETCH_API = "FETCH_API";
export const API_ERROR = "API_ERROR";
export const TODO = "TODO";

//define action for todo list
export const todo = (text, id) => {
  return {
    type: TODO,
    text,
    id
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
