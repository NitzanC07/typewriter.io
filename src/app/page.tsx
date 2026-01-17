"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Logo from "../images/logos/logo-ts.png";
import Popup from "./components/Popup/Popup";
import CardsContainer from "./components/Card/CardsContainer";

export default function Home() {
  const [isPopupVisible, setPopupVisibility] = useState(false);
  const [titlePopup, setTitlePopup] = useState("");
  const [contentPopup, setContentPopup] = useState("");

  const handlePopup = () => {
    setPopupVisibility(!isPopupVisible);
  };

  const login = () => {
    setTitlePopup("התחברות");
    setContentPopup("התחברות");
    handlePopup();
  };

  const register = () => {
    setTitlePopup("הרשמה");
    setContentPopup("הרשמה");
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
          <p className={styles.description}>ברוכים הבאים ל-Typewriter.io אתר ללימוד עצמי בנושאים טכנולוגיים עם דגש על פיתוח חשיבה יצירתית, תוך כדי הנאה מהלמידה ומהדרך. באתר הזה תוכלו למצוא קורסים טכנולוגיים עם נגיעה רב תחומית במגוון תחומי עניין ודעת. </p>

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
        <Popup
          handlePopup={handlePopup}
          title={titlePopup}
          content={contentPopup}
        />
      )}
    </div>
  );
}
