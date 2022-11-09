import React, { useState } from "react";
// import Header from "../Header/header";
import "./login.css";
// import bootstrap from "../../bootstrapData";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const setEmailOnChange = (e) => {
    setEmail(e.target.value);
  };

  const setPasswordOnChange = (e) => {
    setPassword(e.target.value);
  };

  const login = async () => {
    try {
      setError("");
      if (email && password) {
        // api request
        const res = await axios.post(
          "http://localhost:2323/api/v1/user/login",
          {
            email: email,
            password: password,
          }
        );

        console.log(res);

        if (res.data.success) {
          setError("User Logged In");
          setEmail("");
          setPassword("");
          // set the token recieved from login respose to localstorage.token
          const token = res.data.token;
          localStorage.setItem("token", token);
        } else {
          setError(res.data.message);
        }
      }
    } catch (err) {
      console.log(err);
      if (err) {
        if (err.response) {
          if (!err.response.data.success) {
            console.log(err.response.data.message);
            setError(err.response.data.message);
          }
        }
      }
    }

    // const { email, password } = this.state;
    // const res = bootstrap.users.login(email, password);
  };
  return (
    <form className="login">
      <div className="loginformContent">
        <div className="inputfield">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={setEmailOnChange}
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
            onChange={setPasswordOnChange}
            required
          />
        </div>
        <br />
        <div className="submitDiv">
          <input
            id="submitButton"
            type="button"
            value="Login"
            onClick={login}
          />
        </div>

        <div>{error}</div>
      </div>
    </form>
  );
}
