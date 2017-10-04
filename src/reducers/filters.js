import moment from 'moment';

// filter reducer

const filterReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
};
export default (state = filterReducerDefaultState, action) => {
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
