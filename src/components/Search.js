import React from "react";
import axios from "axios";
import { Component } from "react";
import Results from "./Results";
import "../App.css";

class Search extends Component {
  state = {
    results: null,
    loading: false,
    value: "",
  };

  search = async (val) => {
    this.setState({ loading: true });
    const res = await axios(
      `https://api.themoviedb.org/3/search/movie?query=${val}&api_key=cc11a5a309558d55e3a5947bb272b95b`
    );
    const results = await res.data.results;

    this.setState({ results, loading: false });
  };

  onChangeHandler = async (e) => {
    this.search(e.target.value);
    this.setState({ value: e.target.value });
  };

  get renderResults() {
    let results;
    if (this.state.results) {
      results = <Results list={this.state.results} />;
    }

    return results;
  }

  render() {
    return (
      <div className="search">
        <input
          className="searchBar"
          id="filter"
          value={this.state.value}
          onChange={(e) => this.onChangeHandler(e)}
          placeholder="Search movies..."
        />
        {this.renderResults}
      </div>
    );
  }
}

export default Search;
