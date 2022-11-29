import React, { useState, useEffect } from "react";
import "./MovieCard.css";
import axios from "axios";
import { Base64 } from "js-base64";
import RatingModal from "../RatingModal/RatingModal";
import { BsStarFill } from "react-icons/bs";

const MovieCard = (props) => {
  const { name, year, genre, tags, poster } = props.movie;
  const token = localStorage.getItem("token");
  const [posterUrl, setPosterUrl] = useState(
    "https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg"
  );
  useEffect(() => {
    axios
      .get(`http://localhost:2323/api/v1/upload/${poster}/base64`, {
        headers: {
          authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        setPosterUrl(`data:image/png;base64,${res.data}`);
      });
  }, [posterUrl]);
  //   debugger;

  return (
    <div className="movie-card-container">
      <div className="movie-card-poster-overlay"></div>
      <div className="movie-card-poster">
        <img src={posterUrl} alt="poster" />
      </div>
      <div className="movie-card-title">{name}</div>
      <div className="movie-card-yeargenre-row">
        <div className="movie-card-year">Year: {year}</div>
        <div className="movie-card-genre">genre: {genre}</div>
      </div>

      <div className="movie-card-rating-container">
        <div className="movie-card-imdb-rating">
          <BsStarFill size="20px" color="orange" /> 8.4
        </div>
        <div className="movie-card-your-rating">
          <RatingModal
            movie={props.movie}
            starSize={17}
            modalStarSize={31}
            starColor={"skyblue"}
            text="Rate this"
          />
        </div>
      </div>

      {/* <div className="movie-card-tags">{tags}</div> */}
    </div>
  );
};

export default MovieCard;
