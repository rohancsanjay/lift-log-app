
const routineReducerDefaultState = [];
export default (state = routineReducerDefaultState, action) => {
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
