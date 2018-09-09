import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { addRequest } from './action';

const records = handleActions(
  {
    [addRequest]: (_state, action) => ({..._state.records, action.payload })
  },
  []
);

export default combineReducers({
  records
});
