import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';


const NotFoundPage = () => (
  <div>
    <h1>404! - <Link to="/">Go Home!</Link></h1>
  </div>
);
export default NotFoundPage;
