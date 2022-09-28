import "./Landing.css";
import "./LandingInfo";
// carousel images import
import { moviesImages } from "../Images/CarouselCover";
import React, { useState } from "react";

// bootstrap icons import from react-icons
import { BsArrowRightSquare, BsArrowLeftSquare } from "react-icons/bs";
import { LandingInfo } from "./LandingInfo";

// passing props
export function Landing({ moviesImages }) {
  const arr = [
    "Reviews",
    "Listings",
    "All your favourite movies at one place",
    "Welcome to IMDB",
  ];

  const [current, setCurrent] = useState(0);

  const length = moviesImages.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  console.log(current);

  return (
    <div className="landingPage">
      <div class="slideshow-container">
        <BsArrowLeftSquare className="left-arrow" onClick={prevSlide} />
        <BsArrowRightSquare className="right-arrow" onClick={nextSlide} />
        <div class="movieSlides">
          {/* <img
            className="carousel-cover"
            src="https://areajugones.sport.es/wp-content/uploads/2022/04/the-batman-1.jpg"
            alt="batman"
          /> */}

          {moviesImages.map((slide, index) => {
            return (
              <div>
                {index === current && (
                  <img
                    className="carousel-cover"
                    src={slide.Url}
                    alt={slide.Name}
                  />
                )}
              </div>
            );
          })}
          {/* <div class="movie-descriptions">Caption Text</div> */}
        </div>
      </div>

      {/* <div class="InfoCards Reviews">
        <LandingInfo text="Reviews" />
      </div>

      <div class="InfoCards Listings">
        <LandingInfo text="Listings" />
      </div>

      <div class="InfoCards favourites">
        <LandingInfo text="All your favourite movies at one place" />
      </div>

      <div class="InfoCards welcome-msg">
        <LandingInfo text="Welcome to IMDB" />
      </div> */}

      {arr.map((text) => {
        return (
          <div class="InfoCards">
            <LandingInfo text={text} />
          </div>
        );
      })}
    </div>
  );
}
