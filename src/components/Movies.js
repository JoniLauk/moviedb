import React, { useState, useEffect, props } from "react";
import axios from "axios";
import "./Movie.css";
import Movie from "./Movie";

const Movies = (props) => {
  let movieList = [];

  const [movies, setMovies] = useState([]);
  const key = "cc11a5a309558d55e3a5947bb272b95b";

  axios
    .get("https://api.themoviedb.org/3/trending/movie/week?api_key=" + key)
    .then((response) => {
      movieList = response.data;
      console.log(response.data);
    });

  return (
    <div className="Movies">
      {movieList.map((movie) => (
        <Movie movie={movie} />
      ))}
    </div>
  );
};

export default Movies;
