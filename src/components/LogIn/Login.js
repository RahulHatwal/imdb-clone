import React, { Component } from "react";
// import Header from "../Header/header";
import "./login.css";
import bootstrap from "../../bootstrapData";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: "",
    };
  }

  setData = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  login = (e) => {
    console.log(e.target.name);
    this.setState({ error: "" });
    const { email, password } = this.state;
    const res = bootstrap.users.login(email, password);
    if (res.success) {
      this.setState({
        error: "User logged in",
      });
    } else {
      this.setState({
        error: res.message,
      });
    }
  };

  render() {
    return (
      <form className="login">
        <div className="loginformContent">
          <div className="inputfield">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={this.setData}
              required
            />
          </div>
          <br />
          <div className="inputfield">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={this.setData}
              required
            />
          </div>
          <br />
          <div className="submitDiv">
            <input
              id="submitButton"
              type="button"
              value="Login"
              onClick={this.login}
            />
          </div>

          <div>{this.state.error}</div>
        </div>
      </form>
    );
  }
}
