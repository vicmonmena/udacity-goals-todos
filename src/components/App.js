import React, { Component } from 'react';
import { connect } from 'react-redux';

import ConnectedTodos from './Todos';
import ConnectedGoals from './Goals';
import { handleInitialData } from './../actions/shared';

class App extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    // Initialing data from action creator thunk
    dispatch(handleInitialData());
  }

  render() {
    const { loading } = this.props;
    if (loading) {
      return (
        <h3>Loading data ...</h3>
      )
    } 
    return(
      <div>
        <ConnectedTodos />
        <ConnectedGoals />
      </div>
    )
  }
}

export default connect((state) => ({
  loading: state.loading
}))(App);
