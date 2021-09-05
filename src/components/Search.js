import React from "react";

const Search = (props) => {
  return (
    <div>
      <b>Search </b>
      <input
        id="filter"
        value={props.filter}
        onChange={(event) => props.setFilter(event.target.value)}
      />
    </div>
  );
};

export default Search;
