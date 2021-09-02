import logo from "./logo.svg";
import React, { useState, useEffect, props } from "react";
import Movie from "./components/Movie";
import axios from "axios";
import "./App.css";

const App = ({}) => {
  const key = "cc11a5a309558d55e3a5947bb272b95b";

  const [movie, setMovie] = useState({});
  const padding = {
    padding: 5,
  };

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/550?api_key=cc11a5a309558d55e3a5947bb272b95b"
      )
      .then((response) => {
        setMovie(response.data);
        console.log(response.data);
      });
  }, []);

  return (
    <div>
      <Movie movie={movie} />
    </div>
  );
};

export default App;
