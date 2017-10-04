import uuid from 'uuid';

// Add routines
export const addRoutine = (
  {
    id = 0,
    exercise = '',
    sets = 0,
    reps = 0,
    weight = 0,
    createdAt = 0 } = {}
) => ({
  type: 'ADD_ROUTINE',
  routine: {
    id: uuid(),
    exercise,
    sets,
    reps,
    weight,
    createdAt
  }
});
// Remove Routine
export const removeRoutine = ({ id } = {}) => ({
  type: 'REMOVE_ROUTINE',
  id
});
// Edit Routine
export const editRoutine = (id, updates) => ({
    type: 'EDIT_ROUTINE',
    id,
    updates
});
