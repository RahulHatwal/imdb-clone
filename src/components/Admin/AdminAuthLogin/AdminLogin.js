import React, { Component } from "react";
import "./AdminLogin.css";
import axios from "axios";

export default class AdminLogin extends Component {
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

  login = async () => {
    try {
      this.setState({ error: "" });
      const { email, password } = this.state;
      if (email && password) {
        const res = await axios.post(
          "http://localhost:2323/api/v1/admin/login",
          {
            email: this.state.email,
            password: this.state.password,
          }
        );
        console.log(res);
        if (res.data.success) {
          this.setState({
            error: "Admin logged in",
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

    // const { email, password } = this.state;
    // const res = bootstrap.users.login(email, password);
  };
  render() {
    return (
      <form className="adminLogin">
        {/* <fieldset> */}

        <div className="adminLoginFormContent">
          <div className="adminLoginFormTitle">
            <h1 className="adminLogintitle">Admin Login</h1>
          </div>
          <div className="adminLoginInputfield">
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
          <div className="adminLoginInputfield">
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
          <div className="adminLoginSubmitDiv">
            <input
              id="submitButton"
              type="button"
              value="Login"
              onClick={this.login}
            />
          </div>
          <div>{this.state.error}</div>
        </div>
        {/* </fieldset> */}
      </form>
    );
  }
}
