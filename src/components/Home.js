import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./homeStyle.module.css";
import RingLoader from "react-spinners/RingLoader";

function Home() {
  const [loading, setLoading] = useState(true);
  const [loadingImages, setLoadingImages] = useState(true);
  const containerRef = useRef();
  useEffect(() => {
    window.onload = setLoading(false);
    let imagesL = document.querySelectorAll(`.${styles["grid-container"]} img`);
    console.log(imagesL);
    //
    setTimeout(() => {
      setLoadingImages(false);
    }, 1000);
  }, []);
  return (
    <>
      {loading ? (
        <RingLoader color={"red"} loading={loading} size={150} />
      ) : (
        <div
          style={{
            background: `url(${process.env.PUBLIC_URL}/assets/home_background.png)`,
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
          }}
          className={styles.container}
        >
          <div className={styles["header-container"]}>
            <h1 className={styles["header-title"]}>WHERE IS WALDO!?</h1>
            <p className={styles["header-intro"]}>
              {" "}
              You there! Help us find Waldo. Currently the most dangerous man in
              the World. Wanted in multiple countries for countless shit. Waldo
              is extremely deadly, everyone who goes after him ends up dead in a
              ditch in a matter of hours. Just the action of reading this
              message has put you in his deadly sights. Now you have no choice
              but to find him and his crafty accomplices, before you end up dead
              in a ditch in the middle of nowhere. It's a matter of life and
              death, <span className={styles["header-span"]}>FIND WALDO!</span>
            </p>
          </div>
          <div ref={containerRef} className={styles["grid-container"]}>
            <div className={styles["card"]}>
              <div className={styles["card-top"]}>
                {loadingImages && (
                  <div className={styles["loader-container"]}>
                    <RingLoader
                      color={"red"}
                      loading={loadingImages}
                      size={100}
                    />
                  </div>
                )}
                <img
                  src={`${process.env.PUBLIC_URL}/assets/puzzle_1.jpg`}
                  alt="puzzle 1"
                />
              </div>
              <div className={styles["card-bottom"]}>
                <Link className={styles["card-link"]} to="/puzzle/1">
                  {" "}
                  <button className={styles["card-start"]}>Start</button>{" "}
                </Link>{" "}
                <Link className={styles["card-link"]} to="/leaderboard/1">
                  <button className={styles["card-leaderboard"]}>
                    Leaderboard
                  </button>
                </Link>
              </div>
            </div>
            <div className={styles["card"]}>
              <div className={styles["card-top"]}>
                {loadingImages && (
                  <div className={styles["loader-container"]}>
                    <RingLoader
                      color={"red"}
                      loading={loadingImages}
                      size={100}
                    />
                  </div>
                )}
                <img
                  src={`${process.env.PUBLIC_URL}/assets/puzzle_2.jpg`}
                  alt="puzzle 2"
                />
              </div>
              <div className={styles["card-bottom"]}>
                <Link className={styles["card-link"]} to="/puzzle/2">
                  {" "}
                  <button className={styles["card-start"]}>Start</button>{" "}
                </Link>{" "}
                <Link className={styles["card-link"]} to="/leaderboard/2">
                  <button className={styles["card-leaderboard"]}>
                    Leaderboard
                  </button>
                </Link>
              </div>
            </div>
            <div className={styles["card"]}>
              <div className={styles["card-top"]}>
                {loadingImages && (
                  <div className={styles["loader-container"]}>
                    <RingLoader
                      color={"red"}
                      loading={loadingImages}
                      size={100}
                    />
                  </div>
                )}
                <img
                  src={`${process.env.PUBLIC_URL}/assets/puzzle_3.jpeg`}
                  alt="puzzle 3"
                />
              </div>
              <div className={styles["card-bottom"]}>
                <Link className={styles["card-link"]} to="/puzzle/3">
                  {" "}
                  <button className={styles["card-start"]}>Start</button>{" "}
                </Link>{" "}
                <Link className={styles["card-link"]} to="/leaderboard/3">
                  <button className={styles["card-leaderboard"]}>
                    Leaderboard
                  </button>
                </Link>
              </div>
            </div>
            <div className={styles["card"]}>
              <div className={styles["card-top"]}>
                {loadingImages && (
                  <div className={styles["loader-container"]}>
                    <RingLoader
                      color={"red"}
                      loading={loadingImages}
                      size={100}
                    />
                  </div>
                )}
                <img
                  src={`${process.env.PUBLIC_URL}/assets/puzzle_4.jpg`}
                  alt="puzzle 4"
                />
              </div>
              <div className={styles["card-bottom"]}>
                <Link className={styles["card-link"]} to="/puzzle/4">
                  {" "}
                  <button className={styles["card-start"]}>Start</button>{" "}
                </Link>{" "}
                <Link className={styles["card-link"]} to="/leaderboard/4">
                  <button className={styles["card-leaderboard"]}>
                    Leaderboard
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}{" "}
    </>
  );
}

export default Home;
