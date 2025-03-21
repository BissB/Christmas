import React from "react"; 
import styles from "./NewsSection.module.css"; // NewsSection의 CSS 스타일을 적용
import ImageCard from "./ImageCard"; // ImageCard 컴포넌트를 불러와 사용

import santaLost from "./img/산타조난.jpg";
import santaDefault from "./img/산타.jpg";
import santaTraining from "./img/산타교육.jpg";

// NewsSection 컴포넌트 정의 (기사 섹션)
function NewsSection() {
  // 기사 데이터 배열: 각 기사에는 이미지, 제목, 본문 내용 포함
  const articles = [
    {
      imageSrc: santaLost,
      title: "South American Branch Santas Lost by the River", // 기사 제목
      content: [
        // 기사 본문 내용 (문단별로 배열)
        "Last Friday, an unusual yet familiar situation occurred in the South American branch, where the Santas were spotted stranded by a river while transporting presents. ",
        "The Santas, who are accustomed to working under some of the most challenging conditions in the world, found themselves momentarily delayed by the changing natural environment. ",
        "This unexpected situation caused some complications, as the Santas, despite their extraordinary skills, needed a bit of time to adapt to the new circumstances. ",
        "However, true to their nature, the South American branch Santas quickly adapted to the challenge, overcame the situation, and were able to continue their journey, ensuring that no child was left without a gift.",
        "The South American Santas have long been known for their remarkable ability to deliver presents even in the harshest of environments. ",
        "Unlike other branches, the leader Santa who oversees the South American operations is extremely selective when choosing Santas to join the team. ",
        "These Santas are rigorously screened and tested for their strength, resilience, and adaptability.",
      ],
    },
    {
      imageSrc: santaDefault,
      title: "Santa Enjoying His Vacation",
      content: [
        "As Christmas approaches, the hustle and bustle of the season is already in full swing.",
        "Santas are busy preparing their gift lists, fine-tuning their sleighs, and ensuring that all the toys are ready to be delivered to children all around the world.",
        "These dedicated individuals work tirelessly during the holiday season, making sure that the magic of Christmas is brought to life for every child. Yet, not all Santas are working around the clock in December. ",
        " Among them, there are those who, having completed the previous season, are now taking a well-deserved two-month vacation, from November to December.",
        "These Santas, after months of intense preparation and delivery, are seen in various tropical destinations, surfing the waves, relaxing on the beach, and enjoying the break they've earned through their hard work.",
        "While their stamina may seem extraordinary to us, Santas are not immune to fatigue. ",
      ],
    },
    {
      imageSrc: santaTraining,
      title: "Santas Receiving Training at Santa School",
      content: [
        "Santas have been delivering gifts to children all around the world for nearly 9 centuries, with their origins tracing back to Europe in the 12th century. ",
        "What began as a simple tradition soon evolved into a widespread and complex operation.",
        "As time passed, Santas began receiving formal training to ensure the success and safety of their important work.",
        "One of the key rules that emerged early on was the necessity for Santas to avoid being seen by children while delivering presents at night.",
        "To uphold this rule and ensure that their deliveries went smoothly, the Santas established a specialized school.",
        "This school wasn’t just for physical training; it was a place to teach Santas how to handle a variety of situations that might arise during their annual rounds, how to cooperate with parents, and how to maintain the magic and mystery of their visits.",
        "In the early years, during the 13th century, it wasn’t a major concern if a Santa was caught in the act.",
        "The world was a very different place, and the idea of a mysterious gift-bringer was still a novelty in many regions.",
        "However, as time passed and the tradition spread further, circumstances began to change.",
        "The world became more connected, the idea of Santa Claus took on more significance, and the need for Santas to remain unseen became more urgent.",
      ],
    },
  ];

  return (
    /* 뉴스 섹션 컨테이너 */
    <section className={styles.news_section}> 
      {articles.map((article, index) => (
        <ImageCard
          key={index} // 고유 키 설정
          imageSrc={article.imageSrc} // 이미지 경로 전달
          title={article.title} // 기사 제목 전달
          content={article.content} // 기사 본문 내용 전달
          index={index} // 인덱스 전달 (애니메이션 시간차 적용)
        />
      ))}
    </section>
  );
}

export default NewsSection;

