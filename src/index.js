import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
// import { combineReducers, legacy_createStore as createStore, applyMiddleware } from "redux";
import userReducer from "./reducers/userReducer";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import MovieCard from "./MovieCard";
import movieCrudReducer from "./reducers/movieCrudReducer";
import fetchMovieReducer from "./reducers/fetchMovieReducer";
import uploadPosterReducer from "./reducers/uploadPosterReducer";
import signupReducer from "./reducers/signupReducer";
import "./custom.scss";
import loadingReducer from "./reducers/loadingReducer";
// import "bootstrap/dist/css/bootstrap.min.css";

const rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer,
  movieCrud: movieCrudReducer,
  fetchMovies: fetchMovieReducer,
  uploadPoster: uploadPosterReducer,
  signup: signupReducer,
  loading: loadingReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

// const store = createStore(
//   rootReducer,
//   +window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
