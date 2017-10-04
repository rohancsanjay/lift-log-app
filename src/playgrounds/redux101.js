import { createStore } from 'redux';

const incrementCount = ({incrementBy = 1} = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ({resetBy = 0} = {}) => ({
  type: 'RESET',
  resetBy
});

// Reducers
// 1. pure function
// 2. never change state or action 
const countReducer = (state = { count: 0 }, action) => {
switch (action.type){
  case 'INCREMENT':
    return {
      count: state.count + action.incrementBy
    };
    case 'DECREMENT':

    return {
      count: state.count - action.decrementBy
    };
    case 'RESET':
    return {
      count: action.resetBy
    };
    case 'SET':
    return {
      count: action.count
    };
    default:
    return state;
  }
};


const store = createStore(countReducer);


store.dispatch(incrementCount());
store.dispatch(incrementCount());

//
// unsubscribe();
store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy: 10}));
store.dispatch(decrementCount({decrementBy: 10}));
store.dispatch(decrementCount({decrementBy: 10}));
store.dispatch(setCount());
