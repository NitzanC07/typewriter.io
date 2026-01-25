"use client";
import styles from "./page.module.css";
import courseData from "@/data/course-web-development.json";
import { ModuleCourse, Section, CourseContent } from "@/types/coursesTypes";
import Timeline from "@/ui/Timeline/Timeline";
import Paragraph from "@/components/Paragraph/Paragraph";
import { useState } from "react";
import PopupTableOfContents from "@/components/Popups/PopupTableOfContents";

export default function CoursePage() {
  const [isPopupTableOfContentsVisibility, setPopupTableOfContentsVisibility] =
    useState(false);
  const [modNum, setModNum] = useState(1);
  const [lesNum, setLesNum] = useState(1);

  const closePopup = () => {
    setPopupTableOfContentsVisibility(false);
  };

  const updateLessonNumber = (newModNum: number, newLesNum: number) => {
    setModNum(newModNum);
    setLesNum(newLesNum);
    closePopup();
  };

  const courseDataTyped = courseData as unknown as ModuleCourse;
  const currentModule = courseDataTyped.courseContent?.find(
    (module: CourseContent) => Number(module.module) === modNum,
  );

  const currentLesson = currentModule?.lessons.find(
    (lesson: { lessonId: number }) => lesson.lessonId == lesNum,
  );

  return (
    <section className={styles.container}>
      <button
        className={`mainButton ${styles.tocButton}`}
        onClick={() => setPopupTableOfContentsVisibility(true)}
      >
        תוכן עניינים
      </button>
      <section className={styles.main}>
        <h2>{currentModule?.title}</h2>

        {currentLesson?.sections?.map((section: Section, index: number) => (
          <div key={index}>
            {section.sectionTitle && <h3>{section.sectionTitle}</h3>}

            {section.textBlock && (
              <Paragraph key={index} text={section.textBlock} />
            )}
          </div>
        ))}

        <Timeline />
        {isPopupTableOfContentsVisibility && (
          <PopupTableOfContents
            isVisibility={isPopupTableOfContentsVisibility}
            closePopup={closePopup}
            updateLessonNumber={updateLessonNumber}
          />
        )}
      </section>
    </section>
  );
}
