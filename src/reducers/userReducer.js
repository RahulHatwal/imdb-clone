const userReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOGGED_IN":
      return {...action.payload, isLoggedIn : true};
    case "LOGGED_OUT":
      return {isLoggedIn : false};

    default:
      return state;
  }
};

export default userReducer;
