import API from 'goals-todos-api';
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOOGLE_TODO = 'TOOGLE_TODO';

/**
 * Action creator
 * 
 * @param {any} todo 
 * @returns 
 */
function addTodo(todo) {
  return {
    type: ADD_TODO,
    todo,
  }
}

/**
 * Action creator
 * 
 * @param {any} id 
 * @returns 
 */
function removeTodo(id) {
  return {
      type: REMOVE_TODO,
      id,
  }
}

/**
 * Action creator
 * 
 * @param {any} todo 
 * @returns 
 */
function toogleTodo(id) {
  return {
    type: TOOGLE_TODO,
    id,
  }
}

/**
 * Action creator wich returns a function
 * 
 * @param {any} todo
 * @returns a function
 */ 
export function handleAddTodo(todoName, cb) {
  return (dispatch) => {
    return API.saveTodo(todoName)
      .then((todo) => {
        dispatch(addTodo(todo));
        cb();
      }).catch((err) =>{
        alert('An error occurred adding todo item. Please, try again');
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
export function handleDeleteTodo(todo) {
  return (dispatch) => {
    dispatch(removeTodo(todo.id));
    return API.deleteTodo(todo.id).catch((err) => {
      dispatch(addTodo(todo));
      alert('An error occurred removing todo item. Please, try again')
    });
  }
}

/**
 * Action creator wich returns a function
 * 
 * @param {any} todo
 * @returns a function
 */ 
export function handleToogleTodo(todo) {
  return (dispatch) => {

    dispatch(toogleTodo(todo.id));
    return API.saveTodoToggle(todo.id).catch(() => {
      dispatch(toogleTodo(todo.id));
      alert('An error occurred toogling todo item. Please, try again')
    })
  }
}