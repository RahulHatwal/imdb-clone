import React, { Component } from "react";
import "./AdminSignUp.css";
import axios from "axios";

export default class AdminSignUp extends Component {
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

  adminSignup = async (e) => {
    try {
      console.log(e.target.name);
      this.setState({ error: "" });
      const { email, password, firstName, lastName } = this.state;
      if (email && password && firstName && lastName) {
        const res = await axios.post(
          "http://localhost:2323/api/v1/admin/signup",
          {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
          }
        );
        console.log(res);
        if (res.data.success) {
          this.setState({
            error: res.data.message,
          });
        } else {
          this.setState({
            error: res.data.message,
          });
        }
      }
    } catch (error) {
      console.log(error);
      if (error) {
        if (error.response) {
          if (!error.response.data.success) {
            this.setState({
              error: error.response.data.message,
            });
          }
        }
      }
    }
  };
  render() {
    return (
      <form className="adminSignUp">
        {/* <fieldset> */}

        <div className="adminSignUpFormContent">
          <div className="formTitle">
            <h1 className="adminSignUpTitle">Add Admin</h1>
          </div>
          <div className="adminSignUpInput">
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
          <div className="adminSignUpInput">
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
          <div className="adminSignUpInput">
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
          <div className="adminSignUpInput">
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
          <div className="adminSignUpSubmitDiv">
            <input
              id="submitButton"
              type="button"
              value="Signup"
              name="signup"
              onClick={this.adminSignup}
            />
          </div>
          <div>{this.state.error}</div>
        </div>
        {/* </fieldset> */}
      </form>
    );
  }
}
