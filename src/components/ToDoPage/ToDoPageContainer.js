import { connect } from "react-redux";
import ToDoPage from "./ToDoPage.js";
import * as Actions from "../../actions/actions";

function mapStateToProps(state) {
  return {
    todoReducer: state.todoReducer
  };
}

const mapDispatchToProps = {
  todo: Actions.todo
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoPage);
