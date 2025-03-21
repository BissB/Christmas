import { Fill, Stroke, Number } from ".";
import styles from "./Total_loading.module.css";

const Total = () => {
  return (
    <div className={styles.Total}>
      
      <div className={styles.back} />
      <Fill />
      <Stroke />
    </div>
  );
};

export default Total;