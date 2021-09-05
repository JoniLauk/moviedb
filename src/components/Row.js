import React, { useState, useEffect, props } from "react";
import axios from "axios";
import RowItem from "./RowItem";

const Row = ({ title, fetchUrl }) => {
  const key = "cc11a5a309558d55e3a5947bb272b95b";
  const posterPath = "https://image.tmdb.org/t/p/original/";

  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get(fetchUrl + key).then((response) => {
      setItems(response.data.results);
      console.log(response.data);
    });
  }, []);

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
