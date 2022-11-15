import React from "react";
import "./AddMovies.css";

export default function AddMovies(props) {
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Add New Movie</h3>
          <div className="form-group mt-3">
            <label>Name</label>
            <input
              type="text"
              className="form-control mt-1 Auth-form-input"
              placeholder="Enter movie name"
            />
          </div>
          <div className="form-group mt-3">
            <label>Launch Year</label>
            <input
              type="date"
              className="form-control mt-1 Auth-form-input"
              placeholder="Enter launch date"
            />
          </div>

          <div className="form-group mt-3">
            <label for="genre">Genre</label>
            <select
              name="genre"
              id="movieGenre"
              className="form-select mt-1 Auth-form-input"
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
            </select>
          </div>

          <div className="form-group mt-3">
            <label>Tags</label>
            <input
              type="text"
              className="form-control mt-1 Auth-form-input"
              placeholder="Enter tags seprating with ','"
              required
            />
          </div>

          <div className="form-group mt-3">
            <label>Poster</label>
            <input
              type="file"
              className="form-control mt-1 Auth-form-input"
              required
            />
          </div>

          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
