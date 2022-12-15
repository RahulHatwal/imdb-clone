import axios from "axios";
import { useSelector } from "react-redux";
// Action types
const FETCH_MOVIES_PENDING = "FETCH_MOVIES_PENDING";
const FETCH_MOVIES_SUCCESS = "FETCH_MOVIES_SUCCESS";
const FETCH_MOVIES_FAILED = "FETCH_MOVIES_FAILED";
const token = localStorage.getItem("token");

// Action creators
const fetchMoviesPending = () => ({
  type: FETCH_MOVIES_PENDING,
});

const fetchMoviesSuccess = (movies) => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: movies,
});

const fetchMoviesFailed = (error) => ({
  type: FETCH_MOVIES_FAILED,
  payload: error,
});

// Async thunk action
export const fetchMovies = () => {
  return async (dispatch) => {
    try {
      console.log(token);
      dispatch(fetchMoviesPending());
      const response = await axios.get("http://localhost:2323/api/v1/movie", {
        headers: {
          authorization: `bearer ${token}`,
        },
      });
      dispatch(fetchMoviesSuccess(response.data));
    } catch (error) {
      dispatch(fetchMoviesFailed(error));
    }
  };
};
