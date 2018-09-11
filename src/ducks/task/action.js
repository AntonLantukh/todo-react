const ADD_REQUEST = `ADD_REQUEST`;
const CHANGE_VISIBILITY_FILTER = 'CHANGE_VISIBILITY_FILTER';

export const addRequest = task => {
  return {
    type: ADD_REQUEST,
    payload: { task, done: false }
  };
};

export const changeFilter = value => {
  return {
    type: CHANGE_VISIBILITY_FILTER,
    payload: value
  };
};

