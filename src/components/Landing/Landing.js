import React from "react";
import "./Landing.css";
import { useSelector } from "react-redux";
import Movies from "../Movies/Movies";

export default function Landing() {
  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <>
      <div className="landingPage">
        <Movies />
      </div>
    </>
  );
}
