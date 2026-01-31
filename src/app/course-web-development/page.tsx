"use client";
import styles from "./page.module.css";
import courseData from "@/data/course-web-development.json";
import { ModuleCourse, Section, CourseContent } from "@/types/coursesTypes";
import Timeline from "@/ui/Timeline/Timeline";
import Paragraph from "@/components/Paragraph/Paragraph";
import { useState } from "react";
import PopupTableOfContents from "@/components/Popups/PopupTableOfContents";
import TitleText from "@/components/TitleText/TitleText";
import MainButton from "@/ui/MainButton/MainLink";
import Image from "next/image";
import ImageSingle from "@/components/ImageSingle/ImageSingle";

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
        <h2 className={styles.chapterTitle}>{currentModule?.title}</h2>

        <Timeline />

        {currentLesson?.sections?.map((section: Section, index: number) => (
          <div key={index}>
            {section.sectionTitle && <TitleText title={section.sectionTitle} />}

            {section.textBlock && (
              <Paragraph key={index} text={section.textBlock} />
            )}
            {section.mainLink && (
              <MainButton
                text={section.mainLink.text}
                urlLink={section.mainLink.urlLink}
              />
            )}
            {section.image && (
              <ImageSingle image={section.image} />
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
