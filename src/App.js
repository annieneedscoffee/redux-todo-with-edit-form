import React, { Component } from 'react';
import './App.css';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as todoActions from './actions/todo';

import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

export class App extends Component {

  mySubmit = (values) => {
    this.props.actions.addToList(values.title)
  }

  render() {
    return (
      <div>
        <TodoInput onSubmit={this.mySubmit}/>
        <TodoList/>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(todoActions, dispatch)
    }
}
export default connect(null, mapDispatchToProps)(App);
