import React from "react";

const Results = ({ list }) => {
  return (
    <div className="results">
      {list.map((result) => (
        <p>{result.title}</p>
      ))}
    </div>
  );
};

export default Results;
