const initialState = {
  isAuthenticated: false,
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
        ...action.payload.user,
        ...action.payload.admin,
        token: action.payload.token,
        success: action.payload.success,
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
