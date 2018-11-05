import {
  ADD_TODO
} from './../actions/todos';

import {
  ADD_GOAL
} from './../actions/goals';

/**
 * Middleware for intercept task related to bitcoins. 
 *
 */
const checker = (store) => (next) => (action) => {
  if (action.type === ADD_TODO && action.todo.name.toLowerCase().includes('bitcoin')) {
    return alert('Nope! That is a bad idea');
  } 

  if (action.type === ADD_GOAL && action.goal.name.toLowerCase().includes('bitcoin')) {
    return alert('Nope! That is a bad idea');
  } 

  return next(action); 
}

export default checker;