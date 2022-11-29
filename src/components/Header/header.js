import React from "react";
import {
  appName,
  logoUrl,
  login,
  signup,
  logout,
} from "../../helpers/constants.js";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = (props) => {
  console.log(props);
  const logoutHandle = () => {
    localStorage.clear();
  };
  return (
    <div className="imdb-header">
      <div className="logo">
        <Link to="/">
          {" "}
          <img
            id="logo-img"
            src={logoUrl}
            alt="IMDB Logo"
            onClick={props.onLogoClick}
          />
        </Link>
      </div>
      <div className="title">{appName}</div>
      <div className="buttons">
        {localStorage.getItem("token") ? (
          <div id="buttons">
            <Link to="/">
              <input
                type="button"
                name="logout"
                value={logout}
                id="logout"
                className="headerButtons"
                onClick={logoutHandle}
              />
            </Link>
          </div>
        ) : (
          <div id="buttons">
            <Link to="/login">
              <input
                type="button"
                name="login"
                id="loginButton"
                value={login}
                className="headerButtons"
                onClick={props.onLoginClick}
              />
            </Link>
            <Link to="/signup">
              <input
                type="button"
                name="signup"
                id="signupButton"
                onClick={props.onSignupClick}
                value={signup}
                className="headerButtons"
              />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;

// import "./Header.css";

// const Header = (props) => {
//   return (
//     <div>
//       {!localStorage.getItem("token") ? (
//         <div className="imdb-header">
//           <div id="logo" onClick={props.onLogoClick}>
//             <img
//               id="imdb-logo"
//               src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
//               alt="IMDB LOGO"
//               onClick={() => {
//                 window.location.replace("/");
//               }}
//             />
//           </div>
//           <div id="title">IMDB Clone</div>
//           <div id="button">
//             <input
//               type="button"
//               name="signup"
//               value="Signup"
//               onClick={() => {
//                 window.location.replace("/user/signup");
//               }}
//               className="header-buttons"
//             />
//             <input
//               type="button"
//               name="login"
//               value="Login"
//               className="header-buttons "
//               onClick={() => {
//                 window.location.replace("/user/login");
//               }}
//             />
//           </div>
//         </div>
//       ) : (
//         <div className="imdb-header">
//           <div id="logo">
//             <img
//               id="imdb-logo"
//               src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
//               alt="IMDB LOGO"
//             />
//           </div>
//           <div id="title">IMDB Clone</div>
//           <div id="button">
//             <input
//               type="button"
//               name="login"
//               value="Log Out"
//               className="header-buttons"
//               onClick={() => {
//                 localStorage.removeItem("token");
//                 localStorage.removeItem("role");
//                 window.location.reload();
//               }}
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };
// export default Header;
