import React, { Component } from 'react'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { editTodo } from '../actions/todo';

class EditTodoForm extends Component {
  state = {
    id: this.props.todo.id,
    title: this.props.todo.title
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.editTodo(this.state)
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>Edit todo:
          <input
            type="text"
            value={this.state.title}
            onChange={(e) => this.setState({title: e.target.value})}
          />
        <button type="submit">Change</button>
        </p>

      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
    return {
        editTodo: bindActionCreators(editTodo, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(EditTodoForm);
