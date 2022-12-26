import React, { useState, useEffect } from "react";
import useCheckCurrentUser from "../../hooks/useCheckCurrentUser";

import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Toast from "react-bootstrap/Toast";
import { Link, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../actions/authActions";
import { BiUserCircle } from "react-icons/bi";
import { RiAdminLine } from "react-icons/ri";
import { HiOutlineKey } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { setLoading, setLoaded } from "../../actions/loadingActions";

export default function Login() {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const [show, setShow] = useState(false);
  const loginState = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginType, setLoginType] = useState("user");

  const setEmailOnChange = (e) => {
    setEmail(e.target.value);
  };

  const setPasswordOnChange = (e) => {
    setPassword(e.target.value);
  };

  if (loginState.role === "admin" && loginState.isAuthenticated) {
    setTimeout(() => {
      Navigate("/admin/dashboard");
    }, 2000);
  }
  if (loginState.role === "user" && loginState.isAuthenticated) {
    setTimeout(() => {
      Navigate("/");
    }, 2000);
  }

  return (
    <div className="d-flex justify-content-center align-content-center mt-5">
      <Form
        className=" "
        style={{ width: "400px" }}
        onSubmit={(e) => {
          e.preventDefault();
          e.target.reset();
        }}
      >
        <Form.Group className=" mb-5 text-center text-uppercase ">
          <Nav variant="tabs" defaultActiveKey="#first">
            <Nav.Item
              className=" w-50"
              onClick={(e) => {
                setLoginType("user");
              }}
            >
              <div className={loginType === "user" ? "bg-primary p-1" : " p-1"}>
                <BiUserCircle size={"22"} />
                &nbsp; User
              </div>
            </Nav.Item>
            <Nav.Item
              className=" w-50"
              onClick={(e) => {
                setLoginType("admin");
              }}
            >
              <div
                className={`${
                  loginType === "admin" ? "bg-primary p-1" : "p-1 "
                } `}
              >
                <HiOutlineKey size={"20"} />
                &nbsp; admin
              </div>
            </Nav.Item>
          </Nav>
        </Form.Group>
        <Form.Group className=" mb-4 text-center text-uppercase">
          <span className=" h3">Login</span>
        </Form.Group>
        <Form.Group className="mb-3">
          <FloatingLabel
            controlId="floatingEmail"
            label="Email"
            className="w-100"
          >
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter Email"
              onChange={setEmailOnChange}
              required
            />
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-3">
          <FloatingLabel
            controlId="floatingPassword"
            label="Password"
            className="w-100"
          >
            <Form.Control
              type="password"
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
            type="submit"
            name="login"
            onClick={(e) => {
              dispatch(
                login(
                  email,
                  password,
                  loginType === "user"
                    ? "http://localhost:2323/api/v1/user/login"
                    : "http://localhost:2323/api/v1/admin/login",
                  loginType
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
          <Link
            to={loginType === "user" ? "/user/signup" : "/admin/signup"}
            className=" link-secondary"
          >
            Sign Up
          </Link>
        </Form.Group>
      </Form>
    </div>
  );
}
