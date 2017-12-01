import React, { Component } from 'react'

import { connect } from 'react-redux'

import Todo from './Todo'

export class TodoList extends Component {

  render () {
    if(this.props.todos) {
      const theTodos = this.props.todos.map(todo => {
        return <Todo key={todo.id} todo={todo} />
      })
      return (
        <div>
          <ul>
            {theTodos}
          </ul>
        </div>
      )
    } else {
      return (
        <div>
          <h3>List some todos!</h3>
        </div>
      )
    }
  }
}

function mapStateToProps(state, props) {
    return {
        todos: state.todos
    };
}


export default connect(mapStateToProps, null)(TodoList);
