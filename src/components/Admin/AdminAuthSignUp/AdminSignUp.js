import React, { Component } from "react";
import "./adminSignUp.css";

export default class AdminSignUp extends Component {
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
            <input type="text" id="fName" required />
          </div>
          <br />
          <div className="adminSignUpInput">
            <label for="lName">Last Name</label>
            <input type="text" id="lName" required />
          </div>
          <br />
          <div className="adminSignUpInput">
            <label for="email">Email</label>
            <input type="email" id="email" required />
          </div>
          <br />
          <div className="adminSignUpInput">
            <label for="password">Password</label>
            <input type="password" id="password" required />
          </div>
          <br />
          <div className="adminSignUpSubmitDiv">
            <input id="submitButton" type="button" value="Signup" />
          </div>
        </div>
        {/* </fieldset> */}
      </form>
    );
  }
}
