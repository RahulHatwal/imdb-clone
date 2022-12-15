import React, { useEffect, useState } from "react";
import useCheckAdmin from "../../../../hooks/useCheckAdmin";
import useCheckCurrentUser from "../../../../hooks/useCheckCurrentUser";
import "./AddMovies.css";
import axios from "axios";
import { BsFillPrinterFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { uploadPoster } from "../../../../actions/uploadPosterActions";
import { addMovie } from "../../../../actions/movieCrudAction";

export default function AddMovies(props) {
  const [name, setName] = useState("");

  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");
  const [tags, setTags] = useState("");

  const dispatch = useDispatch();
  const posterState = useSelector((state) => state.uploadPoster);
  // const currentAdmin = useCheckAdmin(
  //   "http://localhost:2323/api/v1/admin/currentAdmin"
  // );
  // const token = localStorage.getItem("token");

  // const addMovieOnClick = async (e) => {
  //   try {
  //     setError("");
  //     console.log(name, year, genre, tags, poster);
  //     if (name && year && tags && genre && poster) {
  //       // api request
  //       const res = await axios.post(
  //         "http://localhost:2323/api/v1/movie",
  //         {
  //           name: name,
  //           genre: genre,
  //           tags: tags,
  //           poster: poster,
  //           year: year,
  //         },
  //         {
  //           headers: {
  //             authorization: `bearer ${token}`,
  //           },
  //         }
  //       );

  //       console.log(res);
  //       if (res.data.success) {
  //         setError(res.data.message);
  //       } else {
  //         setError(res.data.message);
  //       }
  //       // if (res) {
  //       //   if (res.data) {
  //       //     if (res.data.success) {
  //       //       setError(res.data.message);
  //       //       // set the token recieved from login respose to localstorage.token
  //       //     }
  //       //   }
  //       // } else {
  //       //   setError(res.data.message);
  //       //   console.log("Hello");
  //       // }
  //       setGenre("");
  //       setName("");
  //       setPoster("");
  //       setYear("");
  //     }
  //   } catch (err) {
  //     console.log(err);
  //     if (err) {
  //       if (err.response) {
  //         if (!err.response.data.success) {
  //           console.log(err.response.data.message);
  //           setError(err.response.data.message);
  //         }
  //       }
  //     }
  //   }

  // const { email, password } = this.state;
  // const res = bootstrap.users.login(email, password);
  // };

  // const uploadPoster = async (e) => {
  //   try {
  //     setError("");
  //     console.log("Upload api is called");
  //     if (e) {
  //       // api request
  //       const formData = new FormData();
  //       formData.append("upload", e.target.files[0]);
  //       const res = await axios.post(
  //         "http://localhost:2323/api/v1/upload",
  //         formData,
  //         {
  //           headers: {
  //             authorization: `bearer ${token}`,
  //           },
  //         }
  //       );
  //       console.log(res.data.upload.id);
  //       if (res.data.success) {
  //         setError(res.data.message);
  //         setPoster(res.data.upload.id);
  //       } else {
  //         setError(res.data.message);
  //       }
  //       // if (res) {
  //       //   if (res.data) {
  //       //     if (res.data.success) {
  //       //       setError(res.data.message);
  //       //       // set the token recieved from login respose to localstorage.token
  //       //     }
  //       //   }
  //       // } else {
  //       //   setError(res.data.message);
  //       //   console.log("Hello");
  //       // }
  //     }
  //   } catch (err) {
  //     console.log(err);
  //     if (err) {
  //       if (err.response) {
  //         if (!err.response.data.success) {
  //           console.log(err.response.data.message);
  //           setError(err.response.data.message);
  //         }
  //       }
  //     }
  //   }

  //   // const { email, password } = this.state;
  //   // const res = bootstrap.users.login(email, password);
  // };

  const uploadPoster = async (e) => {
    const formData = new FormData();
    formData.append("upload", e.target.files[0]);
    dispatch(uploadPoster(formData));
  };

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
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Launch Year</label>
            <input
              type="text"
              className="form-control mt-1 Auth-form-input"
              placeholder="Enter launch date"
              onChange={(e) => setYear(e.target.value)}
            />
          </div>

          <div className="form-group mt-3">
            <label for="genre">Genre</label>
            <select
              name="genre"
              id="movieGenre"
              className="form-select mt-1 Auth-form-input"
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
            </select>
          </div>

          <div className="form-group mt-3">
            <label>Tags</label>
            <input
              type="text"
              className="form-control mt-1 Auth-form-input"
              placeholder="Enter tags seprating with ','"
              onChange={(e) => setTags(e.target.value)}
              required
            />
          </div>

          <div className="form-group mt-3">
            <label>Poster</label>
            <input
              type="file"
              className="form-control mt-1 Auth-form-input"
              onChange={uploadPoster}
              required
            />
          </div>

          <div className="d-grid gap-2 mt-3">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() =>
                dispatch(addMovie({ name, genre, tags, posterState, year }))
              }
            >
              Add
            </button>
          </div>
          <div className="errorNameMsg">{}</div>
        </div>
      </form>
    </div>

    // <>
    //   {admin && (
    //     <div className="Auth-form-container">
    //       <form className="Auth-form">
    //         <div className="Auth-form-content">
    //           <h3 className="Auth-form-title">Add Movie</h3>
    //           <div className="form-group-signin">
    //             <label>Name</label>
    //             <input
    //               type="text"
    //               name="name"
    //               className="form-control "
    //               placeholder="Enter Movie Name"
    //               onChange={(e) => setName(e.target.value)}
    //               required
    //             />
    //           </div>
    //           <div className="form-group-signin">
    //             <label>Launch Year</label>
    //             <input
    //               type="text"
    //               name="year"
    //               className="form-control "
    //               placeholder="Enter Launch Year"
    //               onChange={(e) => setYear(e.target.value)}
    //               required
    //             />
    //           </div>
    //           <div
    //             className="form-group-signin"
    //             onChange={(e) => setGenre(e.target.value)}
    //           >
    //             <label>Genre</label>
    //             <select className="form-select" name="genre">
    //               <option value=" ">Choose Genre</option>
    //               <option value="action">Action</option>
    //               <option value="romcom">Rom-Com</option>
    //               <option value="thriller">Thriller</option>
    //               <option value="horror">Horror</option>
    //             </select>
    //           </div>
    //           <div className="form-group-signin">
    //             <label>Tags</label>
    //             <input
    //               type="text"
    //               name="tags"
    //               className="form-control"
    //               placeholder="Enter Tags"
    //               onChange={(e) => setTags(e.target.value)}
    //               required
    //             />
    //           </div>
    //           <div className="form-group-signin">
    //             <label>Poster</label>
    //             <input
    //               type="file"
    //               className="form-control form-control-sm"
    //               name="poster"
    //               onChange={(e) => setPoster(e.target.value)}
    //             />
    //           </div>
    //           <div className="form-group-signin d-grid gap-2 ">
    //             <input
    //               type="button"
    //               className="btn btn-outline-warning"
    //               value="Add"
    //               name="add"
    //               onClick={addMovieOnClick}
    //             />
    //           </div>
    //           <p>{error}</p>
    //         </div>
    //       </form>
    //     </div>
    //   )}
    // </>
  );
}
