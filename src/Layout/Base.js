import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Login } from "../components";
import Footer from "../components/Footer/Footer";


export const Base = () => {

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
