import Link from "next/link";
import styles from "./card.module.css";

interface CardProps {
  titleCard?: string;
  contentCard: string;  
  titlePopup: () => void;
  courseData: (title: string | undefined, content: string) => void;
  handlePopup: () => void;
}

function Card({ titleCard, contentCard, courseData, handlePopup }: CardProps) {

  return (
    <div className={`${styles.card}`}>
      <div className={styles.imageContainer}></div>
      <h3 className={styles.title}>{titleCard}</h3>
      <p className={styles.content}>{contentCard}</p>
      <button className="secodaryButton" onClick={() => courseData(titleCard, contentCard)}>
        אני רוצה ללמוד
      </button>
    </div>
  );
}

export default Card;
