import TYPES from './types';

const initialState = {
  records: [],
  visibility: 'all'
};

export default function records(state = initialState, action) {
  switch (action.type) {
    case TYPES.ADD_REQUEST:
      const countTasks = state.records.length;
      const newRecord = Object.assign({}, action.payload, { id: countTasks });
      return {
        ...state,
        records: [...state.records, newRecord]
      };
    case TYPES.CHANGE_VISIBILITY_FILTER:
      return {
        ...state,
        visibility: action.payload
      };
    case TYPES.COMPLETE_TASK:
      const tasks = state.records.map((item, id) => {
        if (id === action.payload) {
          item.done = true;
        }
        return item;
      });
      return {
        ...state,
        records: tasks
      };
    default:
      return state;
  }
}
