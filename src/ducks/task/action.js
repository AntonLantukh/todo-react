const ADD_REQUEST = `ADD_REQUEST`;

export const addRequest = task => {
  return {
    type: ADD_REQUEST,
    payload: { task, done: false }
  };
};
