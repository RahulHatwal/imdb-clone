import React, { Component } from "react";
import {
  appName,
  logoUrl,
  login,
  signup,
  logout,
} from "../../helpers/constants.js";
import "./header.css";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onLogoClick: props.onLogoClick,
      onSignupClick: props.onSignupClick,
      onLoginClick: props.onLoginClick,
    };
  }

  // setLoginState = (e) => {
  //   this.setState({
  //     isLoggedIn: false
  //   })
  // }

  render() {
    return (
      <div className="imdb-header">
        <div className="logo">
          <img
            id="logo-img"
            src={logoUrl}
            alt="IMDB Logo"
            onClick={this.state.onLogoClick}
          />
        </div>
        <div className="title">{appName}</div>
        <div className="buttons">
          {this.state.isLoggedIn ? (
            <div id="buttons">
              <input
                type="button"
                name="logout"
                value={logout}
                id="logout"
                className="headerButtons"
              />
            </div>
          ) : (
            <input
              type="button"
              name="login"
              id="loginButton"
              value={login}
              className="headerButtons"
              onClick={this.state.onLoginClick}
            />
          )}
          <input
            type="button"
            name="signup"
            id="signupButton"
            onClick={this.state.onSignupClick}
            value={signup}
            className="headerButtons"
          />
        </div>
      </div>
    );
  }
}

// function Header() {
//   this.state = {
//     isLoggedIn : false
//   }
//   let imageUrl =
//     "https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg";
//   return (
//     <div className="imdb-header">
//       <div className="logo">
//         <img id="logo-img" src={imageUrl} alt="logo-img" />
//       </div>
//       <div className="title">IMDB Clone</div>
//       <div className="buttons">
//         <input
//           type="button"
//           name="signup"
//           id="signupButton"
//           value="Sign Up"
//           className="headerButtons"
//         />
//         <input
//           type="button"
//           name="login"
//           id="loginButton"
//           value="Login"
//           className="headerButtons"
//         />
//       </div>
//     </div>
//   );
// }
