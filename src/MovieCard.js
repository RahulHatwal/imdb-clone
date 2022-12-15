import React from "react";
import { Card, Button } from "react-bootstrap";
import useGetMovies from "./hooks/useGetMovies";

const MovieCard = () => {
  const movie = useGetMovies();
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={movie.poster} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.description}</Card.Text>
        <Button variant="primary">Add to Watchlist</Button>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
