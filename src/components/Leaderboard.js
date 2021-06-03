import React, { useEffect, useState } from "react";
import styles from "./leaderboardStyle.module.css";
import { useHistory } from "react-router";
// import { getScore } from "../firebase";
import { dbRefObject } from "../firebase";

function Leaderboard() {
  // state
  const [database, setDatabase] = useState();
  // global variables
  const history = useHistory();
  let pathname = history.location.pathname;
  let lbNum = pathname[pathname.length - 1];
  // didMount
  useEffect(() => {
    const dbRefLeaderboard = dbRefObject.child(lbNum);
    dbRefLeaderboard.on("value", (snap) => {
      if (snap.exists()) {
        setDatabase(Object.values(snap.val()));
      } else {
        setDatabase(null);
      }
    });
  }, [lbNum]);

  return (
    <div className={styles["leaderboard-container"]}>
      <div className={styles["leaderboard-top"]}>
        <div className={styles["leaderboard-title"]}>
          <h1>
            {lbNum === "1"
              ? "The Gobbling Gluttons"
              : lbNum === "2"
              ? "Worldwid Hike"
              : lbNum === "3"
              ? "The Unfriendly Gaints"
              : lbNum === "4"
              ? "Department Store"
              : null}
          </h1>
          <h2>Leaderboard</h2>
        </div>
      </div>
      <button className={styles["leaderboard-btn"]}>Play</button>
      <div className={styles["table-container"]}>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
      <button
        onClick={() => {
          history.goBack();
        }}
      >
        Back
      </button>
      <button
        onClick={() => {
          console.log(database);
        }}
      >
        get score
      </button>
    </div>
  );
}

export default Leaderboard;
