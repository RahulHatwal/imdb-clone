/* eslint-disable react/react-in-jsx-scope */
import Carousel from "react-bootstrap/Carousel";
import { moviesImages } from "../LandingData/LandingData";

import "./CarouselSlider.css";

function CarouselSlider() {
  return (
    <div className="d-block center mx-auto carouselContainer" >
      <Carousel fade wrap>
        {moviesImages.map((movie,index) => {
          return (
            <Carousel.Item key={index}>
              <img className="d-block w-100" src={movie.Url} alt={movie.Name} />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}

export default CarouselSlider;
