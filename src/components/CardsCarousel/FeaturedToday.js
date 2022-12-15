import React from "react";
import MovieCard from "./MovieCard";
import { Carousel } from "react-bootstrap";

const FeaturedToday = ({ movies }) => {
  return (
    <div>
      <h2>Featured Today</h2>
      <Carousel controls={false}>
        {movies.map((movie) => (
          <Carousel.Item key={movie.id}>
            <MovieCard movie={movie} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default FeaturedToday;
