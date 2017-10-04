import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import RoutineForm from './RoutineForm';
import {addRoutine} from '../actions/routines';


const AddRoutinePage = (props) => (
  <div>
    <h1>Add a Lift</h1>
    <RoutineForm
      onSubmit={(routine) => {
        props.dispatch(addRoutine(routine));
        props.history.push('/');
        console.log(routine);
      }}
    />
  </div>
);
export default connect()(AddRoutinePage);
