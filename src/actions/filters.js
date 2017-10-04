export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});
export const sortByWeight = (weight = '') => ({
  type: 'SORT_BY_WEIGHT',
  weight
});
export const sortByDate = () => ({
  type: 'SORT_BY_DATE',
});
export const setStartDate = (SetStartDate) => ({
  type: 'SET_START_DATE',
  SetStartDate
});
export const setEndDate = (SetEndDate) => ({
  type: 'SET_END_DATE',
  SetEndDate
});
