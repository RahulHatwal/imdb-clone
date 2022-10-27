// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/header";
import Landing from "./components/Landing/Landing";
import { moviesImages } from "./components/LandingData/LandingData";
// import CarouselSlider from "./components/Landing/CarouselSlider";

import "bootstrap/dist/css/bootstrap.min.css";

import React, { Component } from "react";
import Login from "./components/LogIn/Login";
import SignUp from "./components/SignUp/SignUp";
import AdminLogin from "./components/Admin/AdminAuthLogin/AdminLogin";
import AdminSignUp from "./components/Admin/AdminAuthSignUp/AdminSignUp";
import AddMovies from "./components/Admin/AdminPage/AddMovies/AddMovies";
import UpdateMovies from "./components/Admin/AdminPage/UpdateMovies/UpdateMovies";
import MovieCharts from "./components/MovieCharts/MovieCharts";

export default class App extends Component {
  debugger;
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      showLogin: false,
      showSignUp: false,
    };
  }

  showLoginForm = (e) => {
    this.setState({
      showLogin: true,
      showSignUp: false,
    });
  };

  showSignupForm = (e) => {
    this.setState({
      showSignUp: true,
      showLogin: false,
    });
  };

  showLanding = (e) => {
    this.setState({
      showSignUp: false,
      showLogin: false,
    });
  };

  // use getDerivedStateFromProps to check if props.isLoggedIn is true
  static getDerivedStateFromProps(props, state) {
    if (props.isLoggedIn === true) {
      return {
        ...state,
        isLoggedIn: !!props.isLoggedIn,
      };
    }
  }

  // If true state.isLoggedIn should also be true

  render() {
    return (
      <div className="imdb-clone">
        <Header />

        <MovieCharts />
        {/* <AddMovies /> */}
        {/* <UpdateMovies /> */}

        {/* <Header
          isLoggedIn={this.state.isLoggedIn}
          onLoginClick={this.showLoginForm}
          onSignupClick={this.showSignupForm}
          onLogoClick={this.showLanding}
        />
        {this.state.showLogin ? (
          <Login />
        ) : this.state.showSignUp ? (
          <SignUp />
        ) : (
          <Landing
            isLoggedIn={this.state.isLoggedIn}
            moviesImages={moviesImages}
          />
        )} */}
        {/* <Login /> */}
        {/* <SignUp /> */}
        {/* <CarouselSlider /> */}
        {/* <AdminLogin /> */}
        {/* <AdminSignUp /> */}
      </div>
    );
  }
}
