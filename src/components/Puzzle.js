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
  // TODO make marks mark the accurate spot
  const mark = (parentDiv, tag) => {
    let el = document.createElement("div");
    el.classList.add(`${styles["mark-container"]}`);
    el.style.top = `${parentDiv.offsetTop}px`;
    el.style.left = `${parentDiv.offsetLeft}px`;
    if (tag) {
      el.classList.add(`${styles["tick"]}`);
      el.innerHTML = `<svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7.66542 10.2366L9.19751 8.951L10.4831 10.4831L13.5473 7.91194L14.8328 9.44402L10.2366 13.3007L7.66542 10.2366Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M16.2071 4.89344C19.0923 7.77862 19.3131 12.3193 16.8693 15.4578C16.8846 15.4713 16.8996 15.4854 16.9143 15.5L21.1569 19.7427C21.5474 20.1332 21.5474 20.7664 21.1569 21.1569C20.7664 21.5474 20.1332 21.5474 19.7427 21.1569L15.5 16.9143C15.4854 16.8996 15.4713 16.8846 15.4578 16.8693C12.3193 19.3131 7.77862 19.0923 4.89344 16.2071C1.76924 13.083 1.76924 8.01763 4.89344 4.89344C8.01763 1.76924 13.083 1.76924 16.2071 4.89344ZM14.7929 14.7929C17.1361 12.4498 17.1361 8.6508 14.7929 6.30765C12.4498 3.96451 8.6508 3.96451 6.30765 6.30765C3.96451 8.6508 3.96451 12.4498 6.30765 14.7929C8.6508 17.1361 12.4498 17.1361 14.7929 14.7929Z" fill="currentColor"></path></svg>`;
    } else {
      el.classList.add(`${styles["cross"]}`);
      el.innerHTML = `<svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M15.854 12.854c-0-0-0-0-0-0l-4.854-4.854 4.854-4.854c0-0 0-0 0-0 0.052-0.052 0.090-0.113 0.114-0.178 0.066-0.178 0.028-0.386-0.114-0.529l-2.293-2.293c-0.143-0.143-0.351-0.181-0.529-0.114-0.065 0.024-0.126 0.062-0.178 0.114 0 0-0 0-0 0l-4.854 4.854-4.854-4.854c-0-0-0-0-0-0-0.052-0.052-0.113-0.090-0.178-0.114-0.178-0.066-0.386-0.029-0.529 0.114l-2.293 2.293c-0.143 0.143-0.181 0.351-0.114 0.529 0.024 0.065 0.062 0.126 0.114 0.178 0 0 0 0 0 0l4.854 4.854-4.854 4.854c-0 0-0 0-0 0-0.052 0.052-0.090 0.113-0.114 0.178-0.066 0.178-0.029 0.386 0.114 0.529l2.293 2.293c0.143 0.143 0.351 0.181 0.529 0.114 0.065-0.024 0.126-0.062 0.178-0.114 0-0 0-0 0-0l4.854-4.854 4.854 4.854c0 0 0 0 0 0 0.052 0.052 0.113 0.090 0.178 0.114 0.178 0.066 0.386 0.029 0.529-0.114l2.293-2.293c0.143-0.143 0.181-0.351 0.114-0.529-0.024-0.065-0.062-0.126-0.114-0.178z"></path></svg>`;
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
