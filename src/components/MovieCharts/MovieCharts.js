import React, { useState } from "react";
import "./MovieCharts.css";
import bootstrap from "../../bootstrapData";
import { BsFillStarFill, BsFillBookmarkPlusFill, BsStar } from "react-icons/bs";
import RatingModal from "./RatingModal";

import { Rating } from "react-simple-star-rating";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import MovieFilter from "./MovieFilter";

export default function MovieCharts() {
  console.log(bootstrap.movies.list);
  const topMoviesList = bootstrap.movies.list;
  return (
    <div className="movie-charts">
      <div className="movie-charts-container">
        <div className="movie-charts-title">
          <h4>Movie charts</h4>
        </div>
        <MovieFilter movieList={bootstrap.movies.list} />
        <div className="movie-charts-titleContainer">
          <div className="movie-charts-movieTitle">
            <h5>Rank & Title</h5>
          </div>
          <div className="movie-charts-rating">
            <h5>IMDB Rating</h5>
          </div>
          <div className="movie-charts-your-rating">
            <h5>Your Rating</h5>
          </div>
          <div className="movie-charts-wishlist">
            <h5>Wishlist</h5>
          </div>
        </div>

        {topMoviesList.map((movie) => {
          return (
            <div className=" movie-charts-list-row">
              <div className="movie-charts-movieTitle">
                <img src={movie.posterUrl} className="poster-image" />
                <h6>{`${movie.rank}.  ${movie.name} (${movie.year})`}</h6>
              </div>
              <div className="movie-charts-rating">
                <h6>
                  <BsFillStarFill /> {movie.rating}
                </h6>
              </div>
              <div className="movie-charts-your-rating">
                <h6>
                  <RatingModal movie={movie} />
                </h6>
              </div>

              <div className="movie-charts-wishlist">
                <BsFillBookmarkPlusFill />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
