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
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.props.addToDo(this.state.value);
    event.preventDefault();
  }

  handleToggle(event) {
    const id = event.target.dataset.id;
    this.props.toggleToDo(id);
  }

  render() {
    return (
      <div>
        <div>
          {this.props.todos.map((item, index) => {
            let completedClass = item.completed ? "completedClass" : "";
            return (
              <div key={index}>
                <h4 className={completedClass}>
                  {item.text + ""}
                  <button data-id={item.id} onClick={this.handleToggle}>
                    COMPLETE
                  </button>
                </h4>
              </div>
            );
          })}
        </div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Todo:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
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
