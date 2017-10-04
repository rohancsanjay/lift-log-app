import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';
// Reducers:
// ----------------------
// Add routines
const addRoutine = (
  {
    title = '',
    exercises = '',
    weight = 0,
    createdAt = 0 } = {}
) => ({
  type: 'ADD_ROUTINE',
  routine: {
    id: uuid(),
    title,
    exercises,
    weight,
    createdAt
  }
});
// Remove Routine
const removeRoutine = ({ id } = {}) => ({
  type: 'REMOVE_ROUTINE',
  id
});
// Edit Routine
const editRoutine = (id, updates) => ({
    type: 'EDIT_ROUTINE',
    id,
    updates
});


// Routine Reducers
const routineReducerDefaultState = [];
const routineReducer = (state = routineReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_ROUTINE':
      return [
        ...state,
        action.routine
      ];
    case 'REMOVE_ROUTINE':
      return state.filter(({ id }) => id !== action.id);

    case 'EDIT_ROUTINE':
      return state.map((routine) => {
        if(routine.id === action.id){
          return {
            ...routine,
            ...action.updates
          };
        } else {
          return routine;
        }
      });
    default:
      return state;
  }
};
// Filter Action
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});
const sortByWeight = (weight = '') => ({
  type: 'SORT_BY_WEIGHT',
  weight
});
const sortByDate = () => ({
  type: 'SORT_BY_DATE',
});
const setStartDate = (SetStartDate) => ({
  type: 'SET_START_DATE',
  SetStartDate
});
const setEndDate = (SetEndDate) => ({
  type: 'SET_END_DATE',
  SetEndDate
});
// Filter Reducers
const filterReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};
const filterReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
      ...state,
      text: action.text
    };
    case 'SORT_BY_WEIGHT':
    return {
      ...state,
      sortBy: 'weight'
    };
    case 'SORT_BY_DATE':
    return {
      ...state,
      sortBy: 'date'
    };
    case 'SET_START_DATE':
    return {
      ...state,
      startDate: action.SetStartDate
    };
    case 'SET_END_DATE':
    return {
      ...state,
      endDate: action.SetEndDate
    }
  default:
    return state;
  }
};

// timestamps (ms)
// Jan 1st 1970 (UNIX EPOCH)

// GET VISIBLE ROUTINES
const getVisibleRoutines = (routines, { text, sortBy, startDate, endDate }) => {
  return routines.filter((routine)=> {
    const startDateMatch = typeof startDate !== 'number' || routine.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || routine.createdAt <= endDate;
    const textMatch = routine.title.toLowerCase().includes(text.toLowerCase());
    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if(sortBy === 'date'){
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'weight'){
      return a.weight < b.weight ? 1: -1;
    }
  });
};


// Create new Store
const store = createStore(
  combineReducers({
    routines: routineReducer,
    filters: filterReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleRoutines = getVisibleRoutines(state.routines, state.filters);
  console.log(visibleRoutines);
});


const routineTwo = store.dispatch(addRoutine({ title: 'Leg Day', weight: 200, exercises: 'Squat', createdAt: 1000 }));
const routineOne = store.dispatch(addRoutine({ title: 'Chest', weight: 1505, exercises: 'Bench Press', createdAt: 100 }));
//
// store.dispatch(removeRoutine({ id: routineOne.routine.id }))
//
// store.dispatch(editRoutine(routineTwo.routine.id, {weight: 400}));
//
store.dispatch(sortByWeight());
// store.dispatch(setTextFilter());
// //
// store.dispatch(sortByWeight(100));
// store.dispatch(sortByDate(109));
// //
// store.dispatch(setStartDate(0));
// // store.dispatch(setStartDate());
// store.dispatch(setEndDate(999));


//
// const demoState = {
//   routines: [{
//     id: 'sdfgsdfg',
//     title: 'Chest Day',
//     exercises: 'Bench Press',
//     weight: 220,
//     createdAt: 0
//   }],
//   filters: {
//     text: 'Chest',
//     sortBy: 'date', // Date or Weight Amount
//     startDate: undefined,
//     endDate: undefined
//   }
// };
//
//
// const user = {
//   name: 'jen',
//   age: 23
// }
