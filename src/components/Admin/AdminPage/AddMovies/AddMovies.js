import React, { useEffect, useState } from "react";
import useCheckAdmin from "../../../../hooks/useCheckAdmin";
import useCheckCurrentUser from "../../../../hooks/useCheckCurrentUser";
// import "./AddMovies.css";
import axios from "axios";
import { BsFillPrinterFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { uploadPoster } from "../../../../actions/uploadPosterActions";
import { addMovie } from "../../../../actions/movieCrudAction";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Toast from "react-bootstrap/Toast";

export default function AddMovies(props) {
  const [name, setName] = useState("");

  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");
  const [tags, setTags] = useState("");
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();
  const poster = useSelector((state) => state.uploadPoster.id);
  const createdMovieState = useSelector((state) => state.movieCrud);

  return (
    // <div className="Auth-form-container">
    //   <form className="Auth-form">
    //     <div className="Auth-form-content">
    //       <h3 className="Auth-form-title">Add New Movie</h3>
    //       <div className="form-group mt-3">
    //         <label>Name</label>
    //         <input
    //           type="text"
    //           className="form-control mt-1 Auth-form-input"
    //           placeholder="Enter movie name"
    //           onChange={(e) => setName(e.target.value)}
    //         />
    //       </div>
    //       <div className="form-group mt-3">
    //         <label>Launch Year</label>
    //         <input
    //           type="text"
    //           className="form-control mt-1 Auth-form-input"
    //           placeholder="Enter launch date"
    //           onChange={(e) => setYear(e.target.value)}
    //         />
    //       </div>

    //       <div className="form-group mt-3">
    //         <label for="genre">Genre</label>
    //         <select
    //           name="genre"
    //           id="movieGenre"
    //           className="form-select mt-1 Auth-form-input"
    //           onChange={(e) => setGenre(e.target.value)}
    //         >
    //           <option value="action">Action</option>
    //           <option value="adventure">Adventure</option>
    //           <option value="comedy">Comedy</option>
    //           <option value="drama">Drama</option>
    //           <option value="fantasy">Fantasy</option>
    //           <option value="horror">Horror</option>
    //           <option value="musicals">Musicals</option>
    //           <option value="mystery">Mystery</option>
    //           <option value="romance">Romance</option>
    //           <option value="scifi">Science Fiction</option>
    //           <option value="thriller">Thriller</option>
    //           <option value="western">Western</option>
    //         </select>
    //       </div>

    //       <div className="form-group mt-3">
    //         <label>Tags</label>
    //         <input
    //           type="text"
    //           className="form-control mt-1 Auth-form-input"
    //           placeholder="Enter tags seprating with ','"
    //           onChange={(e) => setTags(e.target.value)}
    //           required
    //         />
    //       </div>

    //       <div className="form-group mt-3">
    //         <label>Poster</label>
    //         <input
    //           type="file"
    //           className="form-control mt-1 Auth-form-input"
    //           onChange={(e) => dispatch(uploadPoster(e))}
    //           required
    //         />
    //       </div>

    //       <div className="d-grid gap-2 mt-3">
    //         <button
    //           type="button"
    //           className="btn btn-primary"
    //           onClick={() =>
    //             dispatch(addMovie({ name, genre, tags, poster, year }))
    //           }
    //         >
    //           Add
    //         </button>
    //       </div>
    //       <div className="errorNameMsg">{}</div>
    //     </div>
    //   </form>
    // </div>
    <div className="d-flex justify-content-center align-content-center mt-5">
      <Form
        className=" "
        style={{ width: "400px" }}
        onSubmit={(e) => {
          e.preventDefault();
          e.target.reset();
        }}
      >
        <Form.Group className=" mb-4 text-center text-uppercase">
          <h3 className=" h3">Add New Movie</h3>
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
          <FloatingLabel controlId="year" label="Launch Year" className="w-100">
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
          <Form.Label htmlFor="genre" className=" w-25 align-self-center m-2">
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

        <Form.Group className=" mb-3 d-flex ">
          <Form.Label htmlFor="poster" className=" w-25 align-self-center m-2">
            Poster
          </Form.Label>
          <Form.Control
            type="file"
            onChange={(e) => dispatch(uploadPoster(e))}
            required
            className="w-75"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Button
            variant="primary"
            className="w-100"
            type="submit"
            name="add"
            onClick={() =>
              dispatch(addMovie({ name, genre, tags, poster, year }))
            }
          >
            Add
          </Button>
        </Form.Group>
        <Form.Group>
          <Toast
            onClose={() => setShow(false)}
            show={show}
            delay={3000}
            className={
              createdMovieState.success
                ? "text-center text-bg-success w-100 "
                : "text-center text-bg-danger w-100"
            }
            autohide
            animation
          >
            <Toast.Body>{createdMovieState.message}</Toast.Body>
          </Toast>
        </Form.Group>
      </Form>
    </div>
  );
}
