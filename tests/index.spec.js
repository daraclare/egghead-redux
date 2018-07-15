/* eslint-disable no-var */

// import React from "react";
// import HomePage from "../src/components/HomePage/HomePage.js";
import expect from "expect";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import deepFreeze from "deep-freeze";
import todos from "../src/reducers/todoReducer.js";
// import * as types from "../src/actions/actions.js";

configure({ adapter: new Adapter() });

describe("HomePage tag test", () => {
  it("tests toggleToDo", () => {
    const stateBefore = [
      {
        id: 0,
        text: "Learn Redux",
        completed: false
      },
      {
        id: 1,
        text: "Go Shopping",
        completed: false
      }
    ];
    const stateAfter = [
      {
        id: 0,
        text: "Learn Redux",
        completed: true
      },
      {
        id: 1,
        text: "Go Shopping",
        completed: false
      }
    ];

    const toggleToDoAction = {
      type: "TOGGLE_TODO",
      id: 0
    };

    deepFreeze(stateBefore);
    deepFreeze(toggleToDoAction);

    expect(todos(stateBefore, toggleToDoAction)).toEqual(stateAfter);
  });

  it("test addToDo", () => {
    const stateBefore = [];
    const addToDoAction = {
      type: "ADD_TODO",
      id: 0,
      text: "Learn Redux"
    };

    const stateAfter = [
      {
        id: 0,
        text: "Learn Redux",
        completed: false
      }
    ];

    deepFreeze(stateBefore);
    deepFreeze(addToDoAction);

    expect(todos(stateBefore, addToDoAction)).toEqual(stateAfter);
  });
});
