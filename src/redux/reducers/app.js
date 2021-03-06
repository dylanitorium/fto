// Action Types
export const types = {
  INITIALIZE: 'app/initialize',
};


// Action Creators
export const initialize = () => ({
  type: types.INITIALIZE,
});

// Reducer
const initialState = {
  initialized: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INITIALIZE:
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

export default reducer;

