import React from "react";
import {
  appName,
  logoUrl,
  login,
  signup,
  logout,
} from "../../helpers/constants.js";
import "./Header.css";

const Header = (props) => {
  console.log(props);
  const logoutHandle = () => {
    localStorage.clear();
  };
  return (
    <div className="imdb-header">
      <div className="logo">
        <img
          id="logo-img"
          src={logoUrl}
          alt="IMDB Logo"
          onClick={props.onLogoClick}
        />
      </div>
      <div className="title">{appName}</div>
      <div className="buttons">
        {props.isLoggedIn ? (
          <div id="buttons">
            <input
              type="button"
              name="logout"
              value={logout}
              id="logout"
              className="headerButtons"
              onClick={logoutHandle}
            />
          </div>
        ) : (
          <div id="buttons">
            <input
              type="button"
              name="login"
              id="loginButton"
              value={login}
              className="headerButtons"
              onClick={props.onLoginClick}
            />

            <input
              type="button"
              name="signup"
              id="signupButton"
              onClick={props.onSignupClick}
              value={signup}
              className="headerButtons"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
