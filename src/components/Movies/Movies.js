import React from "react";
import { useSelector} from "react-redux";
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
          return <MovieCard movie={movie} key={movie.id} />;
        })}
      </div>
    )
  );
}
