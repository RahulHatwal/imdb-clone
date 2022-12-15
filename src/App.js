// import logo from "./logo.svg";
import "./App.css";
import { moviesImages } from "./components/LandingData/LandingData";
import "bootstrap/dist/css/bootstrap.min.css";
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
import { ProtectedLayout } from "./Layout/ProtectedLayout";
import MovieCard from "./components/Movies/Movies";
import AdminDashboard from "./components/Admin/AdminDashboard/AdminDashboard";

const App = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [showLogin, setShowLogin] = useState(false);
  // const [showSignUp, setShowSignUp] = useState(false);

  // const showLoginForm = (e) => {
  //   setShowLogin(true);
  //   setShowSignUp(false);
  // };

  // const showSignupForm = (e) => {
  //   setShowLogin(false);
  //   setShowSignUp(true);
  // };

  // const showLanding = (e) => {
  //   setShowLogin(false);
  //   setShowSignUp(false);
  // };

  // use getDerivedStateFromProps to check if props.isLoggedIn is true
  // static getDerivedStateFromProps(props, state) {
  //   return {
  //     ...state,
  //     isLoggedIn: localStorage.token ? true : false,
  //   };
  // }

  // useEffect(() => {
  //   setIsLoggedIn(localStorage.token ? true : false);
  //   console.log(isLoggedIn);
  // }, [isLoggedIn]);

  // If true state.isLoggedIn should also be true

  // const navigate = useNavigate();

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Role - user */}
          <Route path="/" element={<Base />}>
            <Route index element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/topmovies" element={<MovieCharts />} />
            <Route
              path="/topmovies/:name"
              element={<MovieInfo data={data} />}
            />
            <Route path="/movies" element={<MovieCard />} />
          </Route>

          {/* Role - admin */}
          <Route path="/admin" element={<ProtectedLayout />}>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="login" element={<AdminLogin />} />
            <Route path="signup" element={<AdminSignup />} />
            <Route path="updatemovies" element={<UpdateMovies />} />
            <Route path="addmovies" element={<AddMovies />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>

    // <div className="imdb-clone">
    //   {/* <Header /> */}
    //   {/* In  app.js*/}
    //   {/* <MovieCharts /> */}
    //   {/* <AddMovies /> */}
    //   {/* <UpdateMovies /> */}

    //   <Header
    //     isLoggedIn={isLoggedIn}
    //     onLoginClick={showLoginForm}
    //     onSignupClick={showSignupForm}
    //     onLogoClick={showLanding}
    //   />

    //   {showLogin ? (
    //     <Login />
    //   ) : showSignUp ? (
    //     <SignUp />
    //   ) : (
    //     <Landing isLoggedIn={isLoggedIn} moviesImages={moviesImages} />
    //   )}
    //   {/* <Login /> */}
    //   {/* <SignUp /> */}
    //   {/* <CarouselSlider /> */}
    //   {/* <AdminLogin />
    //   <AdminSignUp /> */}
    // </div>
  );
};

export default App;
