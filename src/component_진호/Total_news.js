import { Header, NewsSection } from "./index";
import styles from "./Total_news.module.css";

function Total_news() {
  return (
    <div className={styles.news}>
      <div className={styles.back} />
      <div className={styles.newspaper}>
        <Header />
        <NewsSection />
      </div>
    </div>
  );
}

export default Total_news;
