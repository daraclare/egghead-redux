/*eslint-disable no-console */
import axios from "axios";

// constants for action types
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const FETCH_API = "FETCH_API";
export const API_ERROR = "API_ERROR";
export const TODO = "TODO";

//define action for todo list
export function todo(text, id) {
  return {
    type: TODO,
    payload: {
      text,
      id
    }
  };
}

// define action for increment
export function increment(counter = 1) {
  return {
    type: INCREMENT,
    payload: {
      counter
    }
  };
}

// define action for decrement
export function decrement(counter = 1) {
  return {
    type: DECREMENT,
    payload: {
      counter
    }
  };
}

export function fetchApiData(url) {
  return dispatch => {
    axios
      .get(url)
      .then(response => response.data)
      .then(apiData => {
        dispatch({
          type: FETCH_API,
          payload: {
            apiData
          }
        });
      })
      .catch(error => {
        dispatch({
          type: API_ERROR,
          payload: {
            error
          }
        });
      });
  };
}
