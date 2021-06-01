import React, { useRef } from "react";
import styles from "./endgameStyle.module.css";
import { pushScore } from "../firebase";

function Endgame({ time, closeModal, history }) {
  const inputRef = useRef();
  const lbPath = () => {
    const currentPath = history.location.pathname;
    let lb;
    switch (currentPath) {
      case "/puzzle/1":
        lb = 1;
        break;
      case "/puzzle/2":
        lb = 2;

        break;
      case "/puzzle/3":
        lb = 3;
        break;

      default:
        lb = 4;
        break;
    }
    // this function returns the leaderboard number that represents the path in the bd
    return lb;
  };
  return (
    <>
      <div
        className={styles["modal"]}
        onClick={(e) => {
          if (e.target.classList.contains(`${styles["modal"]}`)) {
            closeModal();
          }
        }}
      >
        <button
          className={styles["btn-x"]}
          onClick={() => {
            closeModal();
          }}
        >
          X
        </button>
        <div className={styles["content-container"]}>
          <h1>
            You Finished the level in <span>{time}</span> seconds
          </h1>
          <div className={styles["input-div"]}>
            <label htmlFor="name">Name</label>
            <input
              ref={inputRef}
              id="name"
              type="text"
              placeholder="Anonymous"
              required
            ></input>
            <button
              className={styles["btn-submit"]}
              // this onclick event pushes name and time to database & goes to puzzle's leaderboard
              onClick={() => {
                if (inputRef.current.value) {
                  pushScore(lbPath(), inputRef.current.value, time);
                } else {
                  pushScore(lbPath(), "anonymous", time);
                }
                history.push(`/leaderboard/${lbPath()}`);
              }}
            >
              Submit to leaderboard
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Endgame;
