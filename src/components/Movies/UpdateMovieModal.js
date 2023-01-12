import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./updateMovieModal.css";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Toast from "react-bootstrap/Toast";
import { BiEdit } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { updateMovie } from "../../actions/movieCrudActions";
function UpdateMovieModal(props) {
  const [modalShow, setModalShow] = useState(false);
  const { id, color, size, poster, movie } = props;
  const [name, setName] = useState("");

  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");
  const [tags, setTags] = useState("");
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleClose = (e) => {
    setModalShow(false);
  };
  const handleShow = (e) => {
    setModalShow(true);
  };

  const updatedMovieState = useSelector((state) => state.movieCrud);
  return (
    <>
      <div className="movieModal" onClick={handleShow}>
        <BiEdit color={color} size={size} />{" "}
      </div>
      <Modal
        show={modalShow}
        onHide={handleClose}
        backdrop="fixed"
        // size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <div className="">
            <Form
              className=" "
              style={{ width: "400px" }}
              onSubmit={(e) => {
                e.preventDefault();
                e.target.reset();
              }}
            >
              <Form.Group className=" mb-4 text-center text-uppercase">
                <h3 className=" h3">Update Movie</h3>
              </Form.Group>

              <Form.Group className="mb-3">
                <FloatingLabel
                  controlId="moviename"
                  label="Movie Name"
                  className="w-100"
                >
                  <Form.Control
                    type="text"
                    placeholder="Movie Name"
                    name="moviename"
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </FloatingLabel>
              </Form.Group>

              <Form.Group className="mb-3">
                <FloatingLabel
                  controlId="year"
                  label="Launch Year"
                  className="w-100"
                >
                  <Form.Control
                    type="text"
                    name="year"
                    placeholder="Launch Year"
                    onChange={(e) => setYear(e.target.value)}
                    required
                  />
                </FloatingLabel>
              </Form.Group>

              <Form.Group className=" mb-3 d-flex">
                <Form.Label
                  htmlFor="genre"
                  className=" w-25 align-self-center m-2"
                >
                  Genre
                </Form.Label>
                <Form.Control
                  as="select"
                  name="genre"
                  id="movieGenre"
                  className="w-75"
                  required
                  onChange={(e) => setGenre(e.target.value)}
                >
                  <option value="action">Action</option>
                  <option value="adventure">Adventure</option>
                  <option value="comedy">Comedy</option>
                  <option value="drama">Drama</option>
                  <option value="fantasy">Fantasy</option>
                  <option value="horror">Horror</option>
                  <option value="musicals">Musicals</option>
                  <option value="mystery">Mystery</option>
                  <option value="romance">Romance</option>
                  <option value="scifi">Science Fiction</option>
                  <option value="thriller">Thriller</option>
                  <option value="western">Western</option>
                </Form.Control>
              </Form.Group>

              <Form.Group className=" mb-3">
                <FloatingLabel controlId="tags" label="Tags" className="w-100">
                  <Form.Control
                    type="text"
                    name="tags"
                    placeholder="Tags"
                    required
                    onChange={(e) => setTags(e.target.value)}
                  />
                </FloatingLabel>
              </Form.Group>

              <Form.Group className="mb-3">
                <Button
                  variant="primary"
                  className="w-100"
                  type="submit"
                  name="add"
                  onClick={() =>
                    dispatch(
                      updateMovie({ name, genre, tags, poster, year }, id)
                    )
                  }
                >
                  Update
                </Button>
              </Form.Group>
              <Form.Group>
                <Toast
                  onClose={() => setShow(false)}
                  show={show}
                  delay={3000}
                  className={
                    updatedMovieState.success
                      ? "text-center text-bg-success w-100 "
                      : "text-center text-bg-danger w-100"
                  }
                  autohide
                  animation
                >
                  <Toast.Body>{updatedMovieState.message}</Toast.Body>
                </Toast>
              </Form.Group>
            </Form>
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}
export default UpdateMovieModal;
