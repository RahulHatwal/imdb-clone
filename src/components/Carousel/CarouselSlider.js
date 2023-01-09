import Carousel from "react-bootstrap/Carousel";
import { moviesImages } from "../LandingData/LandingData";

import "./CarouselSlider.css";

function CarouselSlider() {
  return (
    <div className="d-block center mx-auto carouselContainer" >
      {/* <Carousel dark wrap fade>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100 carousel-img"
            src="https://www.moviehdwallpapers.com/wp-content/uploads/2013/10/Her-2013-Love-Story-Movie.jpg"
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100 carousel-img"
            src="https://www.enjpg.com/img/2020/harry-potter-30.jpg"
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 carousel-img"
            src="https://webdevolutions.blob.core.windows.net/cms/lord_of_the_ring_trilogy_fc41c807b6.png"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel> */}

      {/* Map not working on carousel */}

      <Carousel fade wrap>
        {moviesImages.map((movie) => {
          return (
            <Carousel.Item>
              <img className="d-block w-100" src={movie.Url} alt={movie.Name} />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}

export default CarouselSlider;
