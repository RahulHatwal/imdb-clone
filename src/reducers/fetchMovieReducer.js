const initialState = {
  movies: [],
  loading: false,
  message: null,
};

const fetchMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_MOVIES_PENDING":
      return {
        ...state,
        loading: true,
        message: "Loading movies...",
      };
    case "FETCH_MOVIES_SUCCESS":
      return {
        ...state,
        movies: action.payload.movie,
        loading: false,
        message: action.payload.message,
      };
    case "FETCH_MOVIES_FAILED":
      return {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    default:
      return state;
  }
};

export default fetchMovieReducer;
