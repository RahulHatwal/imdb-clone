const initialState = {
  signedUp: false,
  message: null,
  error: null,
};

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNUP_SUCCESS":
      return {
        ...state,
        signedUp: true,
        message: action.payload.message,
        error: null,
      };
    case "SIGNUP_ERROR":
      return {
        ...state,
        signedUp: false,
        message: action.payload.message,
        error: action.payload.message,
      };
    default:
      return state;
  }
};

export default signupReducer;
