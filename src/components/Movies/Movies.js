import React, { useEffect } from "react";
import bootstrap from "../../bootstrapData";
import { BsFillStarFill, BsFillBookmarkPlusFill } from "react-icons/bs";
import RatingModal from "../RatingModal/RatingModal";
import MovieFilter from "../MovieFilterNav/MovieFilter";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import useGetMovies from "../../hooks/useGetMovies";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import MovieCard from "./MovieCard";
import "./Movies.css";

export default function Movies() {
  const moviesList = useSelector((state) => state.fetchMovies.movies);
  console.log("moviesList", moviesList);

  return (
    moviesList && (
      <div className="movies-container">
        {moviesList.map((movie) => {
          console.log(movie);
          return <MovieCard movie={movie} />;
        })}
      </div>
    )
  );
}
