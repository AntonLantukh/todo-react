import TYPES from './types';

export const addRequest = task => {
  return {
    type: TYPES.ADD_REQUEST,
    payload: { task, done: false }
  };
};

export const changeFilter = value => {
  return {
    type: TYPES.CHANGE_VISIBILITY_FILTER,
    payload: value
  };
};

export const completeTask = id => {
  return {
    type: TYPES.COMPLETE_TASK,
    payload: id
  };
};
