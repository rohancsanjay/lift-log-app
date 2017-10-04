import moment from 'moment';

// GET VISIBLE ROUTINES
export default (routines, { text, sortBy, title, startDate, endDate }) => {
  return routines.filter((routine)=> {
    const createdAtMoment = moment(routine.createdAt);
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
    const textMatch = routine.exercise.toLowerCase().includes(text.toLowerCase());
    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if(sortBy === 'date'){
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'weight'){
      return a.weight < b.weight ? 1: -1;
    }
  });
};
