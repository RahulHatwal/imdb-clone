import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components";
import Footer from "../components/Footer/Footer";

export const Base = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
