import React from "react";
import { Link } from "react-router-dom";
import styles from "./homeStyle.module.css";
function Home() {
  return (
    <div
      style={{
        background: `url(${process.env.PUBLIC_URL}/assets/home_background.png)`,
        backgroundAttachment: "fixed",
      }}
      className={styles.container}
    >
      <div className={styles["header-container"]}>
        <h1 className={styles["header-title"]}>WHERE IS WALDO!?</h1>
        <p className={styles["header-intro"]}>
          {" "}
          You there! Help us find Waldo. Currently the most dangerous man in the
          World. Wanted in multiple countries for countless shit. Waldo is
          extremely deadly, everyone who goes after him ends up dead in a ditch
          in a matter of hours. Just the action of reading this message has put
          you in his deadly sights [name]. Now you have no choice but to find
          him and his crafty accomplices, before you end up dead in a ditch in
          the middle of nowhere. It's a matter of life and death,{" "}
          <span className={styles["header-span"]}>FIND WALDO!</span>
        </p>
      </div>
      {/* <ul>
        <Link to="/puzzle/1">
          <li>puzzle 1</li>
        </Link>
        <Link to="/puzzle/2">
          <li>puzzle 2</li>
        </Link>
        <Link to="/puzzle/3">
          <li>puzzle 3</li>
        </Link>
      </ul> */}
      <div className={styles["grid-container"]}>
        <div className={styles["card"]}>
          <div
            className={styles["card-top"]}
            style={{
              background: `url(${process.env.PUBLIC_URL}/assets/puzzle_1.jpg)`,
              backgroundSize: "contain",
            }}
          ></div>
          <div className={styles["card-bottom"]}>
            <button className={styles["card-start"]}>Start</button>{" "}
            <button className={styles["card-leaderboard"]}>Leaderboard</button>
          </div>
        </div>
        <div className={styles["card"]}>
          <div
            className={styles["card-top"]}
            style={{
              background: `url(${process.env.PUBLIC_URL}/assets/puzzle_2.jpg)`,
              backgroundSize: "contain",
            }}
          ></div>
          <div className={styles["card-bottom"]}>
            <button className={styles["card-start"]}>Start</button>{" "}
            <button className={styles["card-leaderboard"]}>Leaderboard</button>
          </div>
        </div>
        <div className={styles["card"]}>
          <div
            className={styles["card-top"]}
            style={{
              background: `url(${process.env.PUBLIC_URL}/assets/puzzle_3.jpeg)`,
              backgroundSize: "contain",
            }}
          ></div>
          <div className={styles["card-bottom"]}>
            <button className={styles["card-start"]}>Start</button>{" "}
            <button className={styles["card-leaderboard"]}>Leaderboard</button>
          </div>
        </div>
        <div className={styles["card"]}>
          <div
            className={styles["card-top"]}
            style={{
              background: `url(${process.env.PUBLIC_URL}/assets/puzzle_4.jpg)`,
              backgroundSize: "contain",
            }}
          ></div>
          <div className={styles["card-bottom"]}>
            <button className={styles["card-start"]}>Start</button>{" "}
            <button className={styles["card-leaderboard"]}>Leaderboard</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
