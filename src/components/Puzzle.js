import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router";
import styles from "./puzzleStyle.module.css";

function Puzzle() {
  // set a count, that will keep track of seconds after the game has started.
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
      case "/puzzle/2":
        stateObj = {
          tagged: false,
          xLeft: 861,
          xRight: 899,
          yTop: 925,
          yBottom: 978,
        };
        break;
      case "/puzzle/3":
        stateObj = {
          tagged: false,
          xLeft: 616,
          xRight: 652,
          yTop: 1459,
          yBottom: 1521,
        };
        break;

      default:
        stateObj = {
          tagged: false,
          xLeft: 1159,
          xRight: 1200,
          yTop: 293,
          yBottom: 354,
        };
        break;
    }
    return stateObj;
  });
  const [odlaw, setOdlaw] = useState(() => {
    const pathname = history.location.pathname;
    let stateObj;
    switch (pathname) {
      case "/puzzle/1":
        stateObj = {
          tagged: false,
          xLeft: 783,
          xRight: 805,
          yTop: 735,
          yBottom: 770,
        };
        break;
      case "/puzzle/2":
        stateObj = {
          tagged: false,
          xLeft: 1188,
          xRight: 1216,
          yTop: 1191,
          yBottom: 1221,
        };
        break;
      case "/puzzle/3":
        stateObj = {
          tagged: false,
          xLeft: 2077,
          xRight: 2100,
          yTop: 2009,
          yBottom: 2055,
        };
        break;

      default:
        stateObj = {
          tagged: false,
          xLeft: 533,
          xRight: 569,
          yTop: 1252,
          yBottom: 1311,
        };
        break;
    }
    return stateObj;
  });
  const [wizard, setWizard] = useState(() => {
    const pathname = history.location.pathname;
    let stateObj;
    switch (pathname) {
      case "/puzzle/1":
        stateObj = {
          tagged: false,
          xLeft: 1662,
          xRight: 1718,
          yTop: 1039,
          yBottom: 1094,
        };
        break;
      case "/puzzle/2":
        stateObj = {
          tagged: false,
          xLeft: 1329,
          xRight: 1355,
          yTop: 966,
          yBottom: 998,
        };
        break;
      case "/puzzle/3":
        stateObj = {
          tagged: false,
          xLeft: 3407,
          xRight: 3431,
          yTop: 1712,
          yBottom: 1757,
        };
        break;

      default:
        stateObj = {
          tagged: false,
          xLeft: 1910,
          xRight: 1948,
          yTop: 59,
          yBottom: 105,
        };
        break;
    }
    return stateObj;
  });
  const [puzzleUrl] = useState(() => {
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
  const dropdownRef = useRef(null);
  // helper functions
  const tag = (e, target) => {
    //tag is going to check whether x,y coordinates are within the tagging parameter()
    let x = e.target.parentElement.offsetLeft;
    let y = e.target.parentElement.offsetTop;
    let tagged = false;
    if (
      x >= target.xLeft &&
      x <= target.xRight &&
      y >= target.yTop &&
      y <= target.yBottom
    ) {
      tagged = true;
    }
    return tagged;
  };

  const clickHandler = (e) => {
    // display the drop down menu
    let x = e.nativeEvent.offsetX;
    let y = e.nativeEvent.offsetY;
    console.log("clicked", x, y);
    const dropdown = dropdownRef.current;
    dropdown.style.top = `${y}px`;
    dropdown.style.left = `${x}px`;
    //TODO I have to find a way to make dropdown disappear and reappear when I click on the image.
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
        <ul ref={dropdownRef} className={styles["dropdown-menu"]}>
          {!waldo.tagged && (
            <li
              onClick={(e) => {
                if (tag(e, waldo)) {
                  setWaldo({ ...waldo, tagged: true });
                  console.log("waldo was tagged");
                }
              }}
            >
              Waldo
            </li>
          )}
          {!odlaw.tagged && (
            <li
              onClick={(e) => {
                if (tag(e, odlaw)) {
                  setOdlaw({ ...odlaw, tagged: true });
                  console.log("odlaw was tagged");
                }
              }}
            >
              Odlaw
            </li>
          )}
          {!wizard.tagged && (
            <li
              onClick={(e) => {
                if (tag(e, wizard)) {
                  setWizard({ ...wizard, tagged: true });
                  console.log("wizard was tagged");
                }
              }}
            >
              Wizard
            </li>
          )}
        </ul>
        <img
          onClick={(e) => {
            clickHandler(e);
          }}
          src={process.env.PUBLIC_URL + puzzleUrl}
          alt="puzzle"
        />
      </div>
      <div className={styles["status-container"]}>
        <h1>Time: {time}s</h1>
        <div>
          <p className={waldo.tagged && styles["found"]}>Waldo </p>
          <p className={odlaw.tagged && styles["found"]}>Odlaw</p>
          <p className={wizard.tagged && styles["found"]}>Wizard</p>
        </div>
      </div>
    </div>
  );
}

export default Puzzle;
// waldo in jail https://cdn.drawception.com/images/panels/2016/5-30/RgsCrODYWb-10.png
