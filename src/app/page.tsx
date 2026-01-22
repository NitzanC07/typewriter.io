"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Logo from "../images/logos/logo-ts.png";
import PopupForm from "@/components/Popups/PopupForm";
import CardsContainer from "@/components/Card/CardsContainer";
import loginFormContent from "@/utils/loginFormData.json";
import registerFormContent from "@/utils/registerFormData.json";
import CourseInfo from "@/types/courseInfo";
import PopupInfo from "@/components/Popups/PopupInfo";

export default function Home() {
  const [isPopupFormVisible, setPopupFormVisibility] = useState(false);
  const [isPopupInfoVisible, setPopupInfoVisibility] = useState(false);
  const [submitBtn, setSubmitBtn] = useState("");
  const [titlePopup, setTitlePopup] = useState("");
  const [courseInfoPopup, setCourseInfoPopup] = useState({
    id: "",
    title: "",
    courseCode: "",
    description: "",
    activate: false,
  });
  const [contentFormPopup, setContentFormPopup] = useState(() => [
    { label: "", type: "", placeholder: "", requierd: false, name: "" },
  ]);

  const handleInfoPopup = (courseInfo: CourseInfo) => {
    setCourseInfoPopup({
      ...courseInfo,
      id: courseInfo.id.toString(),
      description: courseInfo.description,
      title: courseInfo.title,
      activate: courseInfo.activate,
      courseCode: courseInfo.courseCode,
    });
    setPopupInfoVisibility(true);
  };

  const handleFormPopup = () => {
    setPopupFormVisibility(!isPopupFormVisible);
  };

  const login = () => {
    setTitlePopup("התחברות");
    setSubmitBtn("התחבר");
    setContentFormPopup(loginFormContent);
    setPopupFormVisibility(true);
  };
  
  const register = () => {
    setTitlePopup("הרשמה");
    setSubmitBtn("הרשם");
    setContentFormPopup(registerFormContent);
    setPopupFormVisibility(true);
  };

  const closePopup = () => {
    setPopupFormVisibility(false);
    setPopupInfoVisibility(false);
  };

  return (
    <div className={styles.page}>
      <main className={styles.mainContainer}>
        <div className={styles.logoContainer}>
          <div className="logoFrame">
            <Image
              className={styles.logo}
              src={Logo}
              alt="Typewriter.io"
              width={600}
            />
          </div>
          <section className={styles.slogenContainer}>
            <div className={styles.s1}>
              <p className={styles.slogen}>Type the past, </p>
            </div>
            <div className={styles.s2}>
              <p className={styles.slogen}>Build the future - </p>
            </div>
            <div className={styles.s3}>
              <p className={styles.slogen}>Enjoy the journey.</p>
            </div>
          </section>
        </div>

        <section className={styles.content}>
          <p className={styles.description}>
            ברוכים הבאים ל-Typewriter.io אתר ללימוד עצמי בנושאים טכנולוגיים עם
            דגש על פיתוח חשיבה יצירתית, תוך כדי הנאה מהלמידה ומהדרך. באתר הזה
            תוכלו למצוא קורסים טכנולוגיים עם נגיעה רב תחומית במגוון תחומי עניין
            ודעת.{" "}
          </p>

          <CardsContainer
            handlePopup={handleInfoPopup}
          />

          <div>
            <button className="mainButton" onClick={login}>
              התחברות
            </button>
            <button className="mainButton" onClick={register}>
              הרשמה
            </button>
          </div>
        </section>
      </main>

      {isPopupFormVisible && (
        <PopupForm
          handlePopup={handleFormPopup}
          title={titlePopup}
          formFields={contentFormPopup}
          submitBtn={submitBtn}
          closePopup={closePopup}
        />
      )}
      {isPopupInfoVisible && (
        <PopupInfo
        courseInfo={courseInfoPopup}
        closePopup={closePopup}
        />
      )}
    </div>
  );
}
