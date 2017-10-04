import { addRoutine, editRoutine, removeRoutine } from '../actions/routines';

test('should set up remove routine action object', () => {
  const action = removeRoutine({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_ROUTINE',
    id: '123abc'
  })
});

test(`should set up edit routine action object`, () => {
  const action = editRoutine('123abc', { weight: '129' });
  expect(action).toEqual({
    type: 'EDIT_ROUTINE',
    id: '123abc',
    updates: {
      weight: '129'
    }
  });
});

test('Should create addRoutine action object PROVIDED VALUE', () => {
  const routineData = {
    exercise: 'Bicep',
    sets: 3,
    reps: 10,
    weight: 90,
    createdAt: 100
  }
  const action = addRoutine(routineData);
  expect(action).toEqual({
    type: 'ADD_ROUTINE',
    routine: {
      ...routineData,
      id: expect.any(String)
    }
  });
});

test('Should create addRoutine action object DEFAULT VALUE', () => {
const routineData = {
  exercise: "Bench",
  sets: 4,
  reps: 10,
  weight: 100,
  createdAt: 1000
  }
  const action = addRoutine(routineData);
  expect(action).toEqual({
    type: 'ADD_ROUTINE',
    routine: {
     ...routineData,
     id: expect.any(String),
     exercise: "Bench",
     sets: 4,
     reps: 10,
     weight: 100,
     createdAt: 1000

    }
  })
});
