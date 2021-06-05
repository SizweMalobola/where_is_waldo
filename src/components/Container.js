import React from "react";
import styles from "./containerStyle.module.css";

function Container({ children }) {
  return (
    <>
      <div className={styles["container"]}>{children}</div>
    </>
  );
}

export default Container;
