import React from 'react';
import {connect} from 'react-redux';
import {DateRangePicker} from 'react-dates';
import {setTextFilter, sortByDate, sortByWeight, setStartDate, setEndDate} from '../actions/filters';


class RoutineListFilters extends React.Component {
 state = {
   calendarFocused: null
 };
 onDatesChange = ({ startDate, endDate }) => {
   this.props.dispatch(setStartDate(startDate));
   this.props.dispatch(setEndDate(endDate));
 };
 onFocusChange = (calendarFocused) => {
   this.setState(() => ({ calendarFocused }));
 };
 render() {
   return (
   <div>
     <input type="text" value={this.props.filters.text} onChange={(e) => {
         this.props.dispatch(setTextFilter(e.target.value));
       }} />
     <select
           value={this.props.filters.sortBy}
           onChange={(e) => {
             if(e.target.value === 'date'){
               this.props.dispatch(sortByDate());
             } else if (e.target.value === 'weight'){
               this.props.dispatch(sortByWeight());
             }
           }}
         >
       <option value="date">Date</option>
       <option value="weight">Weight</option>
     </select>
     <DateRangePicker
       startDate={this.props.filters.startDate}
       endDate={this.props.filters.endDate}
       onDatesChange={this.onDatesChange}
       focusedInput={this.state.calendarFocused}
       onFocusChange={this.onFocusChange}
       showClearDates={true}
       numberOfMonths={2}
       isOutsideRange={() => false}
      />
   </div>
 );
}
}


const mapStateToProps = (state) => {
  return {
      filters: state.filters
  };
};
export default connect(mapStateToProps)(RoutineListFilters);
