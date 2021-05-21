import React from "react";
import { useHistory } from "react-router";

function Puzzle() {
  const history = useHistory();
  console.log(history);
  return (
    <div>
      <h1>Puzzle here</h1>
      <button
        onClick={() => {
          history.goBack();
        }}
      >
        {" "}
        back
      </button>
    </div>
  );
}

export default Puzzle;
