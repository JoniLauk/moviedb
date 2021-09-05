import React from "react";
import "./Row.css";

const RowItem = (props) => {
  const posterPath = "https://image.tmdb.org/t/p/original/";

  return (
    <div className="movie">
      <img src={posterPath + props.movie.poster_path} alt="poster" />
    </div>
  );
};

export default RowItem;
