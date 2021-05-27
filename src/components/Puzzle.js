import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import styles from "./puzzleStyle.module.css";

function Puzzle() {
  // set a count, that will keep track of seconds after the game has started.
  // ! not sure whether state is reset after every render
  const history = useHistory();
  const [time, setTime] = useState(0);
  const [waldo, setWaldo] = useState(() => {
    const pathname = history.location.pathname;
    let stateObj;
    switch (pathname) {
      case "/puzzle/1":
        stateObj = {
          tagged: false,
          xLeft: 1110,
          xRight: 1137,
          yTop: 423,
          yBottom: 475,
        };
        break;

      default:
        break;
    }
    return stateObj;
  });
  const [odlaw, setodlaw] = useState(null);
  const [wizard, setwizard] = useState(null);
  const [puzzleUrl, setPuzzleUrl] = useState(() => {
    const pathname = history.location.pathname;
    let puzzleUrl;
    switch (pathname) {
      case "/puzzle/1":
        puzzleUrl = "/assets/puzzle_1.jpg";
        break;
      case "/puzzle/2":
        puzzleUrl = "/assets/puzzle_2.jpg";
        break;
      case "/puzzle/3":
        puzzleUrl = "/assets/puzzle_3.jpeg";
        break;

      default:
        puzzleUrl = "/assets/puzzle_4.jpg";
        break;
    }
    return puzzleUrl;
  });
  // helper functions
  const tag = (x, y) => {
    //TODO tag is going to check whether x,y coordinates are within the tagging parameter()
  };
  // side effects
  useEffect(() => {
    console.log("useEffect");
    setTimeout(() => {
      setTime(time + 1);
    }, 1000);
  }, [time]);

  return (
    <div className={styles["main-container"]}>
      <div className={styles["img-container"]}>
        <img
          onClick={(e) => {
            console.log(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
          }}
          src={process.env.PUBLIC_URL + puzzleUrl}
          alt="puzzle"
        />
      </div>
      <div className={styles["status-container"]}>
        <h1>Time: {time}s</h1>
        <div>
          <p>Waldo </p>
          <p>Odlaw</p>
          <p>Wizard</p>
        </div>
      </div>
    </div>
  );
}

export default Puzzle;
// waldo in jail https://cdn.drawception.com/images/panels/2016/5-30/RgsCrODYWb-10.png
