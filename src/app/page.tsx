"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Logo from "../images/logos/logo-ts.png";
import Popup from "./components/Popup/Popup";
import Link from "next/link";
import Card from "./components/Card/Card";
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

  const slideToRight = () => {

  };

  return (
    <div className={styles.page}>
      <main className={styles.mainContainer}>
        <div className={styles.logoContainer}>
          <Image className={styles.logo} src={Logo} alt="Typewriter.io" />
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
          <section className={styles.content}>
            <p>תקציר</p>

            <CardsContainer />

            <div>
              <button onClick={login}>התחברות</button>
              <button onClick={register}>הרשמה</button>
            </div>
          </section>
        </div>
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
