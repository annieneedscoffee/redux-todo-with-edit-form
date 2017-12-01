import React from 'react'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as todoActions from '../actions/todo';
import EditTodoForm from './EditTodoForm'

class Todo extends React.Component {
  state = { toggleEdit: false }
  toggleEditForm = () => {
    this.setState({ toggleEdit: !this.state.toggleEdit })
  }
  render() {
    return (
      <li
        key={this.props.todo.id}>
          {this.props.todo.title}
          <button
            onClick={() => this.props.actions.removeFromList(this.props.todo)}>
            x
          </button>
          <button
            onClick={() => this.toggleEditForm()}>
            Edit
          </button>
          {this.state.toggleEdit && <EditTodoForm todo={this.props.todo} />}
      </li>
    )
  }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(todoActions, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(Todo);
