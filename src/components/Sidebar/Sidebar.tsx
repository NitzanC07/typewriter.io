import Link from "next/link";
import styles from "./sidebar.module.css";
import lessonHelper from "@/helpers/GetLessonNumber";
import courseData from "@/data/course-web-development.json";

type SidebarProps = {
  isVisibility: boolean;
};

function Sidebar({isVisibility}: SidebarProps) {

  const saveLessonNumber = lessonHelper.saveLessonNumer;
  const courseContent = courseData.courseContent;
  
  return (
    <section className={`${styles.container}`}>
      <Link href="/">חזרה לדף הבית</Link>
      <h3 className={styles.title}>תוכן עניינים</h3>
      <ul>
        {courseContent.map((module, index) => (
          <li className={styles.moduleItem} key={index}>
            {module.title}
            <ul>
              {module.lessons.map((lesson, lessonIndex) => (
                <li className={styles.lessonItem} key={lesson.lessonId} onClick={() => saveLessonNumber(index + 1, lessonIndex + 1)}>
                  {lesson.title}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Sidebar;
