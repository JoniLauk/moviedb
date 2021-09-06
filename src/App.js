import React from "react";
import Row from "./components/Row";
import Search from "./components/Search";
import "./App.css";

const App = () => {
  const trendingMovies =
    "https://api.themoviedb.org/3/trending/movie/week?api_key=";
  const trendingTVShows =
    "https://api.themoviedb.org/3/trending/tv/week?api_key=";
  const topRatedMovies =
    "https://api.themoviedb.org/3/movie/top_rated?api_key=";

  return (
    <div>
      <div>
        <Search />
      </div>
      <Row title="Trending movies" fetchUrl={trendingMovies} />
      <Row title="Trending TV shows" fetchUrl={trendingTVShows} />
      <Row title="Top Rated movies" fetchUrl={topRatedMovies} />
    </div>
  );
};

export default App;
