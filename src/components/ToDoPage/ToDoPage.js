import React, { Component } from "react";
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
    this.handleDelete = this.handleDelete.bind(this);
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
    const id = Number(event.target.dataset.id);
    this.props.toggleToDo(id);
  }

  handleDelete(event) {
    const id = Number(event.target.dataset.id);
    this.props.deleteToDo(id);
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
                onChange={this.handleToggle}
                type="checkbox"
                checked={checked}
              />
              <p className={completedClass}>{item.text + ""}</p>
              <button
                data-id={item.id}
                onClick={this.handleDelete}
                className="deleteBtn"
              >
                x
              </button>
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
  todos: PropTypes.array.isRequired,
  addToDo: PropTypes.func.isRequired,
  toggleToDo: PropTypes.func.isRequired,
  deleteToDo: PropTypes.func.isRequired
};
