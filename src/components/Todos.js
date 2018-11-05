import React from 'react';
import { connect } from 'react-redux';
import List from './List';
import {
  handleAddTodo,
  handleDeleteTodo,
  handleToogleTodo
} from './../actions/todos';

class Todos extends React.Component {

  addItem = (event) => {
    event.preventDefault();
    this.props.dispatch(handleAddTodo(this.input.value, () => this.input.value = ''));
  }

  removeItem = (todo) => {
    this.props.dispatch(handleDeleteTodo(todo));
  }

  toogleItem = (todo) => {
    this.props.dispatch(handleToogleTodo(todo));
  }
  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <input 
          type="input"
          placeholder="Add Todo"
          ref={(input) => this.input = input}
        />
        <button onClick={this.addItem}>Add todo</button>
        <List 
          id='todos'
          toogle={this.toogleItem}
          remove={this.removeItem} 
          items={this.props.todos}
        />
      </div>
    )
  }
}

export default connect((state) => ({
  todos: state.todos
}))(Todos);