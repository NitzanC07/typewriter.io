"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Logo from "../images/logos/logo-ts.png";
import PopupForm from "./components/Popup/PopupForm";
import CardsContainer from "./components/Card/CardsContainer";
import loginFormContent from "@/utils/loginFormData.json";
import registerFormContent from "@/utils/registerFormData.json";

export default function Home() {
  const [isPopupVisible, setPopupVisibility] = useState(false);
  const [submitBtn, setSubmitBtn] = useState("");
  const [titlePopup, setTitlePopup] = useState("");
  const [contentPopup, setContentPopup] = useState(() => [
    {label: "", type: "", placeholder: "" },
  ]);
  
  const handlePopup = () => {
    setPopupVisibility(!isPopupVisible);
  };

  const login = () => {
    setTitlePopup("התחברות");
    setSubmitBtn("התחבר");
    setContentPopup(loginFormContent);
    handlePopup();
  };

  const register = () => {
    setTitlePopup("הרשמה");
    setSubmitBtn("הרשם");
    setContentPopup(registerFormContent);
    handlePopup();
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

          <CardsContainer />

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

      {isPopupVisible && (
        <PopupForm
          handlePopup={handlePopup}
          title={titlePopup}
          textFields={contentPopup}
          submitBtn={submitBtn}
        />
      )}
    </div>
  );
}
