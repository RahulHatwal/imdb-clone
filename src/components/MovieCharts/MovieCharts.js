import React from "react";
import "./MovieCharts.css";
import bootstrap from "../../bootstrapData";
import { BsFillStarFill, BsFillBookmarkPlusFill } from "react-icons/bs";
import RatingModal from "../RatingModal/RatingModal";
import MovieFilter from "../MovieFilterNav/MovieFilter";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import useGetMovies from "../../hooks/useGetMovies";

export default function MovieCharts() {
  const movies = useGetMovies();
  console.log(movies);
  console.log(bootstrap.movies.list);
  const topMoviesList = bootstrap.movies.list;

  return (
    <div id="main">
      <div className="imdb-movie-charts">
        <div className="article">
          <h3>IMDb Charts</h3>
          <h1 className="header">IMDb top Movies</h1>
          <div class="byline">
            IMDb Top Movies as rated by regular IMDb voters.
          </div>
          <hr />

          <div className="lister">
            <MovieFilter movieList={bootstrap.movies.list} />
            <Table striped size="sm">
              <thead>
                <tr className="chart-head">
                  <th></th>
                  <th>Rank & Title</th>
                  <th>IMDb Rating</th>
                  <th>Your Rating</th>
                  <th>Wishlist</th>
                </tr>
              </thead>
              <tbody className="lister-list">
                {topMoviesList.map((movie) => {
                  return (
                    <tr className=" movie-charts-list-row">
                      <td className="posterColum align-middle">
                        <img src={movie.posterUrl} className="poster-image" />
                      </td>
                      <td className="titleColumn align-middle">
                        {`${movie.rank}. `}
                        <Link
                          to={`/topmovies/${movie.id}`}
                          state={{ movie: movie }}
                        >{`${movie.name} `}</Link>
                        ({movie.year})
                      </td>
                      <td className="ratingColumn imdbRating align-middle">
                        <h6>
                          <BsFillStarFill color="golden" /> {movie.rating}
                        </h6>
                      </td>
                      <td className="ratingColumn align-middle">
                        <h6>
                          <RatingModal
                            movie={movie}
                            starSize={22}
                            modalStarSize={30}
                            starColor={"orange"}
                            text="Rate this"
                          />
                        </h6>
                      </td>

                      <td className="watchlistColumn align-middle">
                        <BsFillBookmarkPlusFill />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
    // <div className="movie-charts">
    //   <div className="movie-charts-container">
    //     <div className="movie-charts-title">
    //       <h4>Movie charts</h4>
    //     </div>
    //     <MovieFilter movieList={bootstrap.movies.list} />
    //     <div className="movie-charts-titleContainer">
    //       <div className="movie-charts-movieTitle">
    //         <h5>Rank & Title</h5>
    //       </div>
    //       <div className="movie-charts-rating">
    //         <h5>IMDB Rating</h5>
    //       </div>
    //       <div className="movie-charts-your-rating">
    //         <h5>Your Rating</h5>
    //       </div>
    //       <div className="movie-charts-wishlist">
    //         <h5>Wishlist</h5>
    //       </div>
    //     </div>

    //     {topMoviesList.map((movie) => {
    //       return (
    //         <div className=" movie-charts-list-row">
    //           <div className="movie-charts-movieTitle">
    //             <img src={movie.posterUrl} className="poster-image" />
    //             <h6>{`${movie.rank}.  ${movie.name} (${movie.year})`}</h6>
    //           </div>
    //           <div className="movie-charts-rating">
    //             <h6>
    //               <BsFillStarFill /> {movie.rating}
    //             </h6>
    //           </div>
    //           <div className="movie-charts-your-rating">
    //             <h6>
    //               <RatingModal movie={movie} />
    //             </h6>
    //           </div>

    //           <div className="movie-charts-wishlist">
    //             <BsFillBookmarkPlusFill />
    //           </div>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>
  );
}
