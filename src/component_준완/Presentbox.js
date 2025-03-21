import React from "react";
import styles from "./Presentbox.module.css";
import Box from "./img/presentbox.png"

const Presentbox = () => {
  return (
    <div className={styles.image}>
      <img src={Box} className={styles.image1}></img>
    </div>
  );
};

export default Presentbox;