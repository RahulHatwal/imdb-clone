import React, { useEffect, useState } from "react";
import axios from "axios";
import { BsCheckSquare, BsFillExclamationCircleFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../actions/signupActions";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Toast from "react-bootstrap/Toast";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");
  const [valid, setValid] = useState(false);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const signupState = useSelector((state) => state.signup);

  useEffect(() => {
    const emailValidation = async () => {
      try {
        setMessage("");
        setValid(false);
        console.log("inside useEffect");
        if (email !== "" && email.includes("@") && email.includes(".")) {
          const res = await axios.post(
            "http://localhost:2323/api/v1/user/checkEmail",
            {
              email: email,
            }
          );
          if (res.data.success) {
            setMessage("valid");
            setValid(true);
          } else {
            setMessage("Not Valid");
          }
          console.log(res, email, message, res.data.message);
        }
      } catch (err) {
        console.log(err);
        if (err) {
          if (err.response) {
            if (!err.response.data.success) {
              console.log(err.response.data.message);
              setMessage(err.response.data.message);
            }
          }
        }
      }
    };
    emailValidation();
  }, [email]);

  const setFirstNameOnChange = (e) => {
    setFirstName(e.target.value);
  };

  const setLastNameOnChange = (e) => {
    setLastName(e.target.value);
  };

  const setEmailOnChange = (e) => {
    setEmail(e.target.value);
  };

  const setPasswordOnChange = (e) => {
    setPassword(e.target.value);
  };

  console.log("rendering signup");

  return (
    <div className="d-flex justify-content-center align-content-center mt-5">
      <Form
        className=" "
        style={{ width: "400px" }}
        onSubmit={(e) => {
          e.preventDefault();
          e.target.reset();
          setMessage("");
        }}
      >
        <Form.Group className=" mb-4 text-center text-uppercase">
          <span className=" h3">Create account</span>
        </Form.Group>
        <Form.Group className="mb-3 d-flex justify-content-between">
          <FloatingLabel controlId="fName" label="First Name" className="w-50">
            <Form.Control
              type="text"
              name="firstName"
              placeholder="Enter First Name"
              onChange={setFirstNameOnChange}
              required
              autoFocus
            />
          </FloatingLabel>
          &nbsp; &nbsp;
          <FloatingLabel controlId="lName" label="Last Name" className="w-50">
            <Form.Control
              type="text"
              name="lastName"
              placeholder="Enter Last Name"
              onChange={setLastNameOnChange}
              required
            />
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-3">
          <FloatingLabel controlId="email" label="Email" className="w-100">
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter Email"
              onChange={setEmailOnChange}
              required
            />
          </FloatingLabel>
        </Form.Group>
        <Form.Group
          className={valid ? "mb-3 text-success" : "mb-3 text-danger"}
        >
          <span>
            {email.length > 0 ? (
              valid && message === "valid" ? (
                <BsCheckSquare color="green" />
              ) : (
                <BsFillExclamationCircleFill color="red" />
              )
            ) : (
              ""
            )}{" "}
          </span>
          <span>{message}</span>
        </Form.Group>

        <Form.Group className="mb-3">
          <FloatingLabel
            controlId="password"
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
        <br />
        <Form.Group className="submitDiv">
          <Button
            variant="primary"
            className="w-100"
            type="submit"
            name="signup"
            onClick={(e) => {
              dispatch(
                signup(
                  email,
                  password,
                  firstName,
                  lastName,
                  "http://localhost:2323/api/v1/user/signup"
                )
              );
              setShow(true);
            }}
          >
            Create your IMDb Clone account
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
}
