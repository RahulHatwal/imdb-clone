const initialState = {
  loading: false,
};

function loadingReducer(state = initialState, action) {
  switch (action.type) {
    case "LOADING":
      return {
        loading: true,
      };
    case "LOADED":
      return {
        loading: false,
      };
    default:
      return state;
  }
}

export default loadingReducer;
