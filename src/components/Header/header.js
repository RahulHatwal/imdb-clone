import "./header.css";

function Header() {
  // let isLoggedIn = false;
  let imageUrl =
    "https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg";
  return (
    <div className="imdb-header">
      <div className="logo">
        <img id="logo-img" src={imageUrl} alt="logo-img" />
      </div>
      <div className="title">IMDB Clone</div>
      <div className="buttons">
        <input
          type="button"
          name="signup"
          id="signupButton"
          value="Sign Up"
          className="headerButtons"
        />
        <input
          type="button"
          name="login"
          id="loginButton"
          value="Login"
          className="headerButtons"
        />
      </div>
    </div>
  );
}

export default Header;
