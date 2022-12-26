import React from "react";
import { Outlet, Link } from "react-router-dom";
import { logoUrl } from "../../src/helpers/constants";

import Footer from "../components/Footer/Footer";

const LoginSignupLayout = () => {
  return (
    <div
      className=" d-flex flex-column justify-content-center"
      style={{ height: "-webkit-fill-available" }}
    >
      <Link to="/" className=" align-self-center">
        <img src={logoUrl} alt="logo" height="60px" />
      </Link>

      <Outlet />
      <Footer />
    </div>
  );
};

export default LoginSignupLayout;
