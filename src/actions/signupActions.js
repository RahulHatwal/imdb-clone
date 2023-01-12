import axios from "axios";
import { setLoading, setLoaded } from "./loadingActions";

export const signup = (email, password, firstname, lastname, API_URI) => {
  return async (dispatch) => {
    dispatch(setLoading());
    try {
      const response = await axios.post(API_URI, {
        firstName: firstname,
        lastName: lastname,
        email: email,
        password: password,
      });
      if (response.data.success) {
        dispatch({ type: "SIGNUP_SUCCESS", payload: response.data });
        dispatch(setLoaded());
       
      } else {
        dispatch({ type: "SIGNUP_ERROR", payload: response.data });
        dispatch(setLoaded());
      }
    } catch (err) {
      dispatch({ type: "SIGNUP_ERROR", payload: err });
      dispatch(setLoaded());
    }
  };
};
