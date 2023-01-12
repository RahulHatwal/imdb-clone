import React, { useEffect, useState } from "react";

import { BsFillStarFill, BsStar } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import axios from "axios";
const MovieDetail = (props) => {
  const location = useLocation();
  console.log(props, " props");
  console.log(location, " useLocation Hook");
  const [imdbId, setImdbId] = useState(null);
  const [movieInfo, setMovieInfo] = useState({});
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://moviesminidatabase.p.rapidapi.com/movie/imdb_id/byTitle/harry%20potter/",
      headers: {
        "X-RapidAPI-Key": "cd4fa17382msh0ad02620c02d186p14dc0bjsn852b47128610",
        "X-RapidAPI-Host": "moviesminidatabase.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setImdbId(response.data[0].imdb_id);
      })
      .catch(function (error) {
        console.error(error);
      });

    if (imdbId !== null) {
      const opt = {
        method: "GET",
        url: `https://moviesminidatabase.p.rapidapi.com/movie/id/${imdbId}/`,
        headers: {
          "X-RapidAPI-Key":
            "cd4fa17382msh0ad02620c02d186p14dc0bjsn852b47128610",
          "X-RapidAPI-Host": "moviesminidatabase.p.rapidapi.com",
        },
      };

      axios
        .request(opt)
        .then(function (response) {
          console.log(response.data);
          setMovieInfo(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  });
  //   const { name, description, year, rating, posterUrl, image, tagline, genre } = props.data.movies.list[0];
  const { name, year, rating, ratingAvg, posterUrl, image, tags, genre } =
    location.state?.movie;

  return (
    <div className="movieInfoContainer mt-3">
      <div className="movieHeader">
        <div className="movieTitleCol">
          <h1 className="movieTitle">{name}</h1>
          <h4>{year} - R - 2h 22m</h4>
          <h5>{genre}</h5>
        </div>
        <div className="movieRatingCol">
          <h4>IMDb Rating</h4>
          <div className="ratingBlock">
            <BsFillStarFill color="orange" size={24}></BsFillStarFill>
            <h4>{ratingAvg}/10</h4>
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
            <h4>{rating}</h4>
          </div>
        </div>
      </div>

      <div className="movieCoverImg">
        <img src={posterUrl} className="moviePoster" alt={name} />
        <img src={image} className="movieCover" alt={`${name} image poster`} />
      </div>

      <div className="storylineContainer">
        <h2 className="orangeBorder">Storyline</h2>
        <p className="storylineBody">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
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
          <p>{tags}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
