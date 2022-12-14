import React, { useState } from "react";
import { BsStar, BsFillStarFill } from "react-icons/bs";
import { Rating } from "react-simple-star-rating";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./RatingModal.css";
import axios from "axios";

export default function RatingModal(props) {
  const { movie, starSize, modalStarSize, starColor, text, movieRating } =
    props;
  console.log(props);
  const token = localStorage.getItem("token");
  const [rating, setRating] = useState(0);
  const [show, setShow] = useState(false);
  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
    axios
      .post(
        "http://localhost:2323/api/v1/rating",
        {
          movieId: movie.id,
          star: rating,
        },
        {
          headers: {
            authorization: `bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        console.log(res.data.message);
      });
    console.log(rate);
  };

  const handleClose = (e) => {
    setShow(false);
  };
  const handleShow = () => {
    console.log(movie.id);
    setShow(true);
  };

  return (
    <>
      <div className="movieModal" onClick={handleShow}>
        <BsStar color={starColor} size={starSize} />{" "}
        <span className="movie-star-rating">{movieRating}</span>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        // dialogClassName="modal-60"
        contentClassName="modal-container"
        backdrop="fixed"
        centered
      >
        <div className="rating-star-header">
          <BsFillStarFill color="royalblue" size={90} />
        </div>

        <div className="rating-modal-text">{text}</div>
        <Modal.Header>
          <Modal.Title>{movie.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Rating
            initialValue={parseInt(movieRating)}
            size={modalStarSize}
            onClick={handleRating}
            fillColorArray={[
              "#f14f45",
              "#f14f45",
              "#f16c45",
              "#f17a45",
              "#f18845",
              "#f19745",
              "#f1b345",
              "#f1c245",
              "#f1d045",
              "#f1de45",
            ]}
            iconsCount={10}
            // allowFraction
            showTooltip
            tooltipArray={[
              "Terrible",
              "Terrible+",
              "Bad",
              "Bad+",
              "Average",
              "Average+",
              "Great",
              "Great+",
              "Awesome",
              "Awesome+",
            ]}
            transition
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Rate
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
