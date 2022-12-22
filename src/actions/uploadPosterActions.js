import axios from "axios";
import { setLoading, setLoaded } from "./loadingActions";
export const UPLOAD_POSTER_PENDING = "UPLOAD_POSTER_PENDING";
export const UPLOAD_POSTER_SUCCESS = "UPLOAD_POSTER_SUCCESS";
export const UPLOAD_POSTER_FAILURE = "UPLOAD_POSTER_FAILURE";

export function uploadPoster(e) {
  return async (dispatch) => {
    dispatch({ type: UPLOAD_POSTER_PENDING });
    dispatch(setLoading());
    try {
      // Make API call to upload poster
      const formData = new FormData();
      formData.append("upload", e.target.files[0]);
      dispatch(uploadPoster(formData));
      const response = await axios.post(
        `http://localhost:2323/api/v1/upload`,
        formData,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log("response", response);
      dispatch({
        type: UPLOAD_POSTER_SUCCESS,
        payload: response.data,
      });
      dispatch(setLoaded());
    } catch (error) {
      dispatch({
        type: UPLOAD_POSTER_FAILURE,
        error,
      });
      dispatch(setLoaded());
    }
  };
}
