import React from "react";

const Movie = (props) => {
  const posterPath =
    "https://image.tmdb.org/t/p/original/" + props.movie.poster_path;

  return (
    <div>
      <h2>{props.movie.original_title}</h2>
      <div>{props.movie.budget}</div>
      <img src={posterPath} width="150"></img>
    </div>
  );
};

export default Movie;
