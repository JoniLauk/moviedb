import React from "react";

const Movie = (props) => {
  return (
    <div>
      <h1>{props.movie.original_title}</h1>
    </div>
  );
};

export default Movie;
