import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router";
// import { ImAirplane } from "react-icons/im";
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
    const parentDiv = e.target.parentElement;
    const x = parentDiv.offsetLeft;
    const y = parentDiv.offsetTop;
    let tagged = false;
    if (
      x >= target.xLeft &&
      x <= target.xRight &&
      y >= target.yTop &&
      y <= target.yBottom
    ) {
      tagged = true;
    }
    // mark
    mark(parentDiv, tagged);
    // this hides dropdown menu
    if (!parentDiv.classList.contains(`${styles["hidden"]}`)) {
      parentDiv.classList.toggle(`${styles["hidden"]}`, true);
    }
    return tagged;
  };
  // TODO find a way to use to make the mark an icon
  const mark = (parentDiv, tag) => {
    let el = document.createElement("p");
    el.innerText = "mark";
    el.classList.add(`${styles["mark"]}`);
    el.style.top = `${parentDiv.offsetTop}px`;
    el.style.left = `${parentDiv.offsetLeft}px`;
    if (tag) {
      el.style.color = "green";
    } else {
      el.style.color = "red";
    }
    parentDiv.parentElement.appendChild(el);
  };

  const clickHandler = (e) => {
    // display the drop down menu
    let x = e.nativeEvent.offsetX;
    let y = e.nativeEvent.offsetY;
    console.log("clicked", x, y);
    const dropdown = dropdownRef.current;
    dropdown.style.top = `${y}px`;
    dropdown.style.left = `${x}px`;
    // now dropdown can disapper and reappear
    if (dropdown.classList.contains(`${styles["hidden"]}`)) {
      dropdown.classList.toggle(`${styles["hidden"]}`, false);
    } else {
      dropdown.classList.toggle(`${styles["hidden"]}`, true);
    }
  };

  // side effects
  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(time + 1);
    }, 1000);
    // timer is stopped after all waldo and his friends are found.
    if (waldo.tagged && odlaw.tagged && wizard.tagged) {
      clearTimeout(timer);
      console.log(`game finished after ${time}s`);
    }
  }, [odlaw.tagged, time, waldo.tagged, wizard.tagged]);

  return (
    <div className={styles["main-container"]}>
      <div className={styles["img-container"]}>
        <ul
          ref={dropdownRef}
          className={`${styles["dropdown-menu"]} ${styles["hidden"]}`}
        >
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
          <p className={waldo.tagged ? styles["found"] : null}>Waldo </p>
          <p className={odlaw.tagged ? styles["found"] : null}>Odlaw</p>
          <p className={wizard.tagged ? styles["found"] : null}>Wizard</p>
        </div>
      </div>
    </div>
  );
}

export default Puzzle;
// waldo in jail https://cdn.drawception.com/images/panels/2016/5-30/RgsCrODYWb-10.png
