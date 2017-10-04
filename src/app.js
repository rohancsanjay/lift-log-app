import React from 'react';
import ReactDOM from 'react-dom';
import { Provider  } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addRoutine } from './actions/routines';
import { setTextFilter } from './actions/filters';
import getVisibleRoutines from './selectors/routines';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addRoutine({ exercise: 'Leg', weight: 135, sets: 3, reps: 10 }));
store.dispatch(addRoutine({ exercise: 'Chest', weight: 140, createdAt: 1000, sets: 3, reps: 10 }));
store.dispatch(addRoutine({ exercise: 'Bicep', weight: 85, createdAt: 100, sets: 3, reps: 10 }));
// store.dispatch(addRoutine({ title: 'Shoulder', weight: 95, createdAt: 250 }));
// store.dispatch(addRoutine({ title: 'Back', weight: 130 }));

const state = store.getState();
const visibileRoutines = getVisibleRoutines(state.routines, state.filters);

console.log(visibileRoutines);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
