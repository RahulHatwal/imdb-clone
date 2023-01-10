// import logo from "./logo.svg";
//import "./App.css";
import "./App.scss";

import { moviesImages } from "./components/LandingData/LandingData";

import data from "./bootstrapData";
import React, { useState, useEffect } from "react";
import {
  Login,
  SignUp,
  MovieCharts,
  Landing,
  AdminLogin,
  AdminSignup,
  AddMovies,
  UpdateMovies,
} from "./components/";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Base } from "./Layout/Base";
import MovieInfo from "./components/MovieDetailsPage/MovieInfo";
import useCheckCurrentUser from "./hooks/useCheckCurrentUser";
import useCheckAdmin from "./hooks/useCheckAdmin";
import { Admin } from "./Layout/Admin";
import MovieCard from "./components/Movies/Movies";
import AdminDashboard from "./components/Admin/AdminDashboard/AdminDashboard";
import LoginSignupLayout from "./Layout/LoginSignupLayout";
import Spinner from "../src/LoaderSpinner/Spinner";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "./actions/fetchMovieActions";
import MovieDetail from "./components/Movies/MovieDetail";

const App = () => {
  const role = useSelector((state) => state.auth.role);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies());
  }, []);
  const loadingState = useSelector((state) => state.loading);
  return (
    <div className="App">
      {loadingState.loading ? <Spinner /> : null}
      <BrowserRouter>
        <Routes>
          {/* Role - user */}
          <Route
            path="/"
            element={role === "default" ? <LoginSignupLayout /> : <Base />}
          >
            <Route
              index
              element={role === "default" ? <Login /> : <Landing />}
            />
            <Route path="/topmovies" element={<MovieCharts />} />
            <Route
              path="/topmovies/:name"
              element={<MovieInfo data={data} />}
            />
            <Route path="/movies" element={<MovieCard />} />
            <Route path="/movies/:id" element={<MovieDetail />} />
          </Route>
          <Route path="/user" element={<LoginSignupLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
          </Route>
          {/* Role - admin */}
          <Route path="/admin" element={<Admin />}>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="login" element={<AdminLogin />} />
            <Route path="signup" element={<AdminSignup />} />
            <Route path="updatemovies" element={<UpdateMovies />} />
            <Route path="addmovies" element={<AddMovies />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
