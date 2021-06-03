import React, { useEffect, useState } from "react";
import styles from "./leaderboardStyle.module.css";
import { useHistory } from "react-router";
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
  // Todo render sorted scores from db.
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
      <button
        className={styles["leaderboard-btn"]}
        onClick={() => {
          history.push(`/puzzle/${lbNum}`);
        }}
      >
        Play
      </button>
      <div className={styles["table-container"]}>
        {database ? (
          <table>
            <thead>
              <tr>
                <th className={styles["table-rank"]}>Rank</th>
                <th className={styles["table-name"]}>Name</th>
                <th className={styles["table-time"]}>Time</th>
              </tr>
            </thead>
            <tbody className={styles["table-content"]}>
              {database
                .sort((a, b) => {
                  return a.time - b.time;
                })
                .map((obj, index) => {
                  return (
                    <tr key={index + obj.time}>
                      <td>{index + 1}</td>
                      <td>{obj.name}</td>
                      <td>{obj.time}s</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        ) : null}
      </div>
      <button
        onClick={() => {
          history.push("/");
        }}
      >
        Home
      </button>
    </div>
  );
}

export default Leaderboard;
