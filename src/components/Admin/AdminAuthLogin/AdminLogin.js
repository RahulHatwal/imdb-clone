import React, { Component } from "react";
import "./adminLogin.css";

export default class AdminLogin extends Component {
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
            <input type="email" id="email" required />
          </div>
          <br />
          <div className="adminLoginInputfield">
            <label for="password">Password</label>
            <input type="password" id="password" required />
          </div>
          <br />
          <div className="adminLoginSubmitDiv">
            <input id="submitButton" type="button" value="Login" />
          </div>
        </div>
        {/* </fieldset> */}
      </form>
    );
  }
}
