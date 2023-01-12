import React, { useState } from "react";
import "./adminLogin.css";
import { login } from "../../../actions/authActions";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Toast from "react-bootstrap/Toast";
import Button from "react-bootstrap/Button";

const AdminLogin = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const loginState = useSelector((state) => state.auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const setEmailOnChange = (e) => {
    setEmail(e.target.value);
  };

  const setPasswordOnChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="d-flex justify-content-center align-content-center mt-5">
      <Form className=" " style={{ width: "400px" }}>
        <Form.Group className=" mb-4 text-center text-uppercase">
          <span className=" h3">Admin Login</span>
        </Form.Group>
        <Form.Group className="mb-3">
          <FloatingLabel
            controlId="floatingInput"
            label="Email"
            className="w-100"
          >
            <Form.Control
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email"
              onChange={setEmailOnChange}
              required
            />
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-3">
          <FloatingLabel
            controlId="floatingInput"
            label="Password"
            className="w-100"
          >
            <Form.Control
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              onChange={setPasswordOnChange}
              required
            />
          </FloatingLabel>
        </Form.Group>
        <Form.Group className="submitDiv">
          <Button
            variant="primary"
            className="w-100"
            type="button"
            name="login"
            onClick={(e) => {
              dispatch(
                login(
                  email,
                  password,
                  "http://localhost:2323/api/v1/admin/login",
                  "admin"
                )
              );
              setShow(true);
            }}
          >
            Log In
          </Button>
        </Form.Group>
        <Form.Group className="mt-2 mb-3">
          <Toast
            onClose={() => setShow(false)}
            show={show}
            delay={2000}
            className={
              loginState.success
                ? "text-center text-bg-success w-100 "
                : "text-center text-bg-danger w-100"
            }
            autohide
            animation
          >
            <Toast.Body>{loginState.message}</Toast.Body>
          </Toast>
        </Form.Group>

        <Form.Group>
          <span className="text-center">New to IMDB?</span>
          &nbsp;
          <Link to="/admin/signup" className=" link-secondary">
            Sign Up
          </Link>
        </Form.Group>
      </Form>
    </div>
  );
};

export default AdminLogin;
