import { createActions } from 'redux-actions';

export const {
  task: { addRequest }
} = createActions({
  TASK: {
    ADD_REQUEST: null
  }
});
