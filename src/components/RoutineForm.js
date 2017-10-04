import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

const now = moment();
console.log(now.format('MMM D, YYYY'));
export default class RoutineForm extends React.Component {
constructor(props){
  super(props);
  this.state = {
    exercise: props.routine ? props.routine.exercise : '',
    weight: props.routine ? (props.routine.weight / 100).toString() : '',
    sets: props.routine ? props.routine.sets: '',
    reps: props.routine ? props.routine.reps: '',
    error: '',
    id: '',
    createdAt: props.expense ? moment(props.routine.createdAt): moment(),
    calenderFocused: false
  };
}

  onSetChange = (e) => {
    const sets = e.target.value;
    this.setState(() => ({ sets }));
  };
  onRepChange = (e) => {
    const reps = e.target.value;
    this.setState(() => ({ reps }));
  };
  onExerciseChange = (e) => {
    const exercise = e.target.value;
    this.setState(() => ({ exercise }));
  };
  onWeightChange = (e) => {
    const weight = e.target.value;
    if (weight.match(/^\d*(\.\d{0,2})?$/)){
      this.setState(() => ({ weight }));
    }
  };

  onDateChange = (createdAt) => {
    if(createdAt) {
      this.setState(()=> ({ createdAt }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(()=> ({ calenderFocused: focused }));
  };
  onSubmit = (e) => {
    e.preventDefault();
    if(!this.state.exercise || !this.state.weight){
      // Set an Error State if exercise and amount are empty
      this.setState(()=> ({ error: 'Please Provide an Exercise & Weight' }));
    } else {
      // Clear Error
      this.setState(()=> ({ error: '' }));

      this.props.onSubmit({
        exercise: this.state.exercise,
        weight: this.state.weight,
        sets: this.state.sets,
        reps: this.state.reps,
        createdAt: this.state.createdAt.valueOf()
      });
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
             type="text"
             placeholder="Exercise"
             autoFocus
             value={this.state.exercise}
             onChange={this.onExerciseChange}
          />
          <input
            type="text"
            placeholder="Weight (lbs)(kgs)"
            value={this.state.weight}
            onChange={this.onWeightChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calenderFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
            />
          <input
            type="number"
            placeholder="Sets"
            value={this.state.sets}
            onChange={this.onSetChange}
          />
          <input
            type="number"
            placeholder="Reps"
            value={this.state.reps}
            onChange={this.onRepChange}
          />
        <button>Add Lift</button>
        </form>
      </div>
    )
  }
}
