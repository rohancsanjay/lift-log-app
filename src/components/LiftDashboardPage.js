import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import RoutineList from './RoutineList';
import RoutineListFilters from './RoutineListFilters';

const RoutineDashboardPage = () => (
  <div>
    <RoutineListFilters />
    <RoutineList />
  </div>
);
export default RoutineDashboardPage;
