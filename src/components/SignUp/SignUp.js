import React, { Component } from "react";
import "./signUp.css";
import bootstrap from "../../bootstrapData";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      error: "",
    };
  }

  setData = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(this.state);
  };

  signup = (e) => {
    console.log(e.target.name);
    this.setState({ error: "" });
    const { email, password, firstName, lastName } = this.state;
    if (email && password && firstName && lastName) {
      const res = bootstrap.users.signup(firstName, lastName, email, password);
      console.log(res);
      if (res.success) {
        this.setState({
          error: res.message,
        });
      } else {
        this.setState({
          error: res.message,
        });
      }
    }
  };

  render() {
    return (
      <form className="signUp">
        <div className="formContent">
          <div className="signupInput">
            <label for="fName">First Name</label>
            <input
              type="text"
              id="fName"
              name="firstName"
              onChange={this.setData}
              required
            />
          </div>
          <br />
          <div className="signupInput">
            <label for="lName">Last Name</label>
            <input
              type="text"
              id="lName"
              name="lastName"
              onChange={this.setData}
              required
            />
          </div>
          <br />
          <div className="signupInput">
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
          <div className="signupInput">
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
              value="Signup"
              name="signup"
              onClick={this.signup}
            />
          </div>
          <div>{this.state.error}</div>
        </div>
      </form>
    );
  }
}
