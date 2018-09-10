const ADD_REQUEST = `ADD_REQUEST`;
const initialState = {
  records: []
};

export default function records(state = initialState, action) {
  switch (action.type) {
    case ADD_REQUEST:
      return {
        ...state,
        records: [...state.records, action.payload]
      };
    default:
      return state;
  }
}
