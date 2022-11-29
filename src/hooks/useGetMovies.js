import { useState, useEffect } from "react";
import axios from "axios";

const useGetMovies = () => {
  //   debugger;
  console.log("Inside useGetMovies hook");
  const [movies, setMovies] = useState();
  const token = localStorage.getItem("token");
  useEffect(() => {
    try {
      if (!movies) {
        axios
          .get("http://localhost:2323/api/v1/movie", {
            headers: {
              authorization: `bearer ${token}`,
            },
          })
          .then((res) => {
            console.log(res);
            if (res) {
              if (res.data) {
                if (res.data.success) {
                  setMovies(res.data.movie);
                }
              }
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } catch (error) {
      console.error(error.data.message);
    }
  });
  console.log(movies);
  return movies;
};

export default useGetMovies;
