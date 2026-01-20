import { act } from "react";
import styles from "./card.module.css";

interface CardProps {
  titleCard?: string;
  contentCard: string;
  activate: boolean;
  courseData: (title?: string | undefined, content?: string, activate?: boolean) => void;
}

function Card({ titleCard, contentCard, activate, courseData }: CardProps) {
  console.log(activate);

  return (
    <div className={`${styles.card}`}>
      <div className={styles.imageContainer}></div>
      <h3 className={styles.title}>{titleCard}</h3>
      <p className={styles.content}>{contentCard}</p>
      <button
        className={`secodaryButton`}
        onClick={() => courseData(titleCard, contentCard, activate)}
      >
        אני רוצה ללמוד
      </button>
    </div>
  );
}

export default Card;
