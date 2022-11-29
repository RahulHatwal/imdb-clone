import React, { useState, Component } from "react";
// import { moviesImages } from "../../Images/CarouselCover";
import { BsArrowRightSquare, BsArrowLeftSquare } from "react-icons/bs";

export default function Carousel(props) {
  const [current, setCurrent] = useState(0);
  const { moviesImages } = props;
  const length = moviesImages.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  console.log(current);
  return (
    <>
      <div class="slideshow-container">
        <BsArrowLeftSquare className="left-arrow" onClick={prevSlide} />

        <BsArrowRightSquare className="right-arrow" onClick={nextSlide} />

        <div class="movieSlides">
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
        </div>
      </div>
    </>
  );
}
