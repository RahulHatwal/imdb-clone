import React from "react";
import "./movieInfo.css";
import { BsFillStarFill, BsStar } from "react-icons/bs";
import RatingModal from "../RatingModal/RatingModal";
import { useLocation } from "react-router-dom";

const MovieInfo = (props) => {
  const location = useLocation();
  console.log(props, " props");
  console.log(location, " useLocation Hook");
  //   const { name, description, year, rating, posterUrl, image, tagline, genre } = props.data.movies.list[0];
  const { name, description, year, rating, posterUrl, image, tagline, genre } =
    location.state?.movie;
  return (
    <div className="movieInfoContainer">
      <div className="movieHeader">
        <div className="movieTitleCol">
          <h1 className="movieTitle">{name}</h1>
          <h4>{year} - R - 2h 22m</h4>
        </div>
        <div className="movieRatingCol">
          <h4>IMDb Rating</h4>
          <div className="ratingBlock">
            <BsFillStarFill color="orange" size={24}></BsFillStarFill>
            <h4>{rating}/10</h4>
          </div>
        </div>
        <div className="yourRatingCol">
          <h4>Your Rating</h4>
          <div className="ratingBlock">
            <BsStar color="lightblue" size={24}></BsStar>
            {/* <RatingModal
              movie={props.data.movies.list[0]}
              starSize={24}
              starColor={"lightblue"}
              text="Rate this"
            /> */}
            <h4>Rate</h4>
          </div>
        </div>
      </div>

      <div className="movieCoverImg">
        <img src={posterUrl} className="moviePoster" alt={name} />
        <img src={image} className="movieCover" alt={`${name} image poster`} />
      </div>

      <div className="storylineContainer">
        <h2 className="orangeBorder">Storyline</h2>
        <p className="storylineBody">{description}</p>
      </div>
      <div className="misc">
        {/* <div>
          <b>Genre</b>{" "}
          {genre.map((genre) => (
            <p className="genreCard">{genre}</p>
          ))}
        </div> */}
        <hr />
        <div>
          <h5 className="orangeBorder">Taglines</h5>
          <p>{tagline}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
