import React from 'react';
import { connect } from 'react-redux';
import List from './List';
import {
  handleAddGoal,
  handleDeleteGoal
} from './../actions/goals';

class Goals extends React.Component {
      
  addItem = (event) => {
    event.preventDefault();
    this.props.dispatch(handleAddGoal(this.input.value, () => this.input.value = ''));
  }

  removeItem = (goal) => {
    this.props.dispatch(handleDeleteGoal(goal));
  }

  render() {
    return (
      <div>
        <h1>Goal List</h1>  
        <input 
          type="input"
          placeholder="Add Goal"
          ref={(input) => this.input = input}
        />
        <button onClick={this.addItem}>Add goal</button>
        <List 
          id='goals'
          remove={this.removeItem} 
          items={this.props.goals} 
        />
      </div>
    )
  }
}

export default connect((state) => ({
  goals: state.goals
}))(Goals);