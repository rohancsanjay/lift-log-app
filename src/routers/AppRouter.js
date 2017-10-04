import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Header from '../components/Header.js';
import NotFoundPage from '../components/NotFound.js';
import AddExpensePage from '../components/AddLift';
import EditExpensePage from '../components/EditLift';
import HelpExpensePage from '../components/Help';
import ExpenseDashboardPage from '../components/LiftDashboardPage';


const AppRouter = () => (
  <BrowserRouter>
    <div>
    <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true}/>
        <Route path="/create" component={AddExpensePage}/>
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpExpensePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
