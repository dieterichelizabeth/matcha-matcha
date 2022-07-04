import React from "react";
import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <div>
      <p>No result 404</p>

      <button>
        {" "}
        <Link to="/">Back Home</Link>
      </button>
    </div>
  );
};

export default NoMatch;
