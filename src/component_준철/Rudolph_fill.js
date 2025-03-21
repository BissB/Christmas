import React from "react";
import styles from "./Rudolph_fill.module.css";
import fill from "./img/fill.png";

const Rudolph_fill = () => {
  return (
    <div className={styles.fill}>
      <img src={fill} alt="" />
      <div className={styles.overlay}></div>
    </div>
  );
};

export default Rudolph_fill;
