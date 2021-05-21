import React from "react";
import { useHistory } from "react-router";

function Leaderboard() {
  const history = useHistory();
  console.log(history);
  return (
    <div>
      <h1>this is the Leaderboard</h1>
      <button
        onClick={() => {
          history.goBack();
        }}
      ></button>
    </div>
  );
}

export default Leaderboard;
