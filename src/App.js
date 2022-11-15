// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Landing from "./components/Landing/Landing";
import { moviesImages } from "./components/LandingData/LandingData";
// import CarouselSlider from "./components/Landing/CarouselSlider";

import "bootstrap/dist/css/bootstrap.min.css";

import React, { useState, useEffect } from "react";
import Login from "./components/LogIn/Login";
import SignUp from "./components/SignUp/SignUp";

// import AdminLogin from "./components/Admin/AdminAuthLogin/AdminLogin";
// import AdminSignUp from "./components/Admin/AdminAuthSignUp/AdminSignUp";
import AddMovies from "./components/Admin/AdminPage/AddMovies/AddMovies";
import UpdateMovies from "./components/Admin/AdminPage/UpdateMovies/UpdateMovies";
import MovieCharts from "./components/MovieCharts/MovieCharts";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const showLoginForm = (e) => {
    setShowLogin(true);
    setShowSignUp(false);
  };

  const showSignupForm = (e) => {
    setShowLogin(false);
    setShowSignUp(true);
  };

  const showLanding = (e) => {
    setShowLogin(false);
    setShowSignUp(false);
  };

  // use getDerivedStateFromProps to check if props.isLoggedIn is true
  // static getDerivedStateFromProps(props, state) {
  //   return {
  //     ...state,
  //     isLoggedIn: localStorage.token ? true : false,
  //   };
  // }

  useEffect(() => {
    setIsLoggedIn(localStorage.token ? true : false);
    console.log(isLoggedIn);
  }, [isLoggedIn]);

  // If true state.isLoggedIn should also be true

  return (
    <div className="imdb-clone">
      {/* <Header /> */}
      {/* In  app.js*/}
      {/* <MovieCharts /> */}
      {/* <AddMovies /> */}
      {/* <UpdateMovies /> */}

      <Header
        isLoggedIn={isLoggedIn}
        onLoginClick={showLoginForm}
        onSignupClick={showSignupForm}
        onLogoClick={showLanding}
      />

      {showLogin ? (
        <Login />
      ) : showSignUp ? (
        <SignUp />
      ) : (
        <Landing isLoggedIn={isLoggedIn} moviesImages={moviesImages} />
      )}
      {/* <Login /> */}
      {/* <SignUp /> */}
      {/* <CarouselSlider /> */}
      {/* <AdminLogin />
      <AdminSignUp /> */}
    </div>
  );
};

export default App;
