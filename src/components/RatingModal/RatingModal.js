import React, { useState } from "react";
import { BsStar, BsFillStarFill } from "react-icons/bs";
import { Rating } from "react-simple-star-rating";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./RatingModal.css";

export default function RatingModal(props) {
  const { movie, starSize, modalStarSize, starColor, text } = props;
  console.log(props);
  const [rating, setRating] = useState(0);
  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
    console.log(rate);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="movieModal" onClick={handleShow}>
        <BsStar color={starColor} size={starSize} /> {movie.yourRating}
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        // dialogClassName="modal-60"
        contentClassName="modal-container"
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
            size={modalStarSize}
            onClick={handleRating}
            initialValue={movie.yourRating}
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
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
