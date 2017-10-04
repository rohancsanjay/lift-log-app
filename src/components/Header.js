import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';


const Header = () => (
  <header>
    <h1>Lift Log</h1>
    <p>Home- <NavLink to="/" activeClassName="is-active" exact={true}>Go</NavLink></p>
    <p>Create Lift- <NavLink to="/create" activeClassName="is-active">Go</NavLink></p>
    <p>Help- <NavLink to="/help" activeClassName="is-active">Go</NavLink></p>
  </header>
);

export default Header;
