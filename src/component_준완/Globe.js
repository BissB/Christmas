import React from "react";
import styles from "./Globe.module.css";
import globe from "./img/snowglobe.png"

const Globe = () => {
  return (
    <div className={styles.image}>
      <img src={globe} className={styles.image1}></img>
    </div>
  );
};

export default Globe;