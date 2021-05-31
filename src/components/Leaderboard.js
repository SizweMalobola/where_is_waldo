import React from "react";
import { useHistory } from "react-router";

function Leaderboard() {
  const history = useHistory();
  console.log(history);
  return (
    <div>
      <nav>
        <h1>Leaderboard</h1>
      </nav>
      <div></div>
      <button
        onClick={() => {
          history.goBack();
        }}
      >
        Back
      </button>
    </div>
  );
}

export default Leaderboard;
