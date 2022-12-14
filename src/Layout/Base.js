import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/";

export const Base = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
