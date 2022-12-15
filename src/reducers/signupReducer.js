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
      };
    case "SIGNUP_ERROR":
      return {
        ...state,
        signedUp: false,
        message: "Error in signing up",
        error: action.payload,
      };
    default:
      return state;
  }
};

export default signupReducer;
