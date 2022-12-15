import axios from "axios";

export const UPLOAD_POSTER_PENDING = "UPLOAD_POSTER_PENDING";
export const UPLOAD_POSTER_SUCCESS = "UPLOAD_POSTER_SUCCESS";
export const UPLOAD_POSTER_FAILURE = "UPLOAD_POSTER_FAILURE";
const token = localStorage.getItem("token");
export function uploadPoster(poster) {
  return async (dispatch) => {
    dispatch({ type: UPLOAD_POSTER_PENDING });
    try {
      // Make API call to upload poster
      const response = await axios.post(
        `http://localhost:2323/api/v1/upload`,
        poster,
        {
          headers: {
            authorization: `bearer ${token}`,
          },
        }
      );
      dispatch({
        type: UPLOAD_POSTER_SUCCESS,
        poster: response.data,
      });
    } catch (error) {
      dispatch({
        type: UPLOAD_POSTER_FAILURE,
        error,
      });
    }
  };
}
