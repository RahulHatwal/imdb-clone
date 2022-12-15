const initialState = {
  message: null,
  loading: false,
  error: null,
  success: false,
};

function uploadPosterReducer(state = initialState, action) {
  switch (action.type) {
    case "UPLOAD_POSTER_PENDING":
      // Set the loading flag to true
      return {
        ...state,
        loading: true,
        message: "Uploading poster...",
      };
    case "UPLOAD_POSTER_SUCCESS":
      // Set the loading and success flags to false, and update the poster for the movie
      return {
        ...state,
        loading: false,
        ...action.payload,
        success: action.success,
        message: action.message,
      };
    case "UPLOAD_POSTER_FAILURE":
      // Set the loading and success flags to false, and store the error message
      return {
        ...state,
        loading: false,
        success: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export default uploadPosterReducer;
