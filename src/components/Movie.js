import React from "react";
import "./Movie.css";

const Movie = (props) => {
  const posterPath = "https://image.tmdb.org/t/p/original/";

  return (
    <div className="Movie">
      <h2>{props.movie.title}</h2>
    </div>
  );
};

export default Movie;
