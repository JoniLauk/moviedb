import React from "react";
import "./Movie.css";

const Movie = (props) => {
  const posterPath =
    "https://image.tmdb.org/t/p/original/" + props.movie.poster_path;

  return (
    <div className="Movie">
      <h2>{props.movie.original_title}</h2>
      <img className="img" src={posterPath}></img>
    </div>
  );
};

export default Movie;
