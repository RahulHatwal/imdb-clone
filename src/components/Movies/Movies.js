import React, { useEffect } from "react";
import bootstrap from "../../bootstrapData";
import { BsFillStarFill, BsFillBookmarkPlusFill } from "react-icons/bs";
import RatingModal from "../RatingModal/RatingModal";
import MovieFilter from "../MovieFilterNav/MovieFilter";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import useGetMovies from "../../hooks/useGetMovies";

import axios from "axios";
import MovieCard from "./MovieCard";
import "./Movies.css";

export default function Movies() {
  const movies = useGetMovies();
  console.log(movies);

  return (
    movies && (
      <div className="movies-container">
        {movies.map((movie) => {
          console.log(movie);
          return <MovieCard movie={movie} />;
        })}
      </div>
    )
  );
}