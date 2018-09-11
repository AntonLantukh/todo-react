const ADD_REQUEST = `ADD_REQUEST`;
const CHANGE_VISIBILITY_FILTER = 'CHANGE_VISIBILITY_FILTER';

const initialState = {
  records: [],
  visibility: 'all'
};

export default function records(state = initialState, action) {
  switch (action.type) {
    case ADD_REQUEST:
      return {
        ...state,
        records: [...state.records, action.payload]
      };
      case CHANGE_VISIBILITY_FILTER:
      return {
        ...state,
        records: [...state.records, action.payload],
        visibility: action.payload
      };
    default:
      return state;
  }
}
