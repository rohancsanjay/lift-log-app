import moment from 'moment';
import { setStartDate, setEndDate, setTextFilter } from '../actions/filters';


test(`Should generate setStartDate action object`, () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    SetStartDate: moment(0)
  });
});

test(`Should generate setEndDate action object`, () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    SetEndDate: moment(0)
  });
});

test(`Should generate setTextFilter action object`, () => {
  const text = "Something"
  const action = setTextFilter(text)
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text
  });
});
