import API from 'goals-todos-api';
export const ADD_GOAL = 'ADD_GOAL';
export const REMOVE_GOAL = 'REMOVE_GOAL';

/**
 * Action creator
 * 
 * @param {any} goal 
 * @returns 
 */
function addGoal(goal) {
  return {
      type: ADD_GOAL,
      goal,
  }
}

/**
 * Action creator
 * 
 * @param {any} id 
 * @returns 
 */
function removeGoal(id) {
  return {
      type: REMOVE_GOAL,
      id,
  }
}

/**
 * Action creator wich returns a function
 * 
 * @param {any} goalName
 * @param {any} cb
 * @returns a function
 */ 
export function handleAddGoal(goalName, cb) {
  return (dispatch) => {
    return API.saveGoal(goalName)
      .then((goal) => {
        dispatch(addGoalgoal));
        cb(); // callback for UI modifications or other independant actions from this logic
      }).catch((err) =>{
        alert('An error occurred adding goal item. Please, try again');
        cb();
      });
  }
}

/**
 * Action creator wich returns a function
 * 
 * @param {any} todo
 * @returns a function
 */ 
export function handleDeleteGoal(goal) {
  return (dispatch) => {
    dispatch(removeGoal(goal.id));
    return API.deleteGoal(goal.id).catch((err) => {
      dispatch(addGoal(goal));
      alert('An error occurred removing goal item. Please, try again')
    });
  }
}