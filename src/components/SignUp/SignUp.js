import React, { useEffect, useState } from "react";
import "./SignUp.css";
import bootstrap from "../../bootstrapData";
import axios from "axios";
import { BsCheckSquare, BsFillExclamationCircleFill } from "react-icons/bs";

export default function SignUp(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");
  const [valid, setValid] = useState(false);

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
    console.log("Inside setEmailOnChange");
    setEmail(e.target.value);
  };

  const setPasswordOnChange = (e) => {
    setPassword(e.target.value);
  };

  const signup = async (e) => {
    try {
      console.log(e.target.name);
      setError("");
      if (email && password && firstName && lastName) {
        const res = await axios.post(
          "http://localhost:2323/api/v1/user/signup",
          {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
          }
        );
        console.log(res);
        if (res.data.success) {
          setError(res.data.message);
        } else {
          setError(res.data.message);
        }
      }
    } catch (err) {
      console.log(err);
      if (err) {
        if (err.response) {
          if (!err.response.data.success) {
            setError(err.response.data.message);
          }
        }
      }
    }

    // if (email && password && firstName && lastName) {
    //   const res = bootstrap.users.signup(firstName, lastName, email, password);
    //   console.log(res);
    //   if (res.success) {
    //     this.setState({
    //       error: res.message,
    //     });
    //   } else {
    //     this.setState({
    //       error: res.message,
    //     });
    //   }
    // }
  };

  // signup = (e) => {
  //   console.log(e.target.name);
  //   this.setState({ error: "" });
  //   const { email, password, firstName, lastName } = this.state;
  //   if (email && password && firstName && lastName) {
  //     const res = bootstrap.users.signup(firstName, lastName, email, password);
  //     console.log(res);
  //     if (res.success) {
  //       this.setState({
  //         error: res.message,
  //       });
  //     } else {
  //       this.setState({
  //         error: res.message,
  //       });
  //     }
  //   }
  // };

  return (
    <form className="signUp">
      <div className="formContent">
        <div className="signupInput">
          <label for="fName">First Name</label>
          <input
            type="text"
            id="fName"
            name="firstName"
            onChange={setFirstNameOnChange}
            required
          />
        </div>
        <br />
        <div className="signupInput">
          <label for="lName">Last Name</label>
          <input
            type="text"
            id="lName"
            name="lastName"
            onChange={setLastNameOnChange}
            required
          />
        </div>
        <br />
        <div className="signupInput">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={setEmailOnChange}
            required
          />
        </div>
        <div>
          {email.length > 0 ? (
            valid ? (
              <BsCheckSquare color="green" />
            ) : (
              <BsFillExclamationCircleFill color="red" />
            )
          ) : (
            ""
          )}{" "}
          {message}
        </div>
        <br />
        <div className="signupInput">
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
            value="Signup"
            name="signup"
            onClick={signup}
          />
        </div>
        <div>{error}</div>
      </div>
    </form>
  );
}
