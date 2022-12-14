import React, { useState, useEffect } from "react";
import "./MovieCard.css";
import axios from "axios";
import { Base64 } from "js-base64";
import RatingModal from "../RatingModal/RatingModal";
import { BsStarFill } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";

const MovieCard = (props) => {
  const [rating, setRating] = useState(0);
  const { name, year, genre, tags, poster, id } = props.movie;
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

    axios
      .get(
        `http://localhost:2323/api/v1/rating/movie/${id}`,
        {
          headers: {
            authorization: `bearer ${token}`,
          },
        },
        {
          name: name,
          genre: genre,
          tags: tags,
          poster: poster,
          year: year,
        }
      )
      .then((res) => {
        console.log(res);
        if (res.data.success) {
          setRating(res.data.rating.star);
        }
      });
  }, [rating]);
  //   debugger;

  const deleteCards = () => {
    axios
      .delete(
        `http://localhost:2323/api/v1/movie/${props.movie.id}`,
        {
          headers: {
            authorization: `bearer ${token}`,
          },
        },
        {
          name: name,
          genre: genre,
          tags: tags,
          poster: poster,
          year: year,
        }
      )
      .then((res) => {
        console.log(res.data.message);
        window.location.reload();
      });
  };

  return (
    <div className="movie-card-container">
      <div className="movie-card-poster-overlay"></div>
      <div className="delete-icon-overlay" onClick={deleteCards}>
        <AiFillDelete className="deleteIcon" size={24} />
      </div>
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
            movieRating={rating}
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
