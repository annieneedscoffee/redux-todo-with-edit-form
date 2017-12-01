import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

export class TodoInput extends Component {

  render() {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={ handleSubmit }>
        <div>
          <label htmlFor="title">Title: </label>
          <Field name="title" component="input" type="text" />
          <button type="submit">Submit</button>
        </div>
      </form>
    )
  }
}

TodoInput = reduxForm({
  // a unique name for the form
  form: 'todo'
})(TodoInput)

export default TodoInput;
