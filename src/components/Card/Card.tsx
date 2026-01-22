import styles from "./card.module.css";
import CourseInfo from "@/types/courseInfo";

interface CardProps {
  handlePopup: (courseInfo: CourseInfo) => void;
  selectedCourseInfo: () => void;
  courseInfo: CourseInfo;
}

function Card({ handlePopup, courseInfo }: CardProps) {
  
  return (
    <div className={`${styles.card}`}>
      <div className={styles.imageContainer}></div>
      <h3 className={styles.title}>{courseInfo.title}</h3>
      <p className={styles.content}>{courseInfo.description}</p>
      <button
        className={`secodaryButton`}
        onClick={() => handlePopup(courseInfo)}
      >
        אני רוצה ללמוד
      </button>
    </div>
  );
}

export default Card;
