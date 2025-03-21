import React from "react";
import styles from "./Tree.module.css";
import tree from "./img/tree.png"

const Tree = () => {
  return (
    <div className={styles.image}>
      <img src={tree} className={styles.image1}></img>
    </div>
  );
};

export default Tree;