/**
 * This middleware shows messages on developer console browser
 */
const logger = (store) => (next) => (action) => {
  console.group(action.type)
    console.log('[INFO] This action is ', action);
    const result = next(action);
    console.log('[INFO] The new state is ', store.getState());
  console.groupEnd();

  return result; 
}

export default logger;