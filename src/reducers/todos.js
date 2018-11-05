import {
  ADD_TODO,
  REMOVE_TODO,
  TOOGLE_TODO
} from './../actions/todos';

import {
  RECEIVE_DATA
} from './../actions/shared';

// Esta función es un REDUCER, porque lo que hace es coger un estado en una action y reducirlo a un nuevo estado.
// 'state = []' esto es de ES6
// Esta función es una PURE FUNCTION
export default function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat([action.todo]); // brand new state  
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    case TOOGLE_TODO:
      return state.map((todo) => todo.id !== action.id ? todo : 
        Object.assign({}, todo, { complete: !todo.complete }));
    case RECEIVE_DATA:
      return action.todos;
    default: return state;
  }
}