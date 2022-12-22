import React from "react";
import "./spinner.css";
import { ThreeDots } from "react-loader-spinner";
import { useSelector } from "react-redux";

const Spinner = () => {
  const loadingState = useSelector((state) => state.loading);
  return (
    <div className="overlay-loader-spinner d-flex justify-content-center align-items-center">
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#f5c518"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={loadingState.loading}
      />
    </div>
  );
};

export default Spinner;
