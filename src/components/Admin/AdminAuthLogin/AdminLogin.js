import React, { useState, useEffect } from "react";
import "./adminLogin.css";
import axios from "axios";
import useCheckAdmin from "../../../hooks/useCheckAdmin";
import { login } from "../../../actions/authActions";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const AdminLogin = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState("");

  const setEmailOnChange = (e) => {
    setEmail(e.target.value);
  };

  const setPasswordOnChange = (e) => {
    setPassword(e.target.value);
  };

  // const login = async () => {
  //   try {
  //     setError("");
  //     if (email && password) {
  //       const res = await axios.post(
  //         "http://localhost:2323/api/v1/admin/login",
  //         {
  //           email: email,
  //           password: password,
  //         }
  //       );
  //       console.log(res);
  //       if (res.data.success) {
  //         setError("Admin logged in");
  //         setEmail("");
  //         setPassword("");
  //         const token = res.data.token;
  //         localStorage.setItem("token", token);
  //         localStorage.setItem("role", "admin");
  //         dispatch(
  //           LOGGED_IN({ ...res.data.admin, token: token, role: "admin" })
  //         );
  //         // setToken(token);
  //         // setRole("admin");
  //         // window.location.replace("/admin/addmovies");
  //       } else {
  //         setError(res.data.message);
  //       }
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     if (error) {
  //       if (error.response) {
  //         if (!error.response.data.success) {
  //           setError(error.response.data.message);
  //         }
  //       }
  //     }
  //   }
  // };
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
            onClick={(e) =>
              dispatch(
                login(
                  email,
                  password,
                  "http://localhost:2323/api/v1/admin/login",
                  "admin"
                )
              )
            }
          />
        </div>
        <div>{auth.message}</div>
      </div>
      <Link to="/admin/dashboard">
        <Button>Admin Dashboard</Button>
      </Link>
    </form>
  );
};

export default AdminLogin;
