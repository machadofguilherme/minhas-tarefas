const initialState = {
  list: [],
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CONTENT':
      return {list: [...state.list, action.list]};
      case 'REMOVE_CONTENT':
        return {list: [...action.list]};
    default:
      return state;
  };
}

export default listReducer;