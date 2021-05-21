import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>this is the home from imaginary kids</h1>
      <ul>
        <Link to="/puzzle/1">
          <li>puzzle 1</li>
        </Link>
        <Link to="/puzzle/2">
          <li>puzzle 2</li>
        </Link>
        <Link to="/puzzle/3">
          <li>puzzle 3</li>
        </Link>
      </ul>
    </div>
  );
}

export default Home;
