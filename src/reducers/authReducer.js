const initialState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  message: null,
  role: "default",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return {
        ...state,
        loading: true,
        message: "Logging in...",
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        ...action.payload,
        message: action.payload.message,
        loading: false,
      };
    case "LOGIN_ERROR":
      return {
        ...state,
        message: action.payload.message,
        loading: false,
      };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        message: "Logged out",
        user: null,
      };
    case "SET_USER_ROLE":
      return {
        ...state,
        role: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
