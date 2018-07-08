import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ToDoPage extends Component {
  constructor() {
    super();

    this.state = { value: "" };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    console.log("this.props", this.props);
    this.props.todo(this.state.value, 1);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <div>
          {this.props.todoReducer.map((item, index) => {
            return <h4 key={index}>{item.text}</h4>;
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
  todoReducer: PropTypes.array,
  todo: PropTypes.func
};
