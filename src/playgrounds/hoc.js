// HIGHER ORDER COMPONENTS (a component that renders another component)
// goal is to reuse code
// render hijacking
// prop manipulation
// abstract state
import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1> Info </h1>
    <p> aklajsdflk;jasdlkjfalksdj{props.info}</p>
  </div>
);



const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin &&
      <p> This is private information please dont disclose </p>
      }
      <WrappedComponent {...props}/>
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />) :
      (
        <p> This user is not authenticated</p>
      )}
    </div>
  );
};

// Require Authentication

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin = {true} info="This is info"/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated = {true} info="This is info"/>, document.getElementById('app'));
