import axios from "axios";
import { setLoading, setLoaded } from "./loadingActions";
import { fetchMovies } from "./fetchMovieActions";

export const loginRequest = () => ({
  type: "LOGIN_REQUEST",
});

export const loginSuccess = (data) => ({
  type: "LOGIN_SUCCESS",
  payload: data,
});

export const loginError = (error) => ({
  type: "LOGIN_ERROR",
  payload: error,
});

export const logout = () => ({
  type: "LOGOUT",
});

export const setUserRole = (role) => ({
  type: "SET_USER_ROLE",
  payload: role,
});

export const login = (email, password, loginURI, role) => {
  return (dispatch) => {
    dispatch(loginRequest());
    dispatch(setLoading());
    return axios
      .post(loginURI, { email, password })
      .then((response) => {
        dispatch(loginSuccess(response.data));
        dispatch(setLoaded());
        dispatch(setUserRole(role));
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("role", role);
        dispatch(fetchMovies());
      })
      .catch((error) => {
        dispatch(loginError(error.message));
        dispatch(setLoaded());
      });
  };
};
