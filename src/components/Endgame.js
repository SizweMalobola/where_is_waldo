import React from "react";
import styles from "./endgameStyle.module.css";

function Endgame({ time, closeModal }) {
  return (
    <>
      <div
        className={styles["modal"]}
        onClick={() => {
          closeModal();
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
            <input id="name" type="text" placeholder="Anonymous"></input>
            <button className={styles["btn-submit"]}>
              Submit to leaderboard
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Endgame;
