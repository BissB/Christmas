import React from "react";
import styles from "./ImageCard.module.css";

function ImageCard({ imageSrc, title, content, index }) {
  return (
    <div
      className={`${styles.image_card} ${styles.fade_in}`} // 기본 클래스 및 애니메이션 클래스 추가
      style={{ animationDelay: `${index * 0.2}s` }} // 순서에 따라 애니메이션 지연 설정
    >
      <img className={styles.image} src={imageSrc} alt={title} />
      <div className={styles.text}>
        <h2
          className={`${styles.title} ${styles.fade_in}`} // 타이틀 애니메이션 추가
          style={{ animationDelay: `${index * 0.3}s` }} // 타이틀 애니메이션 지연 설정
        >
          {title}
        </h2>
        <div className={styles.content}>
          {content.map((paragraph, idx) => (
            <p
              key={idx}  // 각 단락에 고유 키 설정
              className={styles.fade_in} // 단락 애니메이션 추가
              style={{ animationDelay: `${index * 0.4 + idx * 0.1}s` }} // 순서 및 단락별 지연 설정
            >
              {paragraph} {/* 단락 내용 렌더링 */}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImageCard;


//몇개는 이해는 하는데 자주 쓰지 않으면 모를듯하다. 이해 안되는거는 아직 더 읽어봐야 할듯 하다

