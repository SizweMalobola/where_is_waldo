import React from "react";
import { useHistory } from "react-router";
import styles from "./puzzleStyle.module.css";

function Puzzle() {
  const history = useHistory();
  const pathname = history.location.pathname;
  let puzzleName;
  let puzzleUrl;

  switch (pathname) {
    case "/puzzle/1":
      puzzleName = "puzzle one";
      puzzleUrl = "/assets/puzzle_1.jpg";
      break;
    case "/puzzle/2":
      puzzleName = "puzzle two";
      puzzleUrl = "/assets/puzzle_2.jpg";
      break;
    case "/puzzle/3":
      puzzleName = "puzzle three";
      puzzleUrl = "/assets/puzzle_3.jpeg";
      break;

    default:
      puzzleName = "puzzle four";
      puzzleUrl = "/assets/puzzle_4.jpg";
      break;
  }

  return (
    <div>
      {/* <h1 className={styles["puzzle-title"]}>{puzzleName}</h1> */}
      <div
        className={styles["img-container"]}
        onClick={(e) => {
          console.log(e.clientX, e.clientY);
        }}
      >
        <img src={process.env.PUBLIC_URL + puzzleUrl} alt="puzzle" />
      </div>
      {/* <button
        onClick={() => {
          history.goBack();
        }}
      >
        back
      </button> */}
    </div>
  );
}

export default Puzzle;
