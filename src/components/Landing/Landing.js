import React from "react";
import "./Landing.css";
import Carousel from "./ReactUsestateCarousel/Carousel";
import CarouselSlider from "./Carousel/CarouselSlider";
import { LandingInfo } from "./LandingInfo/LandingInfo";
import { landingInfoData } from "../LandingData/LandingData";

//passing props
export default function Landing({ isLoggedIn, moviesImages }) {
  return (
    <>
      <div className="landingPage">
        {/* carousel made using react hooks(usestate) */}
        {/* <Carousel moviesImages={moviesImages} /> */}

        {/* carousel made with react-bootstrap */}
        <CarouselSlider />

        {landingInfoData.map((text) => {
          return (
            <div class="InfoCards">
              <LandingInfo text={text} />
            </div>
          );
        })}
      </div>
    </>
  );
}
