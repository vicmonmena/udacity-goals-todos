import API from 'goals-todos-api';
export const RECEIVE_DATA = 'RECEIVE_DATA';

/**
 * Action creator
 * 
 * @param {any} id 
 * @returns 
 */
function receiveData(todos, goals) {
  return {
    type: RECEIVE_DATA,
    todos,
    goals
  }
}

/**
 * Action creator wich returns a function
 * 
 * @returns a function
 */ 
export function handleInitialData() {
  return (dispatch) => {
    Promise.all([API.fetchTodos(), API.fetchGoals()])
      .then(([todos, goals]) => {
        dispatch(receiveData(todos, goals));
      });
  }
}