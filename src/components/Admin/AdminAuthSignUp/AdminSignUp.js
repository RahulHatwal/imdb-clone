import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../../actions/signupActions";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Toast from "react-bootstrap/Toast";
import { Link } from "react-router-dom";

const AdminSignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const signupState = useSelector((state) => state.signup);
  const setFirstNameOnChange = (e) => {
    setFirstName(e.target.value);
  };

  const setLastNameOnChange = (e) => {
    setLastName(e.target.value);
  };

  const setEmailOnChange = (e) => {
    console.log("Inside setEmailOnChange");
    setEmail(e.target.value);
  };

  const setPasswordOnChange = (e) => {
    setPassword(e.target.value);
  };

  
  return (
    <div className="d-flex justify-content-center align-content-center mt-5">
      <Form className=" " style={{ width: "400px" }}>
        <Form.Group className=" mb-4 text-center text-uppercase">
          <span className=" h3">Create admin account</span>
        </Form.Group>
        <Form.Group className="mb-3 d-flex justify-content-between">
          <FloatingLabel
            controlId="floatingInput"
            label="First Name"
            className="w-50"
          >
            <Form.Control
              type="text"
              id="fName"
              name="firstName"
              placeholder="Enter First Name"
              onChange={setFirstNameOnChange}
              required
              autoFocus
            />
          </FloatingLabel>
          &nbsp; &nbsp;
          <FloatingLabel
            controlId="floatingInput"
            label="Last Name"
            className="w-50"
          >
            <Form.Control
              type="text"
              id="lName"
              name="lastName"
              placeholder="Enter Last Name"
              onChange={setLastNameOnChange}
              required
            />
          </FloatingLabel>
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
            name="signup"
            onClick={(e) => {
              dispatch(
                signup(
                  email,
                  password,
                  firstName,
                  lastName,
                  "http://localhost:2323/api/v1/admin/signup"
                )
              );
              setShow(true);
            }}
          >
            Create your IMDb Clone Admin account
          </Button>
        </Form.Group>

        <Form.Group className="mt-2 mb-3">
          <Toast
            onClose={() => setShow(false)}
            show={show}
            delay={3000}
            className={
              signupState.signedUp
                ? "text-center text-bg-success w-100 "
                : "text-center text-bg-danger w-100"
            }
            autohide
            animation
          >
            <Toast.Body>{signupState.message}</Toast.Body>
          </Toast>
        </Form.Group>

        <Form.Group>
          <span className="text-center">Already have an account?</span>
          &nbsp;
          <Link to="/user/login" className=" link-secondary">
            Log in
          </Link>
        </Form.Group>
      </Form>
    </div>
  );
};

export default AdminSignUp;
