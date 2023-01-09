import React, { useState, useEffect, useRef } from "react";
import "./MovieCard.css";
import axios from "axios";
import { Base64 } from "js-base64";
import RatingModal from "../RatingModal/RatingModal";
import { BsStarFill } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { deleteMovie, updateMovie } from "../../actions/movieCrudAction";
import { fetchMovies } from "../../actions/fetchMovieActions";
import { BiEdit } from "react-icons/bi";
import UpdateMovieModal from "./UpdateMovieModal";
import { Link } from "react-router-dom";

const MovieCard = (props) => {
  const [rating, setRating] = useState(0);

  const [ratingAvg, setRatingAvg] = useState(0);
  //const ratingAvg = useRef(8.4);
  const dispatch = useDispatch();
  const userRole = localStorage.getItem("role");
  const userToken = localStorage.getItem("token");
  console.log("userRole", userRole, userToken);
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
      .get(`http://localhost:2323/api/v1/rating/movie/${id}/avg`, {
        headers: {
          authorization: `bearer ${userToken}`,
        },
      })
      .then((res) => {
        console.log("respose form rating avg API", res);
        if (res.data.success) {
          //ratingAvg.current = res.data.rating;
          setRatingAvg(res.data.rating);
          console.log("rateAvg", ratingAvg);
        }
      });
  }, [ratingAvg]);
  //   debugger;

  const deleteCards = () => {
    dispatch(deleteMovie(id));
  };

  const updateCards = () => {
    dispatch(updateMovie(id));
  };

  return (
    <div className="movie-card-container">
      <div className="movie-card-poster-overlay"></div>
      <div className="icon-overlay">
        {userRole === "admin" ? (
          <AiFillDelete
            className="deleteIcon"
            size={24}
            onClick={deleteCards}
          />
        ) : null}
        {userRole === "admin" ? (
          <UpdateMovieModal
            id={id}
            color={"balck"}
            size={22}
            poster={poster}
            movie={(name, year, genre, tags)}
          />
        ) : null}
      </div>

      <div className="movie-card-poster">
        <img src={posterUrl} alt="poster" />
      </div>

      <div className="movie-card-title ">
        {" "}
        <Link
          className="text-decoration-none text-primary"
          to={`/movies/${id}`}
          state={{ movie: { ...props.movie, ratingAvg, rating } }}
        >
          {name}
        </Link>
      </div>
      <div className="movie-card-yeargenre-row">
        <div className="movie-card-year">Year: {year}</div>
        <div className="movie-card-genre">genre: {genre}</div>
      </div>

      <div className="movie-card-rating-container">
        <div className="movie-card-imdb-rating">
          <BsStarFill
            size="20px"
            color="orange"
            style={{ margin: "0px 8px 0px 0px" }}
          />
          {ratingAvg}
        </div>
        {userRole === "user" ? (
          <div className="movie-card-your-rating">
            <RatingModal
              movie={props.movie}
              movieRating={ratingAvg}
              starSize={17}
              modalStarSize={31}
              starColor={"skyblue"}
              text="Rate this"
            />
          </div>
        ) : null}
      </div>

      {/* <div className="movie-card-tags">{tags}</div> */}
    </div>
  );
};

export default MovieCard;
