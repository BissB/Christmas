import React from "react";
import styles from "./Snowman.module.css";
import man from "./img/snowman.png"

const Snowman = () => {
  return (
    <div className={styles.image}>
      <img src={man} className={styles.image1}></img>
    </div>
  );
};

export default Snowman;