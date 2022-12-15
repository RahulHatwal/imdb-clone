import axios from "axios";

export const signup = (email, password, firstname, lastname,API_URI) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        API_URI,
        {
          firstName: firstname,
          lastName: lastname,
          email: email,
          password: password,
        }
      );
      dispatch({ type: "SIGNUP_SUCCESS", payload: response.data });
    } catch (err) {
      dispatch({ type: "SIGNUP_ERROR", payload: err});
    }
  };
};
