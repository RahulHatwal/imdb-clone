import React from "react";
import "./Landing.css";
import Carousel from "../ReactUsestateCarousel/Carousel";
import CarouselSlider from "../Carousel/CarouselSlider";
import { LandingInfo } from "./LandingInfo/LandingInfo";
import { landingInfoData } from "../LandingData/LandingData";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Movies from "../Movies/Movies";

//passing props
export default function Landing({ isLoggedIn, moviesImages }) {
  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <>
      <div className="landingPage">
        {/* carousel made using react hooks(usestate) */}
        {/* <Carousel moviesImages={moviesImages} /> */}

        {/* carousel made with react-bootstrap */}
        {/* <CarouselSlider /> */}

        {/* {landingInfoData.map((text) => {
          return (
            <div class="InfoCards">
              <LandingInfo text={text} />
            </div>
          );
        })} */}
        <Movies />
      </div>
    </>
  );
}
