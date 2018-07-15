import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import "./todoPage.css";

export default class ToDoPage extends Component {
  constructor() {
    super();

    this.state = {
      value: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.state.value && this.props.addToDo(this.state.value);
    this.setState({ value: "" });
    event.preventDefault();
  }

  handleToggle(event) {
    const id = event.target.dataset.id;
    this.props.toggleToDo(id);
  }

  render() {
    return (
      <div className="todos-container">
        {this.props.todos.map((item, index) => {
          const completedClass = item.completed ? "completedClass" : "";
          const checked = item.completed;
          return (
            <div className="todoItem" key={index}>
              <input
                data-id={item.id}
                onClick={this.handleToggle}
                type="checkbox"
                checked={checked}
              />
              <p className={completedClass}>{item.text + ""}</p>
              <button className="deleteBtn">x</button>
            </div>
          );
        })}

        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
              placeholder="Add a to do …"
            />
          </label>
          <input type="submit" value="Add To do" className="submitBtn" />
        </form>
      </div>
    );
  }
}

ToDoPage.propTypes = {
  todos: PropTypes.array,
  addToDo: PropTypes.func,
  toggleToDo: PropTypes.func
};
