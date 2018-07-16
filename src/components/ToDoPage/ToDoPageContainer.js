import { connect } from "react-redux";
import ToDoPage from "./ToDoPage.js";
import * as actions from "../../actions/actions";

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = {
  addToDo: actions.addToDo,
  toggleToDo: actions.toggleToDo,
  deleteToDo: actions.deleteToDo
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoPage);
