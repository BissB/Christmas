import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={`${styles.header} ${styles.slide_up}`}> 
      <h1 className={styles.header_title}>Punch of Christmas </h1>
      <p className={styles.header_subtitle}>News of The world</p>
    </header>
  );
}

export default Header;


