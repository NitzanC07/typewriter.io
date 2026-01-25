import Link from "next/link";
import styles from "./popupTableOfContents.module.css";
import lessonHelper from "@/helpers/GetLessonNumber";
import courseData from "@/data/course-web-development.json";
import Image from "next/image";
import closeIcon from "@/images/icons/closeButton_white.svg";
import { updateTag } from "next/cache";

type PopupTableOfContentsProps = {
  isVisibility: boolean;
  closePopup: () => void;
  updateLessonNumber: (newModNum: number, newLesNum: number) => void;
};

function PopupTableOfContents({
  isVisibility,
  closePopup,
  updateLessonNumber,
}: PopupTableOfContentsProps) {
  const courseContent = courseData.courseContent;

  return (
    <section className={`${styles.container}`}>
      <section className={`${styles.content}`}>
        <button className={styles.closeBtn} onClick={closePopup}>
          <Image src={closeIcon} alt="close" width={40} />
        </button>

        <h3 className={styles.title}>תוכן עניינים</h3>

        <ul>
          {courseContent.map((module, modIndex) => (
            <li className={styles.moduleItem} key={modIndex}>
              {module.title}
              <ul>
                {module.lessons.map((lesson, lesIndex) => (
                  <li
                    className={styles.lessonItem}
                    key={lesson.lessonId}
                    onClick={() =>
                      updateLessonNumber(modIndex + 1, lesIndex + 1)
                    }
                  >
                    {lesson.title}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}

export default PopupTableOfContents;
