import { connect } from "react-redux";
import ToDoPage from "./ToDoPage.js";
import * as Actions from "../../actions/actions";

function mapStateToProps(state) {
  console.log("state", state.todos);
  return {
    todos: state.todos
  };
}

const mapDispatchToProps = {
  addToDo: Actions.addToDo,
  toggleToDo: Actions.toggleToDo
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoPage);
