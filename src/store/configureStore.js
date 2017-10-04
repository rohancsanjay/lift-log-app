import { createStore, combineReducers } from 'redux';
import routineReducer from '../reducers/routines';
import filterReducer from '../reducers/filters';

export default () => {
  // Create new Store
  const store = createStore(
    combineReducers({
      routines: routineReducer,
      filters: filterReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
