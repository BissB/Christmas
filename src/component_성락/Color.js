import styles from "./Color.module.css";

console.groupCollapsed("src/component/Color.js invoked.");console.groupEnd();

function Color({toggleOn}) {
  
    return (
      <div className={styles.color_box}>
        
        <i className={`fas fa-circle ${styles.box_red}`} onClick={() =>toggleOn('red')}/>
        <i className={`fas fa-circle ${styles.box_yellow}`} onClick={() =>toggleOn('yellow')}/>
        <i className={`fas fa-circle ${styles.box_green}`} onClick={() =>toggleOn('green')}/>
        <i className={`fas fa-circle ${styles.box_blue}`} onClick={() =>toggleOn('blue')}/>
        <i className={`fas fa-circle ${styles.box_purple}`} onClick={() =>toggleOn('purple')}/>

      </div>
    );
  }

export default Color;