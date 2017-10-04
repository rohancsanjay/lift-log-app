import React from 'react';
import {Link} from 'react-router-dom';


const RoutineListItem = ({ id, weight, sets, reps, createdAt, exercise }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{exercise}</h3>
    </Link>
    <p> { sets } <b>for</b> { reps } </p>
    <p>{ weight }</p>

    <hr></hr>
  </div>
);

export default RoutineListItem;
