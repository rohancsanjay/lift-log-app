import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import RoutineForm from './RoutineForm';
import {editRoutine, removeRoutine} from '../actions/routines';


const EditLiftPage = (props) => {
  return (
  <div>
    <RoutineForm
      routine={props.routine}
      onSubmit={(routine) => {
      // Dispatch to DB
      // Redirect to Dash
      props.dispatch(editRoutine(props.routine.id, routine));
      props.history.push('/');
      }}
       />
       <button onClick={() => {
          props.dispatch(removeRoutine({ id: props.routine.id }));
          props.history.push('/');
         }}>Delete</button>
  </div>
);
};
const mapStateToProps = (state, props) => {
  return {
    routine: state.routines.find((routine) => routine.id === props.match.params.id)
  };
};

export default connect(mapStateToProps)(EditLiftPage);
