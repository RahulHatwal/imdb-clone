import "./Landing.css";
// carousel images import
import { moviesImages } from "../Images/CarouselCover";
import React, { useState } from "react";

// bootstrap icons import from react-icons
import { BsArrowRightSquare, BsArrowLeftSquare } from "react-icons/bs";

// passing props
export function Landing({ moviesImages }) {
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

      <div class="favourites"></div>

      <div class="welcome-title"></div>
    </div>
  );
}
