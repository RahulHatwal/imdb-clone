import React, { useState, useEffect } from "react";
import useCheckCurrentUser from "../../hooks/useCheckCurrentUser";
// import Header from "../Header/header";
import "./Login.css";
// import bootstrap from "../../bootstrapData";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { useSelector, useDispatch } from "react-redux";
import { LOGGED_IN, LOGGED_OUT } from "../../actions/user";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.isLoggedIn);
  useEffect(() => {
    localStorage.getItem("role") === "admin" &&
      window.location.replace("/admin/addmovies");
  }, []);
  console.log("user", user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const setEmailOnChange = (e) => {
    setEmail(e.target.value);
  };

  const setPasswordOnChange = (e) => {
    setPassword(e.target.value);
  };

  const currentUserDetails = useCheckCurrentUser(
    "http://localhost:2323/api/v1/user/currentUser"
  );
  console.log(currentUserDetails);

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
          console.log(res.data.user);

          setError("User Logged In");
          setEmail("");
          setPassword("");
          // set the token recieved from login respose to localstorage.token
          const token = res.data.token;
          localStorage.setItem("token", token);
          localStorage.setItem("role", "user");

          // dispatch(LOGGED_IN({ ...res.data.user, token: token, role: "user" }));
          dispatch(LOGGED_IN(res.data.user, token, "user"));
          Navigate("/");
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
    // <form className="login">
    //   <div className="loginformContent">
    //     <div className="loginTitle">
    //       <h2>Login</h2>
    //     </div>
    //     <div className="inputfield">
    //       <label for="email">Email</label>
    //       <input
    //         type="email"
    //         id="email"
    //         name="email"
    //         onChange={setEmailOnChange}
    //         required
    //       />
    //     </div>
    //     <br />
    //     <div className="inputfield">
    //       <label for="password">Password</label>
    //       <input
    //         type="password"
    //         id="password"
    //         name="password"
    //         onChange={setPasswordOnChange}
    //         required
    //       />
    //     </div>
    //     <br />
    //     <div className="submitDiv">
    //       <input
    //         id="submitButton"
    //         type="button"
    //         value="Login"
    //         onClick={login}
    //       />
    //     </div>

    //     <div>{error}</div>
    //   </div>
    // </form>
    <div className="login_form">
      <div className="login_form_container">
        <div className="login_form_title">Login</div>
        <Form dark>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              id="email"
              name="email"
              onChange={setEmailOnChange}
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              id="password"
              name="password"
              onChange={setPasswordOnChange}
              placeholder="Password"
            />
          </Form.Group>
          {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}
          <Button variant="primary" onClick={login} type="button">
            Submit
          </Button>
          <div>{error}</div>
        </Form>
      </div>
      <div style={{ color: "white" }}>{user}</div>
    </div>
  );
}
