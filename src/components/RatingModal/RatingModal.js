import React, { useEffect, useState } from "react";
import { BsStar, BsFillStarFill } from "react-icons/bs";
import { Rating } from "react-simple-star-rating";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./RatingModal.css";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../../actions/fetchMovieActions";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function RatingModal(props) {
  const { movie, starSize, modalStarSize, starColor, text, movieRating } =
    props;
  console.log(props);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const [rating, setRating] = useState(0);
  const [userRating, setUserRating] = useState(0);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  // Catch Rating value
  const handleRating = (rate) => {
    console.log("handleRating", rate);
    setRating(rate);
  };

  useEffect(() => {
    if (localStorage.getItem("role") === "user") {
      axios
        .get(`http://localhost:2323/api/v1/rating/movie/${movie.id}`, {
          headers: {
            authorization: `bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          console.log("respose form rating API", res);
          if (res.data.success) {
            setUserRating(res.data.rating.star);
          }
        });
    }
  }, [userRating]);

  const rate = async () => {
    try {
      setShow(false);
      const res = await axios.post(
        "http://localhost:2323/api/v1/rating",
        {
          movieId: movie.id,
          star: rating,
        },
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (res) {
        console.log(res);
        dispatch(fetchMovies());
        handleClose();
        navigate(0);
      }
    } catch (err) {
      console.log(err);
    }
  };
  // const onPointerMove = (value, index) => setRating(value);
  // const onPointerEnter = () => console.log('Enter');
  // const onPointerLeave = () => console.log('Leave');
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
        <span className="movie-star-rating">{userRating}</span>
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
            initialValue={parseInt(userRating)}
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
          <Button variant="primary" onClick={rate}>
            Rate
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

