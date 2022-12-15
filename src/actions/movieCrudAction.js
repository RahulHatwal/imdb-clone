import axios from "axios";

export const ADD_MOVIE = "ADD_MOVIE";
export const UPDATE_MOVIE = "UPDATE_MOVIE";
export const DELETE_MOVIE = "DELETE_MOVIE";
const token = localStorage.getItem("token");
export const ADD_MOVIE_PENDING = "ADD_MOVIE_PENDING";
export const ADD_MOVIE_SUCCESS = "ADD_MOVIE_SUCCESS";
export const ADD_MOVIE_FAILURE = "ADD_MOVIE_FAILURE";

export const UPDATE_MOVIE_PENDING = "UPDATE_MOVIE_PENDING";
export const UPDATE_MOVIE_SUCCESS = "UPDATE_MOVIE_SUCCESS";
export const UPDATE_MOVIE_FAILURE = "UPDATE_MOVIE_FAILURE";

export const DELETE_MOVIE_PENDING = "DELETE_MOVIE_PENDING";
export const DELETE_MOVIE_SUCCESS = "DELETE_MOVIE_SUCCESS";
export const DELETE_MOVIE_FAILURE = "DELETE_MOVIE_FAILURE";

export function addMovie(movie) {
  return async (dispatch) => {
    dispatch({ type: ADD_MOVIE_PENDING });
    try {
      // Make API call to add movie
      const response = await axios.post(
        "http://localhost:2323/api/v1/movie",
        {
          headers: {
            authorization: `bearer ${token}`,
          },
        },
        movie
      );
      dispatch({
        type: ADD_MOVIE_SUCCESS,
        movie: response.data.movie,
        message: response.data.message,
      });
    } catch (error) {
      dispatch({
        type: ADD_MOVIE_FAILURE,
        error,
      });
    }
  };
}

export function updateMovie(movie) {
  return async (dispatch) => {
    dispatch({ type: UPDATE_MOVIE_PENDING });
    try {
      // Make API call to update movie
      const response = await axios.put(
        `/api/movies/${movie.id}`,
        {
          headers: {
            authorization: `bearer ${token}`,
          },
        },
        movie
      );
      dispatch({
        type: UPDATE_MOVIE_SUCCESS,
        movie: response.data.movie,
        message: response.data.message,
        success: response.data.success,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_MOVIE_FAILURE,
        error,
      });
    }
  };
}

export function deleteMovie(id) {
  return async (dispatch) => {
    dispatch({ type: DELETE_MOVIE_PENDING });
    try {
      // Make API call to delete movie
      const response = await axios.delete(`http://localhost:2323/api/v1/movie/${id}`);
      dispatch({
        type: DELETE_MOVIE_SUCCESS,
        success: response.data.success,
        message: response.data.message,
        movie: response.data.movie,
        id,
      });
    } catch (error) {
      dispatch({
        type: DELETE_MOVIE_FAILURE,
        error,
      });
    }
  };
}
