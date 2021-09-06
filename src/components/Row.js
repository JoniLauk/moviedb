import React, { useState, useEffect } from "react";
import axios from "axios";

const Row = ({ title, fetchUrl }) => {
  const [items, setItems] = useState([]);
  const posterPath = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    axios
      .get(fetchUrl + process.env.REACT_APP_MOVIEDB_API_KEY)
      .then((response) => {
        setItems(response.data.results);
      });
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="items">
        {items.map((movie) => (
          <img
            key={movie.id}
            className="item"
            src={posterPath + movie.poster_path}
            alt={movie.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
