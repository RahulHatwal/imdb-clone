import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

export const Base = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
