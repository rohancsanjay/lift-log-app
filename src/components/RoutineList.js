import React from 'react';
import { connect } from 'react-redux';
import RoutineListItem from './RoutineListItem';
import selectRoutines from '../selectors/routines';

const RoutineList = (props) => (
  <div>
    <h1>Routine List</h1>

    {props.routines.map((routine) => {
        return <RoutineListItem key={routine.id}{...routine}/>;
    })}
  </div>
);

const mapStateToProps = (state) => {
  return {
    routines: selectRoutines(state.routines, state.filters)
  };
};

export default connect(mapStateToProps)(RoutineList);
