import React, { useState } from "react";
import "./adminLogin.css";
import axios from "axios";

const AdminLogin = () => {
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
        const res = await axios.post(
          "http://localhost:2323/api/v1/admin/login",
          {
            email: email,
            password: password,
          }
        );
        console.log(res);
        if (res.data.success) {
          setError("Admin logged in");
        } else {
          setError(res.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      if (error) {
        if (error.response) {
          if (!error.response.data.success) {
            setError(error.response.data.message);
          }
        }
      }
    }
  };
  return (
    <form className="adminLogin">
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
            onChange={setEmailOnChange}
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
            onChange={setPasswordOnChange}
            required
          />
        </div>
        <br />
        <div className="adminLoginSubmitDiv">
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
};

export default AdminLogin;
