import React from "react";
import styles from "./Rudolph_stroke.module.css";
import stroke from "./img/stroke.png";

const Rudolph_stroke = () => {
  return (
    <div className={styles.stroke}>
      <img src={stroke} alt="" />
    </div>
  );
};

export default Rudolph_stroke;
