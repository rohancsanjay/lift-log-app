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

console.log(visibileRoutines);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
