export const LOGGED_IN = (user, token, role) => {
  // debugger;
  return {
    type: "LOGGED_IN",
    payload: {
      ...user,
      token: token,
      role: role,
    },
  };
};

export const LOGGED_OUT = () => {
  // debugger;
  return {
    type: "LOGGED_OUT",
  };
};
